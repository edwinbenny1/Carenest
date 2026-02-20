import StatCard from "../components/dashboard/StatCard";
import RecentAlertsTable from "../components/dashboard/RecentAlertsTable";
import WeeklyChart from "../components/dashboard/WeeklyChart";
import MonthlyChart from "../components/dashboard/MonthlyChart";

const AdminDashboard = () => {
  return (
    <>

      {/* ===== Stats Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

        <StatCard
          title="Total Users"
          value="1,248"
          extra="↑ 12% this month"
          theme="blue"
        />

        <StatCard
          title="Active Elderly"
          value="342"
          extra="↑ 3% this week"
          theme="green"
        />

        <StatCard
          title="Active Caregivers"
          value="89"
          extra="↑ 5 new"
          theme="blueSoft"
        />

        <StatCard
          title="Active Emergencies"
          value="3"
          theme="red"
        />

        <StatCard
          title="Alerts Today"
          value="12"
          extra="↓ 2 less than yesterday"
          theme="yellow"
        />

        <StatCard
          title="AI Detections"
          value="98.2%"
          extra="↑ 0.3% improvement"
          theme="greenSoft"
        />

      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <WeeklyChart />
        <MonthlyChart />
      </div>

      {/* ===== Alerts Table ===== */}
      <RecentAlertsTable />

    </>
  );
};

export default AdminDashboard;