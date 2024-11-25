"use client";

import React, { useState } from "react";

export default function TestForm({ addTest }) {
  const [newTest, setNewTest] = useState({
    name: "",
    questions: Array.from({ length: 10 }, () => ({
      question: "",
      options: ["", "", ""],
      correctAnswer: "",
    })),
  });

  const handleQuestionChange = (value, qIdx) => {
    const updatedQuestions = [...newTest.questions];
    updatedQuestions[qIdx].question = value;
    setNewTest({ ...newTest, questions: updatedQuestions });
  };

  const handleOptionChange = (value, qIdx, optIdx) => {
    const updatedQuestions = [...newTest.questions];
    updatedQuestions[qIdx].options[optIdx] = value;
    setNewTest({ ...newTest, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (value, qIdx) => {
    const updatedQuestions = [...newTest.questions];
    updatedQuestions[qIdx].correctAnswer = value;
    setNewTest({ ...newTest, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTest(newTest);
    setNewTest({
      name: "",
      questions: Array.from({ length: 10 }, () => ({
        question: "",
        options: ["", "", ""],
        correctAnswer: "",
      })),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Add New Test</h3>

      <input
        type="text"
        placeholder="Test Name"
        value={newTest.name}
        onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
        
      />

      <div className="que"
       
      >
        {newTest.questions.map((q, qIdx) => (
          <div
            key={qIdx}
           
          >
            <input
              type="text"
              placeholder={`Question ${qIdx + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(e.target.value, qIdx)}
             
            />

            {q.options.map((opt, optIdx) => (
              <input
                key={optIdx}
                type="text"
                placeholder={`Option ${optIdx + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(e.target.value, qIdx, optIdx)}
                
              />
            ))}

            <input
              type="text"
              placeholder="Correct Answer"
              value={q.correctAnswer}
              onChange={(e) => handleCorrectAnswerChange(e.target.value, qIdx)}
             
            />
          </div>
        ))}
      </div>
<div className="que">
      <button
        type="submit"
       className="button"
      >
        Add Test
      </button>
      <button
          onClick={() => (window.location.href = "./admin")}
          className="button"
        >
          Back to Dashboard
        </button>
      </div>
    </form>
  );
}
