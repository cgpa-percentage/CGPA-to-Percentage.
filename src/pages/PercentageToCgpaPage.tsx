import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PercentageToCgpaCalc from "@/components/calculators/PercentageToCgpa";

const PercentageToCgpaPage = () => (
  <Layout>
    <SEOHead
      title="Percentage to CGPA Converter — CGPA Calculator"
      description="Convert percentage to CGPA instantly with our free CGPA Calculator. Supports 10-point and 4-point scales. Formula: CGPA = Percentage ÷ 9.5."
      canonical="https://cgpa-percentage.github.io/percentage-to-cgpa"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Percentage to CGPA Converter",
        "url": "https://cgpa-percentage.github.io/percentage-to-cgpa",
        "description": "Free online percentage to CGPA converter supporting 10-point and 4-point scales.",
        "applicationCategory": "EducationalApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }}
    />
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
      <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Percentage to CGPA</span>
    </nav>
    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">Percentage to CGPA Converter</h1>
    <p className="text-muted-foreground mb-8">Use our free CGPA Calculator to convert your percentage back to CGPA on any grading scale.</p>
    <PercentageToCgpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Convert Percentage to CGPA</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Our <strong className="text-foreground">CGPA Calculator</strong> handles the reverse conversion — from percentage to CGPA — just as accurately. This is essential when transitioning between grading systems.</p>
        <h3 className="text-lg font-semibold text-foreground">Percentage to CGPA Formula (10-Point Scale)</h3>
        <p><strong className="text-foreground">CGPA = Percentage ÷ 9.5</strong>. Example: 85% ÷ 9.5 = 8.95 CGPA.</p>
        <h3 className="text-lg font-semibold text-foreground">Percentage to CGPA Formula (4-Point Scale)</h3>
        <p><strong className="text-foreground">CGPA = (Percentage ÷ 100) × 4</strong>. So 85% = 3.4 CGPA.</p>
        <h3 className="text-lg font-semibold text-foreground">Important Considerations</h3>
        <p>These are approximate conversions used by our CGPA Calculator. Different universities may have specific conversion tables. Always verify with your institution's official grading policy.</p>
      </div>
    </article>
  </Layout>
);

export default PercentageToCgpaPage;
