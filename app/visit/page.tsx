"use client";

import React, { useEffect, useState } from "react";
export default function Visit() {
  const [postCount, setPostCount] = useState(0);
  const [recruiterCount, setRecruiterCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
       
        const postResponse = await fetch("/api/posts/count");
        const recruiterResponse = await fetch("/api/recruiters/count");

        if (postResponse.ok && recruiterResponse.ok) {
          const postData = await postResponse.json();
          const recruiterData = await recruiterResponse.json();

          setPostCount(postData.count || 0);
          setRecruiterCount(recruiterData.count || 0);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      
      <div className="form-container">
      <h1>Welcome to Our Job Portal</h1>
        <div >
          <h2>{postCount}</h2>
          <p>Available Posts</p>
       
        <div>
          <h2>{recruiterCount}</h2>
          <p>Registered Recruiters</p>
        </div>
      </div>
      
      <button
        onClick={() => (window.location.href = "../")}
        className="button"
      >
       Register 
      </button>
    </div>
    </div>
  );
}
