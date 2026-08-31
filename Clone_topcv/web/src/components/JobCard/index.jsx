import { Link } from 'react-router-dom'
import './index.css'

function formatSalary(salary) {
  if (!salary) return 'Thỏa thuận'
  if (salary.type === 'AGREEMENT') return 'Thỏa thuận'
  const min = (salary.min / 1000000).toFixed(0)
  const max = (salary.max / 1000000).toFixed(0)
  return `${min} - ${max} triệu`
}

function JobCard({ job, companyName, companyLogo }) {
  const cName = companyName || job?._company?.name || job?.company?.company_name || 'Công ty Tuyển Dụng'
  const cLogo = companyLogo || job?._company?.logo || job?.company?.logo_url || 'https://via.placeholder.com/64x64?text=Logo'

  return (
    <Link to={`/jobs/${job.slug || job.id}`} className="job-card">
      <img
        className="job-logo"
        src={cLogo}
        alt={cName}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/64x64?text=Logo' }}
      />

      <div className="job-info">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-company">{cName}</p>
        <div className="job-meta">
          <span className="job-salary">{formatSalary(job.salary)}</span>
          <span className="job-location">
            <i className="fa-solid fa-location-dot job-loc-icon"></i>
            {job.work_location?.[0]?.city_name || job.location || 'Toàn quốc'}
          </span>
        </div>
      </div>

      <button
        className="job-save-btn"
        onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
        title="Lưu tin"
      >
        <i className="fa-regular fa-heart"></i>
      </button>
    </Link>
  )
}

export default JobCard
