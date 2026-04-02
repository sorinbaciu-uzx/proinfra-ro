import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
}

export function CTA({ title, description }: CTAProps) {
  return (
    <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] text-white text-center py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">{title}</h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-9">{description}</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md font-semibold transition-colors"
        >
          Solicita Evaluare Gratuita
        </Link>
      </div>
    </section>
  );
}
