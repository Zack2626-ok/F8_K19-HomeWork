import React from "react";
import "../css/components/jobCard.css";
import logoCongty from "../assets/img/logo-cong-ti.jpg";

const JobCard = ({ title, company, salary, location, logo, onClick }) => {
  const displayLogo = logo || logoCongty;

  return (
    <div className="job-card" onClick={onClick}>
      <div className="job-card-top">
        <div className="job-card-logo-box">
          <img src={displayLogo} alt={company} className="job-card-logo" />
        </div>

        <div className="job-card-info">
          <h3 className="job-card-title">{title}</h3>
          <p className="job-card-company">{company}</p>
        </div>
      </div>

      <div className="job-card-bottom">
        <div className="job-card-tags">
          <span className="job-card-tag job-card-tag-salary">{salary}</span>
          <span className="job-card-tag">{location}</span>
        </div>

        <button
          type="button"
          className={`job-card-favorite-btn`}
          title="Lưu công việc"
        >
          <i className={"fa-regular fa-heart"}></i>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
