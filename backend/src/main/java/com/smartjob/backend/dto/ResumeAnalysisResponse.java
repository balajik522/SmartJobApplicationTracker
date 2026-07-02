package com.smartjob.backend.dto;
import java.util.List;

public class ResumeAnalysisResponse {

    private int atsScore;
    private int wordCount;
    private boolean hasEmail;
    private boolean hasPhone;
    private String feedback;
    private List<String> matchedSkills;
    private List<String> missingSkills;

    public ResumeAnalysisResponse() {
    }

    public ResumeAnalysisResponse(int atsScore, int wordCount,
                              boolean hasEmail,
                              boolean hasPhone,
                              String feedback,
                              List<String> matchedSkills,
                              List<String> missingSkills) {
    this.atsScore = atsScore;
    this.wordCount = wordCount;
    this.hasEmail = hasEmail;
    this.hasPhone = hasPhone;
    this.feedback = feedback;
    this.matchedSkills = matchedSkills;
    this.missingSkills = missingSkills;
}

    public int getAtsScore() {
        return atsScore;
    }

    public void setAtsScore(int atsScore) {
        this.atsScore = atsScore;
    }

    public int getWordCount() {
        return wordCount;
    }

    public void setWordCount(int wordCount) {
        this.wordCount = wordCount;
    }

    public boolean isHasEmail() {
        return hasEmail;
    }

    public void setHasEmail(boolean hasEmail) {
        this.hasEmail = hasEmail;
    }

    public boolean isHasPhone() {
        return hasPhone;
    }

    public void setHasPhone(boolean hasPhone) {
        this.hasPhone = hasPhone;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
    public List<String> getMatchedSkills() {
    return matchedSkills;
}

public void setMatchedSkills(List<String> matchedSkills) {
    this.matchedSkills = matchedSkills;
}

public List<String> getMissingSkills() {
    return missingSkills;
}

public void setMissingSkills(List<String> missingSkills) {
    this.missingSkills = missingSkills;
}
}