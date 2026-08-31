import { useState, useEffect } from 'react'
import api from '../../plugins/axios'
import AdminCompanyTable from '../../components/AdminCompanyTable'
import './index.css'

function AdminCompanies() {
  const [companies, setCompanies] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await api.get('/companies')
        setCompanies(res.data)
      } catch (err) {
        console.error('Lỗi tải danh sách công ty admin:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  const handleApprove = async (id) => {
    try {
      const companyToUpdate = companies.find(c => c.id === id)
      if (companyToUpdate) {
        const updated = { ...companyToUpdate, status: 'APPROVED', verification_tier: 'VERIFIED' }
        await api.put(`/companies/${id}`, updated)
        setCompanies(companies.map(c => c.id === id ? updated : c))
      }
    } catch (err) {
      console.error('Lỗi duyệt công ty:', err)
      // Fallback state update
      setCompanies(companies.map(c => c.id === id ? { ...c, status: 'APPROVED' } : c))
    }
  }

  const handleReject = async (id) => {
    try {
      const companyToUpdate = companies.find(c => c.id === id)
      if (companyToUpdate) {
        const updated = { ...companyToUpdate, status: 'REJECTED' }
        await api.put(`/companies/${id}`, updated)
        setCompanies(companies.map(c => c.id === id ? updated : c))
      }
    } catch (err) {
      console.error('Lỗi từ chối công ty:', err)
      setCompanies(companies.map(c => c.id === id ? { ...c, status: 'REJECTED' } : c))
    }
  }

  const filteredCompanies = companies.filter(c =>
    (c.company_name || '').toLowerCase().includes(search.toLowerCase()) ||
    (c.tax_code || '').includes(search)
  )

  const approvedCount = companies.filter(c => c.status === 'APPROVED').length
  const pendingCount = companies.filter(c => c.status === 'PENDING').length

  return (
    <div className="container" style={{ paddingBottom: 60 }}>
      {/* Stats */}
      <div className="admin-stats-row">
        <div className="stat-card">
          <div className="stat-icon stat-icon-blue">
            <i className="fa-solid fa-building"></i>
          </div>
          <div>
            <div className="stat-number">{companies.length}</div>
            <div className="stat-label">Tổng công ty</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon-green">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <div className="stat-number">{approvedCount}</div>
            <div className="stat-label">Đã duyệt</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon-yellow">
            <i className="fa-solid fa-clock"></i>
          </div>
          <div>
            <div className="stat-number">{pendingCount}</div>
            <div className="stat-label">Chờ duyệt</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="admin-header">
        <div className="title-group">
          <h1>Danh sách công ty</h1>
          <p>Duyệt và quản lý danh sách công ty đăng ký trên hệ thống</p>
        </div>
        <div className="admin-search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            className="admin-search-input"
            placeholder="Tìm theo tên công ty hoặc MST..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Modular Admin Company Table */}
      {loading ? (
        <div className="loading-spinner">Đang tải dữ liệu công ty...</div>
      ) : (
        <AdminCompanyTable
          companies={filteredCompanies}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  )
}

export default AdminCompanies
