import { Users, Heart, AlertTriangle, Bell, Brain } from "lucide-react";

const themeStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  red: "bg-red-50 text-red-600",
  yellow: "bg-yellow-50 text-yellow-600",
  blueSoft: "bg-indigo-50 text-indigo-600",
  greenSoft: "bg-emerald-50 text-emerald-600",
};

const StatCard = ({ title, value, extra, theme }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{value}</h3>
        {extra && (
          <p className="text-xs text-green-500 mt-2">{extra}</p>
        )}
      </div>

      <div className={`p-3 rounded-xl ${themeStyles[theme]}`}>
        <Users size={20} />
      </div>

    </div>
  );
};

export default StatCard;