import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PostCard } from "@/components/site/cards";
import { Stagger, StaggerItem } from "@/components/site/motion";
import { CTASection, PageHero, Section } from "@/components/site/ui";
import { postCategories, posts } from "@/data/site";
import { cn } from "@/lib/utils";

const title = "Kiến thức & Tin tức | TD VIỆT NAM";
const description =
  "Ghi chép kỹ thuật và kinh nghiệm thực tế triển khai các dự án điện mặt trời từ đội ngũ TD VIỆT NAM.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [category, setCategory] = useState<string>("All");
  const filtered = category === "All" ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="What we learned on site, written down"
        intro="No vendor content. Every article comes out of a project we delivered or a model we had to rebuild."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          {["All", ...postCategories].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              aria-pressed={category === option}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition",
                category === option
                  ? "border-transparent bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <Stagger key={category} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
