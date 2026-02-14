import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import TargetGpaCalc from "@/components/calculators/TargetGpa";

const TargetGpaPage = () => (
  <Layout>
    <SEOHead
      title="Target GPA Calculator — Plan Your Dream CGPA"
      description="Calculate the GPA you need in remaining semesters to achieve your target CGPA. Free Target GPA Calculator with reality check feature."
      canonical="https://cgpacalculator.com/target-gpa"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Target GPA Calculator",
        "url": "https://cgpacalculator.com/target-gpa",
        "description": "Free target GPA calculator to plan your academic future and achieve your dream CGPA.",
        "applicationCategory": "EducationalApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }}
    />
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
      <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Target GPA Calculator</span>
    </nav>
    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">Target GPA Calculator</h1>
    <p className="text-muted-foreground mb-8">Find out what GPA you need in remaining semesters to achieve your dream CGPA with our free CGPA Calculator.</p>
    <TargetGpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Calculate Your Target GPA</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Our <strong className="text-foreground">CGPA Calculator</strong>'s Target GPA feature helps you determine exactly what GPA you need to maintain in your remaining semesters.</p>
        <h3 className="text-lg font-semibold text-foreground">The Target GPA Formula</h3>
        <p><strong className="text-foreground">Required GPA = (Desired CGPA × Total Credits − Current CGPA × Credits Completed) ÷ Remaining Credits</strong></p>
        <h3 className="text-lg font-semibold text-foreground">What If Required GPA Exceeds 4.0?</h3>
        <p>If the CGPA Calculator shows a required GPA above 4.0, your target isn't achievable with remaining credits. Consider adjusting your goal or exploring grade replacement options.</p>
        <h3 className="text-lg font-semibold text-foreground">Tips for Achieving Your Target CGPA</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Focus on high-credit courses for maximum CGPA impact</li>
          <li>Utilize tutoring and office hours</li>
          <li>Plan course loads strategically each semester</li>
          <li>Track progress regularly with our CGPA Calculator</li>
        </ul>
      </div>
    </article>
  </Layout>
);

export default TargetGpaPage;
