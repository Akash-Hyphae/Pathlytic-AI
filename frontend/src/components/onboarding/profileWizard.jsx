import { useState } from "react";

import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function ProfileWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const [profileData, setProfileData] = useState({
    // Step 1
    college: "",
    degree: "",
    currentYear: "",

    // Step 2
    targetRole: "",
    targetCompanies: [],
    timeline: "",
    dailyHours: "",

    // Step 3
    selectedSkills: [],

    // Step 4
    skillConfidence: {},
  });

  const updateProfile = (data) => {
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const nextStep = () => {
    switch (currentStep) {
      case 1:
        if (
          !profileData.college ||
          !profileData.degree ||
          !profileData.currentYear
        ) {
          alert("Please complete your academic information.");
          return;
        }
        break;

      case 2:
        if (
          !profileData.targetRole ||
          profileData.targetCompanies.length === 0 ||
          !profileData.timeline ||
          !profileData.dailyHours
        ) {
          alert("Please complete your career goals.");
          return;
        }
        break;

      case 3:
        if (profileData.selectedSkills.length === 0) {
          alert("Please select at least one skill.");
          return;
        }
        break;

      default:
        break;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitProfile = () => {
    const allRated = profileData.selectedSkills.every(
      (skill) => profileData.skillConfidence[skill]
    );

    if (!allRated) {
      alert("Please rate all selected skills.");
      return;
    }

    console.log(profileData);

    // Later
    // navigate("/assessment");
  };

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-[#11111A]/90 p-10 backdrop-blur-xl">
      <StepIndicator currentStep={currentStep} />

      <div className="mt-10">
        {currentStep === 1 && (
          <Step1
            data={profileData}
            updateProfile={updateProfile}
          />
        )}

        {currentStep === 2 && (
          <Step2
            data={profileData}
            updateProfile={updateProfile}
          />
        )}

        {currentStep === 3 && (
          <Step3
            data={profileData}
            updateProfile={updateProfile}
          />
        )}

        {currentStep === 4 && (
          <Step4
            data={profileData}
            updateProfile={updateProfile}
          />
        )}
      </div>

      <div className="mt-12 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500 disabled:opacity-40"
        >
          Back
        </button>

        {currentStep === 4 ? (
          <button
            onClick={submitProfile}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            Generate AI Roadmap
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileWizard;