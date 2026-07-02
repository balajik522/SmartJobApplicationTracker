import { useEffect, useState } from "react";
import AnalyticsChart from "../components/AnalyticsChart";
import StatsCard from "../components/StatsCard";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function Dashboard() {
 const [applications, setApplications] = useState([]);

useEffect(() => {
  fetch("http://localhost:8080/api/applications")
    .then((response) => response.json())
    .then((data) => {
      setApplications(data);
    })
    .catch((error) => {
      console.error(
        "Failed to load dashboard data:",
        error
      );
    });
}, []);
const notifications = applications
  .filter(
    (app) =>
      app.status === "Interview" ||
      app.status === "Selected" ||
      app.status === "Rejected"
  )
  .map((app) => ({
    id: app.id,
    type: app.status,
    message:
      app.status === "Interview"
        ? `Interview scheduled with ${app.company}`
        : app.status === "Selected"
        ? `Congratulations! Selected at ${app.company}`
        : `Application rejected by ${app.company}`,
  }));
 const recentActivities = applications
  .slice()
  .reverse()
  .slice(0, 5)
  .map((app) => ({
    id: app.id,
    action: `${app.position} application at ${app.company}`,
    time: app.applicationDate,
  }));
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <StatsCard
          title="Total Applications"
          value={applications.length}
        />

        <StatsCard
  title="Interviews"
  value={
    applications.filter(
      (app) => app.status === "Interview"
    ).length
  }
/>

       <StatsCard
  title="Selected"
  value={
    applications.filter(
      (app) => app.status === "Selected"
    ).length
  }
/>
      <StatsCard
  title="Rejected"
  value={
    applications.filter(
      (app) => app.status === "Rejected"
    ).length
  }
/>
      </div>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Notifications
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {notifications.map(
            (notification) => (
              <Card key={notification.id}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems:
                        "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Typography>
                      {
                        notification.message
                      }
                    </Typography>

                    <Chip
                      label={
                        notification.type
                      }
                      color="primary"
                    />
                  </Box>
                </CardContent>
              </Card>
            )
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Recent Activity
        </Typography>

        <Card>
          <CardContent>
            {recentActivities.map(
              (activity, index) => (
                <Box
                  key={activity.id}
                >
                  <Box
                    sx={{
                      py: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                    >
                      {
                        activity.action
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {
                        activity.time
                      }
                    </Typography>
                  </Box>

                  {index !==
                    recentActivities.length -
                      1 && (
                    <Divider />
                  )}
                </Box>
              )
            )}
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 4 }}>
        <AnalyticsChart
  applications={applications}
/>
      </Box>
    </div>
  );
}

export default Dashboard;