
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
}
