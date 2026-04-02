import Link from "next/link";
import { DomainIllustration } from "./DomainIllustration";

interface HeroProps {
  title: string;
  highlight: string;
  description: string;
  slug?: string;
}

export function Hero({ title, highlight, description, slug }: HeroProps) {
  return (
    <section className="hero-section bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] text-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={slug ? "flex flex-col md:flex-row md:items-center md:gap-12" : ""}>
          <div className={slug ? "md:flex-1" : ""}>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Program PRO INFRA</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
              {title} <span className="text-blue-500">{highlight}</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-9">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md font-semibold transition-colors"
              >
                Solicita Consultanta Gratuita
              </Link>
              <a
                href="#beneficii"
                className="inline-block border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-9 py-4 rounded-md font-semibold transition-colors"
              >
                Descopera Beneficiile
              </a>
            </div>
          </div>
          {slug && (
            <div className="hidden md:flex md:items-center md:justify-center md:w-[380px] md:shrink-0">
              <DomainIllustration slug={slug} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
