import AuthLayout from "../../components/layout/AuthLayout";
import ProfileWizard from "../../components/onboarding/profileWizard.jsx";

function CompleteProfile() {
  return (
    <AuthLayout>
      <ProfileWizard />
    </AuthLayout>
  );
}

export default CompleteProfile;