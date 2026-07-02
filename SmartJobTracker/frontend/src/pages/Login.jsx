import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

 const handleLogin = () => {
  if (
    !email.trim() ||
    !password.trim()
  ) {
    return;
  }

  localStorage.setItem(
    "isAuthenticated",
    "true"
  );

  window.location.href =
    "/dashboard";
};

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: "100%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
          >
            Login
          </Typography>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
            }}
            onClick={
              handleLogin
            }
          >
            Login
          </Button>

          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;