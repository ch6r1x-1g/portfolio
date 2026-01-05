import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HackathonCard } from "@/components/hackathon-card";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "디자인 기여",
  description: "제가 만든/기여한 디자인 프로젝트를 모아 놓은 페이지입니다.",
};

const BLUR_FADE_DELAY = 0.04;

export default function HackathonsPage() {
  const items = DATA.hackathons;

  return (
    <section id="hackathons">
      <div className="space-y-12 w-full py-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                디자인 기여
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/snug whitespace-pre-line leading-snug">
                제가 만든 디자인들을<br />한 곳에서 확인하세요.
              </h2>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                text={`현재 공개된 디자인은 ${items.length}+개입니다.\n새로운 프로젝트가 생기면 지속적으로 업데이트합니다.`}
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed whitespace-pre-line leading-snug"
              />
            </div>
          </div>
        </BlurFade>
        <div className="max-w-[800px] mx-auto">
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {items.map((project, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={project.title + project.dates}>
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

