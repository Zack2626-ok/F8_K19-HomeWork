const CandidatePage = () => {
  return (
    <>
      <HeaderBar />
      <h1>đây là trang của ứng viên</h1>
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
    </>
  );
};

export default CandidatePage;
