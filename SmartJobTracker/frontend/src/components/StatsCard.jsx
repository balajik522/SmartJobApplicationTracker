function StatsCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        minWidth: "220px",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: "#1976d2",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;