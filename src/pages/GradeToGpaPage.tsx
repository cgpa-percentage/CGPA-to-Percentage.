import Layout from "@/components/Layout";
import GradeToGpaCalc from "@/components/calculators/GradeToGpa";

const GradeToGpaPage = () => (
  <Layout>
    <GradeToGpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">Letter Grade to GPA Conversion Guide</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>The letter grade system is one of the most widely used grading methods in education. Each letter grade corresponds to a specific GPA value on the standard 4.0 scale.</p>
        <h3 className="text-lg font-semibold text-foreground">Standard GPA Scale</h3>
        <p>In the standard American grading system: A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0.0. Plus and minus modifiers adjust the value by ±0.3 (with A+ capped at 4.0).</p>
        <h3 className="text-lg font-semibold text-foreground">Understanding Grade Boundaries</h3>
        <p>Generally, an A grade represents excellent performance (90-100%), B represents good performance (80-89%), C represents average (70-79%), D represents below average (60-69%), and F represents failing (below 60%). However, exact boundaries vary by institution.</p>
        <h3 className="text-lg font-semibold text-foreground">Impact on Your GPA</h3>
        <p>Even a single grade can significantly affect your GPA, especially early in your academic career when you have fewer total credits. Understanding the GPA value of each grade helps you set realistic academic targets.</p>
      </div>
    </article>
  </Layout>
);

export default GradeToGpaPage;
