package com.smartjob.backend.service;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.smartjob.backend.dto.ResumeAnalysisResponse;

@Service
public class ResumeAnalyzerService {

    public ResumeAnalysisResponse analyzeResume(
        MultipartFile file,
        String jobDescription) {

        try {

            PDDocument document = Loader.loadPDF(file.getBytes());

            PDFTextStripper pdfTextStripper = new PDFTextStripper();

            String text = pdfTextStripper.getText(document);

            document.close();

            int wordCount = text.trim().isEmpty()
                    ? 0
                    : text.trim().split("\\s+").length;

            boolean hasEmail =
                    text.matches("(?s).*\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b.*");

            boolean hasPhone =
                    text.matches("(?s).*\\b\\d{10}\\b.*");

            int atsScore = 0;

if (wordCount >= 100) {
    atsScore += 20;
}

if (wordCount >= 300) {
    atsScore += 20;
}

if (hasEmail) {
    atsScore += 20;
}

if (hasPhone) {
    atsScore += 20;
}
String resumeText = text.toLowerCase();
String jdText = jobDescription.toLowerCase();

java.util.List<String> skills =
        java.util.Arrays.asList(
                "java",
                "spring",
                "spring boot",
                "react",
                "javascript",
                "typescript",
                "sql",
                "mysql",
                "postgresql",
                "docker",
                "kubernetes",
                "aws",
                "azure",
                "git",
                "rest api",
                "microservices",
                "python"
        );

java.util.List<String> matchedSkills =
        new java.util.ArrayList<>();

java.util.List<String> missingSkills =
        new java.util.ArrayList<>();

for (String skill : skills) {

    if (
            jdText.contains(skill)
                    &&
            resumeText.contains(skill)
    ) {
        matchedSkills.add(skill);
    }

    if (
            jdText.contains(skill)
                    &&
            !resumeText.contains(skill)
    ) {
        missingSkills.add(skill);
    }
}

if (!skills.isEmpty()) {

    int totalRequired =
            matchedSkills.size()
                    +
            missingSkills.size();

    if (totalRequired > 0) {

        atsScore =
                (matchedSkills.size() * 100)
                        /
                totalRequired;
    }
}
           String feedback;

if (missingSkills.isEmpty()) {

    feedback =
            "Excellent match for the job description.";

} else {

    feedback =
            "Missing skills: "
                    +
            String.join(
                    ", ",
                    missingSkills
            );
}
System.out.println("================================");
System.out.println("Job Description: " + jobDescription);
System.out.println("Matched Skills: " + matchedSkills);
System.out.println("Missing Skills: " + missingSkills);
System.out.println("ATS Score: " + atsScore);
System.out.println("================================");
       return new ResumeAnalysisResponse(
        atsScore,
        wordCount,
        hasEmail,
        hasPhone,
        feedback,
        matchedSkills,
        missingSkills
);

        } catch (Exception e) {
            throw new RuntimeException("Failed to analyze resume", e);
        }
    }
}