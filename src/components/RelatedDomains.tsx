import Link from "next/link";
import { getDomainBySlug } from "@/data/domains";

export function RelatedDomains({ slugs }: { slugs: string[] }) {
  const related = slugs.map(getDomainBySlug).filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Domenii Conexe</p>
        <h2 className="text-3xl font-bold mb-8">Alte domenii eligibile PRO INFRA</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((domain) => (
            <Link
              key={domain!.slug}
              href={`/${domain!.slug}`}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <h3 className="text-lg font-bold text-[#1e3a5f] group-hover:text-blue-500 transition-colors mb-2">
                {domain!.title}
              </h3>
              <p className="text-sm text-slate-500">
                Finantare nerambursabila PRO INFRA pentru {domain!.title.toLowerCase()}.
              </p>
              <span className="inline-block mt-4 text-blue-500 text-sm font-semibold">
                Afla mai multe &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
