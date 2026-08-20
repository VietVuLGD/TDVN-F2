import { Link, createFileRoute } from "@tanstack/react-router";

import { PostCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { Breadcrumbs, CTASection, Section } from "@/components/site/ui";
import { posts, type Post } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return { post: post || null };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post || posts.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [
          { title: "Article not found | TD VIỆT NAM" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${post.title} | TD VIỆT NAM`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "TD VIỆT NAM" },
          }),
        },
      ],
    };
  },
  component: Article,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <div className="container-page pt-36 pb-24 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          Không tìm thấy bài viết
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được gỡ bỏ.
        </p>
        <div className="mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Quay lại tin tức & kiến thức
          </Link>
        </div>
      </div>
    </div>
  );
}

function Article() {
  const loaderData = Route.useLoaderData() as { post?: Post | null } | undefined;
  const { slug } = Route.useParams();
  const post = loaderData?.post || posts.find((p) => p.slug === slug);

  if (!post) {
    return <ArticleNotFound />;
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const published = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <header className="border-b border-border bg-surface pt-[8.5rem] pb-16 md:pt-40 md:pb-20">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.category }]} />
          <Reveal className="mt-8 max-w-3xl">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-4 text-3xl leading-[1.05] font-extrabold sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {post.author} · <time dateTime={post.date}>{published}</time> · {post.readingTime}{" "}
              read
            </p>
          </Reveal>
        </div>
      </header>

      <Section>
        <article className="mx-auto max-w-3xl space-y-7 text-base leading-relaxed text-muted-foreground">
          {post.body.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="pt-6 text-2xl font-extrabold text-foreground">
                  {block.text}
                </h2>
              );
            if (block.type === "quote")
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-primary pl-6 text-lg font-medium text-foreground italic"
                >
                  {block.text}
                </blockquote>
              );
            if (block.type === "list")
              return (
                <ul key={i} className="space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            if (block.type === "code")
              return (
                <pre
                  key={i}
                  className="overflow-x-auto rounded-2xl border border-border bg-surface p-6 font-mono text-xs leading-relaxed text-foreground"
                >
                  <code>{block.code}</code>
                </pre>
              );
            if (block.type === "table")
              return (
                <div key={i} className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        {block.head.map((cell) => (
                          <th
                            key={cell}
                            scope="col"
                            className="py-3 pr-6 font-semibold text-foreground"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row.join()} className="border-b border-border">
                          {row.map((cell) => (
                            <td key={cell} className="py-3 pr-6">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </article>
      </Section>

      <Section className="bg-surface">
        <h2 className="text-2xl font-extrabold">Keep reading</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <PostCard key={item.slug} post={item} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
