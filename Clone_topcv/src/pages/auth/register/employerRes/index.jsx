import React from 'react';
import topcvLogo from '../../../../assets/img/topcv-logo.webp';
import '../../../../css/auth/employerCss/employerRegister.css';

const EmployerRegister = () => {
  return (
    <div className="employer-register-wrapper">
      {/* Form Đăng ký */}
      <div className="employer-register-container">
        <div>
          <div className="employer-register-header">
            <img src={topcvLogo} alt="TopCV Logo" className="employer-register-logo" />
          </div>

          <h1 className="employer-register-title">Đăng ký tài khoản Nhà tuyển dụng</h1>
          <p className="employer-register-subtitle">
            Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI &amp; Hiring Funnel.
          </p>

          <form className="employer-register-form">
            {/* Email đăng nhập */}
            <div className="form-group">
              <label className="form-label">
                Email đăng nhập <span className="required">*</span>
              </label>
              <div className="input-group">
                <span className="input-icon-left">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Mật khẩu */}
            <div className="form-group">
              <label className="form-label">
                Mật khẩu <span className="required">*</span>
              </label>
              <div className="input-group">
                <span className="input-icon-left">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-has-right"
                  placeholder="Mật khẩu"
                />
                <span className="input-icon-right">
                  <i className="fa-solid fa-eye-slash"></i>
                </span>
              </div>
            </div>

            {/* Nhập lại mật khẩu */}
            <div className="form-group">
              <label className="form-label">
                Nhập lại mật khẩu <span className="required">*</span>
              </label>
              <div className="input-group">
                <span className="input-icon-left">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-has-right"
                  placeholder="Nhập lại mật khẩu"
                />
                <span className="input-icon-right">
                  <i className="fa-solid fa-eye"></i>
                </span>
              </div>
            </div>

            {/* Section: Thông tin nhà tuyển dụng */}
            <h2 className="form-section-title">Thông tin nhà tuyển dụng</h2>

            {/* Họ và tên & Giới tính */}
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">
                  Họ và tên <span className="required">*</span>
                </label>
                <div className="input-group">
                  <span className="input-icon-left">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Giới tính <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      defaultChecked
                    />
                    Nam
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                    />
                    Nữ
                  </label>
                </div>
              </div>
            </div>

            {/* Số điện thoại cá nhân */}
            <div className="form-group">
              <label className="form-label">
                Số điện thoại cá nhân <span className="required">*</span>
              </label>
              <div className="input-group">
                <span className="input-icon-left">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Số điện thoại cá nhân"
                />
              </div>
            </div>

            {/* Công ty */}
            <div className="form-group">
              <label className="form-label">
                Công ty <span className="required">*</span>
              </label>
              <div className="input-group">
                <span className="input-icon-left">
                  <i className="fa-solid fa-building"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên công ty"
                />
              </div>
            </div>

            {/* Địa điểm làm việc & Phường/xã */}
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">
                  Địa điểm làm việc <span className="required">*</span>
                </label>
                <div className="input-group">
                  <span className="input-icon-left">
                    <i className="fa-solid fa-building"></i>
                  </span>
                  <select className="form-control select-control" defaultValue="">
                    <option value="">Chọn tỉnh/thành phố</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hochiminh">TP. Hồ Chí Minh</option>
                    <option value="danang">Đà Nẵng</option>
                  </select>
                  <span className="select-arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phường/ xã</label>
                <div className="input-group">
                  <span className="input-icon-left">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <select className="form-control select-control" defaultValue="">
                    <option value="">Chọn phường/xã</option>
                  </select>
                  <span className="select-arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </div>

            {/* Nút Hoàn tất */}
            <button type="button" className="btn-submit-green" style={{ marginTop: '20px' }}>
              Hoàn tất
            </button>
          </form>

          {/* Chuyển sang Đăng nhập */}
          <div className="auth-switch-text">
            Đã có tài khoản? <a href="/employer/login">Đăng nhập ngay</a>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="employer-register-footer">
          ©2014-2026 TopCV Vietnam JSC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default EmployerRegister;
