import { Layout, ContactForm, SocialLinks } from '../components';
import useScrollTop from '../hooks/useScrollTop';

const Contact = () => {
  useScrollTop();

  return (
    <Layout>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--knicks-blue)]">Contact Information</h2>
              <p className="mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Email me at:</h3>
                <a 
                  href="mailto:althepal78@gmail.com" 
                  className="text-[var(--knicks-orange)] hover:underline"
                >
                  althepal78@gmail.com
                </a>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Based in:</h3>
                <p>Florida, United States</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Connect with me:</h3>
                <SocialLinks className="text-[var(--knicks-blue)]" />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--knicks-blue)]">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;