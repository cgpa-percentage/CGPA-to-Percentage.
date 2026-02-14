import Layout from "@/components/Layout";
import PercentageToCgpaCalc from "@/components/calculators/PercentageToCgpa";

const PercentageToCgpaPage = () => (
  <Layout>
    <PercentageToCgpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Convert Percentage to CGPA</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Converting percentage to CGPA is the reverse of CGPA-to-percentage conversion and is equally important for students transitioning between different grading systems or comparing academic records.</p>
        <h3 className="text-lg font-semibold text-foreground">Formula for 10-Point Scale</h3>
        <p>To convert percentage to CGPA on a 10-point scale: <strong className="text-foreground">CGPA = Percentage ÷ 9.5</strong>. For example, 85% ÷ 9.5 = 8.95 CGPA.</p>
        <h3 className="text-lg font-semibold text-foreground">Formula for 4-Point Scale</h3>
        <p>For the 4-point scale: <strong className="text-foreground">CGPA = (Percentage ÷ 100) × 4</strong>. So 85% = (85/100) × 4 = 3.4 CGPA.</p>
        <h3 className="text-lg font-semibold text-foreground">Important Considerations</h3>
        <p>Keep in mind that these are approximate conversions. Different universities may use their own specific conversion tables. Always verify with your institution's official grading policy for the most accurate conversion.</p>
      </div>
    </article>
  </Layout>
);

export default PercentageToCgpaPage;
