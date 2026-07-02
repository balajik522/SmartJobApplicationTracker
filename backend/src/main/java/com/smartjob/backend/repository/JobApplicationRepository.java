package com.smartjob.backend.repository;

import com.smartjob.backend.entity.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

}