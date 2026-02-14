import Layout from "@/components/Layout";
import { Mail, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">Have questions or feedback? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-8 space-y-6">
          <h2 className="text-xl font-bold text-foreground">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">contact@cgpacalculator.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="font-semibold text-foreground text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Available worldwide online</p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We typically respond within 24-48 hours. For urgent inquiries, please include "URGENT" in your subject line.
          </p>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <h2 className="text-xl font-bold text-foreground">Send a Message</h2>
          <input type="text" placeholder="Your Name" className="glass-input w-full px-4 py-3 text-sm" />
          <input type="email" placeholder="Your Email" className="glass-input w-full px-4 py-3 text-sm" />
          <textarea placeholder="Your Message" rows={4} className="glass-input w-full px-4 py-3 text-sm resize-none" />
          <button className="glow-button px-6 py-3 w-full">Send Message</button>
        </div>
      </div>
    </article>
  </Layout>
);

export default Contact;
