import React from "react";

interface AppProps {
  backgroundColor?: string;
}

const App: React.FC<AppProps> = ({ backgroundColor = "pink" }) => {
  return (
    <div style={{ backgroundColor }}>
      <h1>React Remote Application</h1>
      <p>This is a remote component from the React application.</p>
    </div>
  );
};

export default App;
