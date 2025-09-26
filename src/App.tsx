import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MockInterview from "./pages/MockInterview";
import FaceAttendance from "./pages/FaceAttendance";
import EmployeeManagement from "./pages/EmployeeManagement";
import GetStarted from "./pages/GetStarted";
import Enrollment from "./pages/Enrollment";
import Internships from "./pages/Internships";
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
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/face-attendance" element={<FaceAttendance />} />
          <Route path="/employee-management" element={<EmployeeManagement />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/internships" element={<Internships />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
