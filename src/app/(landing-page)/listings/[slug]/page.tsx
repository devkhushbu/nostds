import { Metadata } from "next";
import { mockCenters } from "../_components/data";
import { notFound } from "next/navigation";
import ListstingDetailsClient from "./ListstingDetailsClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const center = mockCenters.find((c) => c.id === slug || c.slug === slug);

  if (!center) return { title: "Center Not Found" };

  return {
    title: `${center.name} | NoSTDs`,
    description: center.description,
    openGraph: {
      title: center.name,
      description: center.description,
      images: [
        {
          url: center.image,
          width: 1200,
          height: 630,
          alt: center.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return mockCenters.map((center) => ({
    slug: center.id,
  }));
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const center = mockCenters.find((c) => c.id === slug || c.slug === slug);

  if (!center) {
    notFound();
  }

  return <ListstingDetailsClient centerId={slug} />;
}
