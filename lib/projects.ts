export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'task-management-app',
    title: 'Task Management Application',
    description: 'A collaborative project management tool with real-time updates, team collaboration, and advanced analytics built with React and Node.js.',
    longDescription: 'A comprehensive task management platform designed for teams to collaborate effectively. Features real-time updates, project analytics, team management, and an intuitive drag-and-drop interface.',
    image: 'https://images.pexels.com/photos/7621127/pexels-photo-7621127.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7621127/pexels-photo-7621127.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    technologies: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    features: [
      'Real-time collaboration',
      'Project and task management',
      'Team member assignment',
      'Progress tracking and analytics',
      'File attachments',
      'Comments and notifications',
      'Drag-and-drop interface',
      'Responsive design',
    ],
    challenges: [
      'Implementing real-time updates efficiently',
      'Managing complex project hierarchies',
      'Optimizing database queries for performance',
      'Creating an intuitive drag-and-drop interface'
    ],
    date: '2024-02-15'
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with secure payment processing, inventory management, and responsive design.',
    longDescription: 'A full-featured e-commerce platform built with Next.js and TypeScript. Includes user authentication, product management, secure payments, and admin dashboard.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    features: [
      'User authentication',
      'Product catalog with search',
      'Shopping cart functionality',
      'Secure payment processing',
      'Order management',
      'Admin dashboard',
      'Responsive design',
      'SEO optimization'
    ],
    challenges: [
      'Implementing secure payments',
      'Managing complex state',
      'Performance optimization',
      'Creating flexible admin interface'
    ],
    date: '2024-01-20'
  },
  {
    id: 3,
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'A modern weather application with location-based forecasts, interactive maps, and detailed meteorological data.',
    longDescription: 'A comprehensive weather dashboard providing accurate forecasts, interactive maps, and detailed weather data with beautiful visualizations.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['React', 'TypeScript', 'Weather API', 'Charts'],
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Leaflet', 'Styled Components'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    features: [
      'Current weather conditions',
      '7-day weather forecast',
      'Interactive weather maps',
      'Location search and management',
      'Geolocation support',
      'Weather alerts',
      'Data visualization charts',
      'Responsive design'
    ],
    challenges: [
      'Handling multiple data sources',
      'Creating responsive visualizations',
      'Implementing location search',
      'Managing geolocation permissions'
    ],
    date: '2023-12-10'
  }
];

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getProject(slug: string): Promise<Project | null> {
  return projects.find(project => project.slug === slug) || null;
}

export async function getFeaturedProjects(limit: number = 3): Promise<Project[]> {
  return projects.slice(0, limit);
}