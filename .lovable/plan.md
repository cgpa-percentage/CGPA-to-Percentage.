

# GradeFlow — Academic Performance Dashboard

## Design Vision
A premium "Liquid Glass & Prismatic Future" SPA featuring a deep midnight blue background with animated gradient blobs, frosted glass UI panels, and smooth Framer Motion animations throughout. Typography uses Inter/Plus Jakarta Sans with generous spacing for an airy, high-end feel.

## Color System
- **Background:** Deep charcoal-to-midnight gradient (`#0f172a` → `#020617`) with noise texture
- **Primary:** Vivid Violet (`#8b5cf6`) for CTAs and active states
- **Secondary:** Cyan (`#06b6d4`) for accents and highlights
- **Accent:** Rose (`#f43f5e`) for warnings
- **Glass panels:** Ultra-thin white borders, backdrop blur, subtle white gradients

## Navigation
Sidebar navigation with glassmorphic styling, collapsible on mobile into a bottom nav or hamburger menu. Each calculator tool is a nav item with a Lucide icon. Page transitions animate with Framer Motion (fade + slide).

## Feature 1: CGPA → Percentage Converter
- Toggle switch between 10-point and 4-point CGPA scales
- Styled glass input field for CGPA value
- Animated radial progress ring that fills as percentage increases
- Result displayed prominently with spring animation

## Feature 2: Percentage → CGPA Converter
- Glass input for percentage value
- Scale selector (10-point / 4-point)
- Animated result card showing calculated CGPA
- Mirror layout of Feature 1 for consistency

## Feature 3: GPA → CGPA (Semester Aggregator)
- Dynamic semester list — each row has GPA input + Credit Hours input
- "Add Semester" button with glow hover effect
- Running cumulative GPA calculation displayed in a glass result card
- Ability to remove individual semesters

## Feature 4: Grade Letter → GPA Calculator
- Dropdown selector for grade letters (A, A-, B+, B, B-, C+, C, C-, D, F)
- Instant GPA equivalent display
- "View Grading Scale" button opens a glass modal with full reference table

## Feature 5: Target GPA Calculator ("Dream Calculator")
- Inputs: Current CGPA, Credits Completed, Total Degree Credits, Desired Final CGPA
- Calculates required GPA for remaining semesters
- If required GPA > 4.0: shows a polite "Reality Check" warning in a red-tinted glass card
- If achievable: shows an encouraging result with green accent

## Interactions & Animations
- Framer Motion ambient background blobs (slow-moving cyan/violet/blue gradients)
- Glow effect on button hover (box-shadow with primary color)
- Inputs with smooth focus transitions and glowing ring
- Result cards spring-animate into view on calculation
- Page transitions between calculators (fade + scale)

## Responsive Design
- Desktop: Sidebar + spacious content area with generous padding
- Tablet: Collapsible sidebar
- Mobile: Stacked vertical layout, bottom navigation or hamburger menu, full-width glass cards

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS (custom glass utility classes)
- Framer Motion (animations & transitions)
- Shadcn UI components (customized for glass theme)
- Lucide React icons

