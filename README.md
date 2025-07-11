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

![alt text](./docs/images/screenshots/image.png)

React Remote: http://localhost:3002

![alt text](./docs/images/screenshots/image-1.png)

## Modified remote app

![alt text](./docs/images/screenshots/image-2.png)

Refresh is all that needed to update the host app:

![alt text](./docs/images/screenshots/image-3.png)

## Code Sharing:

1. Host Component Borrows:

- The host application (apps/host) is borrowing the App component from the remote application (apps/react-remote)
- This is configured in the host's webpack config through the remotes setting:

```js
remotes: {
  reactRemote: "reactRemote@http://localhost:3002/remoteEntry.js"; // import name + host + filename
}
```

```tsx
const ReactRemoteApp = React.lazy(() => import("reactRemote/App"));
```

2. Remote Component Exposed:

![alt text](./docs/images/screenshots/image-5.png)

> ### Question: Should I always import shared code dynamicky or I can also just import it?

<blockquote>
With Module Federation, you should import shared (remote) code dynamically using React.lazy or a similar dynamic import. For example:

```jsx
const RemoteComponent = React.lazy(() => import("remoteApp/Component"));
```

Why? The remote code is loaded at runtime from another build/bundle.
Static imports (e.g. import { Component } from "remoteApp/Component") will not work, because the code does not exist at build time—it's fetched at runtime.

Summary:  
Remote/shared code: Always import dynamically.  
Local code: You can use static imports as usual.

</blockquote>

### UPD

> When Should You Use Simple Imports?
You can use simple imports for federated modules when:

Static Remotes: The remote modules are predefined and their URLs are known at build time.
Code Splitting is Not a Concern: If you're okay with shipping everything (resolved at runtime) without deferring the loading of unused parts of the code.

```jsx
import RemoteComponent from 'remote/Component';
const App = () => <RemoteComponent />;
```
This works because Webpack dynamically maps remote/Component to the remote module defined in ModuleFederationPlugin.

# Runtime Configuration

The host application can dynamically configure the borrowed component

- Implemented a UI (color picker) to demonstrate this configuration
- The configuration is passed through props: <ReactRemoteApp backgroundColor={bgColor} />

This pattern is particularly useful in micro-frontend architectures because:

- It allows for loose coupling between applications
- The remote component remains reusable and configurable
- The host application can control the component's appearance/behavior without modifying the remote code
- Changes to the configuration can be made at runtime

Remote:

![alt text](./docs/images/screenshots/image-6.png)

Host:

```tsx
<Route
  path="/react-remote"
  element={<ReactRemoteApp backgroundColor={bgColor} />}
/>
```

![alt text](./docs/images/screenshots/image-7.png)
