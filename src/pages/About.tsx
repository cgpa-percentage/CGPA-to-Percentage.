import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">About Us</h1>
      <p className="text-lg text-muted-foreground mb-8">Learn more about CGPA Calculator and our mission to help students succeed.</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">CGPA Calculator</strong> is a free online platform designed to help students worldwide with their academic performance calculations. We understand that navigating different grading systems can be confusing, and our tools aim to simplify that process.
        </p>
        <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
        <p>
          Our mission is to provide accurate, easy-to-use, and completely free academic calculators to students everywhere. Whether you're in high school planning for college, a university student tracking your GPA, or a graduate student applying for further studies, our tools are designed with you in mind.
        </p>
        <h2 className="text-xl font-bold text-foreground">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>CGPA to Percentage Converter (10-point and 4-point scales)</li>
          <li>Percentage to CGPA Converter</li>
          <li>Credit-weighted GPA to CGPA Calculator</li>
          <li>Letter Grade to GPA Reference</li>
          <li>Target GPA Calculator for academic planning</li>
        </ul>
        <h2 className="text-xl font-bold text-foreground">Accuracy & Reliability</h2>
        <p>
          Our calculators use standard, widely-accepted formulas for GPA and CGPA conversions. While our tools are designed to give accurate results, we always recommend verifying with your institution's specific grading policy, as conversion methods can vary between universities.
        </p>
        <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you. Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> to get in touch.
        </p>
      </div>
    </article>
  </Layout>
);

export default About;
