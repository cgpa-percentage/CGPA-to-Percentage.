import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Percent, ArrowRightLeft, Layers, GraduationCap, Target, Menu, X } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import CgpaToPercentage from "@/components/calculators/CgpaToPercentage";
import PercentageToCgpa from "@/components/calculators/PercentageToCgpa";
import GpaToCgpa from "@/components/calculators/GpaToCgpa";
import GradeToGpa from "@/components/calculators/GradeToGpa";
import TargetGpa from "@/components/calculators/TargetGpa";

const navItems = [
  { id: "cgpa-to-pct", label: "CGPA → %", icon: Percent },
  { id: "pct-to-cgpa", label: "% → CGPA", icon: ArrowRightLeft },
  { id: "gpa-to-cgpa", label: "GPA → CGPA", icon: Layers },
  { id: "grade-to-gpa", label: "Grade → GPA", icon: GraduationCap },
  { id: "target-gpa", label: "Dream GPA", icon: Target },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("cgpa-to-pct");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCalculator = () => {
    switch (activeTab) {
      case "cgpa-to-pct": return <CgpaToPercentage />;
      case "pct-to-cgpa": return <PercentageToCgpa />;
      case "gpa-to-cgpa": return <GpaToCgpa />;
      case "grade-to-gpa": return <GradeToGpa />;
      case "target-gpa": return <TargetGpa />;
      default: return <CgpaToPercentage />;
    }
  };

  return (
    <div className="min-h-screen flex w-full relative">
      <AnimatedBackground />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 glass-panel m-4 mr-0 p-6 gap-2">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Grade<span className="text-primary">Flow</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Academic Performance Suite</p>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                activeTab === item.id
                  ? "bg-primary/20 text-primary shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-panel rounded-none border-x-0 border-t-0 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          Grade<span className="text-primary">Flow</span>
        </h1>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground p-2"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-14 left-0 right-0 z-40 glass-panel rounded-none border-x-0 p-4"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-3xl mx-auto"
          >
            {renderCalculator()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
