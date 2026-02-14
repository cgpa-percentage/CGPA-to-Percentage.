import Layout from "@/components/Layout";
import CgpaToPercentageCalc from "@/components/calculators/CgpaToPercentage";

const CgpaToPercentagePage = () => (
  <Layout>
    <CgpaToPercentageCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Convert CGPA to Percentage</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>Converting CGPA (Cumulative Grade Point Average) to percentage is one of the most common academic calculations students need to perform. Whether you're applying for higher education, scholarships, or jobs, knowing your percentage equivalent is essential.</p>
        <h3 className="text-lg font-semibold text-foreground">Formula for 10-Point Scale</h3>
        <p>The standard formula approved by most universities including those following UGC guidelines is: <strong className="text-foreground">Percentage = CGPA × 9.5</strong>. For example, if your CGPA is 8.2, your percentage would be 8.2 × 9.5 = 77.9%.</p>
        <h3 className="text-lg font-semibold text-foreground">Formula for 4-Point Scale</h3>
        <p>For universities using a 4.0 GPA scale: <strong className="text-foreground">Percentage = (CGPA / 4.0) × 100</strong>. A CGPA of 3.5 on a 4-point scale equals 87.5%.</p>
        <h3 className="text-lg font-semibold text-foreground">When Do You Need This Conversion?</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Applying to universities that require percentage scores</li>
          <li>Job applications with minimum percentage criteria</li>
          <li>Scholarship applications</li>
          <li>Comparing academic performance across different grading systems</li>
        </ul>
      </div>
    </article>
  </Layout>
);

export default CgpaToPercentagePage;
