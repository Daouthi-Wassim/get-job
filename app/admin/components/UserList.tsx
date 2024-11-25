"use client";

import React, { useState } from "react";

type Props = {
  userType: "admins" | "recruiters" | "students";
};

const initialData = {
  admins: ["Admin 1", "Admin 2"],
  recruiters: ["Recruiter A", "Recruiter B"],
  students: ["Student 1", "Student 2"],
};

export default function UserList({ userType }: Props) {
  const [users, setUsers] = useState(initialData[userType]);

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    const newName = prompt(`Add new ${userType.slice(0, -1)}:`);
    if (newName) setUsers([...users, newName]);
  };

  return (
    <div>
      <h3>Manage {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
       
      >
        Add {userType.slice(0, -1)}
      </button>
    </div>
  );
}
