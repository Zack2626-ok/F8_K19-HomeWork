import { useState, useEffect } from 'react'
import api from '../../plugins/axios'
import JobCard from '../../components/JobCard'
import Pagination from '../../components/Pagination'
import './index.css'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeSort, setActiveSort] = useState('relevant')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const [jobsRes, companiesRes] = await Promise.all([
          api.get('/jobs'),
          api.get('/companies')
        ])

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
      } catch (err) {
        console.error('Lỗi tải danh sách việc làm:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div className="container">
      <div className="jobs-page-layout">
        {/* Sidebar Filter */}
        <aside className="jobs-sidebar">
          <h3 className="filter-title">
            <i className="fa-solid fa-filter filter-icon"></i>
            Bộ lọc nâng cao
          </h3>

          <div className="filter-group">
            <p className="filter-label">Ngành nghề</p>
            {['Công nghệ Thông tin', 'Kinh doanh/Bán hàng', 'Marketing/PR', 'Nhân sự', 'Logistics'].map((item) => (
              <label key={item} className="filter-option">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <p className="filter-label">Kinh nghiệm</p>
            {['Không yêu cầu', '1-2 năm', '2-3 năm', '3-5 năm', '5+ năm'].map((item) => (
              <label key={item} className="filter-option">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <p className="filter-label">Mức lương</p>
            {['Dưới 10 triệu', '10 - 20 triệu', '20 - 30 triệu', '30 - 50 triệu', 'Trên 50 triệu', 'Thỏa thuận'].map((item) => (
              <label key={item} className="filter-option">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <p className="filter-label">Địa điểm</p>
            {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'].map((item) => (
              <label key={item} className="filter-option">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Job Main Section */}
        <div className="jobs-main-content">
          <div className="list-header">
            <div>
              <h2 className="list-title">Tuyển dụng việc làm mới nhất</h2>
              <span className="list-count">{jobs.length} việc làm</span>
            </div>
            <div className="sort-bar">
              <span>Sắp xếp:</span>
              <button 
                className={`sort-btn ${activeSort === 'relevant' ? 'active' : ''}`}
                onClick={() => setActiveSort('relevant')}
              >
                Phù hợp
              </button>
              <button 
                className={`sort-btn ${activeSort === 'latest' ? 'active' : ''}`}
                onClick={() => setActiveSort('latest')}
              >
                Mới nhất
              </button>
              <button 
                className={`sort-btn ${activeSort === 'salary' ? 'active' : ''}`}
                onClick={() => setActiveSort('salary')}
              >
                Lương cao
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loading-spinner">Đang tải danh sách việc làm...</div>
          ) : (
            <div className="job-list-vertical">
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

          {/* Reusable Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={3}
            onPageChange={(p) => setCurrentPage(p)}
          />
        </div>
      </div>
    </div>
  )
}

export default Jobs
