import Layout from "@/components/Layout";

const TermsOfService = () => (
  <Layout>
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Agreement to Terms</h2>
          <p>By accessing and using CGPA Calculator ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Use of Service</h2>
          <p>Our calculators are provided for informational and educational purposes only. You agree to use the Service only for lawful purposes and in accordance with these Terms. The results provided by our calculators are approximations based on standard formulas and should be verified with your educational institution.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are owned by CGPA Calculator and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Disclaimer of Warranties</h2>
          <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the Service. We do not warrant that the results obtained from the use of our calculators will be accurate or reliable for your specific institution's grading system.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
          <p>In no event shall CGPA Calculator, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Third-Party Links and Advertising</h2>
          <p>Our Service may contain advertisements from third parties and links to third-party websites or services that are not owned or controlled by CGPA Calculator. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Service after any changes constitutes acceptance of the new Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at contact@cgpacalculator.com.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default TermsOfService;
