import Sidebar from "../../dashboard/sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#09090F] text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;