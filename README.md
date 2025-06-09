# Module Federation Turborepo

This is a monorepo using Turborepo with Module Federation, containing:

- `apps/host`: React host application (port 3000)
- `apps/react-remote`: React remote application (port 3002)

## Features

- 🚀 **Turborepo** for fast, incremental builds
- 🔄 **Module Federation** for micro-frontend architecture
- ⚛️ **React** for both host and remote applications
- 📦 **Webpack** for bundling

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development servers:

```bash
npm run dev
```

This will start all applications in development mode:

- Host app: http://localhost:3000
- React Remote: http://localhost:3002

## Available Scripts

- `npm run build` - Build all applications
- `npm run dev` - Start all applications in development mode
- `npm run lint` - Run linting
- `npm run clean` - Clean all build artifacts and dependencies
- `npm run format` - Format code with Prettier

## Project Structure

```
├── apps/
│   ├── host/           # React host application
│   │   ├── public/     # Static files
│   │   └── src/        # Source files
│   └── react-remote/   # React remote application
│       ├── public/     # Static files
│       └── src/        # Source files
├── packages/           # Shared packages (if any)
├── package.json        # Root package.json
├── turbo.json         # Turborepo configuration
└── README.md
```

## Module Federation

This project uses Webpack's Module Federation to share components between applications:

- The host application (`apps/host`) consumes components from the remote application
- The remote application (`apps/react-remote`) exposes components to be consumed by the host
- Shared dependencies (React, React DOM) are loaded only once

## Development

1. The host application runs on port 3000 and serves as the main entry point
2. The remote application runs on port 3002 and exposes its components
3. Changes in either application will trigger hot reloading
4. The host application can dynamically load components from the remote application

---

# Hot Reloading

Host app: http://localhost:3000

![alt text](image.png)

React Remote: http://localhost:3002

![alt text](image-1.png)

## Modified remote app

![alt text](image-2.png)

Refresh is all that needed to update the host app:

![alt text](image-3.png)
