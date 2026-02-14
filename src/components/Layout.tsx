import { ReactNode } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingHeader from "@/components/FloatingHeader";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <FloatingHeader />
      <main className="flex-1 pt-24 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
