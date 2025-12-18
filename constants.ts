
import { Experience, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Arnab Brahma, P.Eng.",
  location: "Mount Pearl, NL, A1N 2B3",
  phone: "+1 (709) 690-5912",
  email: "abrahma@mun.ca",
  website: "www.arnabbrahma.com",
  linkedin: "linkedin.com/in/arnab-brahma",
  tagline: "Mechanical Estimator | Construction Professional",
  summary: "With 5+ years of experience in the construction industry doing Mechanical Estimating, I bring a comprehensive skill set that includes field engineering, change management, bid preparations, bid submittals, and project controls. My expertise extends to negotiation, precise calculations, and proficiency in industry-standard software. I have significantly contributed to major Newfoundland and Labrador construction firms, including the Cahill Group, RothLochston, and Pennecon. Throughout my career, I have been privileged to participate in prominent provincial projects such as the Come by Chance Refinery (multi M), the Memorial University Core Sciences Building Project (300M), and the Voisey's Bay Mine Expansion Project (400M). These experiences have not only solidified my technical abilities but also enhanced my capacity for effective project management and collaboration in complex environments. I am passionate about leveraging my diverse qualifications, educational background, and entrepreneurial mindset to drive success in every role I undertake. I welcome opportunities to connect and discuss potential collaborations or opportunities further.",
};

export const STATS = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Bid Estimates", suffix: "+" },
  { value: 1000, label: "Change Orders", suffix: "+" },
  { value: 3, label: "Entrepreneurial Ventures", suffix: "+" },
];

export const SERVICES = [
  {
    title: "Estimating Consultation",
    description: "Detailed guidance on industrial cost estimation, bid preparations, and submittal strategies."
  },
  {
    title: "Drawing Review",
    description: "In-depth analysis of mechanical drawings to identify scope gaps and optimization opportunities."
  },
  {
    title: "MS Excel Support",
    description: "Advanced spreadsheet solutions and automation for project controls and data management."
  },
  {
    title: "Change Management",
    description: "Consultation on managing FWIs, COs, and complex contract deviations."
  },
  {
    title: "AI Integration",
    description: "Implementing GenAI solutions to automate data extraction from specs, optimize workflows, and enhance estimation accuracy."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Green Infrastructure Partners Inc.",
    role: "Mechanical Estimator",
    period: "Jun 2024 – Present",
    description: [
      "Supported industrial bids ranging from $500K to $150M across mining, energy, and utilities.",
      "Completed full-cycle cost estimates using Trimble Accubid Pro.",
      "Managed critical scopes for carbon steel to titanium piping and mechanical components.",
      "Participated in strategic vendor negotiations and value engineering."
    ]
  },
  {
    company: "Pennecon Industrial Ltd.",
    role: "Project Controls / Change Management Coordinator",
    period: "Oct 2022 – Jun 2024",
    description: [
      "Tracked progress on $400M Voisey's Bay Surface Expansion project.",
      "Managed 1,000+ FWIs/COs worth over $50M using custom Excel automation.",
      "Conducted daily site visits to monitor installation hours and performance factors.",
      "Developed comprehensive weekly reports for client leadership."
    ]
  },
  {
    company: "RothLochston VEL LTD.",
    role: "Project Coordinator",
    period: "Sep 2021 – Oct 2022",
    description: [
      "Supported $90M+ mechanical construction projects at Vale Voisey’s Bay.",
      "Closed-out over $10M in change orders across multiple contract types.",
      "Managed procurement and negotiated with suppliers for cost savings."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    institution: "Memorial University of Newfoundland",
    period: "2016 – 2021",
    details: [
      "Mechanical Engineering Co-op Program",
      "International Entrance Scholarship recipient"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Google Project Management Certification" },
  { title: "Standard First Aid & CPR" },
  { title: "OH&S Committee Training (Level 2)" },
  { title: "WHMIS 2015" }
];
