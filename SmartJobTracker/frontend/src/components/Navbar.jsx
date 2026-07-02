import Logo from "./Logo";

export default function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Smart Job Application Tracker</h2>

      <Logo />
    </div>
  );
}