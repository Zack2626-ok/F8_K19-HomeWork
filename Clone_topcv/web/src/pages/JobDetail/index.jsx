import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../plugins/axios'
import './index.css'

function formatSalary(salary) {
  if (!salary) return 'Thỏa thuận'
  if (salary.type === 'AGREEMENT') return 'Thỏa thuận'
  const min = (salary.min / 1000000).toFixed(0)
  const max = (salary.max / 1000000).toFixed(0)
  return `${min} - ${max} triệu`
}

function JobDetail() {
  const { slug } = useParams()
  const [job, setJob] = useState(null)
  const [company, setCompany] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobDetail() {
      try {
        const [jobsRes, companiesRes] = await Promise.all([
          api.get('/jobs'),
          api.get('/companies')
        ])

        // Find matching job by slug or id
        const foundJob = jobsRes.data.find(j => j.slug === slug || j.id === slug) || jobsRes.data[0]
        setJob(foundJob)

        if (foundJob) {
          const foundCompany = companiesRes.data.find(c => c.id === foundJob.company_id) || companiesRes.data[0]
          setCompany(foundCompany)
        }
      } catch (err) {
        console.error('Lỗi tải chi tiết việc làm:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobDetail()
  }, [slug])

  if (loading) {
    return <div className="container" style={{ padding: 40, textAlign: 'center' }}>Đang tải thông tin việc làm...</div>
  }

  if (!job) {
    return <div className="container" style={{ padding: 40, textAlign: 'center' }}>Không tìm thấy thông tin việc làm.</div>
  }

  const tags = [job.experience_level || '3 năm kinh nghiệm', job.education || 'Đại học', job.category || 'IT']

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Trang chủ</Link> <span>›</span>
        <Link to="/jobs">Việc làm</Link> <span>›</span>
        <span>{job.category || 'Việc làm'}</span> <span>›</span>
        <span className="breadcrumb-current">{job.title}</span>
      </div>

      <div className="job-detail-layout">
        {/* Main Content */}
        <div className="job-detail-main">
          {/* Job Header Card */}
          <div className="detail-card">
            <h1 className="job-detail-title">
              {job.title}
              <i className="fa-solid fa-circle-check verified-badge"></i>
            </h1>
            <div className="job-detail-salary">{formatSalary(job.salary)}</div>

            <div className="info-row-grid">
              <div className="info-grid-item">
                <i className="fa-solid fa-location-dot detail-icon"></i>
                <div>
                  <div className="info-label">Địa điểm</div>
                  <strong>{job.work_location?.[0]?.city_name || 'Hà Nội'}</strong>
                </div>
              </div>
              <div className="info-grid-item">
                <i className="fa-solid fa-briefcase detail-icon"></i>
                <div>
                  <div className="info-label">Kinh nghiệm</div>
                  <strong>{job.experience_level || 'Không yêu cầu'}</strong>
                </div>
              </div>
              <div className="info-grid-item">
                <i className="fa-solid fa-calendar-days detail-icon"></i>
                <div>
                  <div className="info-label">Hạn ứng tuyển</div>
                  <strong>{job.deadline ? new Date(job.deadline).toLocaleDateString('vi-VN') : '30/09/2026'}</strong>
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <button className="apply-now-btn">
                <i className="fa-solid fa-paper-plane"></i>
                Ứng tuyển ngay
              </button>
              <button className="save-job-btn">
                <i className="fa-regular fa-heart"></i>
                Lưu tin
              </button>
            </div>
          </div>

          {/* Overview */}
          <div className="detail-card">
            <h2 className="detail-section-title">Tổng quan</h2>
            <div className="job-tags">
              {tags.map((tag) => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="detail-card">
            <div
              className="html-content"
              dangerouslySetInnerHTML={{ __html: job.description_html || '<h3>Mô tả công việc</h3><p>Đang cập nhật...</p>' }}
            />
          </div>

          {/* Requirements */}
          <div className="detail-card">
            <div
              className="html-content"
              dangerouslySetInnerHTML={{ __html: job.requirements_html || '<h3>Yêu cầu ứng viên</h3><p>Đang cập nhật...</p>' }}
            />
          </div>

          {/* Benefits */}
          <div className="detail-card">
            <div
              className="html-content"
              dangerouslySetInnerHTML={{ __html: job.benefits_html || '<h3>Quyền lợi</h3><p>Đang cập nhật...</p>' }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="job-detail-sidebar">
          {/* Company Card */}
          <div className="sidebar-company-card">
            <img
              className="sidebar-company-logo"
              src={company?.logo_url || 'https://via.placeholder.com/72x72?text=Logo'}
              alt={company?.company_name}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/72x72?text=Logo' }}
            />
            <h3 className="sidebar-company-name">{company?.company_name || 'TopCV Vietnam'}</h3>
            
            <div className="sidebar-company-info">
              <div className="company-info-item">
                <i className="fa-solid fa-users sidebar-icon"></i>
                <div>
                  <div className="company-info-label">Quy mô</div>
                  <div className="company-info-value">{company?.company_size || '500-1000 nhân viên'}</div>
                </div>
              </div>
              <div className="company-info-item">
                <i className="fa-solid fa-building sidebar-icon"></i>
                <div>
                  <div className="company-info-label">Lĩnh vực</div>
                  <div className="company-info-value">{company?.category || 'Công nghệ Thông tin'}</div>
                </div>
              </div>
              <div className="company-info-item">
                <i className="fa-solid fa-location-dot sidebar-icon"></i>
                <div>
                  <div className="company-info-label">Địa điểm</div>
                  <div className="company-info-value">{company?.headquarters_address || 'Hà Nội'}</div>
                </div>
              </div>
            </div>

            <Link to="/companies" className="view-company-btn">
              Xem trang công ty <i className="fa-solid fa-globe"></i>
            </Link>
          </div>

          {/* General Info */}
          <div className="general-info-card">
            <h3 className="general-title">Thông tin chung</h3>
            <div className="general-item">
              <i className="fa-solid fa-briefcase general-icon"></i>
              <div><div className="general-label">Cấp bậc</div><div className="general-value">Nhân viên</div></div>
            </div>
            <div className="general-item">
              <i className="fa-solid fa-graduation-cap general-icon"></i>
              <div><div className="general-label">Học vấn</div><div className="general-value">{job.education || 'Đại học'}</div></div>
            </div>
            <div className="general-item">
              <i className="fa-solid fa-users general-icon"></i>
              <div><div className="general-label">Số lượng</div><div className="general-value">{job.quantity || 1} người</div></div>
            </div>
            <div className="general-item">
              <i className="fa-solid fa-venus-mars general-icon"></i>
              <div><div className="general-label">Giới tính</div><div className="general-value">{job.gender || 'Không yêu cầu'}</div></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default JobDetail
