export interface ICareer {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl?: string;
  email: string;
  postedDate: string;
}
