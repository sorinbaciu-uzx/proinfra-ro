import Link from "next/link";
import { domains } from "@/data/domains";
import { JsonLd } from "@/components/JsonLd";
import { generateHomePageJsonLd } from "@/lib/structured-data";
import { Stats } from "@/components/Stats";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTA } from "@/components/CTA";
import { Authority } from "@/components/Authority";
import { HomeIllustration } from "@/components/HomeIllustration";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateHomePageJsonLd(domains)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:flex-1">
              <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Program PRO INFRA</p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
                Finantare <span className="text-blue-500">100% Nerambursabila</span> pentru Industria Materialelor de Constructii si Infrastructura
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mb-9">
                Programul PRO INFRA ofera finantare 100% nerambursabila de pana la 15 milioane EUR per beneficiar, din Fondul pentru Modernizare, pentru modernizarea echipamentelor si cresterea eficientei energetice in 17 domenii de activitate eligibile.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md font-semibold transition-colors"
                >
                  Solicita Consultanta Gratuita
                </Link>
                <Link
                  href="#domenii"
                  className="inline-block border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-9 py-4 rounded-md font-semibold transition-colors"
                >
                  Vezi Domeniile Eligibile
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:w-[420px] md:shrink-0">
              <HomeIllustration />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* About PRO INFRA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Despre Program</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce este Programul PRO INFRA?</h2>
              <p className="text-lg text-slate-600 mb-4">
                PRO INFRA este un program de finantare cu fonduri europene nerambursabile destinat companiilor din Romania care activeaza in industria materialelor de constructii si infrastructura. Programul acopera 17 domenii de activitate eligibile, de la extractia pietrei si fabricarea betonului la productia de constructii metalice si cabluri electrice.
              </p>
              <p className="text-slate-500">
                Finantarea este 100% nerambursabila — companiile beneficiare nu trebuie sa returneze fondurile primite. Valoarea maxima a finantarii poate ajunge la 15 milioane EUR per beneficiar, cu implementare pana la 30.06.2030. Schema este administrata de Ministerul Transporturilor si Infrastructurii si finantata din Fondul pentru Modernizare.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Cine poate accesa PRO INFRA?</h2>
              <ul className="space-y-3">
                {[
                  "Companii inregistrate in Romania cu activitate in domeniile eligibile",
                  "Minimum 1 an de activitate de la inregistrare",
                  "Minimum 3 angajati cu contract pe perioada nedeterminata",
                  "Cifra de afaceri minima conform ghidului solicitantului",
                  "Fara datorii restante la bugetul de stat",
                  "Sa nu se afle in insolventa, faliment sau lichidare",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-lg shrink-0">&#10003;</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section id="domenii" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">17 Domenii Eligibile</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Domenii de Activitate Eligibile pentru Finantare PRO INFRA</h2>
          <p className="text-lg text-slate-500 max-w-2xl mb-12">
            Selecteaza domeniul tau de activitate pentru a descoperi ce investitii poti finanta, ce beneficii obtii si cum te putem ajuta sa accesezi fondurile.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, i) => (
              <Link
                key={domain.slug}
                href={`/${domain.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-500 font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] group-hover:text-blue-500 transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3">
                  Finantare nerambursabila pentru {domain.title.toLowerCase()}.
                </p>
                <span className="text-blue-500 text-sm font-semibold">
                  Afla mai multe &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <Authority />

      <CTA
        title="Acceseaza finantare PRO INFRA pentru compania ta"
        description="Solicita o evaluare gratuita a eligibilitatii. Echipa noastra de consultanti te ghideaza de la depunerea proiectului pana la decontarea integrala a investitiei."
      />
    </>
  );
}
