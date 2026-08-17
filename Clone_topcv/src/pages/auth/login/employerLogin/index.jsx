import topcvLogo from "../../../../assets/img/topcv-logo.webp";
import "../../../../css/auth/employerCss/employerLogin.css";

const EmployerLogin = () => {
  return (
    <div className="employer-login-wrapper">
      <div className="employer-login-container">
        <div>
          <div className="employer-login-header">
            <img
              src={topcvLogo}
              alt="TopCV Logo"
              className="employer-login-logo"
            />
          </div>

          <h1 className="employer-login-title">
            Chào mừng bạn đã quay trở lại
          </h1>
          <p className="employer-login-subtitle">
            Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ
            tuyển dụng ứng dụng sâu AI &amp; Hiring Funnel
          </p>

          <form className="employer-login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
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

            <div className="form-group">
              <label className="form-label">Mật khẩu</label>
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

            <div className="forgot-password-link">
              <a href="#">Quên mật khẩu</a>
            </div>
            <button type="button" className="btn-submit-green">
              Đăng nhập
            </button>
          </form>

          <div className="auth-switch-text">
            Chưa có tài khoản? <a href="/employer/register">Đăng ký ngay</a>
          </div>
        </div>

        <div className="employer-login-footer">
          ©2014-2026 TopCV Vietnam JSC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
