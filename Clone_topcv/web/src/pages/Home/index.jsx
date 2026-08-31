import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../plugins/axios'
import JobCard from '../../components/JobCard'
import CompanyCard from '../../components/CompanyCard'
import './index.css'

const categories = [
  'Kinh doanh/Bán hàng',
  'Marketing/PR/Quảng cáo',
  'Chăm sóc khách hàng (Custome...)',
  'Nhân sự/Hành chính/Pháp chế',
  'Công nghệ Thông tin',
  'Lao động phổ thông',
]

function Home() {
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [jobsRes, companiesRes] = await Promise.all([
          api.get('/jobs'),
          api.get('/companies')
        ])
        
        // Map companies to jobs if available
        const companyMap = {}
        companiesRes.data.forEach(c => { companyMap[c.id] = c })
        
        const jobsData = jobsRes.data.map(job => ({
          ...job,
          _company: {
            name: companyMap[job.company_id]?.company_name || 'TopCV Partner',
            logo: companyMap[job.company_id]?.logo_url || ''
          }
        }))

        setJobs(jobsData)
        setCompanies(companiesRes.data)
      } catch (err) {
        console.error('Lỗi tải dữ liệu trang chủ:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
          </h1>
          <p className="hero-sub">
            Tiếp cận <strong>60.000+</strong> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
          </p>

          {/* Search Box */}
          <div className="home-search-box">
            <button className="search-cat-btn">
              <i className="fa-solid fa-bars"></i>
              Danh mục Nghề
            </button>
            <input
              className="search-main-input"
              placeholder="Vị trí tuyển dụng, tên công ty"
              type="text"
            />
            <button className="search-loc-btn">
              <i className="fa-solid fa-location-dot"></i>
              Địa điểm
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <Link to="/jobs" className="search-submit-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
              Tìm kiếm
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Category + Banner */}
        <section className="cat-banner-section">
          <div className="cat-list">
            {categories.map((cat, i) => (
              <div key={i} className="cat-item">
                <span>{cat}</span>
                <i className="fa-solid fa-chevron-right cat-chevron"></i>
              </div>
            ))}
          </div>

          <div className="banner-slider">
            <div className="banner-content">
              <div className="banner-badge">🎯 TUYỂN DỤNG HÀNG ĐẦU</div>
              <div className="banner-title">ACCOUNT MANAGER</div>
              <div className="banner-subtitle">TOÀN QUỐC</div>
              <p className="banner-text">Cơ hội nghề nghiệp trải dài khắp các tỉnh thành</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="cta-banner">
          <div className="cta-inner">
            <span className="cta-text">
              <i className="fa-solid fa-shield-halved cta-icon"></i>
              Tìm việc an toàn cùng TopCV
            </span>
            <button className="cta-btn">
              Tìm hiểu thêm
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Việc làm tốt nhất */}
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">Việc làm tốt nhất</h2>
            <div className="section-tabs">
              <span className="section-tab active">Việc văn phòng</span>
              <span className="section-tab">Việc phổ thông</span>
            </div>
          </div>
          <Link to="/jobs" className="view-all-link">
            Xem tất cả <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {loading ? (
          <div className="loading-spinner">Đang tải danh sách việc làm...</div>
        ) : (
          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                companyName={job._company?.name}
                companyLogo={job._company?.logo}
              />
            ))}
          </div>
        )}

        {/* Top công ty */}
        <div className="section-header" style={{ marginTop: 48 }}>
          <h2 className="section-title">Top Công ty hàng đầu</h2>
          <Link to="/companies" className="view-all-link">
            Xem tất cả <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {loading ? (
          <div className="loading-spinner">Đang tải danh sách công ty...</div>
        ) : (
          <div className="company-grid">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
