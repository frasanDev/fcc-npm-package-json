# FreeCodeCamp Node.js Study Project

## Overview

This is a Node.js learning project designed to follow the FreeCodeCamp Backend Development and APIs certification curriculum. The application serves as a practical implementation platform for understanding Express.js fundamentals, RESTful API development, and common backend microservice challenges.

## System Architecture

### Backend Architecture
- **Framework**: Express.js 5.1.0 for HTTP server and routing
- **Runtime**: Node.js (minimum version 14)
- **Architecture Pattern**: Simple MVC-style structure with routes defined in the main server file
- **Middleware Stack**: CORS, JSON parsing, URL-encoded body parsing, and static file serving

### Frontend Architecture
- **Static Files**: Served from `/public` directory using Express static middleware
- **Templates**: HTML views served from `/views` directory
- **Styling**: Bootstrap 5.1.3 for responsive design with custom CSS
- **Icons**: Font Awesome 6.0.0 for UI icons

## Key Components

### Server Configuration (`server.js`)
- **Express Application**: Main application instance with middleware configuration
- **Port Management**: Environment-based port configuration (default: 5000)
- **Static File Serving**: Public assets served from `/public` directory
- **View Engine Setup**: Configured to serve HTML templates from `/views`

### API Endpoints
- **Health Check**: `/api/hello` - Basic JSON response with timestamp
- **Echo Service**: `/api/echo/:word` - Parameter demonstration with string manipulation
- **Additional Endpoints**: Placeholder structure for FreeCodeCamp microservice challenges

### Frontend Components
- **Homepage**: Single-page application showcasing available API endpoints
- **Responsive Design**: Bootstrap-based layout optimized for all device sizes
- **FreeCodeCamp Theming**: Custom CSS variables matching FreeCodeCamp brand colors

## Data Flow

1. **Request Processing**: Express receives HTTP requests and applies middleware stack
2. **Route Matching**: Express router matches incoming requests to defined endpoints
3. **Response Generation**: Route handlers process requests and generate JSON or HTML responses
4. **Static Asset Delivery**: Express static middleware serves CSS, JavaScript, and other assets

## External Dependencies

### Production Dependencies
- **express**: ^5.1.0 - Web application framework
- **cors**: ^2.8.5 - Cross-Origin Resource Sharing middleware
- **dotenv**: ^17.0.0 - Environment variable management

### Frontend Dependencies (CDN)
- **Bootstrap**: 5.1.3 - CSS framework for responsive design
- **Font Awesome**: 6.0.0 - Icon library for UI elements

## Deployment Strategy

### Development Environment
- **Start Command**: `npm start` (runs `node server.js`)
- **Environment Variables**: Managed through `.env` file (optional)
- **Static Assets**: Served directly by Express in development

### Production Considerations
- Port configuration through `PORT` environment variable
- CORS enabled for all origins (may need restriction in production)
- Static file serving optimized for Express default settings

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Development Notes

This project is structured as a learning platform with room for expansion. The current implementation provides:

- Basic Express.js server setup with essential middleware
- Template structure for adding FreeCodeCamp microservice challenges
- Frontend interface for testing and demonstrating API functionality
- Clean separation of concerns with public assets and view templates

The architecture supports easy addition of new API endpoints, database integration (currently no database configured), and additional microservices as students progress through the FreeCodeCamp curriculum.