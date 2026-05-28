export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  status: 'live' | 'wip' | 'archived'
}

export type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export type Skill = {
  name: string
  category: 'language' | 'framework' | 'tool' | 'ai'
}

export const projects: Project[] = [
  {
    title: 'Prime Forensics',
    description:
      'Professional platform for a forensic investigation firm — digital forensics, mobile forensics, data recovery.',
    tech: ['Next.js', 'React', 'Resend'],
    live: 'https://primeforensics.in',
    status: 'live',
  },
  {
    title: 'Snacktrack-Food Scanning App',
    description:
      'The app (snack_track_app) aims to help users identify harmful ingredients in eatables.',
    tech: ['Flutter', 'Supabase', 'Dart'],
    github: 'https://github.com/Stucknot/snack_track_app',
    status: 'wip',
  },
  {
    title: 'Customer Management App',
    description:
      'Shop-focused system with Firestore, automated follow-up reminders, and streamlined UI.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/yashgrover25/dashmesh_ro',
    status: 'live',
  },
  // {
  //   title: 'Prime Forensics',
  //   description:
  //     'Professional platform for a forensic investigation firm — digital forensics, mobile forensics, data recovery.',
  //   tech: ['Next.js', 'React'],
  //   live: 'https://primeforensics.in',
  //   status: 'live',
  // },
]

export const experience: Experience[] = [
  {
    company: 'Stucknot',
    role: 'Engineer Intern',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Built and refined AI-enabled workflows using LLMs and RAG',
      'Worked with scripts to support development and feature implementation',
    ],
  },
  {
    company: 'Stucknot',
    role: 'Flutter Developer Intern',
    period: 'Dec 2024 – Feb 2025',
    bullets: [
      'Responsive UI design and bug fixes',
      'Implemented MVVM + Clean Architecture with SOLID principles',
    ],
  },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'language' },
  { name: 'Dart', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'Flutter', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Firebase', category: 'tool' },
  { name: 'Supabase', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'LLMs', category: 'ai' },
  { name: 'RAG', category: 'ai' },
]
