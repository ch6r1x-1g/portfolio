import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackButton } from "@/components/ui/back-button";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const heroSrc =
    post.metadata.image?.startsWith("http")
      ? post.metadata.image
      : post.metadata.image?.replace(/^\/public\//, "/");
  const tagLabel =
    Array.isArray((post.metadata as any).tags)
      ? (post.metadata as any).tags[0]
      : (post.metadata as any).tag || "블로그";

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <div className="space-y-6 w-full py-4">
        <div className="flex flex-col items-start justify-center space-y-2 max-w-[800px] mx-auto">
          <BackButton className="mb-2" />
          <div className="w-full">
            <div className="mx-auto max-w-[800px]">
              <div className="relative w-full overflow-hidden rounded-[28px] border bg-background shadow-[20px_20px_60px_rgba(0,0,0,0.15),-20px_-20px_60px_rgba(255,255,255,0.06)] dark:shadow-[20px_20px_60px_rgba(0,0,0,0.4),-20px_-20px_60px_rgba(255,255,255,0.03)] before:content-[''] before:absolute before:inset-0 before:rounded-[28px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-10">
                {heroSrc ? (
                  <Image
                    src={heroSrc}
                    alt={post.metadata.title}
                    width={1600}
                    height={900}
                    priority
                    className="h-[300px] w-full object-cover"
                  />
                ) : (
                  <div className="h-[220px] w-full bg-[linear-gradient(135deg,rgba(0,0,0,.03)_0%,rgba(255,255,255,.06)_100%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,.06)_0%,rgba(0,0,0,.12)_100%)]" />
                )}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5 dark:ring-white/10" />
              </div>
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mt-6">
                {tagLabel}
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/snug whitespace-pre-line leading-snug mt-6">
            {post.metadata.title}
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Avatar className="size-6 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <span>{DATA.name}</span>
            <span>·</span>
            <Suspense fallback={<p className="h-5" />}>
              <span className="tabular-nums">
                {formatDate(post.metadata.publishedAt)}
              </span>
            </Suspense>
          </div>
        </div>
      </div>
      <article
        className="prose dark:prose-invert max-w-[800px] mx-auto"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
