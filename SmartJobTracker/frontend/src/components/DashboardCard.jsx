import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function DashboardCard({ title, value }) {
  return (
    <Card
      sx={{
        minWidth: 220,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;