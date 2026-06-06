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
    name: "Srujan Kona",
    title: "Co-Founder & Technical Director",
    bio: "Srujan leads strategy, technology, and client partnerships at KAANTHA. With a passion for building digital experiences that blend creativity with performance, he works closely with brands to transform ideas into impactful products, campaigns, and experiences. His hands-on approach ensures every project remains aligned with both business goals and creative excellence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    isCofounder: true
  },
  {
    id: 2,
    name: "Kranti",
    title: "Co-Founder & Creative Director",
    bio: "Kranti leads the creative vision behind KAANTHA. From brand identities and user experiences to visual storytelling and design systems, she focuses on creating work that is both memorable and meaningful. Her belief that great design should evoke emotion while solving real business problems shapes every project that leaves the studio.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    isCofounder: true
  },
  {
    id: 3,
    name: "Naveen",
    title: "Marketing Lead",
    bio: "With over a decade of experience in digital marketing, Naveen specializes in campaign strategy, audience growth, and performance-driven marketing. He helps brands connect with the right audience through data-backed decisions and compelling storytelling.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    isCofounder: false
  },
  {
    id: 4,
    name: "Danny",
    title: "Lead Developer",
    bio: "Danny brings creative ideas to life through clean code and modern web technologies. His focus on performance, scalability, and user experience ensures every digital product meets the highest standards.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    isCofounder: false
  },
  {
    id: 5,
    name: "Content Strategist",
    title: "Content Strategist",
    bio: "Responsible for shaping brand narratives, content strategies, and messaging that resonate with audiences across digital platforms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    isCofounder: false
  },
  {
    id: 6,
    name: "Video Editor & Motion Designer",
    title: "Video Editor & Motion Designer",
    bio: "Creates engaging visual content, motion graphics, and social-first creative assets that help brands stand out in competitive markets.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c006ae30?auto=format&fit=crop&q=80&w=400",
    isCofounder: false
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
    slug: "branding",
    description: "Craft distinctive brand identities that resonate with your audience and stand out in crowded markets.",
    longDescription: "We create comprehensive brand identities that tell your story and connect with your target audience. From logo design and visual systems to brand guidelines and messaging frameworks, we build brands that leave lasting impressions and drive business growth.",
    icon: "Palette",
    gradient: "from-[#DF9355] to-[#D27321]",
    demoImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Logo & Visual Identity Design",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Style Guides",
      "Packaging & Collateral Design",
      "Brand Voice & Messaging"
    ]
  },
  {
    id: 2,
    title: "Performance Marketing",
    slug: "performance-marketing",
    description: "Data-driven campaigns that maximize ROI across Meta, Google, and programmatic channels.",
    longDescription: "Our performance marketing team leverages advanced analytics and AI-powered optimization to deliver measurable results. We manage end-to-end campaigns across all major platforms, continuously testing and refining to maximize your return on ad spend.",
    icon: "TrendingUp",
    gradient: "from-[#226A76] to-[#42776F]",
    demoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Meta & Google Ads Management",
      "Programmatic Advertising",
      "Conversion Rate Optimization",
      "Attribution & Analytics",
      "A/B Testing & Experimentation"
    ]
  },
  {
    id: 3,
    title: "AI Automation",
    slug: "ai-automation",
    description: "Custom AI workflows and chatbots that streamline operations and enhance customer experience.",
    longDescription: "Harness the power of artificial intelligence to automate repetitive tasks, enhance customer interactions, and unlock new insights from your data. We build custom AI solutions tailored to your specific business needs and workflows.",
    icon: "Bot",
    gradient: "from-[#D27321] to-[#A4492A]",
    demoImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Custom Chatbot Development",
      "Workflow Automation",
      "AI-Powered Analytics",
      "Natural Language Processing",
      "Predictive Modeling"
    ]
  },
  {
    id: 4,
    title: "SEO Strategy",
    slug: "seo-strategy",
    description: "Technical and content SEO that drives organic visibility and sustainable traffic growth.",
    longDescription: "Dominate search results with our comprehensive SEO strategies. We combine technical excellence with compelling content to build sustainable organic traffic that compounds over time, reducing your dependence on paid acquisition.",
    icon: "Search",
    gradient: "from-[#42776F] to-[#094550]",
    demoImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "Content Optimization",
      "Link Building & Outreach",
      "Local SEO & Google Business"
    ]
  },
  {
    id: 5,
    title: "Web Design",
    slug: "web-design",
    description: "Immersive, award-worthy websites built with cutting-edge technologies and cinematic interactions.",
    longDescription: "We design and develop stunning websites that captivate visitors and convert them into customers. Using the latest technologies and interaction design principles, we create digital experiences that set you apart from the competition.",
    icon: "Monitor",
    gradient: "from-[#DF9355] to-[#A4492A]",
    demoImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
    features: [
      "UI/UX Design & Prototyping",
      "Responsive Web Development",
      "Micro-interactions & Animation",
      "CMS Integration",
      "Performance Optimization"
    ]
  },
  {
    id: 6,
    title: "Social Media",
    slug: "social-media",
    description: "Strategic content creation and community management that builds engaged audiences.",
    longDescription: "Build a loyal following and turn social media into a growth engine. We handle everything from strategy and content creation to community management and paid social, ensuring your brand shows up consistently across all platforms.",
    icon: "Share2",
    gradient: "from-[#226A76] to-[#094550]",
    demoImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Social Media Strategy",
      "Content Calendar Planning",
      "Community Management",
      "Influencer Partnerships",
      "Social Listening & Analytics"
    ]
  },
  {
    id: 7,
    title: "Content Production",
    slug: "content-production",
    description: "Premium video, photography, and motion design that captures attention and tells your story.",
    longDescription: "Create scroll-stopping content that captures attention and drives engagement. From product photography and brand videos to motion graphics and podcast production, we bring your brand to life across every medium.",
    icon: "Video",
    gradient: "from-[#D27321] to-[#DF9355]",
    demoImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Video Production & Editing",
      "Product & Lifestyle Photography",
      "Motion Graphics & Animation",
      "Podcast Production",
      "Live Streaming & Events"
    ]
  },
  {
    id: 8,
    title: "Funnel Optimization",
    slug: "funnel-optimization",
    description: "Conversion-focused landing pages and sales funnels that turn visitors into customers.",
    longDescription: "Maximize every visitor with high-converting funnels engineered for results. We design, build, and optimize complete sales funnels that guide prospects from awareness to action, increasing your conversion rates at every stage.",
    icon: "Target",
    gradient: "from-[#094550] to-[#226A76]",
    demoImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Landing Page Design",
      "Sales Funnel Architecture",
      "Email Sequence Automation",
      "Checkout Optimization",
      "Retargeting Campaigns"
    ]
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
    description: "We listen, research, and understand your business, audience, and market.",
  },
  {
    id: 2,
    number: "02",
    title: "Define",
    description: "Clear strategy, distinctive positioning, and a roadmap built for real growth.",
  },
  {
    id: 3,
    number: "03",
    title: "Create",
    description: "Beautiful, functional design and content that connects with people.",
  },
  {
    id: 4,
    number: "04",
    title: "Grow",
    description: "Launch, measure, optimize, and scale. Growth that matters.",
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
  { value: "20+", label: "Brands Worked With" },
  { value: "5+", label: "Years of Combined Leadership" },
  { value: "", label: "Founder-Led Collaboration" },
  { value: "", label: "End-to-End Creative & Growth Solutions" },
];
