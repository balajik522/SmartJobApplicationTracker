import Box from "@mui/material/Box";

function PageContainer({ children }) {
  return (
    <Box
      sx={{
        padding: 3,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}

export default PageContainer;