import { motion } from "framer-motion";
import {
  HeroSection,
  TrustMarquee,
  ServicesSection,
  ShowreelSection,
  CaseStudiesSection,
  ProcessTimeline,
  TestimonialsSection,
  TeamSection,
  FinalCTA,
} from "../sections";
import { GradientBlobs } from "../components/ui/GradientBlobs";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {/* Background gradient blobs */}
      <GradientBlobs variant="hero" />
      
      <HeroSection />
      <TrustMarquee />
      <ServicesSection />
      <ShowreelSection />
      <CaseStudiesSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <TeamSection />
      <FinalCTA />
    </motion.div>
  );
};
