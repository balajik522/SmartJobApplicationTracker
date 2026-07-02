import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobDescriptionMatcher from "./pages/JobDescriptionMatcher";
import AICareerAssistant from "./pages/AICareerAssistant";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App({
  darkMode,
  setDarkMode,
}) {
  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  useEffect(() => {
    const auth =
      localStorage.getItem(
        "isAuthenticated"
      );

    setIsAuthenticated(
      auth === "true"
    );
  }, []);

  const isAuthPage =
    window.location.pathname ===
      "/login" ||
    window.location.pathname ===
      "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <div
        style={{
          display: "flex",
          position: "relative",
        }}
      >
        {!isAuthPage && <Sidebar />}

        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {!isAuthPage && (
            <div
              style={{
                display: "flex",
                justifyContent:
                  "flex-end",
                padding: "16px",
              }}
            >
              <button
                onClick={() =>
                  setDarkMode(
                    !darkMode
                  )
                }
                style={{
                  padding:
                    "10px 16px",
                  borderRadius:
                    "10px",
                  cursor: "pointer",
                }}
              >
                {darkMode
                  ? "☀️ Light"
                  : "🌙 Dark"}
              </button>
            </div>
          )}

          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/applications"
              element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resume-analyzer"
              element={
                <ProtectedRoute>
                  <ResumeAnalyzer />
                </ProtectedRoute>
              }
            />

            <Route
              path="/job-description-matcher"
              element={
                <ProtectedRoute>
                  <JobDescriptionMatcher />
                </ProtectedRoute>
              }
            />

            <Route
              path="/ai-career-assistant"
              element={
                <ProtectedRoute>
                  <AICareerAssistant />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;