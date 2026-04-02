"use client";

import Link from "next/link";
import { useState } from "react";
import { domains } from "@/data/domains";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a1628] py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          PRO<span className="text-blue-500">INFRA</span>.ro
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors">
            Acasa
          </Link>
          <div className="relative group">
            <button className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors flex items-center gap-1">
              Domenii Eligibile
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="bg-[#0f1d32] border border-slate-700 rounded-lg shadow-xl max-h-96 overflow-y-auto">
                {domains.map((domain) => (
                  <Link
                    key={domain.slug}
                    href={`/${domain.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors border-b border-slate-700/50 last:border-0"
                  >
                    {domain.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/contact" className="text-slate-300 text-sm font-medium hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu navigare"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f1d32] border-t border-slate-700 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-white font-medium">Acasa</Link>
            <p className="text-xs text-blue-500 uppercase tracking-wider mt-4 mb-2 font-bold">Domenii Eligibile</p>
            {domains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/${domain.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-slate-300 hover:text-blue-400 border-b border-slate-700/30"
              >
                {domain.title}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2 mt-3 text-white font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
