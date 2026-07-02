package com.smartjob.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smartjob.backend.entity.JobApplication;
import com.smartjob.backend.repository.JobApplicationRepository;

@Service
public class JobApplicationService {

    private final JobApplicationRepository repository;

    public JobApplicationService(
            JobApplicationRepository repository) {
        this.repository = repository;
    }

    public List<JobApplication> getAllApplications() {
        return repository.findAll();
    }

    public JobApplication createApplication(
            JobApplication application) {

        return repository.saveAndFlush(application);
    }
    public void deleteApplication(Long id) {
    repository.deleteById(id);
    }
    public JobApplication updateApplication(
        Long id,
        JobApplication updatedApplication) {

    JobApplication existingApplication =
            repository.findById(id)
                    .orElseThrow();

    existingApplication.setCompany(
            updatedApplication.getCompany());

    existingApplication.setPosition(
            updatedApplication.getPosition());

    existingApplication.setStatus(
            updatedApplication.getStatus());

    existingApplication.setApplicationDate(
            updatedApplication.getApplicationDate());

    return repository.save(existingApplication);
    }
}