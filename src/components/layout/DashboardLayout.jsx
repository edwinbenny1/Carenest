import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#f6f8fb] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Topbar */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
          <Topbar />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-10 py-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;