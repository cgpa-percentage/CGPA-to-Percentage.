import Layout from "@/components/Layout";
import TargetGpaCalc from "@/components/calculators/TargetGpa";

const TargetGpaPage = () => (
  <Layout>
    <TargetGpaCalc />
    <article className="glass-panel p-8 md:p-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-4">How to Calculate Your Target GPA</h2>
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>The Target GPA Calculator (also known as the "Dream GPA Calculator") helps you determine the GPA you need to maintain in your remaining semesters to achieve your desired cumulative GPA by graduation.</p>
        <h3 className="text-lg font-semibold text-foreground">The Formula</h3>
        <p><strong className="text-foreground">Required GPA = (Desired CGPA × Total Credits − Current CGPA × Credits Completed) ÷ Remaining Credits</strong></p>
        <h3 className="text-lg font-semibold text-foreground">What If My Required GPA Is Above 4.0?</h3>
        <p>If the calculator shows a required GPA above 4.0, it means mathematically impossible to achieve your target CGPA with the remaining credits. In this case, you may want to consider adjusting your target or exploring options like retaking courses (if your institution allows grade replacement).</p>
        <h3 className="text-lg font-semibold text-foreground">Tips for Achieving Your Target</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Focus on high-credit courses where improvement has the most impact</li>
          <li>Utilize office hours and tutoring services</li>
          <li>Plan your course load strategically each semester</li>
          <li>Track your progress regularly using this calculator</li>
        </ul>
      </div>
    </article>
  </Layout>
);

export default TargetGpaPage;
