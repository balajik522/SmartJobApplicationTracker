package com.smartjob.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartjob.backend.entity.JobApplication;
import com.smartjob.backend.service.JobApplicationService;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class JobApplicationController {

    private final JobApplicationService service;

    public JobApplicationController(
            JobApplicationService service) {
        this.service = service;
    }

    @GetMapping
    public List<JobApplication> getAllApplications() {
        return service.getAllApplications();
    }

    @PostMapping
    public JobApplication createApplication(
            @RequestBody JobApplication application) {
        return service.createApplication(application);
    }
    @DeleteMapping("/{id}")
public void deleteApplication(
        @PathVariable Long id) {
    service.deleteApplication(id);
}

@PutMapping("/{id}")
public JobApplication updateApplication(
        @PathVariable Long id,
        @RequestBody JobApplication application) {

    return service.updateApplication(
            id,
            application);
}
}