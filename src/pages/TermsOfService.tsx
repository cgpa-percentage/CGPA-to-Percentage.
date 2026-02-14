import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => (
  <Layout>
    <SEOHead
      title="Terms of Service — CGPA Calculator"
      description="Terms of Service for CGPA Calculator. Read our terms and conditions for using our free online CGPA, GPA, and percentage calculators."
      canonical="https://cgpacalculator.com/terms-of-service"
    />
    <article className="max-w-3xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Terms of Service</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section><h2 className="text-xl font-bold text-foreground mb-3">Agreement to Terms</h2><p>By using CGPA Calculator, you agree to these Terms of Service.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Use of Service</h2><p>Our CGPA Calculator is for informational and educational purposes only. Results are approximations and should be verified with your institution.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2><p>CGPA Calculator content, features, and functionality are protected by international intellectual property laws.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Disclaimer of Warranties</h2><p>The CGPA Calculator is provided "AS IS." We make no warranties regarding accuracy for your specific institution's grading system.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2><p>CGPA Calculator shall not be liable for indirect, incidental, or consequential damages from use of the service.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Third-Party Advertising</h2><p>Our site may contain third-party advertisements. We are not responsible for third-party content.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Changes to Terms</h2><p>We may modify these Terms at any time. Continued use constitutes acceptance.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2><p>Questions? Email contact@cgpacalculator.com.</p></section>
      </div>
    </article>
  </Layout>
);

export default TermsOfService;
