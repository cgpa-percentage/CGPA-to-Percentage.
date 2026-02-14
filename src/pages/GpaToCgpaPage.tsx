import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import GpaToCgpaCalc from "@/components/calculators/GpaToCgpa";

const GpaToCgpaPage = () => (
  <Layout>
    <SEOHead
      title="GPA to CGPA Calculator — Calculate Cumulative GPA"
      description="Calculate your cumulative GPA (CGPA) from semester GPAs with credit-hour weighting. Free GPA to CGPA Calculator with instant results."
      canonical="https://cgpa-percentage.github.io/gpa-to-cgpa"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "GPA to CGPA Calculator",
        "url": "https://cgpa-percentage.github.io/gpa-to-cgpa",
        "description": "Free credit-weighted GPA to CGPA calculator for aggregating semester GPAs.",
        "applicationCategory": "EducationalApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }}
    />
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
      <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">GPA to CGPA</span>
    </nav>
    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">GPA to CGPA Calculator</h1>
    <p className="text-muted-foreground mb-8">Aggregate your semester GPAs into a cumulative GPA using our free credit-weighted CGPA Calculator.</p>
    <GpaToCgpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Calculate Cumulative GPA with Our CGPA Calculator</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Our <strong className="text-foreground">CGPA Calculator</strong> computes your cumulative GPA using credit-weighted averaging — the standard method used by universities worldwide.</p>
        <h3 className="text-lg font-semibold text-foreground">The Credit-Weighted CGPA Formula</h3>
        <p><strong className="text-foreground">CGPA = Σ(Semester GPA × Credit Hours) ÷ Σ(Credit Hours)</strong></p>
        <p>Example: 3.8 GPA × 15 credits + 3.5 GPA × 18 credits = CGPA of 3.64.</p>
        <h3 className="text-lg font-semibold text-foreground">Why Credit Hours Matter in Our CGPA Calculator</h3>
        <p>A semester with more credit hours carries greater weight. Performing well in heavy-credit semesters has a bigger positive impact on your cumulative GPA.</p>
      </div>
    </article>
  </Layout>
);

export default GpaToCgpaPage;
