import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#0a1628] py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          PRO<span className="text-blue-500">INFRA</span>.ro
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors">
            Acasa
          </Link>
          <Link href="/#domenii" className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors">
            Domenii Eligibile
          </Link>
          <Link href="/contact" className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
