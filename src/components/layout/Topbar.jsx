import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      <h2 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Admin</span>
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;