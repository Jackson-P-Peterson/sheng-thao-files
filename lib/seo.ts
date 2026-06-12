export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shengthaofiles.com";

export const SITE_NAME = "The Sheng Thao Files";

export const CONTACT_EMAIL = "contact@shengthaofiles.com";

export const SPONSOR = "Americans for Opportunity";

/** Canonical social share image — must stay at /sheng-thao.webp in public/ */
export const SOCIAL_IMAGE_PATH = "/sheng-thao.webp";
export const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;
export const SOCIAL_IMAGE_WIDTH = 2560;
export const SOCIAL_IMAGE_HEIGHT = 1440;
export const SOCIAL_IMAGE_ALT =
  "Sheng Thao, former Mayor of Oakland — recalled and federally indicted on 8 corruption counts";

export const SEO_TITLE =
  "THE SHENG THAO FILES: Recalled, Indicted & Exposed";

export const SEO_DESCRIPTION =
  "Oakland's first recalled mayor faces 8 federal fraud counts. FBI raids, $95K in bribes, Duong family pay-to-play, 60.6% voted her out. The complete Sheng Thao dossier — trial pending.";

export const OG_TITLE =
  "She Sold Out Oakland. The Proof Is Here. | The Sheng Thao Files";

export const OG_DESCRIPTION =
  "8-count federal indictment. FBI raids on her home. $95K laundered through a no-show job. 86,535 voters said remove her. Read the full Sheng Thao corruption record before the trial.";

export const SEO_KEYWORDS = [
  "Sheng Thao",
  "Sheng Thao Oakland",
  "Sheng Thao mayor",
  "Sheng Thao indictment",
  "Sheng Thao federal charges",
  "Sheng Thao recall",
  "Sheng Thao corruption",
  "Sheng Thao bribery",
  "Sheng Thao trial",
  "Sheng Thao Duong family",
  "Sheng Thao Andre Jones",
  "Sheng Thao FBI raid",
  "Oakland mayor Sheng Thao",
  "Oakland mayor recall",
  "Oakland mayor indictment",
  "Oakland corruption",
  "California Waste Solutions",
  "Duong family Oakland",
  "David Duong",
  "Andy Duong",
  "Andre Jones Oakland",
  "Renia Webb whistleblower",
  "Mario Juarez Sheng Thao",
  "Oakland pay to play",
  "Sheng Thao honest services fraud",
  "Sheng Thao straw donors",
  "Sheng Thao Evolutionary Homes",
  "Oakland public safety",
  "Oakland crime Sheng Thao",
  "Sheng Thao LeRonne Armstrong",
  "Sheng Thao FPPC",
  "Sheng Thao DOJ",
  "former Oakland mayor",
  "Oakland mayor federal indictment 2025",
] as const;

export function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SEO_DESCRIPTION,
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        name: SPONSOR,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SOCIAL_IMAGE_URL,
        contentUrl: SOCIAL_IMAGE_URL,
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        caption: SOCIAL_IMAGE_ALT,
      },
      inLanguage: "en-US",
      dateModified: "2025-06-12",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sheng Thao",
      alternateName: ["Mayor Sheng Thao", "Former Oakland Mayor Sheng Thao"],
      jobTitle: "Former Mayor of Oakland",
      description:
        "Sheng Thao served as Mayor of Oakland, California from January 2023 until her historic recall in November 2024. She was indicted on January 17, 2025 on an 8-count federal indictment for bribery, conspiracy, and honest services fraud related to the Duong family and California Waste Solutions.",
      knowsAbout: [
        "Oakland politics",
        "California Waste Solutions",
        "Duong family",
        "Campaign finance violations",
        "Public corruption",
      ],
      homeLocation: {
        "@type": "Place",
        name: "Oakland, California",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Sheng Thao?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sheng Thao is the former Mayor of Oakland, California — the city's first recalled mayor. She took office in January 2023 and was removed by voters in November 2024 with 60.62% voting yes (86,535 votes). She was indicted federally on January 17, 2025 on 8 counts including bribery and honest services fraud.",
          },
        },
        {
          "@type": "Question",
          name: "What is Sheng Thao charged with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sheng Thao faces an 8-count federal indictment for bribery, conspiracy, and honest services fraud. Co-defendants include David Duong, Andy Duong of California Waste Solutions, and Andre Jones. Defendants face up to 35 years in federal prison if convicted on all counts.",
          },
        },
        {
          "@type": "Question",
          name: "Was Sheng Thao recalled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In November 2024, Oakland voters recalled Sheng Thao by a landslide — 86,535 Yes votes (60.62%), making her Oakland's first recalled mayor in history.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Duong family connection to Sheng Thao?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Duong family, owners of California Waste Solutions (CWS), allegedly laundered $76,000 across 93 straw-donor contributions during Thao's 2018 City Council race, then escalated to mayoral-level bribery including $95,000+ to Andre Jones and $75,000 in illicit negative mailers. In exchange, Thao allegedly protected CWS's recycling monopoly, awarded contracts to Evolutionary Homes, and appointed Duong loyalists to city positions.",
          },
        },
        {
          "@type": "Question",
          name: "When was Sheng Thao indicted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sheng Thao was indicted on January 17, 2025 by the U.S. Attorney's Office. FBI, IRS, and Postal Service agents had raided her Maiden Lane home and Duong properties on June 20, 2024.",
          },
        },
        {
          "@type": "Question",
          name: "What is The Sheng Thao Files?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Sheng Thao Files is a comprehensive accountability website documenting Sheng Thao's record as Oakland mayor — corruption allegations, public safety failures, recall results, federal indictment details, and trial updates. Paid for by Americans for Opportunity.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SPONSOR,
      url: "https://opportunity.vote",
      description: "Paid for by Americans for Opportunity",
    },
  ];
}
