import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      navigate('/jobs')
    } else {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập')
    }
  }

  return (
    <div className="auth-card">
      {/* Logo */}
      <div className="auth-logo">
        <span className="logo-top">top</span>
        <span className="logo-cv">cv</span>
      </div>
      <p className="auth-subtitle">Chào mừng quay trở lại</p>

      {/* Social Login */}
      <div className="social-btns">
        <button className="btn-social-full">
          <i className="fa-brands fa-google google-icon"></i>
          Đăng nhập bằng Google
        </button>
        <div className="social-row">
          <button className="btn-social-half">
            <i className="fa-brands fa-facebook facebook-icon"></i>
            Facebook
          </button>
          <button className="btn-social-half">
            <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
            Linkedin
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="auth-divider">
        <span className="divider-line" />
        <span className="divider-text">Hoặc đăng nhập bằng email</span>
        <span className="divider-line" />
      </div>

      {/* Form */}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <div className="label-with-link">
            <label className="form-label">Password</label>
            <a href="#" className="forgot-link">Quên mật khẩu</a>
          </div>
          <div className="password-input-wrapper">
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </button>
          </div>
        </div>

        <button type="submit" className="auth-submit-btn">
          Đăng nhập
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>

      {/* Footer */}
      <p className="auth-footer-link">
        Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
      </p>

      <div className="help-box">
        Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số <strong>1900 068 889</strong> | Nhánh 2 (giờ hành chính).
      </div>
    </div>
  )
}

export default Login
