import { Link } from 'react-router-dom'
import './index.css'

function CompanyCard({ company }) {
  const name = company.company_name || company.name || 'Công ty'
  const logo = company.logo_url || company.logo || 'https://via.placeholder.com/56x56?text=Logo'
  const location = company.address_list?.[0]?.city_name || company.location || 'Toàn quốc'
  const size = company.company_size || company.size || 'Chưa cập nhật'
  const field = company.category || company.field || 'Công nghệ / Dịch vụ'
  const jobCount = company.jobCount || (company.jobs ? company.jobs.length : 3)

  return (
    <Link to={`/companies`} className="company-card">
      <div className="company-cover">
        <div className="company-logo-wrap">
          <img
            className="company-logo"
            src={logo}
            alt={name}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/56x56?text=Logo' }}
          />
        </div>
      </div>

      <div className="company-card-body">
        <h3 className="company-card-name" title={name}>{name}</h3>

        <div className="company-info-row">
          <i className="fa-solid fa-building company-icon"></i>
          <span>{field}</span>
        </div>
        <div className="company-info-row">
          <i className="fa-solid fa-users company-icon"></i>
          <span>{size}</span>
        </div>
        <div className="company-info-row">
          <i className="fa-solid fa-location-dot company-icon"></i>
          <span>{location}</span>
        </div>

        <div className="company-tags">
          <span className="company-tag company-tag-green">{jobCount} việc làm</span>
          <span className="company-tag">Tuyển gấp</span>
        </div>
      </div>
    </Link>
  )
}

export default CompanyCard
