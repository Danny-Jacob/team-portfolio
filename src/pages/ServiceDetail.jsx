import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { 
  Palette, TrendingUp, Bot, Search, 
  Monitor, Share2, Video, Target 
} from "lucide-react";
import { services, caseStudies } from "../data";
import { GradientBlobs } from "../components/ui/GradientBlobs";
import { MagneticButton } from "../components/ui/MagneticButton";
import { GlassCard } from "../components/ui/GlassCard";

const iconMap = {
  Palette,
  TrendingUp,
  Bot,
  Search,
  Monitor,
  Share2,
  Video,
  Target,
};

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // 404 if service not found
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = iconMap[service.icon] || Monitor;

  // Pick a related case study (simple logic: use service index mod caseStudies length)
  const caseStudyIndex = (service.id - 1) % caseStudies.length;
  const relatedCaseStudy = caseStudies[caseStudyIndex];

  // Get other services for "More Services" section
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <motion.div
      className="w-full pt-24 relative"
      style={{ background: "#094550" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <GradientBlobs variant="minimal" />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, rgba(223,147,85,0.1) 0%, transparent 60%)`,
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm mb-12 group"
              style={{ color: "rgba(232,220,200,0.6)" }}
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="group-hover:text-[#DF9355] transition-colors">
                Back to Services
              </span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.gradient} shadow-2xl`}
              >
                <Icon size={36} className="text-white" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
              >
                {service.title}
              </motion.h1>

              {/* Short description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: "rgba(232,220,200,0.7)" }}
              >
                {service.longDescription}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MagneticButton
                  as={Link}
                  to="/contact"
                  variant="gold"
                  className="text-base px-8 py-4"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`}
                />
                <img
                  src={service.demoImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative blob */}
              <div
                className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-30 blur-3xl pointer-events-none`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" style={{ background: "#226A76" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "#DF9355" }}
            >
              What's Included
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              Everything you need to succeed
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.gradient}`}
                    >
                      <Check size={20} className="text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                      >
                        {feature}
                      </h3>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24" style={{ background: "#094550" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "#DF9355" }}
            >
              Success Story
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              See it in action
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-0 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={relatedCaseStudy.image}
                    alt={relatedCaseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span
                    className="text-sm uppercase tracking-widest mb-4"
                    style={{ color: "#DF9355" }}
                  >
                    {relatedCaseStudy.category}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                  >
                    {relatedCaseStudy.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "rgba(232,220,200,0.7)" }}
                  >
                    {relatedCaseStudy.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <p
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: "#DF9355", fontFamily: "Syne, sans-serif" }}
                      >
                        {relatedCaseStudy.metrics.revenue}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(232,220,200,0.5)" }}
                      >
                        Revenue Growth
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: "#DF9355", fontFamily: "Syne, sans-serif" }}
                      >
                        {relatedCaseStudy.metrics.leads}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(232,220,200,0.5)" }}
                      >
                        Leads Generated
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: "#DF9355", fontFamily: "Syne, sans-serif" }}
                      >
                        {relatedCaseStudy.metrics.roas}x
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(232,220,200,0.5)" }}
                      >
                        ROAS
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium group"
                    style={{ color: "#DF9355" }}
                  >
                    View all case studies
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-24 border-t border-white/5" style={{ background: "#094550" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-4"
                style={{ color: "#DF9355" }}
              >
                Explore More
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
              >
                Other services
              </h2>
            </div>
            <Link
              to="/#services"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium group"
              style={{ color: "#DF9355" }}
            >
              View all services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService, index) => {
              const OtherIcon = iconMap[otherService.icon] || Monitor;
              return (
                <motion.div
                  key={otherService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/services/${otherService.slug}`} className="block group">
                    <GlassCard className="p-8 h-full">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${otherService.gradient} shadow-lg`}
                      >
                        <OtherIcon size={24} className="text-white" />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3 group-hover:text-[#DF9355] transition-colors"
                        style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                      >
                        {otherService.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(232,220,200,0.6)" }}
                      >
                        {otherService.description}
                      </p>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "#DF9355" }}
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: "#226A76" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              Ready to transform your{" "}
              <span
                className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
              >
                {service.title.toLowerCase()}
              </span>
              ?
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(232,220,200,0.7)" }}
            >
              Let's discuss how we can help you achieve your goals. Book a free
              strategy call with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                as={Link}
                to="/contact"
                variant="gold"
                className="text-base px-10 py-5"
              >
                Book a Strategy Call
                <ArrowRight size={18} className="ml-2" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/projects"
                variant="outline"
                className="text-base px-10 py-5"
              >
                View Our Work
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
