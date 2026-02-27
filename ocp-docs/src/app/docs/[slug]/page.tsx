import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import GlassPanel from "@/components/GlassPanel";

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const source = await getDocBySlug(params.slug);

  if (!source) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
          <div className="sticky top-32 space-y-8">
             <div>
               <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-white/40 mb-4">Getting Started</h4>
               <ul className="space-y-3 text-sm">
                  <li><a href="/docs/home" className="text-white/60 hover:text-white transition-colors">Introduction</a></li>
                  <li><a href="/docs/getting-started" className="text-white/60 hover:text-white transition-colors">Quick Start</a></li>
               </ul>
             </div>
          </div>
        </aside>

        <article className="flex-1 min-w-0">
          <GlassPanel className="min-h-[800px] prose prose-invert max-w-none">
            <MDXRemote source={source} />
          </GlassPanel>
        </article>
      </div>
    </div>
  );
}
