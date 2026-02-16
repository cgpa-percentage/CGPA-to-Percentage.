import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Percent, ArrowRightLeft, Layers, GraduationCap, Target, ArrowRight, CheckCircle2, Users, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import CgpaToPercentageCalc from "@/components/calculators/CgpaToPercentage";

const tools = [
  { to: "/cgpa-to-percentage", icon: Percent, title: "CGPA to Percentage Converter", desc: "Convert your CGPA to percentage using standard formulas for 10-point and 4-point scales. Essential for university applications." },
  { to: "/percentage-to-cgpa", icon: ArrowRightLeft, title: "Percentage to CGPA Converter", desc: "Quickly convert your percentage score back to CGPA on either grading scale used by your university." },
  { to: "/gpa-to-cgpa", icon: Layers, title: "GPA to CGPA Calculator", desc: "Aggregate multiple semester GPAs into a single cumulative CGPA with credit-hour weighting for accuracy." },
  { to: "/grade-to-gpa", icon: GraduationCap, title: "Grade to GPA Calculator", desc: "Look up the GPA equivalent of any letter grade with our comprehensive reference table." },
  { to: "/target-gpa", icon: Target, title: "Target GPA Calculator", desc: "Find out what GPA you need in remaining semesters to reach your dream CGPA target." },
];

const faqs = [
  { q: "How to convert CGPA to Percentage?", a: "To convert CGPA to percentage on a 10-point scale, multiply your CGPA by 9.5. For example, 8.5 CGPA × 9.5 = 80.75%. On a 4-point scale, use: (CGPA / 4) × 100. Our CGPA to Percentage converter does this instantly." },
  { q: "What is the CGPA to Percentage formula?", a: "The standard CGPA to Percentage formula approved by UGC is: Percentage = CGPA × 9.5 (for 10-point scale). For the 4-point scale: Percentage = (CGPA / 4) × 100. Use our free CGPA to Percentage calculator for instant results." },
  { q: "What is a CGPA Calculator?", a: "A CGPA Calculator is a free online tool that helps students convert CGPA to percentage, calculate cumulative GPA, and plan their academic goals. Our CGPA Calculator supports both 4-point and 10-point grading scales." },
  { q: "What is the difference between GPA and CGPA?", a: "GPA (Grade Point Average) is for a single semester, while CGPA (Cumulative Grade Point Average) is the weighted average across all semesters. Use our CGPA to Percentage converter to translate either into percentage." },
  { q: "Is the CGPA to Percentage conversion accurate for my university?", a: "Our CGPA to Percentage converter uses standard formulas (CGPA × 9.5) widely accepted across universities worldwide. However, some institutions may use slightly different multipliers. Always verify with your university's grading policy." },
  { q: "Can I plan my target GPA using this CGPA Calculator?", a: "Yes! The Target GPA feature lets you input your current CGPA, credits completed, total degree credits, and desired final CGPA to calculate the GPA you need. You can then convert the result to percentage using our CGPA to Percentage tool." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CGPA Calculator",
  "url": "https://cgpa-percentage.github.io",
  "description": "Free online CGPA Calculator to convert CGPA to percentage, percentage to CGPA, calculate cumulative GPA, look up grade points, and plan your target GPA.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "45", "bestRating": "5", "worstRating": "1" },
};

const combinedSchema = [faqSchema, webAppSchema];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="CGPA Calculator — Free CGPA to Percentage Converter Online"
        description="Free <a 
  href="https://cgpafullform.com/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  CGPA to Percentage
</a> converter & CGPA Calculator. Convert CGPA to percentage instantly using standard formulas for 10-point & 4-point scales. 100% free, no signup."
        canonical="https://cgpa-percentage.github.io/"
        jsonLd={combinedSchema}
      />

      {/* Hero */}
      <section className="text-center py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Free <span className="text-primary">CGPA to Percentage</span> Converter & CGPA Calculator
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Convert CGPA to percentage instantly with our free CGPA Calculator. Supports 10-point & 4-point grading scales. Also calculate cumulative GPA, look up grade points, and plan your target GPA — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/cgpa-to-percentage" className="glow-button px-8 py-3 flex items-center gap-2">
              Start CGPA Calculator <ArrowRight size={16} />
            </Link>
            <a href="#tools" className="px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted/50 transition-all">
              Explore All Tools
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-8" aria-label="Trust indicators">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { icon: Users, label: "10,000+ Students", sub: "Trust our CGPA Calculator" },
            { icon: Zap, label: "Instant Results", sub: "No waiting required" },
            { icon: Shield, label: "100% Free", sub: "No signup needed" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex flex-col items-center">
              <item.icon className="text-primary mb-2" size={28} />
              <span className="text-foreground font-semibold text-sm">{item.label}</span>
              <span className="text-muted-foreground text-xs">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CGPA to Percentage Calculator */}
      <section className="py-16" aria-label="CGPA to Percentage Calculator">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">CGPA to Percentage Calculator</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">Use our free CGPA Calculator to instantly convert your CGPA to percentage on 10-point or 4-point scales.</p>
        <div className="max-w-xl mx-auto">
          <CgpaToPercentageCalc />
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16" aria-label="CGPA Calculator tools">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">CGPA Calculator Suite</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Our CGPA Calculator offers a comprehensive set of academic tools designed for students on any grading scale.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div key={tool.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
              <Link to={tool.to} className="block glass-panel p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300 group h-full">
                <tool.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">Use Calculator <ArrowRight size={14} /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" aria-label="How to use CGPA Calculator">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">How Our CGPA Calculator Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Choose a Calculator", desc: "Select from our suite of 5 specialized CGPA Calculator tools." },
            { step: "2", title: "Enter Your Data", desc: "Input your grades, GPA, CGPA, or percentage values into the calculator." },
            { step: "3", title: "Get Instant Results", desc: "The CGPA Calculator displays results immediately with clear visuals." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="glass-panel p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16" aria-label="About CGPA Calculator">
        <article className="glass-panel p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">CGPA to Percentage — Complete Conversion Guide & CGPA Calculator</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>Our <strong className="text-foreground">CGPA to Percentage</strong> converter is the most trusted free online tool for students. Whether you're using a 4.0-point scale common in the United States or a 10-point scale popular in India, our CGPA Calculator converts CGPA to percentage with precision.</p>
            <p><strong className="text-foreground">CGPA to Percentage Formula (10-Point Scale):</strong> The UGC-approved formula is: <em>Percentage = CGPA × 9.5</em>. For example, 8.5 CGPA to percentage = 8.5 × 9.5 = 80.75%. Our CGPA to Percentage calculator applies this formula instantly.</p>
            <p><strong className="text-foreground">CGPA to Percentage Formula (4-Point Scale):</strong> For the US grading system: <em>Percentage = (CGPA / 4) × 100</em>. A 3.5 CGPA to percentage = (3.5 / 4) × 100 = 87.5%.</p>
            <p><strong className="text-foreground">Why Convert CGPA to Percentage?</strong> Many universities, employers, and scholarship programs require percentage scores. Our CGPA to Percentage converter helps you instantly translate your CGPA for graduate school applications, job applications, and eligibility checks.</p>
            <p><strong className="text-foreground">CGPA to Percentage Conversion Table:</strong> Common conversions — 7.0 CGPA = 66.5%, 8.0 CGPA = 76%, 9.0 CGPA = 85.5%, 9.5 CGPA = 90.25%, 10 CGPA = 95%. Use our CGPA Calculator for exact results.</p>
            <p><strong className="text-foreground">Beyond CGPA to Percentage:</strong> Our CGPA Calculator also offers percentage to CGPA conversion, GPA to CGPA aggregation, grade lookup, and target GPA planning — everything you need in one place.</p>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section className="py-16" aria-label="CGPA Calculator FAQ">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">CGPA to Percentage — Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="glass-panel p-6">
              <h3 className="font-semibold text-foreground flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 ml-6 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" aria-label="Call to action">
        <div className="glass-panel p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Using the CGPA Calculator Now</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join thousands of students who use our free CGPA Calculator to track and plan their academic performance every day.</p>
          <Link to="/cgpa-to-percentage" className="glow-button px-8 py-3 inline-flex items-center gap-2">Open CGPA Calculator <ArrowRight size={16} /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
