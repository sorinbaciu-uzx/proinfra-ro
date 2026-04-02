import Link from "next/link";
import { domains, COMPANY_PHONE, COMPANY_EMAIL } from "@/data/domains";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-slate-400 pt-12 pb-6 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              PRO<span className="text-blue-500">INFRA</span>.ro
            </div>
            <p className="mb-4">
              Consultanta specializata pentru accesarea fondurilor nerambursabile prin programul PRO INFRA.
              Finantare de pana la 15 milioane EUR per beneficiar pentru modernizarea industriei materialelor de constructii.
            </p>
            <div className="border-t border-slate-700 pt-4 mt-4">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Operat de</p>
              <p className="text-white font-medium">CAPCAUN SRL</p>
              <p className="mt-2">Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-blue-500">{COMPANY_EMAIL}</a></p>
              <p>Telefon: <a href={`tel:+40${COMPANY_PHONE.slice(1)}`} className="text-blue-500">{COMPANY_PHONE}</a></p>
            </div>
          </div>

          {/* Domains col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Domenii Eligibile</h4>
            <ul className="space-y-2">
              {domains.slice(0, 9).map((domain) => (
                <li key={domain.slug}>
                  <Link href={`/${domain.slug}`} className="text-slate-400 hover:text-blue-500 transition-colors text-xs leading-relaxed">
                    {domain.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {domains.slice(9).map((domain) => (
                <li key={domain.slug}>
                  <Link href={`/${domain.slug}`} className="text-slate-400 hover:text-blue-500 transition-colors text-xs leading-relaxed">
                    {domain.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/" className="text-blue-500 hover:underline">Acasa</Link></li>
              <li><Link href="/#domenii" className="text-blue-500 hover:underline">Domenii Eligibile</Link></li>
              <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
            </ul>
            <h4 className="text-white font-semibold mb-4">Contact Rapid</h4>
            <p>Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-blue-500">{COMPANY_EMAIL}</a></p>
            <p className="mt-1">Telefon: <a href={`tel:+40${COMPANY_PHONE.slice(1)}`} className="text-blue-500">{COMPANY_PHONE}</a></p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} proinfra.ro — Operat de CAPCAUN SRL. Toate drepturile rezervate.</p>
          <p className="mt-1">Programul PRO INFRA este o schema de ajutor de stat administrata de Ministerul Transporturilor si Infrastructurii, finantata din Fondul pentru Modernizare.</p>
        </div>
      </div>
    </footer>
  );
}
