# LMS Backend API

This project is a RESTful API for a Course Management System within a Learning Management System (LMS). The API supports user authentication, course management (CRUD operations), and progress tracking. It demonstrates handling databases, securing endpoints, and managing relationships between different entities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Register and Login)
- Course Management (Create, Read, Update, Delete)
- Progress Tracking for Users
- Role-based Access Control (Students and Teachers)
- JWT Authentication

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/lms_backend.git
    cd lms_backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Database Setup

1. Ensure you have MySQL installed and running.

2. Create the database:
    ```sh
    mysql -u root -p
    CREATE DATABASE new_database;
    ```

3. Run the following command to sync the models with the database:
    ```sh
    npm start server
    ```

## Usage

Start the server:
```sh
npm start server
```
## API Endpoints

### User Authentication
POST /register: Register a new user (student or teacher)
```
{
  "name": "string",
  "password": "string",
  "email:"string"
  "role": "student" // or "teacher",
  
}
```
## POST /login: Authenticate a user and provide a token
```
{
  "username": "string",
  "password": "string"
}
```
## Course Management
### GET courses/: Retrieve a list of all courses (Authenticated users)
### GET courses/:id: Retrieve details of a specific course (Authenticated users)
### POST courses/: Create a new course (Teachers only)
### DELETE courses/:id: Delete a course (Teachers only)
```
{
  "title": "string",
  "description": "string"
}
```
## Progress Tracking
## GET /users/:id/progress: Retrieve progress for a specific user (Authenticated users)
## POST /users/:id/progress: Update progress for a specific user (Authenticated users)
```
{
  "courseId": 1,
  "enroll": true,
  "status": "in progress"
}
```
