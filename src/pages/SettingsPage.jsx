import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Slider,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";

const SettingsPage = () => {
  const { section } = useParams();

  /* ================= STATE ================= */
  const [sensitivity, setSensitivity] = useState(75);
  const [settings, setSettings] = useState({
    email: true,
    push: true,
    sms: false,
    emergency: true,
  });

  /* ================= LOAD SAVED DATA ================= */
  useEffect(() => {
    const savedSensitivity = localStorage.getItem("sensitivity");
    const savedSettings = localStorage.getItem("notificationSettings");

    if (savedSensitivity) setSensitivity(Number(savedSensitivity));
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  /* ================= SAVE DATA ================= */
  useEffect(() => {
    localStorage.setItem("sensitivity", sensitivity);
  }, [sensitivity]);

  useEffect(() => {
    localStorage.setItem("notificationSettings", JSON.stringify(settings));
  }, [settings]);

  /* ================= PAGE TITLE ================= */
  const titles = {
    threshold: "Emergency Threshold",
    roles: "Role Permissions",
    notifications: "Notification Settings",
    system: "System Configuration",
  };

  const pageTitle = titles[section] || "Settings";

  return (
    <Box>

      {/* ================= PAGE TITLE ================= */}
      <Typography variant="h5" fontWeight={600} mb={4}>
        {pageTitle}
      </Typography>

      {/* ================= THRESHOLD SECTION ================= */}
      {section === "threshold" && (
        <>
          {/* Sensitivity Card */}
          <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Emergency Sensitivity
            </Typography>

            <Typography color="text.secondary" mb={3}>
              Adjust the AI model sensitivity for emergency detection
            </Typography>

            <Slider
              value={sensitivity}
              onChange={(e, newValue) => setSensitivity(newValue)}
              min={0}
              max={100}
              sx={{ mb: 2 }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
              }}
            >
              <span>Low (fewer alerts)</span>
              <strong>{sensitivity}%</strong>
              <span>High (more alerts)</span>
            </Box>
          </Paper>

          {/* Notification Preferences */}
          <Paper sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Notification Preferences
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={settings.email}
                  onChange={() =>
                    setSettings({ ...settings, email: !settings.email })
                  }
                />
              }
              label="Email Notifications"
            />

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
              control={
                <Switch
                  checked={settings.push}
                  onChange={() =>
                    setSettings({ ...settings, push: !settings.push })
                  }
                />
              }
              label="Push Notifications"
            />

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
              control={
                <Switch
                  checked={settings.sms}
                  onChange={() =>
                    setSettings({ ...settings, sms: !settings.sms })
                  }
                />
              }
              label="SMS Notifications"
            />

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
              control={
                <Switch
                  checked={settings.emergency}
                  onChange={() =>
                    setSettings({
                      ...settings,
                      emergency: !settings.emergency,
                    })
                  }
                />
              }
              label="Emergency Notifications"
            />
          </Paper>
        </>
      )}

      {/* ================= OTHER SECTIONS PLACEHOLDER ================= */}
      {section !== "threshold" && (
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6">
            {pageTitle} Section
          </Typography>
          <Typography color="text.secondary" mt={2}>
            This section can be expanded with more advanced configurations.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default SettingsPage;