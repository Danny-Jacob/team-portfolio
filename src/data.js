import project1Img from "./assets/images/Screenshot 2026-03-26 212334.png";
import project2Img from "./assets/images/Screenshot 2026-03-26 212418.png";
import project3Img from "./assets/images/Screenshot 2026-03-26 212530.png";
import project4Img from "./assets/images/Screenshot 2026-03-26 212622.png";
import project5Img from "./assets/images/787shots_so.png";
import project6Img from "./assets/images/876shots_so.png";

export const portfolioProjects = [
  {
    id: 1,
    title: "Mint Restaurant",
    category: "UI/UX Design",
    description: "A sustainability tracking application designed to help users monitor and reduce their daily carbon footprint through intuitive data visualization.",
    image: project1Img,
    behanceUrl: "https://www.behance.net/gallery/139252347/Mint-Restaurant-Branding",
    liveUrl: null
  },
  {
    id: 2,
    title: "Ecohold",
    category: "Full Stack",
    description: "A secure, high-performance financial dashboard for a global investment firm, handling real-time market data and secure client portals.",
    image: project2Img,
    behanceUrl: "https://www.behance.net/gallery/211200369/Ecohold-Logo-Presentation",
    liveUrl: null
  },
  {
    id: 3,
    title: "Keystone School",
    category: "UI/UX Design",
    description: "A sleek, dark-mode focused landing page and brand identity system for an innovative AI startup.",
    image: project3Img,
    behanceUrl: "https://www.behance.net/gallery/211198823/Keystone-School-Brand-Guidelines",
    liveUrl: null
  },
  {
    id: 4,
    title: "Gajraj",
    category: "UI/UX Design",
    description: "A modern, high-conversion e-commerce platform with seamless headless CMS integration and Framer Motion micro-interactions.",
    image: project4Img,
    behanceUrl: "https://www.behance.net/gallery/211198823/Keystone-School-Brand-Guidelines",
    liveUrl: null
  },
  {
    id: 5,
    title: "Mythosbox",
    category: "Live Website",
    description: "Finally, a way to teach culture without feeling overwhelmed.",
    image: project5Img,
    behanceUrl: null,
    liveUrl: "https://mythosbox.com"
  },
  {
    id: 6,
    title: "Tanisi Inc",
    category: "Live Website",
    description: "Tanisi Inc. is a leading provider of high-quality industrial solutions, offering a comprehensive range of products and services to meet the diverse needs of its customers.",
    image: project6Img,
    behanceUrl: null,
    liveUrl: "https://www.tanisiinc.com"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Elena Rostova",
    title: "Lead UI/UX Designer",
    bio: "Elena crafts stunning digital experiences with a deep passion for human-centered design and micro-interactions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Senior Technical Lead",
    bio: "Marcus ensures pixel-perfect execution, translating complex designs into robust, bleeding-edge front-end architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    title: "Creative Director",
    bio: "Sarah bridges the gap between raw artistic vision and strategic business goals, leading our creative campaigns.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export const testimonials = [
  {
    id: 1,
    clientName: "David Harper",
    company: "FinServe Global",
    reviewText: "The team completely transformed our digital presence. They didn't just build a website; they crafted a premium digital experience that has dramatically increased our client engagement."
  },
  {
    id: 2,
    clientName: "Sophia Martinez",
    company: "Lumina Edge",
    reviewText: "Working with them was a revelation. Their attention to detail, specifically the subtle animations and responsive design, helped our startup stand out instantly in a crowded market."
  },
  {
    id: 3,
    clientName: "James O'Connor",
    company: "Nova Retail",
    reviewText: "Absolutely phenomenal execution. The e-commerce site they delivered was blazing fast, beautiful, and the entire process from design to launch was incredibly smooth."
  }
];

// Services data with icons (lucide-react icon names)
export const services = [
  {
    id: 1,
    title: "Branding",
    description: "Craft distinctive brand identities that resonate with your audience and stand out in crowded markets.",
    icon: "Palette",
    gradient: "from-[#DF9355] to-[#D27321]",
  },
  {
    id: 2,
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize ROI across Meta, Google, and programmatic channels.",
    icon: "TrendingUp",
    gradient: "from-[#226A76] to-[#42776F]",
  },
  {
    id: 3,
    title: "AI Automation",
    description: "Custom AI workflows and chatbots that streamline operations and enhance customer experience.",
    icon: "Bot",
    gradient: "from-[#D27321] to-[#A4492A]",
  },
  {
    id: 4,
    title: "SEO Strategy",
    description: "Technical and content SEO that drives organic visibility and sustainable traffic growth.",
    icon: "Search",
    gradient: "from-[#42776F] to-[#094550]",
  },
  {
    id: 5,
    title: "Web Design",
    description: "Immersive, award-worthy websites built with cutting-edge technologies and cinematic interactions.",
    icon: "Monitor",
    gradient: "from-[#DF9355] to-[#A4492A]",
  },
  {
    id: 6,
    title: "Social Media",
    description: "Strategic content creation and community management that builds engaged audiences.",
    icon: "Share2",
    gradient: "from-[#226A76] to-[#094550]",
  },
  {
    id: 7,
    title: "Content Production",
    description: "Premium video, photography, and motion design that captures attention and tells your story.",
    icon: "Video",
    gradient: "from-[#D27321] to-[#DF9355]",
  },
  {
    id: 8,
    title: "Funnel Optimization",
    description: "Conversion-focused landing pages and sales funnels that turn visitors into customers.",
    icon: "Target",
    gradient: "from-[#094550] to-[#226A76]",
  },
];

// Trust/client logos (using text placeholders - replace with actual logos)
export const trustLogos = [
  "Tata Digital",
  "Reliance Retail",
  "Swiggy",
  "Zerodha",
  "BYJU'S",
  "Razorpay",
  "Dream11",
  "Groww",
  "upGrad",
  "Lenskart",
];

// Process steps
export const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    description: "We deep-dive into your business, audience, and competitors. Research-backed insights form the foundation of every strategy.",
  },
  {
    id: 2,
    number: "02",
    title: "Strategize",
    description: "From brand positioning to channel selection, we architect a comprehensive roadmap tailored to your growth objectives.",
  },
  {
    id: 3,
    number: "03",
    title: "Create",
    description: "Our creative team brings the strategy to life through stunning visuals, compelling copy, and immersive digital experiences.",
  },
  {
    id: 4,
    number: "04",
    title: "Scale",
    description: "We launch, measure, optimize, and scale. Continuous iteration ensures sustained growth and market dominance.",
  },
];

// Case studies with metrics (using existing portfolio projects with added metrics)
export const caseStudies = [
  {
    id: 1,
    title: "Mint Restaurant",
    category: "Brand Identity",
    image: project1Img,
    metrics: { revenue: "340%", leads: "2.4x", roas: "5.8" },
    description: "Complete brand overhaul and digital strategy for Mumbai's premier fine-dining chain.",
  },
  {
    id: 2,
    title: "Ecohold",
    category: "Performance Marketing",
    image: project2Img,
    metrics: { revenue: "₹4.2Cr", leads: "18K+", roas: "7.2" },
    description: "Full-funnel performance campaigns for sustainable investment platform.",
  },
  {
    id: 3,
    title: "Keystone School",
    category: "Web + SEO",
    image: project3Img,
    metrics: { revenue: "890%", leads: "12K+", roas: "4.5" },
    description: "Award-winning website and organic growth strategy for EdTech leader.",
  },
  {
    id: 4,
    title: "Mythosbox",
    category: "E-commerce",
    image: project5Img,
    metrics: { revenue: "₹1.8Cr", leads: "45K+", roas: "6.1" },
    description: "End-to-end e-commerce experience for cultural education startup.",
  },
];

// Hero stats
export const heroStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "₹80Cr+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Industry Awards" },
];
