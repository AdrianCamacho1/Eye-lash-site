import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SEO from "./components/SEO";

// Simple error handler function
window.addEventListener("error", (event) => {
  console.error("Global error caught:", event.error);

  // Only show error UI if it's a rendering error
  if (
    event.error &&
    event.error.message &&
    event.error.message.includes("render")
  ) {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">Something went wrong</h1>
          <p style="margin-bottom: 24px;">Please try refreshing the page or contact us if the issue persists.</p>
          <button 
            style="background-color: #D9A7B3; color: white; padding: 8px 16px; border-radius: 9999px; border: none; cursor: pointer;"
            onclick="window.location.reload()"
          >
            Refresh Page
          </button>
        </div>
      `;
    }
  }
});

// Initialize app
const rootElement = document.getElementById("root");
try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <SEO />
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render application:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">Unable to load application</h1>
      <p style="margin-bottom: 24px;">We're sorry, but something went wrong. Please try again later.</p>
      <button 
        style="background-color: #D9A7B3; color: white; padding: 8px 16px; border-radius: 9999px; border: none; cursor: pointer;"
        onclick="window.location.reload()"
      >
        Refresh Page
      </button>
    </div>
  `;
}
