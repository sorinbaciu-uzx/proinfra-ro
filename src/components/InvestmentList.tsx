interface InvestmentListProps {
  investments: string[];
  eligibility: string[];
}

export function InvestmentList({ investments, eligibility }: InvestmentListProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Investitii Eligibile</p>
            <h2 className="text-3xl font-bold mb-8">Ce poti finanta prin PRO INFRA</h2>
            <ul className="space-y-0">
              {investments.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-3 border-b border-slate-200 last:border-0 text-base">
                  <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Conditii de Eligibilitate</p>
            <h2 className="text-3xl font-bold mb-8">Cine poate accesa finantarea</h2>
            <ul className="space-y-0">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-3 border-b border-slate-200 last:border-0 text-base">
                  <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
