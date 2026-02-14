export interface University {
  name: string;
  country: string;
  scale: number; // max CGPA (e.g., 10, 4, 5)
  multiplier: number; // percentage = CGPA × multiplier
  formula: string; // human-readable formula
  gradingTable?: { grade: string; gpa: string; percentage: string }[];
}

export interface CountryGroup {
  country: string;
  flag: string;
  universities: University[];
}

const commonGradingTable10 = [
  { grade: "O (Outstanding)", gpa: "10", percentage: "91-100%" },
  { grade: "A+ (Excellent)", gpa: "9", percentage: "81-90%" },
  { grade: "A (Very Good)", gpa: "8", percentage: "71-80%" },
  { grade: "B+ (Good)", gpa: "7", percentage: "61-70%" },
  { grade: "B (Above Avg)", gpa: "6", percentage: "51-60%" },
  { grade: "C (Average)", gpa: "5", percentage: "41-50%" },
  { grade: "P (Pass)", gpa: "4", percentage: "35-40%" },
  { grade: "F (Fail)", gpa: "0", percentage: "Below 35%" },
];

const commonGradingTable4 = [
  { grade: "A+ / A", gpa: "4.0", percentage: "90-100%" },
  { grade: "A-", gpa: "3.7", percentage: "85-89%" },
  { grade: "B+", gpa: "3.3", percentage: "80-84%" },
  { grade: "B", gpa: "3.0", percentage: "75-79%" },
  { grade: "B-", gpa: "2.7", percentage: "70-74%" },
  { grade: "C+", gpa: "2.3", percentage: "65-69%" },
  { grade: "C", gpa: "2.0", percentage: "60-64%" },
  { grade: "D", gpa: "1.0", percentage: "50-59%" },
  { grade: "F", gpa: "0.0", percentage: "Below 50%" },
];

const commonGradingTable5 = [
  { grade: "A+", gpa: "5.0", percentage: "90-100%" },
  { grade: "A", gpa: "4.5", percentage: "80-89%" },
  { grade: "B+", gpa: "4.0", percentage: "70-79%" },
  { grade: "B", gpa: "3.5", percentage: "60-69%" },
  { grade: "C", gpa: "3.0", percentage: "50-59%" },
  { grade: "D", gpa: "2.0", percentage: "40-49%" },
  { grade: "F", gpa: "0.0", percentage: "Below 40%" },
];

export const universityData: CountryGroup[] = [
  {
    country: "India",
    flag: "🇮🇳",
    universities: [
      { name: "General (UGC Standard)", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "IIT (Indian Institutes of Technology)", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "NIT (National Institutes of Technology)", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "Delhi University (DU)", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "Mumbai University", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "Anna University", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "VTU (Visvesvaraya Technological University)", country: "India", scale: 10, multiplier: 10, formula: "CGPA × 10", gradingTable: commonGradingTable10 },
      { name: "JNTU (Jawaharlal Nehru Technological University)", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "CBSE Board", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "Savitribai Phule Pune University", country: "India", scale: 10, multiplier: 10, formula: "CGPA × 10" },
      { name: "BITS Pilani", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "Amity University", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
      { name: "SRM University", country: "India", scale: 10, multiplier: 9.5, formula: "CGPA × 9.5", gradingTable: commonGradingTable10 },
    ],
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    universities: [
      { name: "General (HEC Standard)", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "NUST (National University of Sciences & Technology)", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "LUMS (Lahore University of Management Sciences)", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "FAST-NUCES", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "COMSATS University", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "University of Punjab", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "Quaid-i-Azam University", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "UET Lahore", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "Aga Khan University", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "IBA Karachi", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "PIEAS", country: "Pakistan", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
    ],
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    universities: [
      { name: "General (UGC Bangladesh)", country: "Bangladesh", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "BUET (Bangladesh University of Engineering)", country: "Bangladesh", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "University of Dhaka", country: "Bangladesh", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "North South University", country: "Bangladesh", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
    ],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    universities: [
      { name: "General (US Standard)", country: "United States", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
      { name: "MIT", country: "United States", scale: 5, multiplier: 20, formula: "(CGPA / 5) × 100", gradingTable: commonGradingTable5 },
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    universities: [
      { name: "General (UK Standard)", country: "United Kingdom", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    universities: [
      { name: "General (Saudi Standard)", country: "Saudi Arabia", scale: 5, multiplier: 20, formula: "(CGPA / 5) × 100", gradingTable: commonGradingTable5 },
      { name: "King Saud University", country: "Saudi Arabia", scale: 5, multiplier: 20, formula: "(CGPA / 5) × 100", gradingTable: commonGradingTable5 },
      { name: "KFUPM", country: "Saudi Arabia", scale: 4, multiplier: 25, formula: "(CGPA / 4) × 100", gradingTable: commonGradingTable4 },
    ],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    universities: [
      { name: "General (Nigerian Standard)", country: "Nigeria", scale: 5, multiplier: 20, formula: "(CGPA / 5) × 100", gradingTable: commonGradingTable5 },
      { name: "University of Lagos", country: "Nigeria", scale: 5, multiplier: 20, formula: "(CGPA / 5) × 100", gradingTable: commonGradingTable5 },
    ],
  },
];

export function calculatePercentage(cgpa: number, university: University): number {
  if (university.scale === 10) {
    return Math.min(cgpa * university.multiplier, 100);
  }
  return Math.min((cgpa / university.scale) * 100, 100);
}
