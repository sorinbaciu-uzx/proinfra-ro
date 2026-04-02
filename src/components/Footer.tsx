import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-slate-400 pt-12 pb-6 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-9">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              PRO<span className="text-blue-500">INFRA</span>.ro
            </div>
            <p>
              Consultanta specializata pentru accesarea fondurilor nerambursabile
              prin programul PRO INFRA. Te ajutam sa modernizezi, sa cresti si sa
              devii competitiv pe piata europeana.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-500 hover:underline">Acasa</Link></li>
              <li><Link href="/#domenii" className="text-blue-500 hover:underline">Domenii Eligibile</Link></li>
              <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p>Email: <a href="mailto:contact@proinfra.ro" className="text-blue-500">contact@proinfra.ro</a></p>
            <p className="mt-2">Telefon: <a href="tel:+40700000000" className="text-blue-500">+40 700 000 000</a></p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} proinfra.ro — Toate drepturile rezervate. Programul PRO INFRA este finantat din fonduri europene nerambursabile.</p>
        </div>
      </div>
    </footer>
  );
}
