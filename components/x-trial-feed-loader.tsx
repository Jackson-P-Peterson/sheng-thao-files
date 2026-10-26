import { XTrialFeed } from "@/components/x-trial-feed";
import { fetchXFeed, type FeedPost } from "@/lib/x-feed";

export async function XTrialFeedLoader() {
  let posts: FeedPost[] = [];

  try {
    posts = await fetchXFeed(12);
  } catch {
    posts = [];
  }

  return <XTrialFeed initialPosts={posts} />;
}
