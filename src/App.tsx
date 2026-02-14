import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CgpaToPercentagePage from "./pages/CgpaToPercentagePage";
import PercentageToCgpaPage from "./pages/PercentageToCgpaPage";
import GpaToCgpaPage from "./pages/GpaToCgpaPage";
import GradeToGpaPage from "./pages/GradeToGpaPage";
import TargetGpaPage from "./pages/TargetGpaPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cgpa-to-percentage" element={<CgpaToPercentagePage />} />
          <Route path="/percentage-to-cgpa" element={<PercentageToCgpaPage />} />
          <Route path="/gpa-to-cgpa" element={<GpaToCgpaPage />} />
          <Route path="/grade-to-gpa" element={<GradeToGpaPage />} />
          <Route path="/target-gpa" element={<TargetGpaPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
