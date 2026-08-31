import './index.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-top">top</span>
              <span className="logo-cv">cv</span>
            </div>
            <p className="footer-desc">
              Tiếp lợi thế, nối thành công.
              <br />
              TopCV là nền tảng công nghệ tuyển dụng hàng đầu Việt Nam, 
              kết nối hàng triệu ứng viên với các doanh nghiệp uy tín.
            </p>
          </div>

          {/* Column 2: Về TopCV */}
          <div className="footer-col">
            <h4>Về TopCV</h4>
            <a href="#">Giới thiệu</a>
            <a href="#">Liên hệ</a>
            <a href="#">Thỏa thuận sử dụng</a>
            <a href="#">Quy định bảo mật</a>
            <a href="#">Cơ chế giải quyết khiếu nại</a>
          </div>

          {/* Column 3: Dành cho ứng viên */}
          <div className="footer-col">
            <h4>Dành cho ứng viên</h4>
            <a href="/jobs">Việc làm</a>
            <a href="/create-cv">Tạo CV</a>
            <a href="#">Cẩm nang nghề nghiệp</a>
            <a href="#">Trắc nghiệm tính cách</a>
            <a href="#">Tính lương Gross - Net</a>
          </div>

          {/* Column 4: Nhà tuyển dụng */}
          <div className="footer-col">
            <h4>Nhà tuyển dụng</h4>
            <a href="/employer/create-job">Đăng tin tuyển dụng</a>
            <a href="#">Tìm hồ sơ ứng viên</a>
            <a href="#">Sản phẩm dịch vụ</a>
            <a href="#">Liên hệ</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2026 TopCV Vietnam JSC. All rights reserved.</span>
          <div className="social-links">
            <a className="social-link" href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="social-link" href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className="social-link" href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
