import { Header, Footer } from './';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow pt-32 md:pt-40">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;