const mockAlerts = [
  {
    type: "Fall Detected",
    user: "John Smith",
    location: "Living Room",
    status: "Active",
  },
  {
    type: "Abnormal Heart Rate",
    user: "Mary Johnson",
    location: "Bedroom",
    status: "Resolved",
  },
  {
    type: "No Movement",
    user: "Robert Brown",
    location: "Kitchen",
    status: "Resolved",
  },
  {
    type: "Fall Detected",
    user: "Patricia Davis",
    location: "Bathroom",
    status: "Active",
  },
];

const RecentAlertsTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Alerts
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Latest emergency alerts from the system
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 border-b border-gray-200">
              <th className="text-left pb-3 font-medium">Type</th>
              <th className="text-left pb-3 font-medium">User</th>
              <th className="text-left pb-3 font-medium">Location</th>
              <th className="text-left pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {mockAlerts.map((alert, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-4 text-gray-700">{alert.type}</td>
                <td className="py-4 text-gray-700">{alert.user}</td>
                <td className="py-4 text-gray-500">{alert.location}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.status === "Active"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default RecentAlertsTable;