import React from "react";
import { useParams } from "react-router-dom";
import { Cpu, Wifi, WifiOff, Clock } from "lucide-react";

const devices = [
  { id: "SEN-001", user: "John Smith", battery: 85, status: "Online", last: "Just now" },
  { id: "SEN-002", user: "Mary Johnson", battery: 72, status: "Online", last: "2 min ago" },
  { id: "SEN-003", user: "Robert Brown", battery: 15, status: "Offline", last: "2 days ago" },
  { id: "SEN-004", user: "Patricia Davis", battery: 93, status: "Online", last: "Just now" },
  { id: "SEN-005", user: "James Wilson", battery: 45, status: "Online", last: "5 min ago" },
  { id: "SEN-006", user: "Linda Martinez", battery: 8, status: "Offline", last: "5 days ago" },
  { id: "SEN-007", user: "Michael Lee", battery: 67, status: "Online", last: "1 min ago" },
  { id: "SEN-008", user: "Sarah Taylor", battery: 91, status: "Online", last: "Just now" },
];

export default function SensorMonitoring() {
  const { section } = useParams();

  const titles = {
    all: "All Devices",
    online: "Online Devices",
    offline: "Offline Devices",
    logs: "Device Logs",
  };

  const title = titles[section] || "All Devices";

  const filtered =
    section === "online"
      ? devices.filter((d) => d.status === "Online")
      : section === "offline"
      ? devices.filter((d) => d.status === "Offline")
      : devices;

  const total = devices.length;
  const online = devices.filter((d) => d.status === "Online").length;
  const offline = devices.filter((d) => d.status === "Offline").length;

  const batteryColor = (value) => {
    if (value > 60) return "bg-green-500";
    if (value > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">
        {title}
      </h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-50 p-6 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Devices</p>
            <p className="text-3xl font-bold">{total}</p>
          </div>
          <Cpu className="text-blue-500" size={28} />
        </div>

        <div className="bg-green-50 p-6 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-gray-500">Online</p>
            <p className="text-3xl font-bold">{online}</p>
          </div>
          <Wifi className="text-green-500" size={28} />
        </div>

        <div className="bg-red-50 p-6 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-gray-500">Offline</p>
            <p className="text-3xl font-bold">{offline}</p>
          </div>
          <WifiOff className="text-red-500" size={28} />
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-5 px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-sm">
          <div>Device ID</div>
          <div>Assigned User</div>
          <div>Battery</div>
          <div>Status</div>
          <div>Last Active</div>
        </div>

        {/* ROWS */}
        {filtered.map((device, index) => (
          <div
            key={index}
            className="grid grid-cols-5 px-6 py-4 items-center border-t hover:bg-gray-50 transition"
          >
            <div className="font-medium">{device.id}</div>

            <div>{device.user}</div>

            {/* BATTERY */}
            <div className="flex items-center gap-3">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-2 ${batteryColor(device.battery)}`}
                  style={{ width: `${device.battery}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">
                {device.battery}%
              </span>
            </div>

            {/* STATUS */}
            <div>
              <span
                className={`px-3 py-1 text-xs rounded-full flex items-center gap-2 w-fit ${
                  device.status === "Online"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${
                  device.status === "Online"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`} />
                {device.status}
              </span>
            </div>

            {/* LAST ACTIVE */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={14} />
              {device.last}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}