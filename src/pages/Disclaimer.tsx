import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Disclaimer = () => (
  <Layout>
    <SEOHead
      title="Disclaimer — CGPA Calculator"
      description="Disclaimer for CGPA Calculator. Our calculators provide approximate results using standard formulas. Always verify with your institution."
      canonical="https://cgpacalculator.com/disclaimer"
    />
    <article className="max-w-3xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Disclaimer</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Disclaimer</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section><h2 className="text-xl font-bold text-foreground mb-3">General Information</h2><p>CGPA Calculator provides information for general educational purposes. We make no warranty regarding accuracy or completeness.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Calculator Accuracy</h2><p>Our CGPA Calculator uses standard formulas. Different institutions may use different scales or rounding methods. Results should be verified with your university.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Not Professional Advice</h2><p>This content is not a substitute for professional academic advising. Consult your academic advisor for specific guidance.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">External Links</h2><p>We are not responsible for content on external websites linked from our CGPA Calculator.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Advertising</h2><p>Third-party ads may appear on our site. We are not responsible for ad content or accuracy.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Consent</h2><p>By using CGPA Calculator, you consent to this Disclaimer. Contact us with questions.</p></section>
      </div>
    </article>
  </Layout>
);

export default Disclaimer;
