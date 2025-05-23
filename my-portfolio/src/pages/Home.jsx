import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import aboutImage from '../assets/images/about.jpg';
import portBgImage from '../assets/images/portbg.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section with cover image background */}
      <section className="min-h-screen relative flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={portBgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Dark overlay for readability */}
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content - Left Column */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Hi, I'm <span className="text-[var(--knicks-orange)]">Albert Cardona</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white leading-relaxed max-w-lg">
                A passionate web developer specializing in creating dynamic, responsive web applications. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-[var(--knicks-blue)] text-white rounded-md font-medium hover:bg-[var(--knicks-orange)] transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            
            {/* Image - Right Column - Leave empty but take up space to center text */}
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={aboutImage} 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">A full-featured online store with user authentication, product catalog, and payment processing.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">MongoDB</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-[var(--knicks-orange)] hover:underline inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={aboutImage} 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Social Media Dashboard</h3>
                <p className="text-gray-300 mb-4">An analytics dashboard for monitoring social media performance across multiple platforms.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Chart.js</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">API Integration</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-[var(--knicks-orange)] hover:underline inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={aboutImage} 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">A collaborative task manager with real-time updates, user roles, and progress tracking.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Redux</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-[var(--knicks-orange)] hover:underline inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-[var(--knicks-blue)] text-white rounded-md font-medium hover:bg-[var(--knicks-orange)] transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Skill Category 1 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--knicks-orange)]">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  React/Next.js
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  HTML5/CSS3
                </li>
              </ul>
            </div>
            
            {/* Skill Category 2 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--knicks-orange)]">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Node.js/Express
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  MongoDB/Mongoose
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  RESTful APIs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Authentication/JWT
                </li>
              </ul>
            </div>
            
            {/* Skill Category 3 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--knicks-orange)]">Tools & DevOps</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Git/GitHub
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Docker
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Netlify/Vercel
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  VS Code
                </li>
              </ul>
            </div>
            
            {/* Skill Category 4 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--knicks-orange)]">Other Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  UI/UX Basics
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Testing (Jest)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--knicks-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Problem Solving
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors inline-block"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--knicks-blue)] to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities. Let's create something amazing together!
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-[var(--knicks-orange)] text-white rounded-md font-medium hover:bg-[var(--knicks-orange)]/80 transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;