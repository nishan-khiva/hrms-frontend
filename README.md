# HRMS (Human Resource Management System)

A full-stack Human Resource Management System built with the MERN Stack. This application helps organizations manage employees, attendance, leaves, shifts, and authentication from a centralized dashboard.

## Features

### Authentication & Authorization

* Secure Login & Registration
* JWT Authentication
* Role-Based Access Control (Admin / Employee)

### Employee Management

* Add Employee
* Update Employee Details
* Delete Employee
* Employee Profile Management

### Attendance Management

* Employee Check-In
* Employee Check-Out
* Daily Attendance Tracking
* Working Hours Calculation

### Leave Management

* Apply Leave
* Leave Approval/Rejection
* Leave Balance Tracking

### Shift Management

* Assign Shifts
* Manage Working Hours
* Shift Scheduling

### Dashboard

* Employee Statistics
* Attendance Summary
* Leave Reports

## Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### DevOps

* Docker
* Docker Compose
* Nginx

## Project Structure

```
HRMS
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── middleware
│   └── config
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
└── docker-compose.yml
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd HRMS
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

## Docker Setup

### Build Containers

```bash
docker compose build
```

### Run Application

```bash
docker compose up -d
```

### Stop Containers

```bash
docker compose down
```

## Future Enhancements

* Face Recognition Attendance
* Webcam Selfie Verification
* Payroll Management
* Email Notifications
* Employee Performance Tracking
* Multi-Company Support

## Author

Developed by Nishan Singh Khiva 


