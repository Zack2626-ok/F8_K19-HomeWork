import { useState } from 'react'
import './index.css'

function AdminCompanyTable({ companies = [], onApprove, onReject }) {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>MST</th>
            <th>Tên công ty</th>
            <th>Giám đốc</th>
            <th>SĐT</th>
            <th>Email</th>
            <th>Quy mô</th>
            <th>Trạng thái</th>
            <th style={{ textAlign: 'center' }}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {companies.length === 0 ? (
            <tr>
              <td colSpan="8" className="admin-empty">
                Không tìm thấy công ty phù hợp
              </td>
            </tr>
          ) : (
            companies.map((company) => (
              <tr key={company.id}>
                <td className="font-mono">{company.tax_code}</td>
                <td>
                  <div className="company-title">{company.company_name}</div>
                  <div className="company-sub">{company.international_name}</div>
                </td>
                <td>{company.director}</td>
                <td>{company.phone_number}</td>
                <td>
                  <span className="email-text">{company.email}</span>
                </td>
                <td>{company.company_size}</td>
                <td>
                  <span className={`status-badge ${company.status === 'APPROVED' ? 'status-approved' : 'status-pending'}`}>
                    {company.status === 'APPROVED' ? 'Đã duyệt' : 'Chờ duyệt'}
                  </span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div className="action-buttons">
                    <button className="action-btn action-view" title="Xem chi tiết">
                      <i className="fa-regular fa-eye"></i>
                    </button>
                    {company.status === 'PENDING' ? (
                      <>
                        <button 
                          className="action-btn action-approve" 
                          title="Duyệt công ty"
                          onClick={() => onApprove && onApprove(company.id)}
                        >
                          <i className="fa-solid fa-check"></i>
                        </button>
                        <button 
                          className="action-btn action-reject" 
                          title="Từ chối công ty"
                          onClick={() => onReject && onReject(company.id)}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </>
                    ) : (
                      <button className="action-btn action-verified" disabled title="Đã xác thực">
                        <i className="fa-solid fa-circle-check"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminCompanyTable
