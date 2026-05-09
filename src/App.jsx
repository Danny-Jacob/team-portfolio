import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./hooks/useTheme";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { useLenis } from "./hooks/useLenis";

// UI Components
import { CustomCursor } from "./components/ui/CustomCursor";
import { Preloader } from "./components/ui/Preloader";
import { NoiseOverlay } from "./components/ui/NoiseOverlay";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use both window.scrollTo and Lenis scroll for compatibility
    window.scrollTo(0, 0);
    
    // Also scroll the Lenis instance if it exists
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

// Animated Routes wrapper
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppInner() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        {/* Preloader */}
        <Preloader onComplete={() => setIsLoading(false)} />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Noise overlay for premium feel */}
        <NoiseOverlay opacity={0.03} />

        <div 
          className="flex flex-col min-h-screen overflow-x-hidden" 
          style={{ 
            background: "#030e11", 
            color: "#e8dcc8",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <AppInner />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
