import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Login/index.css'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [role, setRole] = useState('candidate') // 'candidate' | 'employer'
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    alert('Đăng ký tài khoản thành công!')
    navigate('/login')
  }

  return (
    <div className="auth-card">
      {/* Logo */}
      <div className="auth-logo">
        <span style={{ fontSize: 18, color: '#6f7882', fontWeight: 400 }}>Đăng ký </span>
        <span className="logo-top">top</span>
        <span className="logo-cv">cv</span>
      </div>
      <p className="auth-subtitle">Tạo tài khoản miễn phí, tìm kiếm hơn 60.000 việc làm.</p>

      {/* Role Tabs */}
      <div className="role-tabs">
        <button
          className={`role-tab ${role === 'candidate' ? 'active' : ''}`}
          onClick={() => setRole('candidate')}
          type="button"
        >
          <i className="fa-solid fa-user-tie" style={{ marginRight: 6 }}></i>
          Ứng viên
        </button>
        <button
          className={`role-tab ${role === 'employer' ? 'active' : ''}`}
          onClick={() => setRole('employer')}
          type="button"
        >
          <i className="fa-solid fa-building" style={{ marginRight: 6 }}></i>
          Nhà tuyển dụng
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label className="form-label">Họ và tên</label>
          <input className="form-input" type="text" placeholder="Nhập họ tên" required />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="Nhập email" required />
        </div>

        {/* Employer extra fields */}
        {role === 'employer' && (
          <>
            <div className="form-group">
              <label className="form-label">Mã số thuế (MST)</label>
              <input className="form-input" type="text" placeholder="Nhập mã số thuế công ty" required />
            </div>
            <div className="form-group">
              <label className="form-label">Tên công ty</label>
              <input className="form-input" type="text" placeholder="Nhập tên công ty" required />
            </div>
            <div className="form-group">
              <label className="form-label">Số điện thoại</label>
              <input className="form-input" type="tel" placeholder="Nhập số điện thoại" required />
            </div>
          </>
        )}

        <div className="form-group">
          <label className="form-label">Mật khẩu</label>
          <div className="password-input-wrapper">
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Nhập mật khẩu"
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

        <div className="form-group">
          <label className="form-label">Xác nhận mật khẩu</label>
          <div className="password-input-wrapper">
            <input
              className="form-input"
              type={showConfirm ? 'text' : 'password'}
              placeholder="Nhập lại mật khẩu"
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              <i className={`fa-regular ${showConfirm ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span>
            Tôi đã đọc và đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách quyền riêng tư</a> của TopCV
          </span>
        </label>

        <button type="submit" className="auth-submit-btn">
          Đăng ký
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>

      {/* Footer */}
      <p className="auth-footer-link" style={{ marginTop: 16 }}>
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  )
}

export default Register
