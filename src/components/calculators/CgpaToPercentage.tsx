import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, GraduationCap, Building2, Globe, TableProperties } from "lucide-react";
import RadialProgress from "@/components/RadialProgress";
import { universityData, calculatePercentage, type University, type CountryGroup } from "@/data/universities";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryGroup | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showUniDropdown, setShowUniDropdown] = useState(false);
  const [uniSearch, setUniSearch] = useState("");
  const [showGradingTable, setShowGradingTable] = useState(false);

  // Fallback to manual scale if no university selected
  const [manualScale, setManualScale] = useState<"10" | "4">("10");

  const scale = selectedUniversity ? selectedUniversity.scale : (manualScale === "10" ? 10 : 4);
  const maxCgpa = scale;

  const percentage = useMemo(() => {
    if (!cgpa || parseFloat(cgpa) < 0 || parseFloat(cgpa) > maxCgpa) return 0;
    if (selectedUniversity) {
      return calculatePercentage(parseFloat(cgpa), selectedUniversity);
    }
    return manualScale === "10"
      ? Math.min(parseFloat(cgpa) * 9.5, 100)
      : Math.min((parseFloat(cgpa) / 4) * 100, 100);
  }, [cgpa, selectedUniversity, manualScale, maxCgpa]);

  const isValid = cgpa !== "" && parseFloat(cgpa) >= 0 && parseFloat(cgpa) <= maxCgpa;

  const filteredUniversities = useMemo(() => {
    if (!selectedCountry) return [];
    return selectedCountry.universities.filter(u =>
      u.name.toLowerCase().includes(uniSearch.toLowerCase())
    );
  }, [selectedCountry, uniSearch]);

  const formulaText = useMemo(() => {
    if (selectedUniversity) {
      return `${selectedUniversity.formula} → ${cgpa} → ${percentage.toFixed(2)}%`;
    }
    if (manualScale === "10") return `${cgpa} × 9.5 = ${percentage.toFixed(2)}%`;
    return `(${cgpa} / 4) × 100 = ${percentage.toFixed(2)}%`;
  }, [selectedUniversity, cgpa, percentage, manualScale]);

  const handleCountrySelect = (country: CountryGroup) => {
    setSelectedCountry(country);
    setSelectedUniversity(null);
    setCgpa("");
    setShowCountryDropdown(false);
    setUniSearch("");
  };

  const handleUniSelect = (uni: University) => {
    setSelectedUniversity(uni);
    setCgpa("");
    setShowUniDropdown(false);
    setUniSearch("");
  };

  const clearSelection = () => {
    setSelectedCountry(null);
    setSelectedUniversity(null);
    setCgpa("");
    setUniSearch("");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">CGPA → Percentage</h2>
        <p className="text-muted-foreground mt-2">Convert your CGPA to percentage instantly</p>
      </div>

      <div className="glass-panel p-8 space-y-6">
        {/* University Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 size={16} className="text-primary" />
            <span className="font-medium">Select Your University <span className="text-xs">(optional)</span></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Country Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowUniDropdown(false); }}
                className="glass-input w-full px-4 py-3 text-sm flex items-center justify-between text-left"
              >
                <span className={selectedCountry ? "text-foreground" : "text-muted-foreground"}>
                  {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.country}` : "Select Country"}
                </span>
                <ChevronDown size={16} className={`text-muted-foreground transition-transform ${showCountryDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {showCountryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute z-50 mt-1 w-full rounded-xl border border-border bg-background shadow-lg overflow-hidden"
                  >
                    {universityData.map((country) => (
                      <button
                        key={country.country}
                        onClick={() => handleCountrySelect(country)}
                        className="w-full px-4 py-3 text-sm text-left hover:bg-muted/50 transition-colors flex items-center gap-2"
                      >
                        <span>{country.flag}</span>
                        <span className="text-foreground">{country.country}</span>
                        <span className="text-muted-foreground text-xs ml-auto">{country.universities.length} unis</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* University Dropdown */}
            <div className="relative">
              <button
                onClick={() => { if (selectedCountry) { setShowUniDropdown(!showUniDropdown); setShowCountryDropdown(false); } }}
                className={`glass-input w-full px-4 py-3 text-sm flex items-center justify-between text-left ${!selectedCountry ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!selectedCountry}
              >
                <span className={selectedUniversity ? "text-foreground truncate pr-2" : "text-muted-foreground"}>
                  {selectedUniversity ? selectedUniversity.name : "Select University"}
                </span>
                <ChevronDown size={16} className={`text-muted-foreground transition-transform shrink-0 ${showUniDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {showUniDropdown && selectedCountry && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute z-50 mt-1 w-full rounded-xl border border-border bg-background shadow-lg overflow-hidden"
                  >
                    <div className="p-2 border-b border-border">
                      <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Search university..."
                          value={uniSearch}
                          onChange={(e) => setUniSearch(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-sm rounded-lg bg-muted/30 border-none outline-none text-foreground placeholder:text-muted-foreground"
                          autoFocus
                        />
                      </div>
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredUniversities.map((uni) => (
                        <button
                          key={uni.name}
                          onClick={() => handleUniSelect(uni)}
                          className="w-full px-4 py-3 text-sm text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-foreground">{uni.name}</span>
                          <span className="text-muted-foreground text-xs block">{uni.scale}-Point Scale • {uni.formula}</span>
                        </button>
                      ))}
                      {filteredUniversities.length === 0 && (
                        <div className="px-4 py-3 text-sm text-muted-foreground text-center">No universities found</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Selected university info badge */}
          {selectedUniversity && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <GraduationCap size={12} />
                {selectedUniversity.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs">
                <Globe size={12} />
                {selectedUniversity.scale}-Point Scale • {selectedUniversity.formula}
              </span>
              <button onClick={clearSelection} className="text-xs text-muted-foreground hover:text-foreground underline">Clear</button>
            </motion.div>
          )}
        </div>

        {/* Manual Scale Toggle (only when no university selected) */}
        {!selectedUniversity && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Scale:</span>
            <div className="flex bg-muted/50 rounded-xl p-1 border border-border">
              <button
                onClick={() => { setManualScale("10"); setCgpa(""); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  manualScale === "10" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                10-Point
              </button>
              <button
                onClick={() => { setManualScale("4"); setCgpa(""); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  manualScale === "4" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                4-Point
              </button>
            </div>
          </div>
        )}

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
            placeholder={`e.g. ${scale >= 10 ? "8.5" : scale === 5 ? "4.2" : "3.5"}`}
            className="glass-input w-full px-4 py-3 text-lg"
          />
        </div>
      </div>

      {/* Grading Table Toggle */}
      {selectedUniversity?.gradingTable && (
        <div>
          <button
            onClick={() => setShowGradingTable(!showGradingTable)}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <TableProperties size={16} />
            {showGradingTable ? "Hide" : "View"} {selectedUniversity.name} Grading Scale
            <ChevronDown size={14} className={`transition-transform ${showGradingTable ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {showGradingTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="glass-panel p-6 mt-3">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {selectedUniversity.name} — {selectedUniversity.scale}-Point Grading Scale
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 text-muted-foreground font-medium">Grade</th>
                          <th className="text-center py-2 text-muted-foreground font-medium">GPA</th>
                          <th className="text-right py-2 text-muted-foreground font-medium">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedUniversity.gradingTable.map((row, i) => (
                          <tr key={i} className="border-b border-border/50">
                            <td className="py-2 text-foreground">{row.grade}</td>
                            <td className="py-2 text-center text-primary font-semibold">{row.gpa}</td>
                            <td className="py-2 text-right text-muted-foreground">{row.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

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
          <p className="mt-4 text-muted-foreground text-sm">{formulaText}</p>
          {selectedUniversity && (
            <p className="mt-1 text-xs text-muted-foreground">
              Based on {selectedUniversity.name} ({selectedUniversity.country}) grading system
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CgpaToPercentage;
