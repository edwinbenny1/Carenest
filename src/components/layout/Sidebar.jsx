import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Heart,
  UserCheck,
  Stethoscope,
  Bell,
  BarChart3,
  Brain,
  Cpu,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Shield,
  FileText,
  Clock,
  Wifi,
  Activity,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  // ===== AUTO EXPAND BASED ON ROUTE =====
  useEffect(() => {
    if (location.pathname.includes("users")) setOpenMenu("users");
    if (location.pathname.includes("emergency")) setOpenMenu("emergency");
    if (location.pathname.includes("notifications")) setOpenMenu("notifications");
    if (location.pathname.includes("reports")) setOpenMenu("reports");
    if (location.pathname.includes("ai")) setOpenMenu("ai");
    if (location.pathname.includes("sensor")) setOpenMenu("sensor");
    if (location.pathname.includes("settings")) setOpenMenu("settings");
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 text-sm font-semibold";

  const subMenuClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium";

  const activeClass = "bg-blue-100 text-blue-600 shadow-sm";
  const hoverClass = "text-gray-600 hover:bg-gray-100 hover:text-blue-600";

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } min-h-screen bg-white border-r border-gray-200 flex flex-col justify-between transition-all duration-300`}
    >
      {/* ===== Scrollable Area ===== */}
      <div className="overflow-y-auto px-4 py-6 sidebar-scroll">

        {/* ===== Logo + Collapse Button ===== */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Activity size={18} />
              </div>
              <h1 className="text-lg font-bold tracking-wide">AAL Admin</h1>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-500 hover:text-blue-600 transition"
          >
            ☰
          </button>
        </div>

        {/* ================= DASHBOARD ================= */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${menuClass} ${isActive ? activeClass : hoverClass}`
          }
        >
          <LayoutDashboard size={18} />
          {!collapsed && "Dashboard"}
        </NavLink>

        {/* ================= USER MANAGEMENT ================= */}
        <div
          onClick={() => toggleMenu("users")}
          className={`${menuClass} ${hoverClass}`}
        >
          <Users size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">User Management</span>
              {openMenu === "users" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            openMenu === "users" ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/users/all" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Users size={16} /> {!collapsed && "All Users"}
            </NavLink>

            <NavLink to="/users/elderly" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Heart size={16} /> {!collapsed && "Elderly"}
            </NavLink>

            <NavLink to="/users/caregivers" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <UserCheck size={16} /> {!collapsed && "Caregivers"}
            </NavLink>

            <NavLink to="/users/patients" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Stethoscope size={16} /> {!collapsed && "Patients"}
            </NavLink>
          </div>
        </div>

        {/* ================= EMERGENCY SERVICES ================= */}
        <div onClick={() => toggleMenu("emergency")} className={`${menuClass} ${hoverClass}`}>
          <Shield size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">Emergency Services</span>
              {openMenu === "emergency" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "emergency" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/emergency/monitoring" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Activity size={16} /> {!collapsed && "Emergency Monitoring"}
            </NavLink>

            <NavLink to="/emergency/live" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Bell size={16} /> {!collapsed && "Live Alerts"}
            </NavLink>

            <NavLink to="/emergency/history" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Clock size={16} /> {!collapsed && "Alert History"}
            </NavLink>

            <NavLink to="/emergency/resolved" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <FileText size={16} /> {!collapsed && "Resolved Alerts"}
            </NavLink>
          </div>
        </div>

        {/* ================= NOTIFICATIONS ================= */}
        <div onClick={() => toggleMenu("notifications")} className={`${menuClass} ${hoverClass}`}>
          <Bell size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">Notifications</span>
              {openMenu === "notifications" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "notifications" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/notifications/send" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Send Notification"}
            </NavLink>

            <NavLink to="/notifications/scheduled" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Scheduled Messages"}
            </NavLink>

            <NavLink to="/notifications/history" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Notification History"}
            </NavLink>
          </div>
        </div>

        {/* ================= REPORTS ================= */}
        <div onClick={() => toggleMenu("reports")} className={`${menuClass} ${hoverClass}`}>
          <BarChart3 size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">Reports & Analytics</span>
              {openMenu === "reports" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "reports" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/reports/emergency" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Emergency Reports"}
            </NavLink>

            <NavLink to="/reports/activity" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "User Activity Logs"}
            </NavLink>

            <NavLink to="/reports/sensor" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Sensor Reports"}
            </NavLink>

            <NavLink to="/reports/download" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Download Reports"}
            </NavLink>
          </div>
        </div>

        {/* ================= AI ================= */}
        <div onClick={() => toggleMenu("ai")} className={`${menuClass} ${hoverClass}`}>
          <Brain size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">AI Monitoring</span>
              {openMenu === "ai" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "ai" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/ai/performance" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Model Performance"}
            </NavLink>

            <NavLink to="/ai/false" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "False Positives"}
            </NavLink>

            <NavLink to="/ai/logs" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Prediction Logs"}
            </NavLink>

            <NavLink to="/ai/version" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Model Version"}
            </NavLink>
          </div>
        </div>

        {/* ================= SENSOR ================= */}
        <div onClick={() => toggleMenu("sensor")} className={`${menuClass} ${hoverClass}`}>
          <Cpu size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">Sensor Monitoring</span>
              {openMenu === "sensor" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "sensor" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/sensor/all" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              <Wifi size={16} /> {!collapsed && "All Devices"}
            </NavLink>

            <NavLink to="/sensor/online" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Online Devices"}
            </NavLink>

            <NavLink to="/sensor/offline" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Offline Devices"}
            </NavLink>

            <NavLink to="/sensor/logs" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Device Logs"}
            </NavLink>
          </div>
        </div>

        {/* ================= SETTINGS ================= */}
        <div onClick={() => toggleMenu("settings")} className={`${menuClass} ${hoverClass}`}>
          <Settings size={18} />
          {!collapsed && (
            <>
              <span className="flex-1">Settings</span>
              {openMenu === "settings" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </>
          )}
        </div>

        <div className={`transition-all duration-300 overflow-hidden ${openMenu === "settings" ? "max-h-96 mt-3" : "max-h-0"}`}>
          <div className="ml-6 border-l pl-4 space-y-3">
            <NavLink to="/settings/threshold" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Emergency Threshold"}
            </NavLink>

            <NavLink to="/settings/roles" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Role Permissions"}
            </NavLink>

            <NavLink to="/settings/notifications" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "Notification Settings"}
            </NavLink>

            <NavLink to="/settings/system" className={({ isActive }) => `${subMenuClass} ${isActive ? activeClass : hoverClass}`}>
              {!collapsed && "System Configuration"}
            </NavLink>
          </div>
        </div>
      </div>

      {/* ===== Logout ===== */}
      <div className="px-4 py-4 border-t">
        <div className="flex items-center gap-3 text-red-500 font-semibold hover:bg-red-50 px-4 py-3 rounded-lg cursor-pointer transition">
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;