'use client';
import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Social from '../components/Social';
import Email from '../components/Email';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <div id="root">
        <Nav />
        <Social />
        <Email />
        <main className="main" id="content">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
