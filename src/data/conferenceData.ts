/**
 * International Biotechnology Conference 2027 (IBC 2027 / IBC2027)
 * University of Chittagong, Bangladesh
 * 
 * Tagline: "Biotechnology for sustainable development."
 * Organized by: Department of Genetic Engineering & Biotechnology (GEB), University of Chittagong
 * Courtesy: University Grants Commission (UGC), Bangladesh
 * 
 * CENTRAL CONFIGURATION & CONTENT STORE (Updated from Official 2027 Conference Documentation)
 */

export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  country: string;
  researchArea: string;
  bio: string;
  presentationTitle: string;
  sessionType: 'Keynote' | 'Plenary' | 'Invited' | 'Oral Presentation';
  avatarUrl: string;
  isKeynote?: boolean;
}

export interface AgendaItem {
  id: string;
  day: number;
  time: string;
  title: string;
  type: 'Keynote' | 'Oral Presentation' | 'Poster' | 'Workshop' | 'Networking' | 'Ceremony' | 'Student Spotlight';
  speaker: string;
  venue: string;
  description?: string;
  track?: string;
}

export interface ConferenceTheme {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ImportantDate {
  id: string;
  step: string;
  title: string;
  date: string;
  rawDate: string;
  status: 'active' | 'upcoming' | 'completed';
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Conference' | 'Presentations' | 'Participants';
  caption: string;
  imageUrl: string;
}

export interface RegistrationCategory {
  id: string;
  name: string;
  feeText: string;
  feeAmount: number;
  currency: string;
  description: string;
  benefits: string[];
}

export interface DemoSubmissionResult {
  submissionId: string;
  email: string;
  title: string;
  authors: string;
  category: string;
  presentationType: 'Oral Presentation' | 'Poster Presentation';
  status: 'Accepted — Oral' | 'Accepted — Poster' | 'Under Review' | 'Revision Required' | 'Not Accepted';
  reviewComments: string;
  assignedSession?: string;
  dateChecked: string;
}

export const CONFERENCE_INFO = {
  name: "International Biotechnology Conference 2027",
  shortName: "IBC 2027",
  code: "IBC2027",
  edition: "International Edition",
  tagline: "Biotechnology for sustainable development.",
  theme: "Biotechnology for Sustainable Development",
  organizedBy: "Department of Genetic Engineering & Biotechnology (GEB)",
  institution: "University of Chittagong",
  country: "Bangladesh",
  courtesy: "University Grants Commission, Bangladesh",
  conferenceDate: "13 January 2027",
  datesDisplay: "January 13, 2027",
  countdownTarget: "2027-01-13T09:00:00+06:00",
  venue: "Faculty of Biological Sciences, University of Chittagong",
  venueShort: "CU Campus, Chattogram",
  officialWebsite: "https://ibc2027.org/",
  abstractPortalUrl: "https://forms.gle/RzeqcFCeakhUFMVF8",
  contactEmail: "ibc2027@cu.ac.bd",
  departmentEmail: "geb@cu.ac.bd",
  departmentPortal: "https://cu.ac.bd/dgeb/",
  facebookPage: "https://www.facebook.com/geb.cu/",

  // Payment Details from Official Document
  payment: {
    bankName: "Janata Bank PLC",
    branch: "Chittagong University Branch",
    accountName: "IBC-2027",
    accountNumber: "0100300692391",
    routingNumber: "135152081",
    mobileBanking: "bKash / Nagad / Rocket (Through Bangla QR)",
  },

  // About Narrative from Official Document
  aboutConference:
    "Organized by the Department of Genetic Engineering and Biotechnology (GEB) at the University of Chittagong, the International Biotechnology Conference 2027 is a premier global forum for presenting cutting-edge research across all domains of biotechnology and driving progress toward the Sustainable Development Goals (SDGs). This comprehensive one-day event features keynote lectures by distinguished plenary speakers, oral and poster presentations, student spotlight sessions, and networking opportunities with industry leaders. IBC 2027 provides a dynamic platform for researchers, academics, and biotech professionals at all career stages to exchange ideas, expand their technical expertise, and forge impactful interdisciplinary collaborations.",

  // GEB Department Narrative from Official Document
  aboutDepartment:
    "The Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong was established in 2004. The department was designed with a diverse and booming program in Biotechnology that overgrew the boundaries of other traditional departments in the Faculty of Biological Sciences, CU. GEB department is committed to impart knowledge of understanding the molecular and genetic basis of life as a multidisciplinary subject. For the last two decades, through excellent teaching and quality research, the department has trained students to become competent professionals in academia, research, and industrial field. GEB, CU graduates are now serving around the globe with the problem-solving skills that they develop during the training in GEB department. Research findings of GEB faculties are regularly publish in top-notch journals, contributing to the advancement of numerous areas of Biotechnology.",

  // GEB Four Key Research Pillars from Official Document
  departmentPillars: [
    {
      title: "Genomic Medicine & AMR Surveillance",
      description: "Local health surveillance, antimicrobial resistance tracking, and molecular diagnostics.",
    },
    {
      title: "Climate-Resilient Crop Development",
      description: "Molecular breeding and functional genomics for regional agricultural climate adaptation.",
    },
    {
      title: "Comprehensive Safety Assessments",
      description: "Advanced bio-assays and molecular screening for food security and water quality.",
    },
    {
      title: "Bioprospecting Native Flora",
      description: "Discovering novel therapeutics, bioactive compounds, and green enzymes from native biodiversity.",
    },
  ],

  // 5 Key Events from Official Document
  keyEvents: [
    { title: "Oral Symposia & Scientific Sessions", desc: "Peer-reviewed technical tracks across 8 core domains" },
    { title: "Poster Presentations & Interactive Gallery", desc: "Interactive display boards and jury evaluations" },
    { title: "Emerging Biotechnologists Showcase", desc: "Highlighting innovative projects by young researchers" },
    { title: "Student Spotlight Talks", desc: "Dedicated competitive presentations for student investigators" },
    { title: "Awards Ceremony & Closing Session", desc: "Best Oral & Poster recognitions and valedictory awards" },
  ],
};

/**
 * 8 OFFICIAL RESEARCH AREAS (From IBC 2027 Document)
 */
export const CONFERENCE_THEMES: ConferenceTheme[] = [
  {
    id: "theme-1",
    number: "01",
    title: "Animal, Fisheries & Marine Biotechnology",
    description: "Marine genomics, aquaculture disease resistance, marine bioprospecting, and blue biotechnology.",
    iconName: "Fish",
  },
  {
    id: "theme-2",
    number: "02",
    title: "Bioinformatics, Systems & Computational Biology",
    description: "Genomic sequence pipelines, structural modeling, machine learning in life sciences, and multi-omics.",
    iconName: "Cpu",
  },
  {
    id: "theme-3",
    number: "03",
    title: "Biotechnology for Renewable Energy",
    description: "Biofuels, algal bioprocesses, microbial fuel cells, anaerobic digestion, and biomass valorization.",
    iconName: "Zap",
  },
  {
    id: "theme-4",
    number: "04",
    title: "Environmental Biotechnology & Climate Change",
    description: "Bioremediation, wastewater treatment, carbon sequestration bio-pathways, and ecosystem restoration.",
    iconName: "Leaf",
  },
  {
    id: "theme-5",
    number: "05",
    title: "Industrial & Food Biotechnology",
    description: "Enzyme engineering, fermentation technology, bioplastics, functional foods, and nutritional security.",
    iconName: "Factory",
  },
  {
    id: "theme-6",
    number: "06",
    title: "Medical & Pharmaceutical Biotechnology",
    description: "Biologics, drug discovery, cancer therapeutics, molecular diagnostics, and targeted nanomedicine.",
    iconName: "Stethoscope",
  },
  {
    id: "theme-7",
    number: "07",
    title: "Microbial Biotechnology & Antimicrobial Resistance",
    description: "AMR surveillance, extremophiles, microbial synthetic biology, and therapeutic microbiome interventions.",
    iconName: "Microscope",
  },
  {
    id: "theme-8",
    number: "08",
    title: "Plant & Agricultural Biotechnology",
    description: "Crop genetics, climate-resilient stress tolerance, tissue culture, and modern molecular breeding.",
    iconName: "Sprout",
  },
];

/**
 * OFFICIAL IMPORTANT DATES & DEADLINES (From IBC 2027 Document)
 */
export const IMPORTANT_DATES: ImportantDate[] = [
  {
    id: "date-1",
    step: "01",
    title: "Deadline for Abstract Submission",
    date: "15 November 2026",
    rawDate: "2026-11-15",
    status: "active",
    description: "Online submission portal closes for structured 250-word oral and poster abstracts.",
  },
  {
    id: "date-2",
    step: "02",
    title: "Notification of Abstract Acceptance",
    date: "1 December 2026",
    rawDate: "2026-12-01",
    status: "upcoming",
    description: "Peer-review decision letters and acceptance notices sent via registered email.",
  },
  {
    id: "date-3",
    step: "03",
    title: "Registration Deadline for Presenters & Participants",
    date: "20 December 2026",
    rawDate: "2026-12-20",
    status: "upcoming",
    description: "Final deadline for delegates to register and confirm paper presentation scheduling.",
  },
  {
    id: "date-4",
    step: "04",
    title: "IBC 2027 Conference Inauguration & Sessions",
    date: "13 January 2027",
    rawDate: "2027-01-13",
    status: "upcoming",
    description: "Opening keynote ceremony, scientific technical tracks, poster gallery, and valedictory awards.",
  },
];

/**
 * OFFICIAL REGISTRATION FEES (From IBC 2027 Document)
 */
export const REGISTRATION_CATEGORIES: RegistrationCategory[] = [
  {
    id: "cat-students",
    name: "Students",
    feeText: "Tk 1,000 only",
    feeAmount: 1000,
    currency: "BDT",
    description: "For active undergraduate and postgraduate students from recognized colleges & universities.",
    benefits: [
      "Access to all scientific symposia and keynote sessions",
      "Official conference delegate kit & abstract volume",
      "Lunch, refreshments & tea during conference sessions",
      "Certificate of Participation / Paper Presentation",
      "Eligibility for Student Spotlight and Young Investigator awards",
    ],
  },
  {
    id: "cat-professionals",
    name: "Professionals and Researchers",
    feeText: "Tk 2,000/- only",
    feeAmount: 2000,
    currency: "BDT",
    description: "For academic faculty members, scientists, postdoctoral researchers, and industry delegates.",
    benefits: [
      "Full academic accreditation & conference privileges",
      "Oral/poster presentation scheduling & certificate",
      "Official conference proceedings abstract book",
      "Conference delegate kit, networking lunch & high tea",
      "Certificate of Paper Presentation / Participation",
    ],
  },
  {
    id: "cat-international",
    name: "International Participants",
    feeText: "Tk 5,000/- ($50.0)",
    feeAmount: 5000,
    currency: "BDT / USD",
    description: "For international faculty, foreign scholars, and overseas delegates.",
    benefits: [
      "Full international accreditation & conference kit",
      "Official visa recommendation letter support",
      "Oral / poster session presentation slot & certificate",
      "All meals, tea receptions, and conference banquets",
      "Guided tour assistance of picturesque Chittagong University campus",
    ],
  },
];

/**
 * OFFICIAL GUIDELINES FOR THE SUBMISSION OF ABSTRACTS (From IBC 2027 Document)
 */
export const SUBMISSION_GUIDELINES = {
  abstractLength: "Maximum 250 words (Abstract body)",
  fontRecommendation: "Times New Roman, Font size: 12",
  structure: "Background/Objective(s), Methodology, Findings, and Conclusion",
  categories: ["Oral presentation", "Poster presentation"],
  instructions: [
    "Submission must be done by the corresponding/presenting author. Name of the presenting author should be marked in bold.",
    "No payment is required for the submission of abstracts.",
    "Category and area of presentation must be mentioned on the top of the abstract.",
    "Word limit: Maximum 250 words (Abstract body).",
    "Font: Times New Roman, Font size: 12.",
    "Contents must be structured: Background/Objective(s), Methodology, Findings, and Conclusion.",
    "Each author of the accepted abstracts must register individually (if more than one author of the paper wants to join the conference).",
    "Abstract submission portal link: https://forms.gle/RzeqcFCeakhUFMVF8",
  ],
};

/**
 * Keynote and Plenary Speakers
 */
export const FEATURED_KEYNOTE_SPEAKER: Speaker = {
  id: "speaker-keynote",
  name: "Dr. [Distinguished Keynote Speaker — TBA]",
  role: "Professor of Molecular Genetics & Biotechnology",
  institution: "[Distinguished University / International Research Institute]",
  country: "[Country — To Be Announced]",
  researchArea: "[Biotechnology for Sustainable Development & SDGs]",
  bio: "The organizing committee at the Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong is finalizing invitations with prominent global biotech scholars and international authorities. Once confirmed, the full curriculum vitae, keynote oration title, and abstract will be updated here.",
  presentationTitle: "[Keynote Address: Emerging Frontiers in Biotechnology for Sustainable Development]",
  sessionType: "Keynote",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  isKeynote: true,
};

export const SPEAKERS: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. [Invited Speaker 1 — TBA]",
    role: "Professor of Plant & Agricultural Biotechnology",
    institution: "[Agricultural Research University]",
    country: "[Bangladesh / International]",
    researchArea: "[Climate-Resilient Crops & Functional Genomics]",
    bio: "Placeholder bio for an invited speaker specializing in climate-adaptive molecular breeding and food security.",
    presentationTitle: "[Plenary: Molecular Strategies for Climate-Resilient Agricultural Systems]",
    sessionType: "Plenary",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-2",
    name: "Dr. [Invited Speaker 2 — TBA]",
    role: "Senior Scientist in Microbial Genomics",
    institution: "[Biomedical Research Center]",
    country: "[Bangladesh / International]",
    researchArea: "[Antimicrobial Resistance Surveillance & Genomics]",
    bio: "Placeholder bio for an expert biochemist and microbiologist focused on AMR surveillance and genomic medicine.",
    presentationTitle: "[Invited: Genomic Surveillance of Antimicrobial Resistance in One Health Context]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-3",
    name: "Prof. [Invited Speaker 3 — TBA]",
    role: "Chair of Bioinformatics & Computational Biology",
    institution: "[Institute of Computational Systems]",
    country: "[International]",
    researchArea: "[AI & Deep Learning in Genomic Sequence Analysis]",
    bio: "Placeholder bio for a scholar in computational biology, structural drug prediction, and biological network dynamics.",
    presentationTitle: "[Invited: Next-Generation Machine Learning in Translational Biological Sciences]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
];

/**
 * 1-Day Conference Agenda (13 January 2027)
 */
export const AGENDA_DAYS = [
  { dayNumber: 1, label: "13 January 2027", dateLabel: "Conference Day · 13 January 2027" },
];

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: "ag-01",
    day: 1,
    time: "08:30 AM – 09:30 AM",
    title: "Registration & Conference Kit Collection",
    type: "Networking",
    speaker: "Conference Secretariat Desk",
    venue: "Faculty of Biological Sciences Foyer",
    description: "Credential pickup, conference bag distribution, and morning welcome refreshments.",
  },
  {
    id: "ag-02",
    day: 1,
    time: "09:30 AM – 10:45 AM",
    title: "Inaugural Ceremony & Opening Addresses",
    type: "Ceremony",
    speaker: "Chief Guest, Vice-Chancellor CU, Dean, & Organizing Chair",
    venue: "Faculty Auditorium",
    description: "Welcome addresses by university leadership, Department of GEB faculty heads, and guests of honor.",
  },
  {
    id: "ag-03",
    day: 1,
    time: "11:00 AM – 12:15 PM",
    title: "Keynote Lecture: Biotechnology for Sustainable Development",
    type: "Keynote",
    speaker: "Dr. [Distinguished Keynote Speaker — TBA]",
    venue: "Faculty Auditorium",
    description: "Foundational address exploring breakthroughs in biological technologies addressing the UN Sustainable Development Goals.",
  },
  {
    id: "ag-04",
    day: 1,
    time: "12:15 PM – 01:15 PM",
    title: "Oral Symposia Session I (Parallel Technical Tracks)",
    type: "Oral Presentation",
    speaker: "Selected Oral Presenters",
    venue: "Seminar Halls A & B",
    description: "Technical research presentations across Medical, Microbial, Plant & Agricultural Biotechnology.",
  },
  {
    id: "ag-05",
    day: 1,
    time: "01:15 PM – 02:15 PM",
    title: "Networking Lunch & Poster Viewing",
    type: "Networking",
    speaker: "All Registered Delegates",
    venue: "Central Dining Hall & Poster Exhibition Gallery",
    description: "Delegates meet with institutional peers, student presenters, and faculty members.",
  },
  {
    id: "ag-06",
    day: 1,
    time: "02:15 PM – 03:45 PM",
    title: "Oral Symposia Session II & Emerging Biotechnologists Showcase",
    type: "Oral Presentation",
    speaker: "Selected Young Investigators & Scholars",
    venue: "Faculty Auditorium & Seminar Hall A",
    description: "Renewable energy, environmental biotechnology, bioinformatics, and competitive student spotlight talks.",
  },
  {
    id: "ag-07",
    day: 1,
    time: "03:45 PM – 04:30 PM",
    title: "Poster Evaluation Session & High Tea",
    type: "Poster",
    speaker: "Poster Presenters & Jury Panel",
    venue: "Poster Gallery & Foyer",
    description: "Jury assessment of student and researcher posters, alongside evening tea reception.",
  },
  {
    id: "ag-08",
    day: 1,
    time: "04:30 PM – 05:30 PM",
    title: "Awards Ceremony & Valedictory Closing Session",
    type: "Ceremony",
    speaker: "Organizing Committee, Faculty & Dignitaries",
    venue: "Faculty Auditorium",
    description: "Best Oral & Best Poster Award distributions, delegate certificates, and vote of thanks.",
  },
];

/**
 * University of Chittagong Campus & Conference Gallery Photos
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Entrance Gate — University of Chittagong",
    category: "Campus",
    caption: "The iconic main entrance arch of the University of Chittagong surrounded by lush green foliage and red flowers.",
    imageUrl: "/images/cu-entrance.jpg",
  },
  {
    id: "gal-2",
    title: "Historic 'Joy Bangla' Monument — CU Campus",
    category: "Campus",
    caption: "The majestic 'Joy Bangla' sculpture commemorating Bangladesh's Liberation War on the serene Chittagong University campus road.",
    imageUrl: "/images/cu-sculpture.jpg",
  },
  {
    id: "gal-3",
    title: "Faculty & Campus Buildings Nestled in Green Hills",
    category: "Campus",
    caption: "Chittagong University's renowned picturesque campus nestled among natural verdant hills and scenic water bodies.",
    imageUrl: "/images/cu-campus-hills.jpg",
  },
  {
    id: "gal-4",
    title: "Chittagong University Campus Transportation",
    category: "Campus",
    caption: "University of Chittagong campus commuter bus on the green, winding forest road connecting the halls to the academic complex.",
    imageUrl: "/images/cu-bus.jpg",
  },
  {
    id: "gal-5",
    title: "GEB Department Molecular Life Sciences Research",
    category: "Conference",
    caption: "Advanced laboratory assays and genetic analysis conducted at the Department of Genetic Engineering & Biotechnology.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-6",
    title: "Interactive Scientific Poster Presentations",
    category: "Presentations",
    caption: "Researchers and scholars engaging with the scientific jury panel during interactive poster evaluations.",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
];

/**
 * Demo Results Data for Testing
 */
export const DEMO_RESULTS: DemoSubmissionResult[] = [
  {
    submissionId: "IBC27-DEMO-00123",
    email: "researcher@example.com",
    title: "CRISPR-Cas9 Mediated Targeted Mutagenesis in Submergence-Tolerant Rice Cultivars",
    authors: "Dr. A. Rahman, S. Begum, T. Ahmed",
    category: "Plant & Agricultural Biotechnology",
    presentationType: "Oral Presentation",
    status: "Accepted — Oral",
    reviewComments: "The peer-review committee commends the rigorous methodology and relevance to climate-resilient agriculture. Accepted for an Oral Presentation in Session I.",
    assignedSession: "13 Jan 2027 · Seminar Hall A · 12:15 PM",
    dateChecked: "Reviewed for IBC 2027",
  },
  {
    submissionId: "IBC27-DEMO-00456",
    email: "biotech.student@example.com",
    title: "Metagenomic Characterization of Cellulolytic Bacterial Communities from Sunderbans Mangroves",
    authors: "F. Hossain, M. Islam, K. Das",
    category: "Microbial Biotechnology & Antimicrobial Resistance",
    presentationType: "Poster Presentation",
    status: "Accepted — Poster",
    reviewComments: "Well-structured scientific abstract with novel enzyme assays. Accepted for Poster Presentation. Please format according to standard 36x48 inch poster dimensions.",
    assignedSession: "13 Jan 2027 · Poster Gallery · Board P-18",
    dateChecked: "Reviewed for IBC 2027",
  },
  {
    submissionId: "IBC27-DEMO-00789",
    email: "pharma.lab@example.com",
    title: "Bioactive Marine Compounds Against Multidrug Resistant Acinetobacter baumannii",
    authors: "N. Sultana, R. K. Chowdhury",
    category: "Animal, Fisheries & Marine Biotechnology",
    presentationType: "Oral Presentation",
    status: "Under Review",
    reviewComments: "Your abstract is currently with two independent expert peer-reviewers. Formal decision notification will be transmitted by December 1, 2026.",
    dateChecked: "Evaluation in progress",
  },
  {
    submissionId: "IBC27-DEMO-00999",
    email: "scholar@example.com",
    title: "In Silico Profiling of Plant-Derived Secondary Metabolites in Neuroprotective Signaling Pathways",
    authors: "H. Kabir, Z. Alam",
    category: "Bioinformatics, Systems & Computational Biology",
    presentationType: "Poster Presentation",
    status: "Revision Required",
    reviewComments: "Reviewers suggest clarifying the binding affinity metrics in the methodology. Please resubmit revised abstract before the revision deadline.",
    dateChecked: "Minor revisions requested",
  },
];
