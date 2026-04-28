import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiCss,
} from 'react-icons/si'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const portfolioData = {
  fullName: 'Adya Patnaik',
  title: 'Aspiring Full Stack Developer',
  shortBio:
    'Motivated aspiring full stack developer with a strong interest in building scalable and user-friendly web applications. Skilled in frontend and backend fundamentals, with a focus on clean code, efficient problem-solving, and continuous learning.',
  email: 'adyapatnaik8@gmail.com',
  phone: '+91 9777374478',
  resumeFile: '/Adya_Patnaik_FlowCV_Resume_2026-04-14.pdf',
  socials: {
    github: 'https://github.com/adya12-creator',
    linkedin: 'https://www.linkedin.com/in/adya-patnaik-671992310',
  },
}

export const aboutHighlights = [
  'Focused on building practical, scalable products with clean architecture and thoughtful UX.',
  'Comfortable across React-based frontend development and Node.js backend APIs.',
  'Interested in impactful engineering roles and internships that blend product and performance.',
]

export const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Bootstrap', icon: null },
  { name: 'C', icon: null },
]

export const projectFilters = ['All', 'Completed', 'Ongoing']

export const projects = [
  {
    name: 'Alumni Association Platform',
    description:
      'Developed a full stack alumni networking platform enabling connections, job postings, and event management with role-based access control.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    category: 'Completed',
    liveUrl: '',
    githubUrl: '',
  },
  {
    name: 'Gym Tracker - Fitness Social Platform',
    description:
      'Built a fitness tracking app that monitors workouts, calorie intake, and BMI to help users manage their health consistently.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    category: 'Completed',
    liveUrl: '',
    githubUrl: '',
  },
  {
    name: 'Mental Health Tracker',
    description:
      'A full-stack mental health tracking web application that allows users to monitor their daily mood and maintain personal journal entries in a secure and private environment. The platform focuses on simplicity, usability, and consistent self-tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'Ongoing',
    liveUrl: '',
    githubUrl: '',
  },
]

export const education = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    org: 'Gandhi Institute for Education and Technology',
    boardOrUniversity: 'BPUT',
    period: '2023 - 2027',
    location: 'Bhubaneswar',
    scoreOrCgpa: 'CGPA: 8.5',
  },
  {
    title: 'Class 12 (CBSE)',
    org: 'Gurunanak Public School',
    boardOrUniversity: 'CBSE',
    period: '2021 - 2023',
    location: 'Sambalpur',
    scoreOrCgpa: '70%',
  },
  {
    title: 'Class 10 (ICSE)',
    org: 'St. Joseph Convent Higher Secondary School',
    boardOrUniversity: 'ICSE',
    period: '2020 - 2021',
    location: 'Sambalpur',
    scoreOrCgpa: '80%',
  },
]

export const experience = [
  {
    role: 'AI/ML Intern',
    company: 'Google',
    duration: 'July - September 2025',
    summary: 'None',
  },
  {
    role: 'Networking Intern',
    company: 'Zscaler',
    duration: 'January - March 2026',
    summary: 'None',
  },
]
