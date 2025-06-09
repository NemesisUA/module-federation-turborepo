# Module Federation Turborepo

This is a monorepo using Turborepo with Module Federation, containing:

- `apps/host`: React host application
- `apps/next-remote`: Next.js remote application
- `apps/react-remote`: React remote application

## Prerequisites

- Node.js 16.x or later
- Yarn 1.22.x or later

## Getting Started

1. Install dependencies:
```bash
yarn install
```

2. Start development servers:
```bash
yarn dev
```

This will start all applications in development mode:
- Host app: http://localhost:3000
- Next.js Remote: http://localhost:3001
- React Remote: http://localhost:3002

## Available Scripts

- `yarn build` - Build all applications
- `yarn dev` - Start all applications in development mode
- `yarn lint` - Run linting
- `yarn clean` - Clean all build artifacts and dependencies
- `yarn format` - Format code with Prettier

## Project Structure

```
├── apps/
│   ├── host/           # React host application
│   ├── next-remote/    # Next.js remote application
│   └── react-remote/   # React remote application
├── packages/           # Shared packages
├── package.json
├── turbo.json
└── README.md
``` 