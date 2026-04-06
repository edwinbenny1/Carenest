import { useParams } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react";

const emergencyData = [
  {
    id: 1,
    title: "Fall Detected",
    user: "John Smith",
    location: "Living Room, Apt 204",
    time: "2025-02-15 09:32:15",
    confidence: 94.2,
    status: "Active",
  },
  {
    id: 2,
    title: "Abnormal Heart Rate",
    user: "Mary Johnson",
    location: "Bedroom, Apt 108",
    time: "2025-02-15 09:15:42",
    confidence: 87.5,
    status: "Active",
  },
  {
    id: 3,
    title: "No Movement (2hrs)",
    user: "Robert Brown",
    location: "Kitchen, Apt 315",
    time: "2025-02-15 08:45:00",
    confidence: 91,
    status: "Active",
  },
  {
    id: 4,
    title: "Fall Detected",
    user: "Patricia Davis",
    location: "Bathroom, Apt 122",
    time: "2025-02-15 07:20:33",
    confidence: 96.8,
    status: "Resolved",
  },
];

const EmergencyPage = () => {
  const { type } = useParams();

  const pageTitles = {
    monitoring: "Emergency Monitoring",
    live: "Live Alerts",
    history: "Alert History",
    resolved: "Resolved Alerts",
  };

  const title = pageTitles[type] || "Emergency Monitoring";

  const filteredData =
    type === "resolved"
      ? emergencyData.filter((item) => item.status === "Resolved")
      : emergencyData;

  const activeCount = emergencyData.filter(
    (item) => item.status === "Active"
  ).length;

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        {title}
      </h1>

      {(type === "monitoring" || type === "live") && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
          <AlertTriangle className="text-red-500" />
          <div>
            <p className="font-semibold text-red-700">
              {activeCount} Active Emergencies
            </p>
            <p className="text-sm text-red-500">
              Requires immediate attention
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-xl border shadow-sm transition hover:shadow-md ${
              item.status === "Active"
                ? "border-red-200 bg-white"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="flex justify-between items-center">

              <div className="flex gap-4 items-start">
                <div
                  className={`p-3 rounded-xl ${
                    item.status === "Active"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.status === "Active" ? (
                    <AlertTriangle size={20} />
                  ) : (
                    <CheckCircle size={20} />
                  )}
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {item.user}
                  </p>

                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {item.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <p className="text-sm text-gray-500">
                  AI Confidence
                </p>
                <p className="text-lg font-bold text-gray-800">
                  {item.confidence}%
                </p>

                {item.status === "Active" ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    Active
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                    Resolved
                  </span>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EmergencyPage;