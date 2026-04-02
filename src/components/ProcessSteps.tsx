const steps = [
  { num: "1", title: "Evaluare Gratuita", desc: "Analizam eligibilitatea companiei tale, identificam investitiile prioritare si estimam bugetul proiectului. Totul fara costuri sau obligatii." },
  { num: "2", title: "Elaborare Proiect", desc: "Redactam cererea de finantare, planul de afaceri, analiza cost-beneficiu si toate documentele necesare depunerii." },
  { num: "3", title: "Depunere si Contractare", desc: "Depunem proiectul in platforma electronica, gestionam clarificarile si te asistam in procesul de contractare." },
  { num: "4", title: "Implementare si Decontare", desc: "Te asistam pe toata durata implementarii — achizitii, raportari, cereri de rambursare — pana la decontarea integrala." },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Proces de Accesare</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Cum accesezi finantarea PRO INFRA — pas cu pas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <article key={step.num} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 text-blue-500 font-bold text-2xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
