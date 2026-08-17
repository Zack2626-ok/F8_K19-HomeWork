import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderBar from "../components/HeaderBar";
import JobCard from "../components/JobCard";
import "../css/pages/homePage.css";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/jobs");
        setJobs(res.data);
        console.log("data", res.data);
      } catch (err) {
        console.error("ko tìm thấy:", err);
      }
    };
    getJobs();
  }, []);

  return (
    <>
      <HeaderBar />

      <div className="home-page-container">
        <div className="job-section-wrapper">
          <h1 className="home-section-title">Việc làm hiện tại</h1>
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                salary={job.salary}
                location={job.location}
                logo={job.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
