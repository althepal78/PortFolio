import { Layout } from '../components';
import useScrollTop from '../hooks/useScrollTop';
// Import the hero image
import aboutImage from '../assets/images/about.jpg';

const About = () => {
  useScrollTop();

  return (
    <Layout>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4 text-[var(--knicks-blue)]">Albert Cardona</h2>
              <h3 className="text-xl mb-4">Web Developer & Knicks Fan</h3>
              
              <p className="mb-4">
                I'm a passionate web developer based in Florida, specializing in creating responsive and user-friendly web applications. With experience in both front-end and back-end technologies, I enjoy bringing projects to life from concept to deployment.
              </p>
              
              <p className="mb-6">
                When I'm not coding, you'll find me watching Knicks games, exploring new technologies, or expanding my programming knowledge.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'Tailwind CSS', 'Git'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                <p>
                  My web development journey started with a curiosity about how websites work. That curiosity turned into a passion and eventually a career. I'm constantly learning and improving my skills to build better, more efficient web applications.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--knicks-orange)]">
                <img 
                  src={aboutImage}
                  alt="Albert Cardona" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300?text=Albert+Cardona';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;