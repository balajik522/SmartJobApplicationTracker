import Typography from "@mui/material/Typography";

function PageTitle({ children }) {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      gutterBottom
    >
      {children}
    </Typography>
  );
}

export default PageTitle;