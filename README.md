# FreeCodeCamp Node.js Study Project

A comprehensive Node.js project setup designed for learning backend development through the FreeCodeCamp curriculum. This project provides a solid foundation for understanding Express.js, API development, and Node.js fundamentals.

## 🎯 Purpose

This project serves as a learning platform for FreeCodeCamp's Backend Development and APIs certification. It includes practical implementations of common backend challenges and microservices.

## 🚀 Features

- **Express.js Server Setup**: Complete server configuration with middleware
- **RESTful API Endpoints**: Multiple API routes demonstrating different concepts
- **Microservices**: Implementation of FreeCodeCamp's popular microservice challenges
- **Error Handling**: Proper error handling and validation
- **Static File Serving**: Frontend integration with Bootstrap and Font Awesome
- **Environment Configuration**: Proper environment variable handling

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Basic understanding of JavaScript
- Text editor or IDE

## 🛠 Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file** (optional):
   ```bash
   cp .env.example .env
   ```

4. **Start the server**:
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the application**:
   Open your browser to `http://localhost:5000`

## 🔗 API Endpoints

### GET Endpoints

- **`/`** - Homepage with project documentation
- **`/api/hello`** - Basic JSON response example
- **`/api/echo/:word`** - Echo service demonstrating URL parameters
- **`/api/whoami`** - Request header parser microservice
- **`/api/timestamp/:date?`** - Timestamp microservice (FreeCodeCamp challenge)

### POST Endpoints

- **`/api/data`** - Data submission example with validation

### Example API Calls

```bash
# Basic hello endpoint
curl http://localhost:5000/api/hello

# Echo service
curl http://localhost:5000/api/echo/freecodecamp

# Timestamp service
curl http://localhost:5000/api/timestamp/2023-12-25
curl http://localhost:5000/api/timestamp/1703462400000

# Request header parser
curl http://localhost:5000/api/whoami

# POST data example
curl -X POST http://localhost:5000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "message": "Hello from FreeCodeCamp!"}'
