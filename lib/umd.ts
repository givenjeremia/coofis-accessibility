// lib/umd.ts
import React from "react";
import ReactDOM from "react-dom/client";
import CoofisAccessibility from "./components/Accessibilik";

function mount(options: { target?: string } = {}) {
  const targetId = options.target || "coofis-accessibility-root";

  let container = document.getElementById(targetId);

  if (!container) {
    container = document.createElement("div");
    container.id = targetId;
    document.body.appendChild(container);
  }

  const root = (ReactDOM as any).createRoot(container);
  root.render(React.createElement(CoofisAccessibility));
}

// ✅ expose ke window
(window as any).CoofisAccessibility = {
  mount,
};
