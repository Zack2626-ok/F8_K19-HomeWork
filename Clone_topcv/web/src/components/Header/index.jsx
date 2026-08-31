import { Link, useLocation } from 'react-router-dom'
import './index.css'

function Header({ showSearchBar = false }) {
  const location = useLocation()

  const navItems = [
    { label: 'Việc làm', path: '/jobs', hasDropdown: true },
    { label: 'Tạo CV', path: '/create-cv', hasDropdown: true },
    { label: 'Công ty', path: '/companies', hasDropdown: false },
    { label: 'Đăng tin (Employer)', path: '/employer/create-job', hasDropdown: false },
    { label: 'Quản lý (Admin)', path: '/admin/companies', hasDropdown: false },
  ]

  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* Left: Logo + Nav */}
          <div className="header-left-group">
            <Link to="/" className="header-logo">
              <div>
                <span>
                  <span className="logo-top">top</span>
                  <span className="logo-cv">cv</span>
                </span>
                <span className="logo-sub">Tiếp lợi thế, nối thành công</span>
              </div>
            </Link>

            <nav className="header-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <i className="fa-solid fa-chevron-down nav-icon"></i>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Auth buttons */}
          <div className="header-right-group">
            <Link to="/register" className="btn-register">
              Đăng ký
            </Link>
            <Link to="/login" className="btn-login">
              Đăng nhập
            </Link>
            <Link to="/employer/create-job" className="btn-employer">
              Đăng tuyển &amp; tìm hồ sơ
            </Link>
          </div>
        </div>
      </header>

      {/* Search bar */}
      {showSearchBar && (
        <div className="search-bar-wrapper">
          <div className="search-bar-inner">
            <button className="search-category-btn">
              <i className="fa-solid fa-bars"></i>
              Danh mục Nghề
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <input
              className="search-input"
              placeholder="Vị trí tuyển dụng, tên công ty"
              type="text"
            />
            <button className="search-location-btn">
              <i className="fa-solid fa-location-dot"></i>
              Địa điểm
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <button className="search-submit-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
              Tìm kiếm
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
