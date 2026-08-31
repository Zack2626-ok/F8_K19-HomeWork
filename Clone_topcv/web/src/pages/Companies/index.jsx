import { useState, useEffect } from 'react'
import api from '../../plugins/axios'
import CompanyCard from '../../components/CompanyCard'
import Pagination from '../../components/Pagination'
import './index.css'

function Companies() {
  const [companies, setCompanies] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await api.get('/companies')
        setCompanies(res.data)
      } catch (err) {
        console.error('Lỗi tải danh sách công ty:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  const filteredCompanies = companies.filter(c =>
    (c.company_name || c.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (c.category || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container" style={{ paddingBottom: 60 }}>
      {/* Header */}
      <div className="companies-header">
        <h1 className="companies-title">Danh sách Công ty nổi bật</h1>
        <p className="companies-sub">Khám phá hàng nghìn doanh nghiệp hàng đầu đang tuyển dụng tại Việt Nam</p>
      </div>

      {/* Search */}
      <div className="companies-search-row">
        <input
          className="companies-search-input"
          type="text"
          placeholder="Tìm kiếm theo tên công ty, lĩnh vực..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="companies-search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
          Tìm kiếm
        </button>
      </div>

      {/* Company Grid */}
      {loading ? (
        <div className="loading-spinner">Đang tải danh sách công ty...</div>
      ) : (
        <div className="companies-grid">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </div>
  )
}

export default Companies
