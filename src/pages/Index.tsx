import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Percent, ArrowRightLeft, Layers, GraduationCap, Target, ArrowRight, CheckCircle2, Users, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const tools = [
  { to: "/cgpa-to-percentage", icon: Percent, title: "CGPA to Percentage Converter", desc: "Convert your CGPA to percentage using standard formulas for 10-point and 4-point scales. Essential for university applications." },
  { to: "/percentage-to-cgpa", icon: ArrowRightLeft, title: "Percentage to CGPA Converter", desc: "Quickly convert your percentage score back to CGPA on either grading scale used by your university." },
  { to: "/gpa-to-cgpa", icon: Layers, title: "GPA to CGPA Calculator", desc: "Aggregate multiple semester GPAs into a single cumulative CGPA with credit-hour weighting for accuracy." },
  { to: "/grade-to-gpa", icon: GraduationCap, title: "Grade to GPA Calculator", desc: "Look up the GPA equivalent of any letter grade with our comprehensive reference table." },
  { to: "/target-gpa", icon: Target, title: "Target GPA Calculator", desc: "Find out what GPA you need in remaining semesters to reach your dream CGPA target." },
];

const faqs = [
  { q: "What is a CGPA Calculator?", a: "A CGPA Calculator is a free online tool that helps students compute their Cumulative Grade Point Average. Our CGPA Calculator supports both 4-point and 10-point grading scales and provides instant, accurate results." },
  { q: "How does the CGPA Calculator convert CGPA to percentage?", a: "Our CGPA Calculator uses the standard formula: Percentage = CGPA × 9.5 for a 10-point scale. For a 4-point scale, the CGPA Calculator uses: Percentage = (CGPA / 4) × 100. For example, 8.5 CGPA × 9.5 = 80.75%." },
  { q: "What is the difference between GPA and CGPA?", a: "GPA (Grade Point Average) is for a single semester, while CGPA (Cumulative Grade Point Average) is the weighted average across all semesters. Use our CGPA Calculator to compute both accurately." },
  { q: "Is this CGPA Calculator accurate for my university?", a: "Our CGPA Calculator uses standard conversion formulas widely accepted across universities worldwide. However, some institutions may use slightly different methods. Always verify with your university's grading policy." },
  { q: "Can the CGPA Calculator help me plan my target GPA?", a: "Yes! The Target GPA feature in our CGPA Calculator lets you input your current CGPA, credits completed, total degree credits, and desired final CGPA to calculate the GPA you need going forward." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CGPA Calculator",
  "url": "https://cgpacalculator.com",
  "description": "Free online CGPA Calculator to convert CGPA to percentage, percentage to CGPA, calculate cumulative GPA, look up grade points, and plan your target GPA.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
};

const Index = () => {
  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Free Online <span className="text-primary">CGPA Calculator</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Use our free CGPA Calculator to instantly convert CGPA to percentage, calculate cumulative GPA, look up grade points, and plan your academic future — all in one place.
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <item.icon className="text-primary mb-2" size={28} />
              <span className="text-foreground font-semibold text-sm">{item.label}</span>
              <span className="text-muted-foreground text-xs">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calculator Tools Grid */}
      <section id="tools" className="py-16" aria-label="CGPA Calculator tools">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          CGPA Calculator Suite
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Our CGPA Calculator offers a comprehensive set of academic tools designed for students on any grading scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link to={tool.to} className="block glass-panel p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300 group h-full">
                <tool.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Use Calculator <ArrowRight size={14} />
                </span>
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-panel p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16" aria-label="About CGPA Calculator">
        <article className="glass-panel p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">CGPA Calculator — Your Complete Guide to CGPA, GPA & Percentage</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              Our <strong className="text-foreground">CGPA Calculator</strong> is the most trusted free online tool for students to compute their Cumulative Grade Point Average (CGPA). Whether you're using a 4.0-point scale common in the United States or a 10-point scale popular in India, this CGPA Calculator handles both with precision.
            </p>
            <p>
              <strong className="text-foreground">CGPA to Percentage with Our Calculator:</strong> The CGPA Calculator uses the widely accepted formula: <em>Percentage = CGPA × 9.5</em> for 10-point scales. For 4-point scales, the CGPA Calculator applies: <em>Percentage = (CGPA / 4) × 100</em>. A CGPA of 8.5 translates to 80.75% using our CGPA Calculator.
            </p>
            <p>
              <strong className="text-foreground">Why Use Our CGPA Calculator?</strong> Your GPA and CGPA are crucial for graduate school applications, scholarship eligibility, and job applications. Our CGPA Calculator helps you understand exactly where you stand academically and what you need to achieve your goals.
            </p>
            <p>
              <strong className="text-foreground">Credit-Weighted CGPA Calculator:</strong> When calculating cumulative GPA across multiple semesters, the CGPA Calculator accounts for credit hours — ensuring courses with more credits appropriately impact your overall CGPA. This credit-weighted calculation gives you the most accurate result.
            </p>
            <p>
              <strong className="text-foreground">Plan Your Academic Future:</strong> The Target GPA feature in our CGPA Calculator lets you determine exactly what GPA you need in remaining semesters to hit your desired cumulative CGPA. It's like having a personal academic advisor at your fingertips.
            </p>
          </div>
        </article>
      </section>

      {/* FAQ Section */}
      <section className="py-16" aria-label="CGPA Calculator FAQ">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">CGPA Calculator — Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass-panel p-6"
            >
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
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of students who use our free CGPA Calculator to track and plan their academic performance every day.
          </p>
          <Link to="/cgpa-to-percentage" className="glow-button px-8 py-3 inline-flex items-center gap-2">
            Open CGPA Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
