import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";

function JobDescriptionMatcher() {
  const [jobDescription, setJobDescription] =
    useState("");

  const [matchScore, setMatchScore] =
    useState(null);

  const resumeSkills = [
    "Java",
    "React",
    "Spring Boot",
    "SQL",
    "Git",
  ];

  const jobSkills = [
    "Java",
    "React",
    "AWS",
    "Docker",
    "SQL",
  ];

  const matchedSkills =
    resumeSkills.filter((skill) =>
      jobSkills.includes(skill)
    );

  const missingSkills =
    jobSkills.filter(
      (skill) =>
        !resumeSkills.includes(skill)
    );

  const recommendations = [
    "Add missing technical skills to your resume.",
    "Include projects demonstrating relevant experience.",
    "Highlight achievements using measurable results.",
  ];

  const handleAnalyze = () => {
    if (!jobDescription.trim()) {
      setMatchScore(null);
      return;
    }

    setMatchScore(82);
  };

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h1>
        Job Description Matcher
      </h1>

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Paste Job Description
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={10}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(
                e.target.value
              )
            }
            placeholder="Paste the job description here..."
          />

          <Box
            sx={{
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={
                handleAnalyze
              }
            >
              Analyze Match
            </Button>
          </Box>

          {matchScore !== null && (
            <>
              <Alert
                severity="success"
                sx={{
                  mt: 3,
                }}
              >
                Resume Match Score:{" "}
                <strong>
                  {matchScore}%
                </strong>
              </Alert>

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
                    Skills Comparison
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    Resume Skills
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {resumeSkills.map(
                      (skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                        />
                      )
                    )}
                  </Box>

                  <Typography sx={{ mb: 1 }}>
                    Job Skills
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {jobSkills.map(
                      (skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          color="secondary"
                        />
                      )
                    )}
                  </Box>

                  <Typography sx={{ mb: 1 }}>
                    Matching Skills
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {matchedSkills.map(
                      (skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          color="success"
                        />
                      )
                    )}
                  </Box>
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
                    Recommendations
                  </Typography>

                  <Typography
                    sx={{
                      mb: 2,
                    }}
                  >
                    Missing Skills
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {missingSkills.map(
                      (skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          color="warning"
                        />
                      )
                    )}
                  </Box>

                  <Typography
                    sx={{
                      mb: 1,
                    }}
                  >
                    Suggested Improvements
                  </Typography>

                  {recommendations.map(
                    (
                      recommendation,
                      index
                    ) => (
                      <Typography
                        key={index}
                        sx={{
                          mb: 1,
                        }}
                      >
                        • {recommendation}
                      </Typography>
                    )
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default JobDescriptionMatcher;