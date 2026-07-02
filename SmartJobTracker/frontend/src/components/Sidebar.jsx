import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem(
      "isAuthenticated"
    );

    navigate("/login");
  };

  const menuStyle = {
    background: "none",
    border: "none",
    color: "white",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "8px",
  };

  const activeStyle = {
    backgroundColor: "#1E293B",
  };

  const isActive = (path) =>
    location.pathname === path;

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#0F172A",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>Menu</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            ...menuStyle,
            ...(isActive("/dashboard") ||
            isActive("/")
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          📊 Dashboard
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive(
              "/applications"
            )
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate("/applications")
          }
        >
          💼 Applications
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive("/profile")
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate("/profile")
          }
        >
          👤 Profile
        </button>

        <button
          style={menuStyle}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          📈 Analytics
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive(
              "/resume-analyzer"
            )
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate(
              "/resume-analyzer"
            )
          }
        >
          📄 Resume Analyzer
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive(
              "/job-description-matcher"
            )
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate(
              "/job-description-matcher"
            )
          }
        >
          🎯 Job Matcher
        </button>

        <button
          style={menuStyle}
          onClick={() =>
            navigate(
              "/Interview Reminders"
            )
          }
        >
          🔔 Interview Reminders
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive(
              "/ai-career-assistant"
            )
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate(
              "/ai-career-assistant"
            )
          }
        >
          🤖 AI Career Assistant
        </button>

        <button
          style={{
            ...menuStyle,
            ...(isActive("/login")
              ? activeStyle
              : {}),
          }}
          onClick={() =>
            navigate("/login")
          }
        >
          🔐 Login
        </button>

        <button
          style={menuStyle}
          onClick={() =>
            navigate("/Settings")
          }
        >
          ⚙️ Settings
        </button>

        <button
          style={{
            ...menuStyle,
            marginTop: "20px",
            border:
              "1px solid rgba(255,255,255,0.2)",
          }}
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}