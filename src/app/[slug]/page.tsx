import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { domains, getDomainBySlug, getAllSlugs, SITE_URL } from "@/data/domains";
import { JsonLd } from "@/components/JsonLd";
import { generateWebPageJsonLd, generateFAQJsonLd, generateServiceJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Benefits } from "@/components/Benefits";
import { InvestmentList } from "@/components/InvestmentList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { RelatedDomains } from "@/components/RelatedDomains";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) return {};

  return {
    title: domain.metaTitle,
    description: domain.metaDescription,
    keywords: domain.keywords,
    alternates: {
      canonical: `${SITE_URL}/${domain.slug}`,
    },
    openGraph: {
      title: domain.metaTitle,
      description: domain.metaDescription,
      url: `${SITE_URL}/${domain.slug}`,
      type: "website",
      locale: "ro_RO",
    },
    twitter: {
      card: "summary_large_image",
      title: domain.metaTitle,
      description: domain.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) notFound();

  return (
    <>
      <JsonLd data={generateWebPageJsonLd(domain)} />
      <JsonLd data={generateFAQJsonLd(domain)} />
      <JsonLd data={generateServiceJsonLd(domain)} />

      <Hero
        title={domain.heroTitle}
        highlight={domain.heroHighlight}
        description={domain.heroDescription}
      />

      <Stats />

      {/* About Section - AI snippet target */}
      <section className="about-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Despre Program</p>
              <h2 className="text-3xl md:text-4xl font-bold">{domain.aboutTitle}</h2>
            </div>
            <div className="space-y-5">
              {domain.aboutDescription.map((para, i) => (
                <p key={i} className="text-slate-500 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Benefits items={domain.benefits} />
      <InvestmentList investments={domain.investments} eligibility={domain.eligibility} />

      {/* Market Context */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[3px] mb-3">Context de Piata</p>
          <h2 className="text-3xl font-bold mb-8">{domain.marketTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {domain.marketDescription.map((para, i) => (
              <p key={i} className="text-slate-500 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <FAQ items={domain.faqs} />
      <RelatedDomains slugs={domain.relatedSlugs} />

      <CTA
        title={`Modernizeaza-ti activitatea cu finantare PRO INFRA`}
        description={`Fonduri europene nerambursabile pentru ${domain.title.toLowerCase()}. Solicita evaluarea gratuita a eligibilitatii acum.`}
      />
    </>
  );
}
