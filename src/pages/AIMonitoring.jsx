import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ===== Dummy Data =====
const trendData = [
  { week: "Week 1", confidence: 94 },
  { week: "Week 2", confidence: 95 },
  { week: "Week 3", confidence: 93.5 },
  { week: "Week 4", confidence: 96 },
  { week: "Week 5", confidence: 96.8 },
  { week: "Week 6", confidence: 98 },
];

export default function AIMonitoring() {
  const { section } = useParams();

  // ===== Dynamic Title Based on Subfolder =====
  const getTitle = () => {
    switch (section) {
      case "false":
        return "False Positives";
      case "logs":
        return "Prediction Logs";
      case "version":
        return "Model Version";
      default:
        return "Model Performance";
    }
  };

  return (
    <Box>

      {/* ===== Page Title ===== */}
      <Typography variant="h5" fontWeight={600} mb={4}>
        {getTitle()}
      </Typography>

      {/* ===== STAT CARDS ===== */}
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <Paper className="p-6 rounded-2xl bg-green-50">
          <Typography color="text.secondary">Model Accuracy</Typography>
          <Typography variant="h4" fontWeight={700}>
            98.2%
          </Typography>
          <Typography className="text-green-600 text-sm mt-2">
            ↑ 0.3%
          </Typography>
        </Paper>

        <Paper className="p-6 rounded-2xl bg-yellow-50">
          <Typography color="text.secondary">False Positive Rate</Typography>
          <Typography variant="h4" fontWeight={700}>
            1.4%
          </Typography>
          <Typography className="text-green-600 text-sm mt-2">
            ↓ 0.2%
          </Typography>
        </Paper>

        <Paper className="p-6 rounded-2xl bg-blue-50">
          <Typography color="text.secondary">Total Predictions</Typography>
          <Typography variant="h4" fontWeight={700}>
            1,000
          </Typography>
        </Paper>

        <Paper className="p-6 rounded-2xl bg-gray-50">
          <Typography color="text.secondary">Model Version</Typography>
          <Typography variant="h4" fontWeight={700}>
            v3.2.1
          </Typography>
        </Paper>

      </Box>

      {/* ===== CONFIDENCE TREND ===== */}
      <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
        <Typography variant="h6" fontWeight={600} mb={3}>
          Prediction Confidence Trend
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[90, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* ===== BOTTOM SECTION ===== */}
      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===== CONFUSION MATRIX ===== */}
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} mb={3}>
            Confusion Matrix
          </Typography>

          <Box className="grid grid-cols-3 gap-4 text-center">

            <Box></Box>
            <Box className="font-semibold">Predicted Fall</Box>
            <Box className="font-semibold">Predicted Normal</Box>

            <Box className="font-semibold text-left">Actual Fall</Box>
            <Box className="bg-green-100 p-4 rounded-xl font-bold text-green-700">
              156
            </Box>
            <Box className="bg-red-100 p-4 rounded-xl font-bold text-red-600">
              8
            </Box>

            <Box className="font-semibold text-left">Actual Normal</Box>
            <Box className="bg-red-100 p-4 rounded-xl font-bold text-red-600">
              12
            </Box>
            <Box className="bg-green-100 p-4 rounded-xl font-bold text-green-700">
              824
            </Box>

          </Box>
        </Paper>

        {/* ===== RECENT PREDICTIONS ===== */}
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} mb={3}>
            Recent Predictions
          </Typography>

          {[
            {
              title: "Fall Detection",
              sensor: "Accelerometer + Gyro",
              time: "09:32:15",
              score: "96.8%",
              result: "True Positive",
              color: "green",
            },
            {
              title: "Heart Rate Anomaly",
              sensor: "Heart Rate Sensor",
              time: "09:15:42",
              score: "87.5%",
              result: "True Positive",
              color: "green",
            },
            {
              title: "Inactivity Alert",
              sensor: "Motion Sensor",
              time: "08:45:00",
              score: "72.1%",
              result: "False Positive",
              color: "red",
            },
            {
              title: "Fall Detection",
              sensor: "Accelerometer + Gyro",
              time: "07:20:33",
              score: "45.3%",
              result: "False Positive",
              color: "red",
            },
          ].map((item, index) => (
            <Box
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-3"
            >
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.sensor} • {item.time}
                </Typography>
              </Box>

              <Box className="text-right">
                <Typography fontWeight={700}>
                  {item.score}
                </Typography>
                <Typography
                  className={`text-sm ${
                    item.color === "green"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.result}
                </Typography>
              </Box>
            </Box>
          ))}

        </Paper>
      </Box>
    </Box>
  );
}