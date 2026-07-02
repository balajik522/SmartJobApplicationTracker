# 🚀 Smart Job Application Tracker

A full-stack Job Application Tracking System that helps job seekers organize, monitor, and manage their job search efficiently. The application provides a centralized dashboard to track applications, interview schedules, application status, resume management, and analytics.

---

## 📌 Features

### 👤 User Authentication
- User Registration
- User Login
- Secure Authentication
- Personalized Dashboard

### 📋 Job Application Management
- Add New Job Applications
- Edit Existing Applications
- Delete Applications
- View All Applications
- Search Applications
- Filter Applications

### 📊 Dashboard
- Total Applications
- Applications by Status
- Interview Count
- Offer Count
- Rejection Count
- Pending Applications
- Recent Activity
- Notifications
- Analytics Charts

### 📅 Interview Management
- Interview Date Tracking
- Company Details
- Job Position
- Notes
- Follow-up Tracking

### 📄 Resume Management
- Upload Resume
- Resume Preview
- Resume Download
- Resume Storage

### 🤖 AI Resume Analyzer
- Resume Upload
- Resume Parsing
- Resume Analysis
- ATS-Friendly Score
- Resume Improvement Suggestions

### 📈 Analytics
- Application Status Distribution
- Dashboard Statistics
- Progress Visualization

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS
- Lucide React

## Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- REST APIs
- Maven

## Database
- MySQL

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```
SmartJobApplicationTracker/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/balajik522/SmartJobApplicationTracker.git
```

Move into the project

```bash
cd SmartJobApplicationTracker
```

---

# Backend Setup

Configure your MySQL database in

```
application.properties
```

Example

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/job_tracker
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run the backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs at

```
http://localhost:8080
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# REST API

## Authentication

| Method | Endpoint |
|----------|----------------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Job Applications

| Method | Endpoint |
|----------|----------------------|
| GET | /api/applications |
| GET | /api/applications/{id} |
| POST | /api/applications |
| PUT | /api/applications/{id} |
| DELETE | /api/applications/{id} |

---

# 📸 Screenshots

> Add screenshots after deployment.

Example:

- Login Page
- Register Page
- Dashboard
- Applications Page
- Resume Upload
- Resume Analyzer
- Analytics Dashboard

---

# 🌟 Current Project Status

### Backend

- ✅ Spring Boot REST API
- ✅ MySQL Integration
- ✅ CRUD Operations
- ✅ Service Layer
- ✅ Repository Layer
- ✅ Authentication APIs

### Frontend

- ✅ React + Vite
- ✅ Authentication Pages
- ✅ Dashboard
- ✅ Applications CRUD
- ✅ Resume Upload
- ✅ Resume Preview
- ✅ Notifications
- ✅ Analytics Charts
- ✅ Responsive UI

### AI Features

- ✅ Resume Upload
- ✅ Resume Preview
- ✅ Resume Analyzer Integration

---

# 🚀 Future Enhancements

- Email Notifications
- Interview Reminder Emails
- Calendar Integration
- Company Reviews
- Salary Tracking
- Job Recommendation Engine
- AI Cover Letter Generator
- Resume Version History
- Dark Mode
- Mobile App

---

# 👨‍💻 Author

**Balaji K**

GitHub:
https://github.com/balajik522

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

---

# 📄 License

This project is licensed under the MIT License.