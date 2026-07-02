import { useState } from "react";

import { Card, CardContent, Typography, Box } from "@mui/material";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ResumePreview({ file }) {
  const [numPages, setNumPages] =
    useState(null);

  const onDocumentLoadSuccess = ({
    numPages,
  }) => {
    setNumPages(numPages);
  };

  const isPdf =
    file?.type ===
    "application/pdf";

  return (
    <Card
      sx={{
        mt: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          Resume Preview
        </Typography>

        {!file ? (
          <Box
            sx={{
              height: 500,
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
        ) : isPdf ? (
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
              maxHeight: 700,
              overflow: "auto",
            }}
          >
            <Document
              file={file}
              onLoadSuccess={
                onDocumentLoadSuccess
              }
            >
              {Array.from(
                new Array(
                  numPages || 0
                ),
                (_, index) => (
                  <Box
                    key={
                      index
                    }
                    sx={{
                      mb: 2,
                      display:
                        "flex",
                      justifyContent:
                        "center",
                    }}
                  >
                    <Page
                      pageNumber={
                        index + 1
                      }
                    />
                  </Box>
                )
              )}
            </Document>
          </Box>
        ) : (
          <Box
            sx={{
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography>
              Preview currently supports PDF files.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ResumePreview;