import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import GradeToGpaCalc from "@/components/calculators/GradeToGpa";

const GradeToGpaPage = () => (
  <Layout>
    <SEOHead
      title="Grade to GPA Calculator — Letter Grade GPA Lookup"
      description="Convert letter grades (A, B+, C-) to GPA values instantly. Free Grade to GPA Calculator with full grading scale reference table."
      canonical="https://cgpacalculator.com/grade-to-gpa"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Grade to GPA Calculator",
        "url": "https://cgpacalculator.com/grade-to-gpa",
        "description": "Free letter grade to GPA converter with comprehensive grading scale reference.",
        "applicationCategory": "EducationalApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }}
    />
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
      <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Grade to GPA</span>
    </nav>
    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">Grade to GPA Calculator</h1>
    <p className="text-muted-foreground mb-8">Look up the GPA equivalent of any letter grade with our free CGPA Calculator reference tool.</p>
    <GradeToGpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">Letter Grade to GPA Conversion Guide</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Our <strong className="text-foreground">CGPA Calculator</strong> includes a comprehensive grade-to-GPA reference. Each letter grade maps to a specific GPA value on the standard 4.0 scale.</p>
        <h3 className="text-lg font-semibold text-foreground">Standard GPA Scale</h3>
        <p>A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, D- = 0.7, F = 0.0. Plus/minus modifiers adjust by ±0.3.</p>
        <h3 className="text-lg font-semibold text-foreground">Grade Boundaries</h3>
        <p>A = 90–100%, B = 80–89%, C = 70–79%, D = 60–69%, F = below 60%. Exact boundaries vary by institution — always check your university's policy.</p>
        <h3 className="text-lg font-semibold text-foreground">Impact on Your CGPA</h3>
        <p>Even a single grade significantly affects your GPA, especially early in your academic career. Use our CGPA Calculator to see how each grade impacts your cumulative average.</p>
      </div>
    </article>
  </Layout>
);

export default GradeToGpaPage;
