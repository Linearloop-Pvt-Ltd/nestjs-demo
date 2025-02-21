# NestJS Project Setup and Usage Guide

Welcome to the NestJS Starter Project! Follow this guide to seamlessly set up and run the application in your development or production environment.

## 📌 Prerequisites

Ensure your system meets the following requirements:

- [Node.js](https://nodejs.org/en/download/) (Recommended: Latest LTS version `>=20.x`)
- **npm** (bundled with Node.js) or **yarn**
- [Git](https://git-scm.com/downloads): It is an open source version control system.

Verify your Node.js installation:

```bash
node -v
```

## 🚀 Installation & Setup

### 1. Install NestJS CLI

The NestJS CLI facilitates project scaffolding and efficient development.

```bash
npm install -g @nestjs/cli
```

### 2. Clone and Navigate to the Project

Clone the repository

```
git clone https://github.com/Linearloop-Pvt-Ltd/nestjs-demo.git
```

Ensure you are in the correct directory:

```bash
cd nestjs-demo
```

### 3. Install Dependencies

Fetch all required packages using:

```bash
npm install
```

### 4. Building the Project

To compile the application for production, run:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory.

### Example Build Output

```bash
> hello-world@1.0.0 build
> nest build

✨ Done in 2.34s.
```

### 5. Running the Built Application

To execute the compiled application:

```bash
node dist/main.js
```

This will start the application on `localhost:3000`

### 6. To Run the Application in Local Environment

Execute the following commands to start the application:

```bash
# Development mode
npm run start

# Watch mode (Hot-reloading during development)
npm run start:dev

# Production mode
npm run start:prod
```

## 🏁 Entry Point

The main entry point for the application is `main.js`, located in the `dist/` directory after building. It is responsible for bootstrapping the NestJS application.

## 📖 Reference

Below are useful links and documentation to help you understand and work with this NestJS project effectively:

- [NestJS Documentation](https://docs.nestjs.com/) – Official NestJS documentation for in-depth guides and best practices.
- [NestJS CLI](https://docs.nestjs.com/cli/overview) – Reference for using NestJS CLI commands efficiently.
- [Node.js Downloads](https://nodejs.org/en/download/) – Get the latest stable version of Node.js.
- [npm Documentation](https://docs.npmjs.com/) – Learn about npm commands and package management.
- [Yarn Package Manager](https://classic.yarnpkg.com/en/docs) – Alternative package manager for JavaScript projects.
- [Git Documentation](https://git-scm.com/doc) – Version control documentation to manage your code repository.

These resources will help you troubleshoot issues, optimize development workflows, and expand your knowledge of NestJS and its ecosystem. 🚀
