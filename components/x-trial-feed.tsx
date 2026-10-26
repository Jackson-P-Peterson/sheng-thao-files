"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { X_PROFILE } from "@/lib/content";
import type { FeedPost } from "@/lib/x-feed";
import { cn } from "@/lib/utils";

function formatTime(timestamp: number, createdAt: string) {
  if (!timestamp) return createdAt;
  const date = new Date(timestamp > 1e12 ? timestamp : timestamp * 1000);
  if (Number.isNaN(date.getTime())) return createdAt;

  const diffMs = Date.now() - date.getTime();
  const minutes = Math.max(0, Math.round(diffMs / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days}d`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatCount(value: number) {
  if (value < 1000) return String(value);
  if (value < 10000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return `${Math.round(value / 1000)}K`;
}

function FeedMedia({ post }: { post: FeedPost }) {
  if (post.media.length === 0) return null;

  return (
    <div
      className={cn(
        "mt-3 overflow-hidden rounded-xl border border-border/50",
        post.media.length > 1 && "grid grid-cols-2 gap-px bg-border/50"
      )}
    >
      {post.media.map((item) => {
        const preview = item.thumbnailUrl ?? item.url;
        const isVideo = item.type === "video" || item.type === "gif";

        return (
          <a
            key={`${post.id}-${preview}`}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-muted"
          >
            <Image
              src={preview}
              alt=""
              width={1280}
              height={720}
              unoptimized
              className="aspect-video h-auto w-full object-cover"
            />
            {isVideo && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-xs font-semibold uppercase tracking-wide text-white">
                Play on X
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

export function XTrialFeed({ initialPosts }: { initialPosts: FeedPost[] }) {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    initialPosts.length > 0 ? "ready" : "error"
  );

  const loadFeed = useCallback(async (silent = false) => {
    if (!silent) setStatus("loading");

    try {
      const response = await fetch("/api/x-feed", { cache: "no-store" });
      const payload = (await response.json()) as {
        success?: boolean;
        posts?: FeedPost[];
      };

      if (!response.ok || !payload.success || !payload.posts?.length) {
        throw new Error("empty");
      }

      setPosts(payload.posts);
      setStatus("ready");
    } catch {
      setStatus((current) => (current === "ready" ? "ready" : "error"));
    }
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      void loadFeed(true);
    }, 60_000);
    return () => window.clearInterval(id);
  }, [loadFeed]);

  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
      <div className="flex flex-col gap-3 border-b border-border/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
            <span
              className="size-2 animate-pulse rounded-full bg-accent"
              aria-hidden
            />
            Live on X
          </p>
          <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
            Tracking the trial in real time
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest posts from @{X_PROFILE.handle}
          </p>
        </div>
        <a
          href={X_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-full whitespace-normal border-accent/50 px-4 text-sm font-semibold text-accent hover:bg-accent/10 sm:w-auto"
          )}
        >
          Follow @{X_PROFILE.handle}
          <ExternalLink className="ml-2 size-3.5" />
        </a>
      </div>

      {status === "loading" && (
        <p className="px-6 py-24 text-center text-sm text-muted-foreground">
          Loading the live trial feed…
        </p>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            The live timeline couldn&apos;t load right now. Follow the feed on X
            for real-time trial updates.
          </p>
          <a
            href={X_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 border-accent/50 px-4 font-semibold text-accent hover:bg-accent/10"
            )}
          >
            Open @{X_PROFILE.handle} on X
            <ExternalLink className="ml-2 size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => void loadFeed()}
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Try loading the feed again
          </button>
        </div>
      )}

      {status === "ready" && (
        <ol className="max-h-[40rem] divide-y divide-border/50 overflow-y-auto">
          {posts.map((post) => (
            <li key={post.id} className="px-4 py-5 sm:px-6">
              <article>
                <div className="flex gap-3">
                  {post.authorAvatar ? (
                    <Image
                      src={post.authorAvatar}
                      alt=""
                      width={40}
                      height={40}
                      unoptimized
                      className="size-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="size-10 shrink-0 rounded-full bg-accent/20" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-semibold text-foreground">
                        {post.authorName}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        @{post.authorHandle}
                      </span>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        {formatTime(post.createdTimestamp, post.createdAt)}
                      </a>
                    </div>
                    {post.isRepost && (
                      <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                        Reposted
                      </p>
                    )}
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
                      {post.text}
                    </p>
                    <FeedMedia post={post} />
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="size-3.5" />
                        {formatCount(post.replies)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Repeat2 className="size-3.5" />
                        {formatCount(post.reposts)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Heart className="size-3.5" />
                        {formatCount(post.likes)}
                      </span>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 font-medium text-accent hover:underline"
                      >
                        View on X
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
