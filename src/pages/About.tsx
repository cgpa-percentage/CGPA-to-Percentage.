import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const About = () => (
  <Layout>
    <SEOHead
      title="About Us — CGPA Calculator"
      description="Learn about CGPA Calculator, our mission to provide free, accurate academic calculators for students worldwide. CGPA, GPA, and percentage tools."
      canonical="https://cgpa-percentage.github.io/about"
    />
    <article className="max-w-3xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">About</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">About CGPA Calculator</h1>
      <p className="text-lg text-muted-foreground mb-8">Learn about our mission to help students succeed with free academic calculators.</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed">
        <p><a href="https://cgpafullform.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>CGPA Calculator</strong></a> is a free online platform designed to help students worldwide with academic performance calculations. We simplify navigating different grading systems.</p>
        <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
        <p>Our mission is to provide accurate, easy-to-use, and completely free academic calculators. Whether you're in high school, university, or graduate school, our CGPA Calculator tools are designed for you.</p>
        <h2 className="text-xl font-bold text-foreground">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><a href="https://cgpafullform.com/cgpa-to-percentage" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CGPA to Percentage Converter</a> (10-point and 4-point scales)</li>
          <li>Percentage to CGPA Converter</li>
          <li>Credit-weighted GPA to CGPA Calculator</li>
          <li>Letter Grade to GPA Reference</li>
          <li>Target GPA Calculator for academic planning</li>
        </ul>
        <h2 className="text-xl font-bold text-foreground">Accuracy & Reliability</h2>
        <p>Our CGPA Calculator uses standard, widely-accepted formulas. We always recommend verifying with your institution's specific grading policy.</p>
        <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
        <p>Have questions? Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> to get in touch.</p>
      </div>
    </article>
  </Layout>
);

export default About;
