const stats = [
  { value: "100%", label: "Finantare Nerambursabila" },
  { value: "15M", label: "Valoare Maxima per Beneficiar (EUR)" },
  { value: "200M", label: "Buget Total Schema (EUR)" },
  { value: "0%", label: "Dobanda la Finantare" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-blue-500">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
