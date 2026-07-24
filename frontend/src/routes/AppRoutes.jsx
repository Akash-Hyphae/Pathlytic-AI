import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/ProfilePage";
import AssessmentWelcome from "../Pages/AssessmentWelcome";
import Assessment from "../Pages/Assessment";
import AssessmentResult from "../Pages/AssessmentResult";
import ForgotPassword from "../Pages/ForgotPassword";
import VerifyOtp from "../Pages/VerifyOtp";
import ResetPassword from "../Pages/ResetPassword";
import CompleteProfile from "../Pages/CompleteProfile";
import AIAnalysis from "../Pages/AIAnalysis";
import AIRoadmap from "../Pages/AIRoadMap";
import DailyTasks from "../Pages/DailyTasks";
import Resources from "../Pages/ResourcePage";
import Progress from "../Pages/Progress";
import Settings from "../Pages/SettingPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/assessment" element={<AssessmentWelcome />} />
        <Route path="/assessment/questions" element={<Assessment />} />
        <Route path="/assessment/result" element={<AssessmentResult />} />
        <Route path="/analysis" element={<AIAnalysis />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmap" element={<AIRoadmap />} />
        <Route path="/tasks" element={<DailyTasks />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;