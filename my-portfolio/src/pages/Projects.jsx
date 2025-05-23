import { useState } from 'react';
import { Layout, ProjectCard } from '../components';
import useScrollTop from '../hooks/useScrollTop';

const Projects = () => {
  useScrollTop();

  const [filter, setFilter] = useState('all');

  // Sample project data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS. Features responsive design and modern animations.",
      image: "/src/assets/images/hero.png",
      tags: ["React", "Tailwind CSS", "Vite"],
      demoLink: "https://althepal78.com",
      codeLink: "https://github.com/althepal78/portfolio",
      category: "frontend"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      image: "/src/assets/images/hero.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      demoLink: "https://ecommerce-demo.althepal78.com",
      codeLink: "https://github.com/althepal78/ecommerce",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts using the OpenWeather API.",
      image: "/src/assets/images/hero.png",
      tags: ["JavaScript", "API Integration", "CSS", "HTML"],
      demoLink: "https://weather.althepal78.com",
      codeLink: "https://github.com/althepal78/weather-dashboard",
      category: "frontend"
    },
    {
      id: 4,
      title: "Task Management API",
      description: "RESTful API for task management with authentication, task creation, and categorization.",
      image: "/src/assets/images/hero.png",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      demoLink: "https://task-api-docs.althepal78.com",
      codeLink: "https://github.com/althepal78/task-api",
      category: "backend"
    },
    {
      id: 5,
      title: "Knicks Fan Community",
      description: "A forum for Knicks fans to discuss games, players, and share news. Features user profiles and real-time updates.",
      image: "/src/assets/images/hero.png",
      tags: ["React", "Firebase", "Real-time Database", "Authentication"],
      demoLink: "https://knicks-community.althepal78.com",
      codeLink: "https://github.com/althepal78/knicks-community",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and progress towards fitness goals.",
      image: "/src/assets/images/hero.png",
      tags: ["React Native", "Expo", "AsyncStorage", "Charts"],
      demoLink: "https://fitness-demo.althepal78.com",
      codeLink: "https://github.com/althepal78/fitness-tracker",
      category: "mobile"
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned over the years.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap  justify-center gap-3 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2  rounded-full ${filter === 'all' 
                ? 'bg-[var(--knicks-blue)]  text-white' 
                : 'bg-gray-200 text-gray-800  hover:bg-gray-300'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 rounded-full ${filter === 'frontend' 
                ? 'bg-[var(--knicks-blue)] text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 rounded-full ${filter === 'backend' 
                ? 'bg-[var(--knicks-blue)] text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-full ${filter === 'fullstack' 
                ? 'bg-[var(--knicks-blue)] text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-full ${filter === 'mobile' 
                ? 'bg-[var(--knicks-blue)] text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Mobile
            </button>
          </div>
          
          {/* Project Grid */}
          <div className="grid top-1/2 bg-top grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard 
              className=' bg-top'
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-600">No projects match the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;