import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

/**
 * Single typed Axios instance for talking to the Laravel API.
 *
 * Auth mode: **Sanctum Bearer tokens** (the backend is decoupled — see
 * nostds_backend/README.md). The token is read from localStorage and injected
 * as an `Authorization: Bearer {token}` header on every request. We do NOT use
 * cookie/CSRF (`withCredentials`) because we are not in SPA-cookie mode.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

const TOKEN_STORAGE_KEY = "nostds_auth_token";

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setAuthToken(token: string | null): void {
  if (typeof window === "undefined") return;
  if (token) {
    window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } else {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

/** Normalized shape passed to React Hook Form / the UI when a request fails. */
export interface ApiError {
  /** HTTP status (0 if the request never reached the server). */
  status: number;
  /** Human-readable top-level message. */
  message: string;
  /** Laravel 422 validation errors flattened to `{ field: "first message" }`. */
  fieldErrors?: Record<string, string>;
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // Bearer mode — no cross-site cookies.
  withCredentials: false,
});

// Inject the bearer token on every outgoing request.
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAuthToken();
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

// Normalize Laravel error shapes (esp. 422) into a predictable ApiError.
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
    const status = error.response?.status ?? 0;
    const data = error.response?.data;

    let fieldErrors: Record<string, string> | undefined;
    if (status === 422 && data?.errors) {
      fieldErrors = Object.fromEntries(
        Object.entries(data.errors).map(([field, messages]) => [
          field,
          Array.isArray(messages) ? messages[0] : String(messages),
        ]),
      );
    }

    const normalized: ApiError = {
      status,
      message:
        data?.message ??
        (status === 0
          ? "Network error — could not reach the server."
          : "Something went wrong."),
      fieldErrors,
    };

    return Promise.reject(normalized);
  },
);

export default apiClient;
