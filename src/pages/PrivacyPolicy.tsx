import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 14, 2026</p>

      <div className="glass-panel p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Introduction</h2>
          <p>Welcome to CGPA Calculator ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
          <p>We may collect information that you voluntarily provide to us when you contact us, including your name and email address. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. We also use third-party advertising services (such as Google AdSense) that may use cookies to serve ads based on your prior visits to our website or other websites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Third-Party Advertising</h2>
          <p>We may use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites to provide relevant advertisements. Google AdSense, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads based on your visit to our site and other sites on the Internet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal data. To exercise these rights, please contact us using the information provided on our Contact page.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at contact@cgpacalculator.com.</p>
        </section>
      </div>
    </article>
  </Layout>
);

export default PrivacyPolicy;
