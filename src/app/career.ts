import { ICareer } from './icareer.interface';

export const careers: ICareer[] = [
  {
    id: 1,
    title: 'Frontend Angular Developer',
    company: 'Siemens',
    location: 'Munich, Germany',
    type: 'Full-time',
    description:
      'Develop and maintain Angular-based web applications for industrial automation solutions.',
    requirements: [
      '3+ years of Angular experience',
      'Proficiency in TypeScript, HTML, CSS',
      'Experience with RESTful APIs and RxJS',
    ],
    responsibilities: [
      'Develop reusable Angular components',
      'Collaborate with UX/UI designers',
      'Optimize application performance',
    ],
    applyUrl: 'https://jobs.siemens.com/frontend-angular-developer',
    email: 'careers@siemens.com',
    postedDate: '2025-10-20',
  },
  {
    id: 2,
    title: 'Full Stack JavaScript Developer',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    type: 'Full-time',
    description:
      'Work across the stack building new music discovery features using React and Node.js.',
    requirements: [
      '5+ years of experience with JavaScript/TypeScript',
      'Proficiency in React, Node.js, and Express',
      'Experience with REST APIs and CI/CD pipelines',
    ],
    responsibilities: [
      'Design scalable React components and backend endpoints',
      'Collaborate with designers and data engineers',
      'Mentor junior developers and review pull requests',
    ],
    applyUrl: 'https://www.spotify.com/careers/fullstack-js-developer',
    email: 'jobs@spotify.com',
    postedDate: '2025-10-19',
  },
  {
    id: 3,
    title: 'Frontend Vue.js Engineer',
    company: 'Booking.com',
    location: 'Amsterdam, Netherlands',
    type: 'Full-time',
    description:
      'Develop and enhance responsive booking interfaces using Vue.js and modern web tooling.',
    requirements: [
      '3+ years Vue.js development experience',
      'Strong understanding of modern JavaScript (ES6+)',
      'Experience with state management (Vuex/Pinia)',
    ],
    responsibilities: [
      'Implement responsive and performant UI components',
      'Collaborate closely with designers to enhance UX',
      'Maintain code quality through automated testing',
    ],
    applyUrl: 'https://careers.booking.com/vue-frontend-engineer',
    email: 'techcareers@booking.com',
    postedDate: '2025-10-18',
  },
  {
    id: 4,
    title: 'Backend Engineer (Java/Spring Boot)',
    company: 'Zalando',
    location: 'Berlin, Germany',
    type: 'Full-time',
    description:
      'Develop scalable backend microservices for the Zalando e-commerce platform using Java and Spring Boot.',
    requirements: [
      '4+ years of backend development experience',
      'Proficiency in Java, Spring Boot, and RESTful APIs',
      'Familiarity with Docker and microservice architecture',
    ],
    responsibilities: [
      'Design and implement robust backend services',
      'Integrate APIs with internal and external systems',
      'Participate in architecture and code reviews',
    ],
    applyUrl: 'https://jobs.zalando.com/backend-java-engineer',
    email: 'engineering@zalando.de',
    postedDate: '2025-10-17',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Revolut',
    location: 'London, United Kingdom',
    type: 'Full-time',
    description:
      'Support the engineering teams by improving CI/CD pipelines, infrastructure automation, and monitoring systems.',
    requirements: [
      '3+ years of DevOps or SRE experience',
      'Strong skills in AWS, Docker, and Kubernetes',
      'Experience with Jenkins, GitHub Actions, or similar tools',
    ],
    responsibilities: [
      'Automate deployment pipelines and cloud infrastructure',
      'Monitor system reliability and performance',
      'Collaborate with development teams for continuous delivery',
    ],
    applyUrl: 'https://www.revolut.com/careers/devops-engineer',
    email: 'hiring@revolut.com',
    postedDate: '2025-10-16',
  },
  {
    id: 6,
    title: 'Backend Python Developer',
    company: 'Adyen',
    location: 'Amsterdam, Netherlands',
    type: 'Full-time',
    description:
      'Develop and maintain Python-based APIs and microservices powering Adyen’s payment systems.',
    requirements: [
      '2+ years of Python development experience',
      'Knowledge of Flask or FastAPI',
      'Familiarity with SQL and NoSQL databases',
    ],
    responsibilities: [
      'Implement scalable RESTful services',
      'Collaborate with frontend and data teams',
      'Ensure code reliability through testing and CI/CD',
    ],
    applyUrl: 'https://www.adyen.com/careers/backend-python-developer',
    email: 'techjobs@adyen.com',
    postedDate: '2025-10-15',
  },
];
