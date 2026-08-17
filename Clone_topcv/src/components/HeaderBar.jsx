import React from "react";
import headerLogo from "../assets/img/headerBar-logo.png";
import "../css/components/headerBar.css";

const HeaderBar = () => {
  return (
    <header className="header-bar">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="header-logo-link">
            <img src={headerLogo} alt="TopCV Logo" className="header-logo" />
          </a>

          <nav className="header-nav">
            <div className="nav-item">
              <a href="#" className="nav-link">
                Việc làm
              </a>
            </div>

            <div className="nav-item">
              <a href="#" className="nav-link">
                Tạo CV
              </a>
            </div>

            <div className="nav-item">
              <a href="#" className="nav-link">
                Công cụ
              </a>
            </div>

            <div className="nav-item">
              <a href="#" className="nav-link">
                Cẩm nang nghề nghiệp
              </a>
            </div>
          </nav>
        </div>

        {/* Phần bên phải: Các nút Đăng ký, Đăng nhập */}
        <div className="header-right">
          <a href="/employer/register" className="btn-auth-register">
            Đăng ký
          </a>
          <a href="/employer/login" className="btn-auth-login">
            Đăng nhập
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
