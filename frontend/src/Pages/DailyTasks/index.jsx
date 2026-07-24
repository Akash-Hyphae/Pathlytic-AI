import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import DailyTask from "../../components/dashboard/dailyTask";

function DailyTasks() {
  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8">
        <DailyTask />
      </div>
    </DashboardLayout>
  );
}

export default DailyTasks;