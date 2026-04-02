import type { Metadata } from "next";
import { SITE_URL, COMPANY_PHONE, COMPANY_EMAIL } from "@/data/domains";
import { MultiStepForm } from "@/components/MultiStepForm";

export const metadata: Metadata = {
  title: "Solicita Consultanta Gratuita PRO INFRA | Evaluare Eligibilitate",
  description: "Verifica eligibilitatea companiei tale pentru programul PRO INFRA. Introduceti CUI-ul si aflati instant daca puteti accesa finantare nerambursabila de pana la 15 milioane EUR.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Consultanta Gratuita</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Verifica Eligibilitatea Companiei Tale</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Completeaza formularul de mai jos pentru a afla daca firma ta se califica pentru finantare nerambursabila PRO INFRA de pana la 15 milioane EUR.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <MultiStepForm />
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Preferi sa vorbesti direct cu un consultant?</h2>
          <p className="text-slate-500 mb-6">Suna-ne sau trimite-ne un email. Raspundem in maximum 24 de ore.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+40${COMPANY_PHONE.slice(1)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Telefon: {COMPANY_PHONE}
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
