"use client";

import React, { useState } from "react";
import TestForm from "./TestForm";

export default function ManageTests() {
  const [tests, setTests] = useState([]);

  const addTest = (newTest) => {
    setTests([...tests, newTest]);
  };

  const deleteTest = (index) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Manage Tests</h2>
      <TestForm addTest={addTest} />
      <h3>Existing Tests</h3>
      <ul>
        {tests.map((test, index) => (
          <li key={index}>
            {test.name}{" "}
            <button onClick={() => deleteTest(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
