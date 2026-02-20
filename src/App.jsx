import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import EmergencyPage from "./pages/EmergencyPage";
import SendNotification from "./pages/SendNotification";
import EmergencyReports from "./pages/EmergencyReports";
import AIMonitoring from "./pages/AIMonitoring";
import SensorMonitoring from "./pages/SensorMonitoring";
import SettingsPage from "./pages/SettingsPage";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTE ================= */}
      <Route path="/" element={<Login />} />

      {/* ================= DASHBOARD LAYOUT ================= */}
      <Route element={<DashboardLayout />}>

        {/* Dashboard */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* Users */}
        <Route path="/users/:type" element={<UserManagement />} />

        {/* Emergency Services */}
        <Route path="/emergency/:type" element={<EmergencyPage />} />

        {/* Notifications */}
        <Route path="/notifications/:section" element={<SendNotification />} />

        {/* Reports */}
        <Route path="/reports/:section" element={<EmergencyReports />} />

        {/* AI Monitoring */}
        <Route path="/ai/:section" element={<AIMonitoring />} />

        {/* Sensor Monitoring */}
        <Route path="/sensor/:section" element={<SensorMonitoring />} />

        {/* Settings ✅ FIXED */}
        <Route path="/settings/:section" element={<SettingsPage />} />

      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/dashboard" />} />

    </Routes>
  );
}

export default App;