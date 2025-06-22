import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

console.log("index.jsx loaded");

// Add error boundary for the entire app
class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Global Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1>KlarerNorden</h1>
          <p>Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.</p>
          <details style={{ marginTop: '20px', textAlign: 'left' }}>
            <summary>Fehlerdetails</summary>
            <pre style={{ background: '#f5f5f5', padding: '10px', marginTop: '10px' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

try {
  const rootElement = document.getElementById("root");
  console.log("Root element:", rootElement);
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  ReactDOM.render(
    <React.StrictMode>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </React.StrictMode>,
    rootElement,
  );
  
  console.log("React app rendered successfully");
} catch (error) {
  console.error("Failed to render React app:", error);
  
  // Fallback rendering
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>KlarerNorden</h1>
        <p>Professionelle Reinigungsdienstleistungen</p>
        <p style="color: #666; margin-top: 20px;">Die Anwendung wird geladen...</p>
      </div>
    `;
  }
}
