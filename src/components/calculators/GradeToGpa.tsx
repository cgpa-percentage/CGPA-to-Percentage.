import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

const gradeMap: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0,
};

const GradeToGpa = () => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Grade → GPA</h2>
        <p className="text-muted-foreground mt-2">Look up the GPA equivalent of any letter grade</p>
      </div>

      <div className="glass-panel p-8 space-y-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Select Grade Letter</label>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="glass-input w-full px-4 py-3 text-lg appearance-none cursor-pointer"
          >
            <option value="" className="bg-background">Choose a grade...</option>
            {Object.keys(gradeMap).map((grade) => (
              <option key={grade} value={grade} className="bg-background">{grade}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setShowTable(!showTable)}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <Info size={16} />
          {showTable ? "Hide" : "View"} Full Grading Scale
        </button>

        <AnimatePresence>
          {showTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-panel p-4 mt-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-semibold text-foreground px-3 py-2">Grade</div>
                  <div className="text-sm font-semibold text-foreground px-3 py-2">GPA</div>
                  {Object.entries(gradeMap).map(([grade, gpa]) => (
                    <div key={grade} className="contents">
                      <div className={`text-sm px-3 py-2 rounded-lg ${selectedGrade === grade ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}>
                        {grade}
                      </div>
                      <div className={`text-sm px-3 py-2 rounded-lg ${selectedGrade === grade ? "bg-primary/20 text-primary font-bold" : "text-muted-foreground"}`}>
                        {gpa.toFixed(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedGrade && (
        <motion.div
          key={selectedGrade}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="result-card flex flex-col items-center py-10"
        >
          <div className="text-2xl text-muted-foreground mb-2">Grade {selectedGrade}</div>
          <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {gradeMap[selectedGrade].toFixed(1)}
          </div>
          <p className="text-muted-foreground mt-2">GPA Points</p>
        </motion.div>
      )}
    </div>
  );
};

export default GradeToGpa;
