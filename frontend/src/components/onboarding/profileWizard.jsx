import { useState } from "react";
import StepIndicator from "./stepIndicator";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [profileData, setProfileData] = useState({
    college: "",
    degree: "",
    currentYear: "",
    targetRole: "",
    targetCompanies: [],
    timeline: "",
    dailyHours: "",
    selectedSkills: [],
    skillConfidence: {},
  });

  const updateProfile = (data) => {
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (
        !profileData.college ||
        !profileData.degree ||
        !profileData.currentYear
      ) {
        alert("Please complete all academic information.");
        return;
      }
    } else if (currentStep === 2) {
      if (
        !profileData.targetRole ||
        profileData.targetCompanies.length === 0 ||
        !profileData.timeline ||
        !profileData.dailyHours
      ) {
        alert(
          "Please select target role, companies, timeline, and study hours.",
        );
        return;
      }
    } else if (currentStep === 3) {
      if (profileData.selectedSkills.length === 0) {
        alert("Please select at least one technology/skill.");
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const submitProfile = async () => {
    const allRated = profileData.selectedSkills.every(
      (skill) => profileData.skillConfidence[skill],
    );

    if (!allRated) {
      alert("Please rate your confidence for all selected skills.");
      return;
    }

    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (!userInfo || !userInfo.token) {
        alert("Session expired. Please log in again.");
        navigate("/login");
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // 1. Save Profile Data to MongoDB
      console.log("Saving profile data...", profileData);
      const profileRes = await axios.post(
        "http://localhost:5000/api/profile",
        profileData,
        config,
      );
      console.log("Profile saved successfully:", profileRes.data);

      // Generate AI Roadmap with Auth Header
      console.log("Generating AI Roadmap...");
      const aiResponse = await axios.post(
        "http://localhost:5000/api/roadmap/generate",
        profileData,
        config, // <-- Passes Authorization: Bearer <token>
      );

      if (aiResponse.data && aiResponse.data.success) {
        localStorage.setItem(
          "userRoadmap",
          JSON.stringify(aiResponse.data.data),
        );
        navigate("/roadmap");
      }
    } catch (error) {
      console.error(
        "DETAILED SUBMIT ERROR:",
        error.response?.data || error.message,
      );
      alert(
        `Error: ${error.response?.data?.message || "Failed to save profile or generate AI Roadmap."}`,
      );
    }
  };

  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">
      {/* Background Glow Highlights */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/15 blur-3xl" />

      {/* Step Progress Header */}
      <StepIndicator currentStep={currentStep} />

      {/* Animated Step Form Body */}
      <div className="relative z-10 mt-8 min-h-[380px]">
        {currentStep === 1 && (
          <Step1 data={profileData} updateProfile={updateProfile} />
        )}
        {currentStep === 2 && (
          <Step2 data={profileData} updateProfile={updateProfile} />
        )}
        {currentStep === 3 && (
          <Step3 data={profileData} updateProfile={updateProfile} />
        )}
        {currentStep === 4 && (
          <Step4 data={profileData} updateProfile={updateProfile} />
        )}
      </div>

      {/* Footer Controls */}
      <div className="relative z-10 mt-10 flex items-center justify-between border-t border-zinc-800/80 pt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#09090F] px-5 py-3 text-sm font-semibold text-zinc-300 transition duration-200 hover:border-zinc-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {currentStep === 4 ? (
          <button
            onClick={submitProfile}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-95"
          >
            Generate AI Roadmap <Sparkles size={16} />
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-95"
          >
            Continue <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileWizard;
