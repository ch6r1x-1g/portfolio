"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useMemo, useState } from "react";

type PostItem = {
  slug: string;
  metadata: any;
};

type Props = {
  posts: PostItem[];
  delayBase?: number;
};

export default function TagFilter({ posts, delayBase = 0.12 }: Props) {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      const tags = Array.isArray(p.metadata?.tags)
        ? p.metadata.tags
        : p.metadata?.tag
          ? [p.metadata.tag]
          : [];
      tags.forEach((t: string) => set.add(t));
    });
    return Array.from(set);
  }, [posts]);

  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!selected) return posts;
    return posts.filter((p) => {
      const tags = Array.isArray(p.metadata?.tags)
        ? p.metadata.tags
        : p.metadata?.tag
          ? [p.metadata.tag]
          : [];
      return tags.includes(selected);
    });
  }, [posts, selected]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const ad = new Date(a.metadata.publishedAt);
      const bd = new Date(b.metadata.publishedAt);
      return bd.getTime() - ad.getTime();
    });
  }, [filtered]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          onClick={() => setSelected(null)}
          className={`cursor-pointer ${selected === null ? "bg-foreground text-background" : ""}`}
        >
          전체
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => setSelected(tag)}
            className={`cursor-pointer ${selected === tag ? "bg-foreground text-background" : ""}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
      <ul className="divide-y divide-dashed border-y">
        {sorted.map((post, i) => (
          <BlurFade delay={delayBase + i * 0.05} key={post.slug}>
            <li className="py-4">
              <Link className="block cursor-pointer" href={`/blog/${post.slug}`}>
                <div className="flex items-start justify-between gap-x-2">
                  <p className="font-semibold tracking-tight flex items-center gap-2">
                    {(
                      Array.isArray(post.metadata?.tags)
                        ? post.metadata.tags[0]
                        : post.metadata?.tag
                    ) && (
                      <span className="inline-block rounded-lg bg-foreground text-background px-2 py-0.5 text-[10px]">
                        {Array.isArray(post.metadata?.tags) ? post.metadata.tags[0] : post.metadata?.tag}
                      </span>
                    )}
                    {post.metadata.title}
                  </p>
                  <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Avatar className="size-5 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">{DATA.name}</span>
                  <span>·</span>
                  {post.metadata.summary && (
                    <p className="text-xs text-muted-foreground">{post.metadata.summary}</p>
                  )}
                </div>
              </Link>
            </li>
          </BlurFade>
        ))}
      </ul>
    </div>
  );
}

