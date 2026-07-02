import { useState } from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ResumePreview from "../components/resume/ResumePreview";

function ResumeAnalyzer() {
  const [file, setFile] =
    useState(null);

  const [dragging, setDragging] =
    useState(false);

  const [error, setError] =
    useState("");

  const [analyzing, setAnalyzing] =
    useState(false);
  const [analysisResult, setAnalysisResult] =
    useState(null);
    const [jobDescription, setJobDescription] =
  useState("");
 const resumeScore =
  analysisResult
    ? analysisResult.atsScore
    : null;

  const extractedSkills =
    file
      ? [
          "Java",
          "React",
          "SQL",
          "Spring Boot",
          "Git",
        ]
      : [];
const resumeSummary =
  file
    ? "Experienced software developer with skills in Java, React, SQL, Spring Boot, and modern web application development."
    : "";
    const resumeMetrics =
  file
    ? {
        skills: extractedSkills.length,
        score: resumeScore,
        experience: "3 Years",
        projects: 5,
      }
    : null;
    const extractedText =
  file
    ? `John Doe

Software Developer

Skills:
Java, React, Spring Boot, SQL, Git

Experience:
Frontend Developer - ABC Company

Education:
Bachelor of Technology in Computer Science`
    : "";
  const handleFile = async (
  selectedFile
) => {
  if (!selectedFile) {
    return;
  }

  if (
    selectedFile.type !==
    "application/pdf"
  ) {
    setError(
      "Only PDF files are allowed"
    );
    return;
  }

  setError("");
  setAnalyzing(true);
  setFile(selectedFile);

  try {
    const formData =
      new FormData();

    formData.append(
      "file",
      selectedFile
    );
    formData.append(
  "jobDescription",
  jobDescription
);

const response =
  await fetch(
    "http://localhost:8080/api/resume/analyze",
    {
      method: "POST",
      body: formData,
    }
  );

console.log(
  "Response Status:",
  response.status
);

const data =
  await response.json();

console.log(
  "Response Data:",
  data
);

setAnalysisResult(
  data
);
  } catch (error) {
    console.error(error);

    setError(
      "Failed to analyze resume"
    );
  } finally {
    setAnalyzing(false);
  }
};
  const handleChange = (
    e
  ) => {
    handleFile(
      e.target.files[0]
    );
  };

  const handleDrop = (
    e
  ) => {
    e.preventDefault();

    setDragging(false);

    if (
      e.dataTransfer.files &&
      e.dataTransfer.files[0]
    ) {
      handleFile(
        e.dataTransfer.files[0]
      );
    }
  };

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h1>
        Resume Analyzer
      </h1>

      <Card
        sx={{
          mb: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            Upload Resume
          </Typography>

          <Box
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() =>
              setDragging(false)
            }
            onDrop={
              handleDrop
            }
            sx={{
              border:
                "2px dashed",
              borderColor:
                dragging
                  ? "primary.main"
                  : "grey.500",
              p: 6,
              borderRadius: 3,
              textAlign:
                "center",
            }}
          >
            <Typography>
              Drag & Drop Resume
            </Typography>

            <Typography
              sx={{
                my: 2,
              }}
            >
              OR
            </Typography>

            <Button
              variant="contained"
              component="label"
            >
              Choose File

              <input
                hidden
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={
                  handleChange
                }
              />
            </Button>

            {analyzing && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <CircularProgress />

                <LinearProgress
                  sx={{
                    mt: 2,
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  Analyzing resume...
                </Typography>
              </Box>
            )}

            {file && (
              <>
                <Alert
                  severity="success"
                  sx={{
                    mt: 3,
                  }}
                >
                  Resume uploaded successfully
                </Alert>

                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  Selected:{" "}
                  {file.name}
                </Typography>
              </>
            )}

            {error && (
              <Alert
                severity="error"
                sx={{
                  mt: 2,
                }}
              >
                {error}
              </Alert>
            )}
          </Box>
        </CardContent>
      </Card>
<Card
  sx={{
    mt: 3,
    mb: 3,
  }}
>
  <CardContent>
    <Typography
      variant="h6"
      gutterBottom
    >
      Job Description
    </Typography>

    <TextField
      fullWidth
      multiline
      rows={8}
      value={jobDescription}
      onChange={(e) =>
        setJobDescription(
          e.target.value
        )
      }
      placeholder="Paste the job description here..."
    />
  </CardContent>
</Card>
      <ResumePreview
        file={file}
      />
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
      Resume Summary
    </Typography>

    <Divider
      sx={{
        mb: 2,
      }}
    />

    {file ? (
      <Typography>
        {resumeSummary}
      </Typography>
    ) : (
      <Typography
        color="text.secondary"
      >
        Upload a resume to generate a summary.
      </Typography>
    )}
  </CardContent>
</Card>
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
      Resume Metrics
    </Typography>

    <Divider
      sx={{
        mb: 3,
      }}
    />

    {resumeMetrics ? (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 2,
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Resume Score
            </Typography>

            <Typography variant="h5">
              {resumeMetrics.score}%
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Skills Found
            </Typography>

            <Typography variant="h5">
              {resumeMetrics.skills}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Experience
            </Typography>

            <Typography variant="h5">
              {resumeMetrics.experience}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Projects
            </Typography>

            <Typography variant="h5">
              {resumeMetrics.projects}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ) : (
      <Typography
        color="text.secondary"
      >
        Upload a resume to view metrics.
      </Typography>
    )}
  </CardContent>
</Card>
<Card
  sx={{
    mt: 3,
    mb: 3,
  }}
>
  <CardContent>
    <Typography
      variant="h6"
      gutterBottom
    >
      Extracted Resume Text
    </Typography>

    <Divider
      sx={{
        mb: 2,
      }}
    />

    {file ? (
      <Box
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: 2,
          maxHeight: 300,
          overflow: "auto",
          whiteSpace: "pre-wrap",
          bgcolor: "background.default",
        }}
      >
        <Typography
          variant="body2"
        >
          {extractedText}
        </Typography>
      </Box>
    ) : (
      <Typography
        color="text.secondary"
      >
        Upload a resume to view extracted text.
      </Typography>
    )}
  </CardContent>
</Card>
      <Card
        sx={{
          mt: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
          >
            Resume Analysis
          </Typography>

          <Box
            sx={{
              mt: 3,
              minHeight: 250,
              border:
                "1px solid",
              borderColor:
                "divider",
              borderRadius: 2,
              p: 3,
            }}
          >
            {file ? (
              <>
                <Typography
                   variant="h3"
                >
                 {resumeScore ?? 0}%
                </Typography>
                <Typography
  sx={{
    mt: 2,
    mb: 2,
  }}
>
  {analysisResult?.feedback}
</Typography>
                <Typography
                  sx={{
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Extracted Skills
                </Typography>

                <Box
  sx={{
    display:
      "flex",
    gap: 1,
    flexWrap:
      "wrap",
  }}
>
  {(analysisResult?.matchedSkills || []).map(
    (
      skill
    ) => (
      <Chip
        key={
          skill
        }
        label={
          skill
        }
        color="success"
      />
    )
  )}
</Box>

<Typography
  sx={{
    mt: 3,
    mb: 2,
  }}
>
  Missing Skills
</Typography>

<Box
  sx={{
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
  }}
>
  {(analysisResult?.missingSkills || []).map(
    (
      skill
    ) => (
      <Chip
        key={skill}
        label={skill}
        color="error"
      />
    )
  )}
</Box>
              </>
            ) : (
              "Upload a resume to analyze"
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResumeAnalyzer;