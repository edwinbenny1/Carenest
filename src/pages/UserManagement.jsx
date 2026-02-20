import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Eye, Pencil, Trash2 } from "lucide-react";

const users = [
  { name: "John Smith", email: "john@example.com", role: "Elderly", status: "Active", lastActive: "2 min ago" },
  { name: "Mary Johnson", email: "mary@example.com", role: "Caregiver", status: "Active", lastActive: "5 min ago" },
  { name: "Robert Brown", email: "robert@example.com", role: "Elderly", status: "Inactive", lastActive: "2 days ago" },
  { name: "Patricia Davis", email: "patricia@example.com", role: "Patient", status: "Active", lastActive: "1 hr ago" },
  { name: "James Wilson", email: "james@example.com", role: "Caregiver", status: "Active", lastActive: "30 min ago" },
  { name: "Linda Martinez", email: "linda@example.com", role: "Elderly", status: "Active", lastActive: "10 min ago" },
  { name: "Michael Lee", email: "michael@example.com", role: "Patient", status: "Inactive", lastActive: "5 days ago" },
  { name: "Sarah Taylor", email: "sarah@example.com", role: "Caregiver", status: "Active", lastActive: "Just now" },
  { name: "Daniel Harris", email: "daniel@example.com", role: "Elderly", status: "Active", lastActive: "3 hrs ago" },
  { name: "Emily Clark", email: "emily@example.com", role: "Patient", status: "Active", lastActive: "45 min ago" },
  { name: "Thomas Lewis", email: "thomas@example.com", role: "Caregiver", status: "Inactive", lastActive: "1 week ago" },
  { name: "Olivia Walker", email: "olivia@example.com", role: "Elderly", status: "Active", lastActive: "8 min ago" },
];

const UserManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const roleFromRoute = location.pathname.split("/")[2]; 
  // all, elderly, caregivers, patients

  const formattedRole =
    roleFromRoute === "all"
      ? "All Users"
      : roleFromRoute
      ? roleFromRoute.charAt(0).toUpperCase() + roleFromRoute.slice(1)
      : "All Users";

  const filteredUsers = useMemo(() => {
    if (!roleFromRoute || roleFromRoute === "all") return users;
    return users.filter(
      (user) => user.role.toLowerCase() === roleFromRoute.slice(0, -1)
    );
  }, [roleFromRoute]);

  const buttonClass = (type) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      roleFromRoute === type ||
      (type === "all" && (!roleFromRoute || roleFromRoute === "all"))
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;

  return (
    <DashboardLayout>
      <div>

        {/* Dynamic Title */}
        <h1 className="text-2xl font-semibold mb-6">
          {formattedRole}
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

          {/* Search + Filters */}
          <div className="flex items-center justify-between mb-6">

            <input
              type="text"
              placeholder="Search users..."
              className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-3">
              <button onClick={() => navigate("/users/all")} className={buttonClass("all")}>All</button>
              <button onClick={() => navigate("/users/elderly")} className={buttonClass("elderly")}>Elderly</button>
              <button onClick={() => navigate("/users/caregivers")} className={buttonClass("caregivers")}>Caregiver</button>
              <button onClick={() => navigate("/users/patients")} className={buttonClass("patients")}>Patient</button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-left">
            <thead className="text-gray-500 text-sm border-b">
              <tr>
                <th className="py-3">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="py-4">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.lastActive}</td>
                  <td className="flex gap-3 text-gray-500">
                    <Eye size={16} className="cursor-pointer hover:text-blue-600" />
                    <Pencil size={16} className="cursor-pointer hover:text-orange-500" />
                    <Trash2 size={16} className="cursor-pointer hover:text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;