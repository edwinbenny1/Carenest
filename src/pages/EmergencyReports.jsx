import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Sep", incidents: 32 },
  { month: "Oct", incidents: 45 },
  { month: "Nov", incidents: 38 },
  { month: "Dec", incidents: 52 },
  { month: "Jan", incidents: 40 },
  { month: "Feb", incidents: 28 },
];

const logs = [
  {
    event: "Emergency Response Triggered",
    by: "System",
    date: "2025-02-15 09:32",
    type: "Emergency",
  },
  {
    event: "User Account Created",
    by: "Admin",
    date: "2025-02-15 08:15",
    type: "User",
  },
  {
    event: "Sensor Calibration Complete",
    by: "System",
    date: "2025-02-14 16:45",
    type: "Sensor",
  },
  {
    event: "AI Model Updated to v3.2",
    by: "System",
    date: "2025-02-14 14:00",
    type: "AI",
  },
];

export default function EmergencyReports() {
  return (
    <Box>

      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} mb={4}>
        Emergency Reports
      </Typography>

      {/* ================= CHART CARD ================= */}
      <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Monthly Emergency Reports
            </Typography>
            <Typography color="text.secondary">
              Emergency incidents over the last 6 months
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              PDF
            </Button>

            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              CSV
            </Button>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="incidents"
              fill="#2f80ed"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* ================= SYSTEM LOGS ================= */}
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={3}>
          System Logs
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr 1fr",
            fontWeight: 600,
            color: "#6b7280",
            mb: 2,
          }}
        >
          <Box>Event</Box>
          <Box>Initiated By</Box>
          <Box>Date</Box>
          <Box>Type</Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {logs.map((log, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1.5fr 1fr",
              alignItems: "center",
              py: 2,
              borderBottom:
                index !== logs.length - 1
                  ? "1px solid #f1f5f9"
                  : "none",
            }}
          >
            <Box>{log.event}</Box>
            <Box>{log.by}</Box>
            <Box>{log.date}</Box>

            <Box>
              <Chip
                label={log.type}
                sx={{
                  backgroundColor: "#e8f1ff",
                  color: "#1976d2",
                  fontWeight: 500,
                }}
              />
            </Box>
          </Box>
        ))}
      </Paper>

    </Box>
  );
}