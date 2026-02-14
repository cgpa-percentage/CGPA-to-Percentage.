import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => (
  <Layout>
    <SEOHead
      title="Privacy Policy — CGPA Calculator"
      description="Privacy Policy for CGPA Calculator. Learn how we collect, use, and protect your data when using our free online CGPA and GPA calculators."
      canonical="https://cgpa-percentage.github.io/privacy-policy"
    />
    <article className="max-w-3xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary">Home</a> <span className="mx-2">/</span> <span className="text-foreground">Privacy Policy</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section><h2 className="text-xl font-bold text-foreground mb-3">Introduction</h2><p>Welcome to CGPA Calculator. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2><p>We may collect information you voluntarily provide (name, email) and automatically collected data (IP address, browser type, usage patterns).</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Information</h2><p>We use collected information to:</p><ul className="list-disc list-inside space-y-1 ml-2 mt-2"><li>Provide, maintain, and improve our CGPA Calculator</li><li>Respond to your inquiries</li><li>Monitor usage trends and analytics</li><li>Detect and prevent abuse</li></ul></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Cookies and Tracking</h2><p>We use cookies and third-party advertising services (Google AdSense) that may use cookies to serve relevant ads based on your browsing history.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Third-Party Advertising</h2><p>Google AdSense uses the DART cookie to serve ads based on your visits. You can opt out via Google's ad settings.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Data Security</h2><p>We implement appropriate technical measures to protect your information, though no method is 100% secure.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2><p>You may have rights to access, correct, or delete your personal data. Contact us to exercise these rights.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Changes to This Policy</h2><p>We may update this Privacy Policy periodically. Changes will be posted here with an updated date.</p></section>
        <section><h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2><p>Questions about this policy? Email us at contact@cgpacalculator.com.</p></section>
      </div>
    </article>
  </Layout>
);

export default PrivacyPolicy;
