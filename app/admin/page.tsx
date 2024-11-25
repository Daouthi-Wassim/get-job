"use client";

import React, { useState } from "react";
import ManageUsers from "./components/ManageUsers";
import ManageTests from "./components/ManageTests";

export default function AdminPage() {
  const [currentView, setCurrentView] = useState<"users" | "tests" | null>(null);

  return (
    <div className="form-container">
      <h1>Admin Dashboard</h1>
      {currentView === null && (
        <div>
          <button
            onClick={() => setCurrentView("users")}
             className="button"
          >
            Manage Users
          </button>
          <button
            onClick={() => setCurrentView("tests")}
            className="button"
          >
            Manage Tests
          </button>
        </div>
      )}
      {currentView === "users" && <ManageUsers />}
      {currentView === "tests" && <ManageTests />}
      {currentView !== null && (
        <button
          onClick={() => setCurrentView(null)}
          className="button"
        >
          Back to Dashboard
        </button>
      )}
    </div>
  );
}
