import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleRegister = () => {
    setError("");
    setSuccess("");

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    if (
      password !== confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    const existingUser =
      users.find(
        (user) =>
          user.email.toLowerCase() ===
          email.toLowerCase()
      );

    if (existingUser) {
      setError(
        "Email is already registered."
      );
      return;
    }

    const newUser = {
      id: Date.now(),
      fullName,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setSuccess(
      "Registration successful. Redirecting to login..."
    );

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
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
          width: 450,
          maxWidth: "100%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
          >
            Register
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          )}

          {success && (
            <Alert
              severity="success"
              sx={{ mb: 2 }}
            >
              {success}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            value={fullName}
            onChange={(e) =>
              setFullName(
                e.target.value
              )
            }
          />

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

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
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
              handleRegister
            }
          >
            Register
          </Button>

          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;