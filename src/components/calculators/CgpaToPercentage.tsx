import { useState } from "react";
import { motion } from "framer-motion";
import RadialProgress from "@/components/RadialProgress";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [scale, setScale] = useState<"10" | "4">("10");

  const maxCgpa = scale === "10" ? 10 : 4;
  const percentage = cgpa
    ? scale === "10"
      ? Math.min(parseFloat(cgpa) * 9.5, 100)
      : Math.min((parseFloat(cgpa) / 4) * 100, 100)
    : 0;

  const isValid = cgpa !== "" && parseFloat(cgpa) >= 0 && parseFloat(cgpa) <= maxCgpa;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">CGPA → Percentage</h2>
        <p className="text-muted-foreground mt-2">Convert your CGPA to percentage instantly</p>
      </div>

      <div className="glass-panel p-8 space-y-6">
        {/* Scale Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Scale:</span>
          <div className="flex bg-muted/50 rounded-xl p-1 border border-border">
            <button
              onClick={() => { setScale("10"); setCgpa(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                scale === "10" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              10-Point
            </button>
            <button
              onClick={() => { setScale("4"); setCgpa(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                scale === "4" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              4-Point
            </button>
          </div>
        </div>

        {/* Input */}
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Enter CGPA (0 - {maxCgpa})</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max={maxCgpa}
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder={`e.g. ${scale === "10" ? "8.5" : "3.5"}`}
            className="glass-input w-full px-4 py-3 text-lg"
          />
        </div>
      </div>

      {/* Result */}
      {isValid && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="result-card flex flex-col items-center py-10"
        >
          <RadialProgress
            value={percentage}
            max={100}
            label={`${percentage.toFixed(1)}%`}
            sublabel="Percentage"
          />
          <p className="mt-4 text-muted-foreground text-sm">
            {scale === "10" ? `${cgpa} × 9.5 = ${percentage.toFixed(2)}%` : `(${cgpa} / 4) × 100 = ${percentage.toFixed(2)}%`}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CgpaToPercentage;
