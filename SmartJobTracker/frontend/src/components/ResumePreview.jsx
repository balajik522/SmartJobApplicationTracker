import { Card, CardContent, Typography, Box } from "@mui/material";

function ResumePreview({ file }) {
  return (
    <Card
      sx={{
        mt: 3,
        height: 500,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Resume Preview
        </Typography>

        {!file ? (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography color="text.secondary">
              Upload a resume to preview it here
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
              overflow: "auto",
              bgcolor: "background.default",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              File Selected
            </Typography>

            <Typography sx={{ mt: 2 }}>
              {file.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Resume preview rendering will be connected in the next step.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ResumePreview;