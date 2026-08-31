import { useState } from 'react'
import api from '../../plugins/axios'
import './index.css'

function CreateJob() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    specialty: '',
    job_type: 'FULL_TIME',
    experience_level: '1-2 năm',
    education: 'Đại học',
    gender: 'Không yêu cầu',
    quantity: 1,
    deadline: '',
    salaryMin: '',
    salaryMax: '',
    location: '',
    description: '',
    requirements: '',
    benefits: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newJob = {
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        category: formData.category || 'Lập trình phần mềm',
        specialty: formData.specialty,
        job_type: formData.job_type,
        experience_level: formData.experience_level,
        education: formData.education,
        gender: formData.gender,
        quantity: Number(formData.quantity),
        salary: {
          type: formData.salaryMin ? 'RANGE' : 'AGREEMENT',
          min: Number(formData.salaryMin) || 0,
          max: Number(formData.salaryMax) || 0,
          currency: 'VND'
        },
        work_location: [{ city_name: formData.location || 'Hà Nội' }],
        deadline: formData.deadline || '2026-12-31',
        status: 'PUBLISHED',
        is_hot: true,
        description_html: `<div><h3>Mô tả công việc</h3><p>${formData.description}</p></div>`,
        requirements_html: `<div><h3>Yêu cầu ứng viên</h3><p>${formData.requirements}</p></div>`,
        benefits_html: `<div><h3>Quyền lợi</h3><p>${formData.benefits}</p></div>`
      }

      await api.post('/jobs', newJob)
      setSubmitted(true)
    } catch (err) {
      console.error('Lỗi tạo tin tuyển dụng:', err)
      alert('Tạo tin thất bại. Vui lòng kiểm tra API server json-server!')
    }
  }

  return (
    <div className="container" style={{ paddingBottom: 60 }}>
      <div className="create-job-header">
        <h1 className="create-job-title">Đăng tin tuyển dụng</h1>
        <p className="create-job-sub">Tạo tin tuyển dụng mới để tìm kiếm ứng viên phù hợp</p>
      </div>

      {submitted ? (
        <div className="create-job-card success-card">
          <i className="fa-solid fa-circle-check success-icon"></i>
          <h2>Đăng tin tuyển dụng thành công!</h2>
          <p>Tin của bạn đã được xuất bản và hiển thị trên trang việc làm.</p>
          <button className="btn-submit" onClick={() => setSubmitted(false)} style={{ marginTop: 20 }}>
            Tạo tin khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Thông tin cơ bản */}
          <div className="create-job-card">
            <h2 className="card-section-title">
              <i className="fa-solid fa-circle-info section-icon"></i>
              Thông tin cơ bản
            </h2>

            <div className="form-group">
              <label className="form-label">
                Tiêu đề tuyển dụng <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="VD: Senior Frontend Developer (ReactJS)"
                required
              />
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">
                  Ngành nghề <span className="required">*</span>
                </label>
                <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Chọn ngành nghề</option>
                  <option value="Lập trình phần mềm">Lập trình phần mềm</option>
                  <option value="Sales Xuất nhập khẩu/Logistics">Sales Xuất nhập khẩu/Logistics</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Nhân sự & Tuyển dụng">Nhân sự & Tuyển dụng</option>
                  <option value="Tư vấn & Chăm sóc khách hàng">Tư vấn & Chăm sóc khách hàng</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Chuyên môn <span className="required">*</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  placeholder="VD: Frontend Developer"
                  required
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Loại hình công việc</label>
                <select className="form-select" name="job_type" value={formData.job_type} onChange={handleChange}>
                  <option value="FULL_TIME">Toàn thời gian (Full-time)</option>
                  <option value="PART_TIME">Bán thời gian (Part-time)</option>
                  <option value="INTERN">Thực tập</option>
                  <option value="REMOTE">Remote</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Kinh nghiệm</label>
                <select className="form-select" name="experience_level" value={formData.experience_level} onChange={handleChange}>
                  <option value="Không yêu cầu">Không yêu cầu</option>
                  <option value="Dưới 1 năm">Dưới 1 năm</option>
                  <option value="1-2 năm">1-2 năm</option>
                  <option value="2-3 năm">2-3 năm</option>
                  <option value="3-5 năm">3-5 năm</option>
                  <option value="5+ năm">5+ năm</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Học vấn</label>
                <select className="form-select" name="education" value={formData.education} onChange={handleChange}>
                  <option value="Không yêu cầu">Không yêu cầu</option>
                  <option value="Trung cấp">Trung cấp</option>
                  <option value="Cao đẳng">Cao đẳng</option>
                  <option value="Đại học">Đại học</option>
                  <option value="Sau đại học">Sau đại học</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Giới tính</label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="Không yêu cầu">Không yêu cầu</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Số lượng tuyển</label>
                <input className="form-input" type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Hạn ứng tuyển</label>
                <input className="form-input" type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
              </div>
            </div>

            {/* Salary */}
            <div className="form-group">
              <label className="form-label">Mức lương (VNĐ)</label>
              <div className="salary-row-inputs">
                <input className="form-input" type="number" name="salaryMin" value={formData.salaryMin} onChange={handleChange} placeholder="Từ (VD: 15000000)" />
                <input className="form-input" type="number" name="salaryMax" value={formData.salaryMax} onChange={handleChange} placeholder="Đến (VD: 25000000)" />
              </div>
            </div>

            {/* Location */}
            <div className="form-group">
              <label className="form-label">Địa điểm làm việc</label>
              <input className="form-input" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="VD: Tầng 3, Tòa nhà FPT, 17 Duy Tân, Cầu Giấy, Hà Nội" />
            </div>
          </div>

          {/* Mô tả chi tiết */}
          <div className="create-job-card">
            <h2 className="card-section-title">
              <i className="fa-solid fa-file-lines section-icon"></i>
              Mô tả chi tiết
            </h2>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-briefcase" style={{ marginRight: 6 }}></i>
                Mô tả công việc <span className="required">*</span>
              </label>
              <textarea
                className="form-textarea"
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Nhập chi tiết nhiệm vụ và trách nhiệm công việc..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-briefcase" style={{ marginRight: 6 }}></i>
                Yêu cầu ứng viên <span className="required">*</span>
              </label>
              <textarea
                className="form-textarea"
                rows="5"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Nhập các yêu cầu về kỹ năng, kinh nghiệm..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-briefcase" style={{ marginRight: 6 }}></i>
                Quyền lợi
              </label>
              <textarea
                className="form-textarea"
                rows="4"
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                placeholder="Nhập đãi ngộ, chế độ thưởng, bảo hiểm..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="create-job-card">
            <div className="form-actions">
              <button type="submit" className="btn-submit">
                <i className="fa-solid fa-paper-plane"></i>
                Đăng tin tuyển dụng
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default CreateJob
