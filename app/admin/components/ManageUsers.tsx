"use client";

import React, { useState } from "react";
import UserList from "./UserList";

export default function ManageUsers() {
  const [currentList, setCurrentList] = useState<"admins" | "recruiters" | "students" | null>(null);

  return (
    <div className="">
      <h2>Manage Users</h2>
      {currentList === null && (
        <div>
          <button
            onClick={() => setCurrentList("admins")}
           className="button"
          >
            Admins
          </button>
          <button
            onClick={() => setCurrentList("recruiters")}
           className="button"
          >
            Recruiters
          </button>
          <button
            onClick={() => setCurrentList("students")}
          className="button"
          >
            Students
          </button>
        </div>
      )}
      {currentList !== null && (
        <div>
          <UserList userType={currentList} />
          <button
            onClick={() => setCurrentList(null)}
           className="button"
          >
            Back to User Management
          </button>
        </div>
      )}
    </div>
  );
}
