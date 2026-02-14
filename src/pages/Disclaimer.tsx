import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Disclaimer</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">General Information</h2>
          <p>The information provided by CGPA Calculator ("we," "us," or "our") on this website is for general informational and educational purposes only. All information on the site is provided in good faith. However, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Calculator Accuracy</h2>
          <p>Our calculators use standard, widely-accepted formulas for GPA, CGPA, and percentage conversions. However, different educational institutions may use different grading scales, conversion formulas, or rounding methods. The results provided by our calculators should be treated as estimates and should always be verified with your specific institution's official grading policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Not Professional Advice</h2>
          <p>The content on this website is not intended to be a substitute for professional academic advising. Always seek the guidance of your academic advisor or other qualified professional with any questions you may have regarding your academic standing or requirements.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">External Links</h2>
          <p>This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Advertising</h2>
          <p>This website may display advertisements provided by third-party advertising networks. These advertisements may use cookies and similar technologies to serve relevant ads. We are not responsible for the content or accuracy of any advertisements displayed on our site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Consent</h2>
          <p>By using our website, you hereby consent to our Disclaimer and agree to its terms. If you have any questions about this Disclaimer, please contact us.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default Disclaimer;
