import type { DomainBenefit } from "@/data/domains";

export function Benefits({ items }: { items: DomainBenefit[] }) {
  return (
    <section id="beneficii" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Beneficii Cheie</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">De ce sa accesezi PRO INFRA pentru acest domeniu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((benefit, i) => (
            <article key={i} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 text-blue-500 font-bold text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
