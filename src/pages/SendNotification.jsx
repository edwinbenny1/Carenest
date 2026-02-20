import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  Divider,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function SendNotification() {
  return (
    <Box>

      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} mb={4}>
        Send Notification
      </Typography>

      {/* ================= SEND NOTIFICATION CARD ================= */}
      <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          Send Notification
        </Typography>
        <Typography color="gray" mb={3}>
          Broadcast a message to users
        </Typography>

        <TextField
          fullWidth
          label="Title"
          placeholder="Notification title"
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          placeholder="Write your message..."
          sx={{ mb: 3 }}
        />

        <Grid container spacing={3} mb={3}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Target Audience</InputLabel>
              <Select defaultValue="All Users" label="Target Audience">
                <MenuItem value="All Users">All Users</MenuItem>
                <MenuItem value="Caregivers">Caregivers</MenuItem>
                <MenuItem value="Elderly">Elderly</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Schedule"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: "#1976d2",
              borderRadius: 2,
              textTransform: "none",
              px: 3,
            }}
          >
            Send Now
          </Button>

          <Button
            variant="outlined"
            startIcon={<ScheduleIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 3,
            }}
          >
            Schedule
          </Button>
        </Box>
      </Paper>

      {/* ================= NOTIFICATION HISTORY ================= */}
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={3}>
          Notification History
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
          <Box>Title</Box>
          <Box>Target</Box>
          <Box>Date</Box>
          <Box>Status</Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {[
          {
            title: "Emergency Drill Notice",
            target: "All Users",
            date: "2025-02-14 10:00",
            status: "Sent",
          },
          {
            title: "System Maintenance",
            target: "Caregivers",
            date: "2025-02-13 14:30",
            status: "Sent",
          },
          {
            title: "Weekly Health Tips",
            target: "Elderly",
            date: "2025-02-16 09:00",
            status: "Scheduled",
          },
          {
            title: "Sensor Update Required",
            target: "All Users",
            date: "2025-02-12 08:00",
            status: "Sent",
          },
        ].map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1.5fr 1fr",
              alignItems: "center",
              py: 2,
              borderBottom:
                index !== 3 ? "1px solid #f1f5f9" : "none",
            }}
          >
            <Box sx={{ fontWeight: 500 }}>{row.title}</Box>
            <Box sx={{ color: "#64748b" }}>{row.target}</Box>
            <Box sx={{ color: "#64748b" }}>{row.date}</Box>
            <Box>
              <Chip
                label={
                  row.status === "Sent" ? "● Sent" : "● Scheduled"
                }
                sx={{
                  backgroundColor:
                    row.status === "Sent"
                      ? "#e6f4ea"
                      : "#fff4e5",
                  color:
                    row.status === "Sent"
                      ? "#2e7d32"
                      : "#ed6c02",
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