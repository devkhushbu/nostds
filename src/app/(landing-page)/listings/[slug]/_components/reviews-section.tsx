"use client";

import React, { useState, useEffect } from "react";
import { Star, CheckCircle2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CenterItem } from "../../_components/data";

interface ReviewItem {
  author: string;
  date: string;
  rating: number;
  comment: string;
  isAnonymous?: boolean;
}

interface ReviewsSectionProps {
  details: CenterItem;
  reviewsRef: React.RefObject<HTMLDivElement | null>;
}

export function ReviewsSection({ details, reviewsRef }: ReviewsSectionProps) {
  // Localized reviews states
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSuccessMessage, setReviewSuccessMessage] = useState("");

  // Initialize reviews from details prop
  useEffect(() => {
    if (details?.reviewsList) {
      setReviewsList(details.reviewsList);
    }
  }, [details]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;

    setIsSubmittingReview(true);

    setTimeout(() => {
      const newReview = {
        author: reviewAuthor,
        date: "Today, June 2026",
        rating: reviewRating,
        comment: reviewComment,
        isAnonymous: false
      };

      setReviewsList([newReview, ...reviewsList]);
      setReviewAuthor("");
      setReviewComment("");
      setReviewRating(5);
      setIsSubmittingReview(false);
      setReviewSuccessMessage("Thank you! Your verified review has been submitted successfully.");

      setTimeout(() => {
        setReviewSuccessMessage("");
      }, 5000);
    }, 800);
  };

  return (
    <div
      id="reviews"
      ref={reviewsRef}
      className="scroll-mt-24 py-8 border-t border-border flex flex-col gap-6"
    >
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
          Patient Testimonials & Reviews
        </h2>
      </div>

      {/* Review Ratings Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 bg-muted/20 border border-border/30 rounded-2xl mt-1">
        
        {/* Average */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
          <span className="text-4xl sm:text-5xl font-black text-foreground leading-none">{details.rating.toFixed(1)}</span>
          <div className="flex items-center gap-0.5 mt-2.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2 block font-extrabold">
            {details.reviews} Verified Reviews
          </span>
        </div>

        {/* Progress bars (Breakdown) */}
        <div className="md:col-span-8 flex flex-col gap-2.5 text-xs">
          {[
            { stars: 5, pct: "86%", bg: "bg-amber-400" },
            { stars: 4, pct: "10%", bg: "bg-amber-400/80" },
            { stars: 3, pct: "3%", bg: "bg-amber-400/60" },
            { stars: 2, pct: "1%", bg: "bg-amber-400/40" },
            { stars: 1, pct: "0%", bg: "bg-amber-400/20" },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="font-extrabold text-muted-foreground w-3 text-right">{row.stars}</span>
              <Star className="size-3.5 fill-muted-foreground/30 text-muted-foreground/30 shrink-0" />
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div className={`h-full ${row.bg} rounded-full`} style={{ width: row.pct }} />
              </div>
              <span className="font-bold text-muted-foreground w-8 text-left">{row.pct}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Verified review comment block */}
      <div className="flex flex-col gap-5 mt-2">
        <span className="text-xs font-bold text-foreground uppercase tracking-wider block">Patient Testimonials:</span>
        
        {reviewsList.map((rev, index) => (
          <div key={index} className="p-5 bg-muted/10 border border-border/70 rounded-2xl flex flex-col gap-3 hover:bg-muted/20 transition-colors">
            
            {/* User and date */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 text-foreground flex items-center justify-center font-bold text-xs border border-border">
                  {rev.author[0]}
                </div>
                <div>
                  <span className="text-xs font-extrabold text-foreground block">{rev.author}</span>
                  <span className="text-[10px] text-muted-foreground font-semibold">{rev.date}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3 ${
                      rev.rating > i ? "fill-amber-400 text-amber-400" : "text-border fill-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
              &ldquo;{rev.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {/* Write a Review Block */}
      <div className="h-px bg-border my-2" />

      <div className="p-5 border border-dashed border-border rounded-2xl bg-muted/5">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-1.5 mb-4">
          <Sparkles className="size-4 text-amber-500" />
          Have you tested here? Write a verified review
        </h3>

        {reviewSuccessMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/50 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
            <span>{reviewSuccessMessage}</span>
          </div>
        )}

        <form onSubmit={handleReviewSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                placeholder="e.g. John D."
                required
                value={reviewAuthor}
                onChange={(e) => setReviewAuthor(e.target.value)}
                className="bg-background border border-border rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Star Rating</label>
              <div className="flex items-center gap-1.5 h-9">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setReviewRating(s)}
                    className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star className={`size-5 ${reviewRating >= s ? "fill-amber-400" : "text-border"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Your Review Comments</label>
            <textarea
              placeholder="Write details about privacy, results speed, timing, and staff support..."
              rows={3}
              required
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              className="bg-background border border-border rounded-xl px-3.5 py-2 text-xs font-semibold resize-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmittingReview}
            className="self-start px-5 py-2 font-bold text-xs rounded-xl cursor-pointer flex items-center gap-1.5 uppercase mt-1"
          >
            {isSubmittingReview ? "Submitting..." : "Submit Review"}
            <Send className="size-3" />
          </Button>
        </form>
      </div>

    </div>
  );
}
