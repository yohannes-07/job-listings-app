export interface JobPosting {
    id: number;
    company: string;
    logo: string;
    isFeatured: boolean;
    position: string;
    isNew: boolean;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }
  
  export interface JobPostingsData {
    jobPostings: JobPosting[];
  }
  
  