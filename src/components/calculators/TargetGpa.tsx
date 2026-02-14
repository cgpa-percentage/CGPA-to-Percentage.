import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";

const TargetGpa = () => {
  const [currentCgpa, setCurrentCgpa] = useState("");
  const [creditsCompleted, setCreditsCompleted] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [desiredCgpa, setDesiredCgpa] = useState("");

  const current = parseFloat(currentCgpa);
  const completed = parseFloat(creditsCompleted);
  const total = parseFloat(totalCredits);
  const desired = parseFloat(desiredCgpa);
  const remaining = total - completed;

  const isValid = currentCgpa && creditsCompleted && totalCredits && desiredCgpa
    && completed < total && remaining > 0 && current >= 0 && desired >= 0;

  const requiredGpa = isValid
    ? (desired * total - current * completed) / remaining
    : 0;

  const impossible = requiredGpa > 4.0;
  const alreadyAchieved = requiredGpa <= 0;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dream GPA Calculator</h2>
        <p className="text-muted-foreground mt-2">Find out what GPA you need to reach your target</p>
      </div>

      <div className="glass-panel p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Current CGPA</label>
            <input
              type="number" step="0.01" min="0" max="4"
              value={currentCgpa} onChange={(e) => setCurrentCgpa(e.target.value)}
              placeholder="e.g. 3.2"
              className="glass-input w-full px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Credits Completed</label>
            <input
              type="number" min="0"
              value={creditsCompleted} onChange={(e) => setCreditsCompleted(e.target.value)}
              placeholder="e.g. 60"
              className="glass-input w-full px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Total Degree Credits</label>
            <input
              type="number" min="1"
              value={totalCredits} onChange={(e) => setTotalCredits(e.target.value)}
              placeholder="e.g. 120"
              className="glass-input w-full px-4 py-3"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Desired Final CGPA</label>
            <input
              type="number" step="0.01" min="0" max="4"
              value={desiredCgpa} onChange={(e) => setDesiredCgpa(e.target.value)}
              placeholder="e.g. 3.5"
              className="glass-input w-full px-4 py-3"
            />
          </div>
        </div>
      </div>

      {isValid && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`result-card flex flex-col items-center py-10 ${
            impossible ? "border-accent/30 bg-accent/5" : ""
          }`}
        >
          {impossible ? (
            <>
              <AlertTriangle className="text-accent mb-4" size={40} />
              <div className="text-2xl font-bold text-accent">Reality Check</div>
              <p className="text-muted-foreground mt-2 text-center max-w-md">
                You'd need a <span className="text-foreground font-semibold">{requiredGpa.toFixed(2)}</span> GPA
                across your remaining {remaining} credits. Since max GPA is 4.0, this target isn't achievable.
                Consider adjusting your goal — you're still doing great!
              </p>
            </>
          ) : alreadyAchieved ? (
            <>
              <Sparkles className="text-secondary mb-4" size={40} />
              <div className="text-2xl font-bold text-secondary">You've Already Made It! 🎉</div>
              <p className="text-muted-foreground mt-2 text-center">
                Your current CGPA already meets or exceeds your target. Keep it up!
              </p>
            </>
          ) : (
            <>
              <Sparkles className="text-primary mb-4" size={40} />
              <p className="text-muted-foreground mb-2">Required GPA for remaining {remaining} credits</p>
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {requiredGpa.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {requiredGpa <= 3.5 ? "Totally doable — keep pushing! 💪" : "It'll be tough, but you can do this! 🔥"}
              </p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default TargetGpa;
