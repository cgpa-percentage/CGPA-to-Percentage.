import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Percent, ArrowRightLeft, Layers, GraduationCap, Target, ArrowRight, CheckCircle2, Users, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const tools = [
  { to: "/cgpa-to-percentage", icon: Percent, title: "CGPA to Percentage", desc: "Convert your CGPA to percentage using standard formulas for 10-point and 4-point scales." },
  { to: "/percentage-to-cgpa", icon: ArrowRightLeft, title: "Percentage to CGPA", desc: "Quickly convert your percentage score back to CGPA on either grading scale." },
  { to: "/gpa-to-cgpa", icon: Layers, title: "GPA to CGPA", desc: "Aggregate multiple semester GPAs into a single cumulative GPA with credit weighting." },
  { to: "/grade-to-gpa", icon: GraduationCap, title: "Grade to GPA", desc: "Look up the GPA equivalent of any letter grade with our comprehensive reference table." },
  { to: "/target-gpa", icon: Target, title: "Target GPA Calculator", desc: "Find out what GPA you need in remaining semesters to reach your dream CGPA." },
];

const faqs = [
  { q: "What is CGPA?", a: "CGPA stands for Cumulative Grade Point Average. It is the average of grade points obtained across all semesters or terms in an academic program. Most universities use either a 4-point or 10-point scale to calculate CGPA." },
  { q: "How is CGPA converted to percentage?", a: "For a 10-point scale, multiply CGPA by 9.5 to get the percentage (e.g., 8.5 CGPA × 9.5 = 80.75%). For a 4-point scale, divide CGPA by 4 and multiply by 100." },
  { q: "What is the difference between GPA and CGPA?", a: "GPA (Grade Point Average) refers to the grade point average for a single semester, while CGPA (Cumulative Grade Point Average) is the average across all semesters of your academic career." },
  { q: "Is this calculator accurate for my university?", a: "Our calculators use standard conversion formulas widely accepted across universities. However, some institutions may use slightly different conversion methods. Always check your university's specific grading policy." },
  { q: "Can I calculate my target GPA?", a: "Yes! Our Target GPA Calculator lets you input your current CGPA, credits completed, total degree credits, and desired final CGPA. It then calculates the GPA you need in your remaining semesters." },
];

const Index = () => {
  return (
    <Layout>
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
            Instantly convert CGPA to percentage, calculate cumulative GPA, look up grade points, and plan your academic future — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/cgpa-to-percentage" className="glow-button px-8 py-3 flex items-center gap-2">
              Start Calculating <ArrowRight size={16} />
            </Link>
            <a href="#tools" className="px-8 py-3 rounded-xl border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-all">
              Explore All Tools
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { icon: Users, label: "10,000+ Students", sub: "Trust our tools" },
            { icon: Zap, label: "Instant Results", sub: "No waiting" },
            { icon: Shield, label: "100% Free", sub: "No signup required" },
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
      <section id="tools" className="py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          Our Calculator Suite
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Choose from our comprehensive set of academic calculators designed for students on any grading scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link to={tool.to} className="block glass-panel p-8 hover:border-primary/30 transition-all duration-300 group h-full">
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
      <section className="py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Choose a Calculator", desc: "Select from our suite of 5 specialized academic calculators." },
            { step: "2", title: "Enter Your Data", desc: "Input your grades, GPA, CGPA, or percentage values." },
            { step: "3", title: "Get Instant Results", desc: "See your results immediately with clear visual displays." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-panel p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="glass-panel p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Understanding CGPA, GPA, and Percentage Conversions</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              The Cumulative Grade Point Average (CGPA) is a standardized way of measuring academic achievement used by universities and colleges worldwide. Whether you're on a 4.0-point scale common in the United States and many international universities, or a 10-point scale popular in India and other South Asian countries, understanding how to convert between CGPA and percentage is essential for academic planning.
            </p>
            <p>
              <strong className="text-foreground">CGPA to Percentage Conversion:</strong> The most widely accepted formula for converting CGPA to percentage on a 10-point scale is: <em>Percentage = CGPA × 9.5</em>. For example, a CGPA of 8.5 translates to 80.75%. On a 4-point scale, the conversion is: <em>Percentage = (CGPA / 4) × 100</em>.
            </p>
            <p>
              <strong className="text-foreground">Why GPA Matters:</strong> Your GPA is crucial for graduate school applications, scholarship eligibility, job applications, and academic standing. Many employers and graduate programs have minimum GPA requirements. Knowing exactly where you stand and what you need to achieve can help you plan your academic strategy effectively.
            </p>
            <p>
              <strong className="text-foreground">Credit-Weighted CGPA:</strong> When calculating cumulative GPA across multiple semesters, it's important to account for the number of credit hours each course carries. A higher-credit course has more impact on your overall CGPA than a lower-credit one. Our GPA to CGPA calculator handles this credit-weighted calculation automatically.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">Frequently Asked Questions</h2>
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
      <section className="py-16 text-center">
        <div className="glass-panel p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Calculate Your GPA?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of students who use our free calculators to track and plan their academic performance.
          </p>
          <Link to="/cgpa-to-percentage" className="glow-button px-8 py-3 inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
