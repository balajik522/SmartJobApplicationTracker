import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function AICareerAssistant() {
  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
  useState(() => {
    const savedMessages =
      localStorage.getItem(
        "careerAssistantMessages"
      );

    return savedMessages
      ? JSON.parse(savedMessages)
      : [];
  })
  ;useEffect(() => {
  localStorage.setItem(
    "careerAssistantMessages",
    JSON.stringify(messages)
  );
}, [messages]);

  const handleSend = () => {
  if (!message.trim()) {
    return;
  }

  const userMessage = {
    sender: "user",
    text: message,
  };

  const aiMessage = {
    sender: "ai",
    text: "Focus on highlighting your technical skills, measurable achievements, and relevant projects to improve your job applications.",
  };

  setMessages([
    ...messages,
    userMessage,
    aiMessage,
  ]);

  setMessage("");
};

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h1>
        AI Career Assistant
      </h1>

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Career Chat
          </Typography>

          <Box
            sx={{
              minHeight: 300,
              maxHeight: 400,
              overflowY: "auto",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
              mb: 3,
            }}
          >
            {messages.length === 0 ? (
              <Typography
                color="text.secondary"
              >
                Start a conversation with the AI Career Assistant.
              </Typography>
            ) : (
              messages.map(
                (
                  msg,
                  index
                ) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                    >
                      {msg.sender ===
                      "user"
                        ? "You"
                        : "AI"}
                    </Typography>

                    <Typography>
                      {msg.text}
                    </Typography>
                  </Paper>
                )
              )
            )}
          </Box>

          <TextField
            fullWidth
            multiline
            rows={3}
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Ask a career question..."
          />

          <Box
            sx={{
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={
                handleSend
              }
            >
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AICareerAssistant;