import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function AnalyticsChart({
  applications,
}) {
  const data = {
  labels: [
    "Applied",
    "Assessment",
    "Interview",
    "Selected",
    "Rejected",
  ],

  datasets: [
    {
      label: "Applications",

      data: [
        applications.filter(
          (app) =>
            app.status === "Applied"
        ).length,

        applications.filter(
          (app) =>
            app.status === "Assessment"
        ).length,

        applications.filter(
          (app) =>
            app.status === "Interview"
        ).length,

        applications.filter(
          (app) =>
            app.status === "Selected"
        ).length,

        applications.filter(
          (app) =>
            app.status === "Rejected"
        ).length,
      ],

      backgroundColor:
        "rgba(59,130,246,0.7)",
    },
  ],
};
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Application Performance Comparison",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>
        Advanced Application Analytics
      </h2>

      <div
        style={{
          height: "400px",
        }}
      >
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default AnalyticsChart;