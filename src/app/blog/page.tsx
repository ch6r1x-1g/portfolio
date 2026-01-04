import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { getBlogPosts } from "@/data/blog";
import TagFilter from "@/components/blog/tag-filter";

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
          <TagFilter posts={posts} />
        </div>
      </div>
    </section>
  );
}
