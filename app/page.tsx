"use client";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(true);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isRegister ? "/api/register" : "/api/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          ...(isRegister && { name }),
        }),
      });

      if (response.ok) {
        alert(isRegister ? "Account created successfully!" : "Login successful!");
      } else {
        const error = await response.json();
        alert(error.message || "An error occurred!");
      }
    } catch (error) {
      alert("An unexpected error occurred!");
    }
  };

  return (
    <div>
     
      <div className="form-container">
        <h1>{isRegister ? "Register" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="toggle-button"
        >
          Switch to {isRegister ? "Login" : "Register"}
        </button>
         <button
        onClick={() => (window.location.href = "/visit")}
        className="toggle-button"
      >
          Home Page
        </button>
      </div>
    </div>
  );
}
