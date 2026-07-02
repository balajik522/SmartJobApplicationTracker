package com.smartjob.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;

    private String position;

    private String status;

    private String applicationDate;

    public JobApplication() {
    }

    public JobApplication(
            Long id,
            String company,
            String position,
            String status,
            String applicationDate) {
        this.id = id;
        this.company = company;
        this.position = position;
        this.status = status;
        this.applicationDate = applicationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(String applicationDate) {
        this.applicationDate = applicationDate;
    }
}