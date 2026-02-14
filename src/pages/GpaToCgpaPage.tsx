import Layout from "@/components/Layout";
import GpaToCgpaCalc from "@/components/calculators/GpaToCgpa";

const GpaToCgpaPage = () => (
  <Layout>
    <GpaToCgpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Calculate Cumulative GPA from Semester GPAs</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Your Cumulative GPA (CGPA) represents your overall academic performance across all semesters. Unlike a simple average, CGPA is a credit-weighted calculation that gives more importance to courses with higher credit hours.</p>
        <h3 className="text-lg font-semibold text-foreground">The Credit-Weighted Formula</h3>
        <p><strong className="text-foreground">CGPA = Σ(Semester GPA × Credit Hours) ÷ Σ(Credit Hours)</strong></p>
        <p>For example, if you scored 3.8 GPA in a semester with 15 credits and 3.5 GPA in another with 18 credits: CGPA = (3.8×15 + 3.5×18) ÷ (15+18) = (57 + 63) ÷ 33 = 3.64.</p>
        <h3 className="text-lg font-semibold text-foreground">Why Credit Hours Matter</h3>
        <p>A semester with more credit hours carries greater weight in your cumulative GPA. This means performing well in heavy-credit semesters has a bigger positive impact on your overall academic record.</p>
      </div>
    </article>
  </Layout>
);

export default GpaToCgpaPage;
