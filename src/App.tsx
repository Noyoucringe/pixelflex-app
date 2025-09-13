import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "@/hooks/useProfile";
import { AccessibilityProvider } from "@/hooks/useAccessibility";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Discussion from "./pages/Discussion";
import EditProfile from "./pages/EditProfile";
import Privacy from "./pages/Privacy";
import NotificationSettings from "./pages/NotificationSettings";
import AccessibilitySettings from "./pages/AccessibilitySettings";
import HelpSupport from "./pages/HelpSupport";
import ReportIssue from "./pages/ReportIssue";
import ForumDetail from "./pages/ForumDetail";
import ResourceDetail from "./pages/ResourceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <ProfileProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/notifications" element={<NotificationSettings />} />
          <Route path="/accessibility" element={<AccessibilitySettings />} />
          <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/forum/:id" element={<ForumDetail />} />
        <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/discussion/:id" element={<Discussion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ProfileProvider>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
