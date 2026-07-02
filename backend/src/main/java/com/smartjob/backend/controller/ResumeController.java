package com.smartjob.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smartjob.backend.dto.ResumeAnalysisResponse;
import com.smartjob.backend.service.ResumeAnalyzerService;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    public ResumeController() {
        System.out.println("ResumeController Loaded");
    }
    @Autowired
    private ResumeAnalyzerService resumeAnalyzerService;

    @PostMapping("/analyze")
    public ResponseEntity<ResumeAnalysisResponse> analyzeResume(
        @RequestParam("file") MultipartFile file,
        @RequestParam("jobDescription") String jobDescription) {

        ResumeAnalysisResponse response =
        resumeAnalyzerService.analyzeResume(
                file,
                jobDescription
        );

        return ResponseEntity.ok(response);
    }
}