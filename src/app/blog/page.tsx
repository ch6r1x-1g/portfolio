import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "블로그",
  description: "생각과 글을 모아 놓은 공간입니다.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section id="blog">
      <div className="space-y-12 w-full py-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                블로그
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/snug whitespace-pre-line leading-snug">
                생각과 글들을<br />제 방식대로 써내려갑니다.
              </h2>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                text={"제가 디자인과 프론트엔드 개발을 하면서 있던 일들의 기록과\n공지사항을 안내드립니다."}
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed whitespace-pre-line leading-snug"
              />
            </div>
          </div>
        </BlurFade>
        <div className="max-w-[800px] mx-auto">
          <ul className="divide-y divide-dashed border-y">
            {posts
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post, id) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                  key={post.slug}
                >
                  <li className="py-4">
                    <Link
                      className="block cursor-pointer"
                      href={`/blog/${post.slug}`}
                    >
                      <div className="flex items-start justify-between gap-x-2">
                        <p className="font-semibold tracking-tight flex items-center gap-2">
                          {(
                            Array.isArray((post.metadata as any).tags)
                              ? (post.metadata as any).tags[0]
                              : (post.metadata as any).tag
                          ) && (
                              <span className="inline-block rounded-lg bg-foreground text-background px-2 py-0.5 text-[10px]">
                                {
                                  Array.isArray((post.metadata as any).tags)
                                    ? (post.metadata as any).tags[0]
                                    : (post.metadata as any).tag
                                }
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
                        <span className="text-xs text-muted-foreground">
                          {DATA.name}
                        </span>
                        <span>·</span>
                        {post.metadata.summary && (
                          <p className="text-xs text-muted-foreground">
                            {post.metadata.summary}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                </BlurFade>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
