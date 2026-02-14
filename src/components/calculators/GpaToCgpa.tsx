import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";

interface Semester {
  id: number;
  gpa: string;
  credits: string;
}

const GpaToCgpa = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: 1, gpa: "", credits: "" },
    { id: 2, gpa: "", credits: "" },
  ]);
  let nextId = semesters.length > 0 ? Math.max(...semesters.map(s => s.id)) + 1 : 1;

  const addSemester = () => {
    setSemesters([...semesters, { id: nextId, gpa: "", credits: "" }]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length > 1) setSemesters(semesters.filter(s => s.id !== id));
  };

  const updateSemester = (id: number, field: "gpa" | "credits", value: string) => {
    setSemesters(semesters.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const validSemesters = semesters.filter(s => s.gpa && s.credits && parseFloat(s.credits) > 0);
  const totalCredits = validSemesters.reduce((sum, s) => sum + parseFloat(s.credits), 0);
  const weightedSum = validSemesters.reduce((sum, s) => sum + parseFloat(s.gpa) * parseFloat(s.credits), 0);
  const cgpa = totalCredits > 0 ? weightedSum / totalCredits : 0;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">GPA → CGPA</h2>
        <p className="text-muted-foreground mt-2">Aggregate semester GPAs into cumulative GPA</p>
      </div>

      <div className="glass-panel p-8 space-y-4">
        <div className="grid grid-cols-[1fr_1fr_auto] gap-3 text-sm text-muted-foreground mb-2">
          <span>Semester GPA</span>
          <span>Credit Hours</span>
          <span className="w-10" />
        </div>

        <AnimatePresence>
          {semesters.map((sem, i) => (
            <motion.div
              key={sem.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              className="grid grid-cols-[1fr_1fr_auto] gap-3 items-center"
            >
              <input
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={sem.gpa}
                onChange={(e) => updateSemester(sem.id, "gpa", e.target.value)}
                placeholder={`Sem ${i + 1} GPA`}
                className="glass-input px-4 py-3"
              />
              <input
                type="number"
                min="1"
                value={sem.credits}
                onChange={(e) => updateSemester(sem.id, "credits", e.target.value)}
                placeholder="Credits"
                className="glass-input px-4 py-3"
              />
              <button
                onClick={() => removeSemester(sem.id)}
                className="text-muted-foreground hover:text-accent transition-colors p-2"
                disabled={semesters.length <= 1}
              >
                <Trash2 size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        <button onClick={addSemester} className="glow-button px-5 py-3 flex items-center gap-2 mt-4">
          <Plus size={16} /> Add Semester
        </button>
      </div>

      {validSemesters.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="result-card flex flex-col items-center py-10"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {cgpa.toFixed(3)}
          </div>
          <p className="text-muted-foreground mt-2">Cumulative GPA</p>
          <p className="text-sm text-muted-foreground mt-1">{validSemesters.length} semester(s) · {totalCredits} total credits</p>
        </motion.div>
      )}
    </div>
  );
};

export default GpaToCgpa;
