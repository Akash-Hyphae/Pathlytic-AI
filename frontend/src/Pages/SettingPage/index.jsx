import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";

function Settings() {
  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#11111A] p-8">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
    </DashboardLayout>
  );
}

export default Settings;