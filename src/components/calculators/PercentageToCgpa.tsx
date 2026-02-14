import { useState } from "react";
import { motion } from "framer-motion";

const PercentageToCgpa = () => {
  const [percentage, setPercentage] = useState("");
  const [scale, setScale] = useState<"10" | "4">("10");

  const pct = parseFloat(percentage);
  const cgpa = percentage
    ? scale === "10"
      ? Math.min(pct / 9.5, 10)
      : Math.min((pct / 100) * 4, 4)
    : 0;

  const maxCgpa = scale === "10" ? 10 : 4;
  const isValid = percentage !== "" && pct >= 0 && pct <= 100;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Percentage → CGPA</h2>
        <p className="text-muted-foreground mt-2">Convert your percentage to CGPA</p>
      </div>

      <div className="glass-panel p-8 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Scale:</span>
          <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
            <button
              onClick={() => { setScale("10"); setPercentage(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                scale === "10" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              10-Point
            </button>
            <button
              onClick={() => { setScale("4"); setPercentage(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                scale === "4" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              4-Point
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Enter Percentage (0 - 100)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="e.g. 85"
            className="glass-input w-full px-4 py-3 text-lg"
          />
        </div>
      </div>

      {isValid && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="result-card flex flex-col items-center py-10"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {cgpa.toFixed(2)}
          </div>
          <p className="text-muted-foreground mt-2">CGPA on {maxCgpa}-point scale</p>
          <p className="mt-2 text-muted-foreground text-sm">
            {scale === "10" ? `${percentage} ÷ 9.5 = ${cgpa.toFixed(2)}` : `(${percentage} ÷ 100) × 4 = ${cgpa.toFixed(2)}`}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PercentageToCgpa;
