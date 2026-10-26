import { X_PROFILE } from "@/lib/content";

export type FeedMedia = {
  type: "photo" | "video" | "gif" | "other";
  url: string;
  thumbnailUrl?: string;
};

export type FeedPost = {
  id: string;
  url: string;
  text: string;
  createdAt: string;
  createdTimestamp: number;
  likes: number;
  reposts: number;
  replies: number;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  media: FeedMedia[];
  isRepost: boolean;
};

type FxMediaItem = {
  type?: string;
  url?: string;
  thumbnail_url?: string;
};

type FxAuthor = {
  name?: string;
  screen_name?: string;
  avatar_url?: string;
};

type FxStatus = {
  type?: string;
  id?: string;
  url?: string;
  text?: string;
  created_at?: string;
  created_timestamp?: number;
  likes?: number;
  reposts?: number;
  replies?: number;
  author?: FxAuthor;
  media?: { all?: FxMediaItem[] };
  reposted_by?: unknown;
};

function mediaType(value: string | undefined): FeedMedia["type"] {
  if (value === "photo" || value === "video" || value === "gif") return value;
  return "other";
}

function normalizeMedia(media: FxStatus["media"]): FeedMedia[] {
  const items = media?.all;
  if (!Array.isArray(items)) return [];

  const normalized: FeedMedia[] = [];
  for (const item of items) {
    const url = item.url ?? item.thumbnail_url;
    if (!url) continue;
    normalized.push({
      type: mediaType(item.type),
      url,
      thumbnailUrl: item.thumbnail_url,
    });
    if (normalized.length === 4) break;
  }
  return normalized;
}

function normalizePost(item: FxStatus): FeedPost | null {
  if (!item.id || !item.text) return null;

  const handle = item.author?.screen_name ?? X_PROFILE.handle;

  return {
    id: item.id,
    url: item.url ?? `${X_PROFILE.url}/status/${item.id}`,
    text: item.text,
    createdAt: item.created_at ?? "",
    createdTimestamp: item.created_timestamp ?? 0,
    likes: item.likes ?? 0,
    reposts: item.reposts ?? 0,
    replies: item.replies ?? 0,
    authorName: item.author?.name ?? "ShengThaoFiles.com",
    authorHandle: handle,
    authorAvatar: item.author?.avatar_url ?? "",
    media: normalizeMedia(item.media),
    isRepost: Boolean(item.reposted_by),
  };
}

export async function fetchXFeed(limit = 12): Promise<FeedPost[]> {
  const url = `https://api.fxtwitter.com/2/profile/${X_PROFILE.handle}/statuses?count=${limit}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "ShengThaoFiles/1.0 (https://shengthaofiles.com)",
    },
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`Feed request failed (${response.status})`);
  }

  const payload = (await response.json()) as {
    code?: number;
    results?: FxStatus[];
  };

  if (payload.code !== 200 || !Array.isArray(payload.results)) {
    throw new Error("Feed response was empty");
  }

  return payload.results
    .map(normalizePost)
    .filter((post): post is FeedPost => post !== null);
}
