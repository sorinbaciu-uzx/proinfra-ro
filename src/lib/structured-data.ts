import { DomainData, SITE_URL, SITE_NAME } from "@/data/domains";

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Consultanta specializata pentru accesarea fondurilor nerambursabile prin programul PRO INFRA pentru industria materialelor de constructii si infrastructura din Romania.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40769081081",
      contactType: "customer service",
      email: "sorin.baciu@proinfra.ro",
      availableLanguage: "Romanian",
    },
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    knowsAbout: [
      "PRO INFRA",
      "fonduri europene nerambursabile",
      "finantare materiale de constructii",
      "modernizare industriala",
      "infrastructura Romania",
    ],
  };
}

export function generateWebPageJsonLd(domain: DomainData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: domain.metaTitle,
    description: domain.metaDescription,
    url: `${SITE_URL}/${domain.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "GovernmentService",
      name: "Programul PRO INFRA",
      description: `Finantare nerambursabila pentru ${domain.title.toLowerCase()}`,
      serviceType: "Finantare Nerambursabila",
      provider: {
        "@type": "GovernmentOrganization",
        name: "Ministerul Investitiilor si Proiectelor Europene",
        areaServed: "Romania",
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-section", ".about-section"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasa",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: domain.title,
          item: `${SITE_URL}/${domain.slug}`,
        },
      ],
    },
  };
}

export function generateFAQJsonLd(domain: DomainData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: domain.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceJsonLd(domain: DomainData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Consultanta PRO INFRA — ${domain.title}`,
    description: domain.metaDescription,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    serviceType: "Consultanta Fonduri Europene",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RON",
      description: "Evaluare gratuita a eligibilitatii pentru programul PRO INFRA",
    },
  };
}

export function generateHomePageJsonLd(allDomains: DomainData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Domenii de Activitate Eligibile PRO INFRA",
    description: "Lista completa a domeniilor de activitate eligibile pentru finantare nerambursabila prin programul PRO INFRA",
    numberOfItems: allDomains.length,
    itemListElement: allDomains.map((domain, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: domain.title,
      url: `${SITE_URL}/${domain.slug}`,
    })),
  };
}
