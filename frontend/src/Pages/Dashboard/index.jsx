import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import WelcomeCard from "../../components/dashboard/welcomeCard";
import StateCard from "../../components/dashboard/stateCard";
import DailyTask from "../../components/dashboard/dailyTask";

function Dashboard() {
  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        <WelcomeCard />

        <StateCard />

        <DailyTask />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;