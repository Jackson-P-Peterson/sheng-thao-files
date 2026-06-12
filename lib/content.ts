export const DONATE_URL = "https://opportunity.vote/donate";

export const ASSETS = {
  heroImage: "/sheng-thao.webp",
  dossierPdf: "/sheng-thao-files.pdf",
  dossierFilename: "Sheng Thao Files.pdf",
} as const;

export const NAV_LINKS = [
  { label: "The Corruption", href: "#corruption" },
  { label: "Public Safety Betrayal", href: "#public-safety" },
  { label: "The Reckoning", href: "#reckoning" },
  { label: "Trial Tracker", href: "#trial-tracker" },
  { label: "Join the Movement", href: "#join" },
] as const;

export const TRUST_BAR = [
  "Federal Indictment",
  "FPPC Investigations",
  "City Auditor Report",
  "Certified Recall Results",
] as const;

export const STATS = [
  {
    value: "60.6%",
    label: "Voted to Remove Her",
    detail: "Historic first recall of an Oakland mayor — 86,535 Yes votes",
  },
  {
    value: "8",
    label: "Count Federal Indictment",
    detail: "Bribery, conspiracy, and honest services fraud",
  },
  {
    value: "35",
    label: "Years Max Prison",
    detail: "Up to 35 years in federal prison if convicted on all counts",
  },
  {
    value: "$95K+",
    label: "Laundered Bribes",
    detail: "No-show job payments with promises up to $300,000",
  },
  {
    value: "$75K",
    label: "Illicit Mailers",
    detail: "Negative mailers that decided a 682-vote \"victory\"",
  },
  {
    value: "44%",
    label: "Auto Theft Surge",
    detail: "Top 1% property crime rate in America + $15.6M grant missed",
  },
] as const;

export const QUID_PRO_QUO = [
  {
    title: "CWS Recycling Monopoly Protection",
    description:
      "Long-term extension and protection of California Waste Solutions' recycling monopoly — the same company the city previously forced to refund $6 million in overcharges.",
  },
  {
    title: "Evolutionary Homes Contracts",
    description:
      "Direct city contracts for shipping-container housing via emergency declarations, bypassing competitive bidding and normal oversight.",
  },
  {
    title: "Duong-Chosen Appointments",
    description:
      "Installation of Duong-family loyalists into senior city positions, ensuring the syndicate's influence inside City Hall.",
  },
] as const;

export const DEFENDANTS = [
  {
    name: "Sheng Thao",
    role: "Former Mayor of Oakland",
    charges: "Bribery, conspiracy, honest services fraud (8 counts total across indictment)",
  },
  {
    name: "David Duong",
    role: "CEO, California Waste Solutions",
    charges: "Conspiracy, bribery, honest services fraud",
  },
  {
    name: "Andy Duong",
    role: "President, California Waste Solutions",
    charges: "Conspiracy, bribery, honest services fraud",
  },
  {
    name: "Andre Jones",
    role: "Thao Campaign Operative / Bagman",
    charges: "Conspiracy, bribery, honest services fraud",
  },
] as const;

export const FOOTER_SOURCES = [
  {
    label: "DOJ Indictment Announcement (Jan. 17, 2025)",
    href: "https://www.justice.gov/usao-ndca/pr/former-oakland-mayor-sheng-thao-and-three-co-defendants-indicted-bribery-and-honest",
  },
  {
    label: "Oakland City Auditor — BSCC Grant Report",
    href: "https://www.oaklandca.gov/topics/city-auditor",
  },
  {
    label: "FPPC Enforcement Actions",
    href: "https://www.fppc.ca.gov/",
  },
  {
    label: "Certified Recall Election Results (Nov. 2024)",
    href: "https://www.acvote.gov/",
  },
  {
    label: "FBI/IRS Raid Coverage (June 20, 2024)",
    href: "https://www.justice.gov/usao-ndca",
  },
] as const;

export const DOSSIER_CONTENT = {
  title: "THE SHENG THAO FILES — EVIDENCE DOSSIER",
  sections: [
    {
      heading: "Executive Summary",
      body: "Sheng Thao's \"refugee to mayor\" narrative was a shield for a brazen pay-to-play operation engineered by illicit capital. From the 2018 City Council race through her brief, disastrous mayoral tenure, the Duong family syndicate laundered contributions, bought policy outcomes, and installed a shadow executive inside Oakland City Hall. The result: systematic dismantling of public safety, a $15.6 million crime-fighting grant deliberately missed, and an 8-count federal indictment.",
    },
    {
      heading: "The Duong Family Straw-Donor Operation (2018)",
      body: "$76,000 laundered across 93 straw-donor contributions to elect Thao to City Council. California Waste Solutions (CWS) — a company the city had previously forced to refund $6 million — used employees, relatives, and associates to circumvent campaign finance limits and conceal the true source of funds.",
    },
    {
      heading: "The 2022 Mayoral Bribery Scheme",
      body: "$95,000+ paid to Andre Jones through a fabricated \"no-show job,\" with promises of up to $300,000. $75,000 in illicit negative mailers targeting Thao's opponent — mailers that decided a 682-vote margin of \"victory.\"",
    },
    {
      heading: "Quid Pro Quo Deliverables (Jan. 2023 onward)",
      body: "Upon taking office, Thao immediately began fulfilling promises: extending CWS's recycling monopoly, awarding Evolutionary Homes contracts via emergency declarations bypassing competitive bidding, and appointing Duong-chosen loyalists to senior city positions.",
    },
    {
      heading: "Andre Jones — The Bagman",
      body: "10-year Thao partner with no legitimate visible income. Received $95,000+ in bribe payments. Operated as shadow power broker inside City Hall. Renia Webb whistleblower confrontation: Jones told her to \"keep quiet\" — consciousness of guilt.",
    },
    {
      heading: "Public Safety Catastrophe",
      body: "Fired Police Chief LeRonne Armstrong (Feb. 2023) on questionable grounds. Blocked qualified replacements for nearly a full year during historic crime wave. 44% jump in auto thefts. Oakland in top 1% for property crime nationally. Deliberately missed $15.6M BSCC Organized Retail Theft grant — 73 days of awareness, City Auditor cited \"lack of organizational leadership\" and \"systemic rot.\" Business exodus, credit rating downgrade, Oakland A's departure.",
    },
    {
      heading: "The Reckoning",
      body: "June 20, 2024: FBI/IRS/Postal raids on Thao's Maiden Lane home and Duong properties — triggered by Mario Juarez's insider letter to AG Bonta. November 2024: Recall landslide — 86,535 Yes (60.62%). January 17, 2025: 8-count federal indictment. Trial pending.",
    },
  ],
} as const;
