# Full-Stack Authentication Project

This repository contains a full-stack authentication project with a **React-based frontend** and an **Express.js-based backend**. The project is designed to demonstrate user authentication using **JWT (JSON Web Tokens)**, **React Router**, and **secure API endpoints**.

---

## Project Structure

The project is divided into two main directories:

### 1. **Frontend** (`authentication/`)

- **Framework**: React
- **Features**:

  - React Router for client-side routing
  - TailwindCSS for styling
  - TypeScript for type safety
  - Hot Module Replacement (HMR) for development
  - Docker support for containerized deployment

- **Key Files**:
  - `app/routes/`: Contains React Router route components (e.g., `home.tsx`, `login.tsx`, `dashboard.tsx`).
  - `vite.config.ts`: Configuration for Vite bundler.
  - `Dockerfile`: Docker configuration for building and running the frontend.
  - `.env`: Environment variables for secure configuration.

### 2. **Backend** (`server/`)

- **Framework**: Express.js
- **Features**:

  - JWT-based authentication
  - Secure API endpoints
  - Middleware for CORS and cookie parsing
  - Environment variable support via `dotenv`
  - Docker support for containerized deployment

- **Key Files**:
  - `server.js`: Main server file with API routes for authentication and protected endpoints.
  - `.env`: Environment variables for secrets like `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET`.
  - `Dockerfile`: Docker configuration for building and running the backend.

---

## Features

- 🔒 **Authentication**: Secure user authentication using JWT.
- 🚀 **Frontend**: React with React Router and TailwindCSS for a modern UI.
- ⚡ **Backend**: Express.js for API endpoints and middleware.
- 📦 **Dockerized**: Both frontend and backend are containerized for easy deployment.
- 🔄 **Hot Reloading**: HMR for frontend development.
- 📖 **TypeScript**: Type-safe development for both frontend and backend.

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (for package management)
- **Docker** (optional, for containerized deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/fullstack-authentication.git
   cd fullstack-authentication
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd authentication
   pnpm install
   cd ../server
   pnpm install
   ```

---

## Running the Project

### Frontend

1. Navigate to the `authentication/` directory:

   ```bash
   cd authentication
   ```

2. Start the development server:

   ```bash
   pnpm run dev
   ```

3. Open your browser at `http://localhost:5173`.

### Backend

1. Navigate to the `server/` directory:

   ```bash
   cd server
   ```

2. Start the server:

   ```bash
   pnpm run dev
   ```

3. The backend will run at `http://localhost:3000`.

---

## Building for Production

### Frontend

1. Navigate to the `authentication/` directory:

   ```bash
   cd authentication
   ```

2. Build the production assets:

   ```bash
   pnpm run build
   ```

3. The build output will be in the `build/` directory.

### Backend

1. Navigate to the `server/` directory:

   ```bash
   cd server
   ```

2. Start the production server:
   ```bash
   pnpm run prod
   ```

---

## Deployment

### Docker Deployment

1. Build and run the frontend:

   ```bash
   cd authentication
   docker build -t frontend .
   docker run -p 5173:5173 frontend
   ```

2. Build and run the backend:
   ```bash
   cd server
   docker build -t backend .
   docker run -p 3000:3000 backend
   ```

### Platforms

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

---

## Environment Variables

### Frontend (`authentication/.env`)

- `ACCESS_TOKEN_SECRET`: Secret for signing access tokens.
- `REFRESH_TOKEN_SECRET`: Secret for signing refresh tokens.

### Backend (`server/.env`)

- `ACCESS_TOKEN_SECRET`: Secret for verifying access tokens.
- `REFRESH_TOKEN_SECRET`: Secret for verifying refresh tokens.

---

## API Endpoints

### Public Endpoints

- `POST /api/signin`: Authenticate a user and return a JWT.

### Protected Endpoints

- `GET /api/protected`: Access protected data (requires a valid JWT).

---

## Styling

The frontend uses **TailwindCSS** for styling. You can customize the styles in the `tailwind.config.js` file.

---

## License

This project is licensed under the MIT License.

---

Built with ❤️ using React and Express.js.
