import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import LazyLoad from "./components/LazyLoad";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-1 w-full">
          <Hero />
          <LazyLoad threshold={0.1} rootMargin="100px" animation="fade-up" duration={1000}>
            <About />
          </LazyLoad>
          <LazyLoad threshold={0.1} rootMargin="100px" animation="fade-left" duration={1000}>
            <Skills />
          </LazyLoad>
          <LazyLoad threshold={0.1} rootMargin="100px" animation="fade-right" duration={1000}>
            <Projects />
          </LazyLoad>
          <LazyLoad threshold={0.1} rootMargin="100px" animation="fade-up" duration={1000}>
            <Contact />
          </LazyLoad>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
