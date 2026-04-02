import type { DomainFAQ } from "@/data/domains";

export function FAQ({ items }: { items: DomainFAQ[] }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Intrebari Frecvente</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Raspunsuri la intrebarile tale despre PRO INFRA</h2>
        <div className="max-w-3xl">
          {items.map((faq, i) => (
            <details key={i} className="border-b border-slate-200 group" open={i === 0}>
              <summary className="py-5 cursor-pointer text-lg font-semibold text-[#1e3a5f] hover:text-blue-500 transition-colors list-none flex items-center justify-between">
                {faq.question}
                <span className="text-blue-500 text-2xl group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
              </summary>
              <p className="pb-5 text-slate-500 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
