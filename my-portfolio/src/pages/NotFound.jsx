import { Link } from 'react-router-dom';
import { Layout, Button } from '../components';
import useScrollTop from '../hooks/useScrollTop';

const NotFound = () => {
  useScrollTop();

  return (
    <Layout>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-[var(--knicks-blue)] mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex justify-center">
            <Link to="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;