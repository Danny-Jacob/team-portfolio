import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
