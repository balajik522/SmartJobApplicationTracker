import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function Profile() {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    setUser(currentUser);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Profile
      </Typography>

      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,
              }}
            >
              {user?.fullName
                ?.charAt(0)
                ?.toUpperCase()}
            </Avatar>

            <Typography variant="h5">
              {user?.fullName ||
                "User"}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: 2 }}
          >
            <strong>Email:</strong>{" "}
            {user?.email ||
              "Not Available"}
          </Typography>

          <Typography
            variant="body1"
          >
            <strong>Status:</strong>{" "}
            Logged In
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;