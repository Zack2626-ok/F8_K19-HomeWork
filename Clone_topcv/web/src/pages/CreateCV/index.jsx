import { useState } from 'react'
import './index.css'

function CreateCV() {
  const [info, setInfo] = useState({
    fullName: '', position: '', email: '', phone: '', address: ''
  })
  const [objective, setObjective] = useState('')
  const [educations, setEducations] = useState([
    { school: '', major: '', period: '', description: '' }
  ])
  const [experiences, setExperiences] = useState([
    { company: '', position: '', period: '', description: '' }
  ])
  const [skills, setSkills] = useState(['ReactJS', 'JavaScript', 'CSS'])
  const [newSkill, setNewSkill] = useState('')
  const [certifications, setCertifications] = useState([
    { name: '', issuer: '', year: '' }
  ])

  const addEducation = () => setEducations([...educations, { school: '', major: '', period: '', description: '' }])
  const addExperience = () => setExperiences([...experiences, { company: '', position: '', period: '', description: '' }])
  const addCert = () => setCertifications([...certifications, { name: '', issuer: '', year: '' }])

  const removeEducation = (i) => setEducations(educations.filter((_, idx) => idx !== i))
  const removeExperience = (i) => setExperiences(experiences.filter((_, idx) => idx !== i))
  const removeCert = (i) => setCertifications(certifications.filter((_, idx) => idx !== i))

  const updateEducation = (i, field, value) => {
    const updated = [...educations]
    updated[i][field] = value
    setEducations(updated)
  }
  const updateExperience = (i, field, value) => {
    const updated = [...experiences]
    updated[i][field] = value
    setExperiences(updated)
  }
  const updateCert = (i, field, value) => {
    const updated = [...certifications]
    updated[i][field] = value
    setCertifications(updated)
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }
  const removeSkill = (skill) => setSkills(skills.filter(s => s !== skill))

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addSkill() }
  }

  return (
    <div className="container" style={{ paddingBottom: 60 }}>
      <div className="cv-header">
        <h1 className="cv-title">Tạo CV Online</h1>
        <p className="cv-sub">Tạo CV chuyên nghiệp miễn phí — Xem trước trực tiếp bên phải</p>
      </div>

      <div className="cv-builder-layout">
        {/* Form Side */}
        <div className="cv-form-side">
          {/* Personal Info */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-user cv-icon"></i> Thông tin cá nhân
            </h2>
            <div className="form-group">
              <label className="form-label">Họ và tên</label>
              <input className="form-input" value={info.fullName}
                onChange={e => setInfo({ ...info, fullName: e.target.value })}
                placeholder="Nguyễn Văn A" />
            </div>
            <div className="form-group">
              <label className="form-label">Vị trí ứng tuyển</label>
              <input className="form-input" value={info.position}
                onChange={e => setInfo({ ...info, position: e.target.value })}
                placeholder="Frontend Developer" />
            </div>
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" value={info.email}
                  onChange={e => setInfo({ ...info, email: e.target.value })}
                  placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Số điện thoại</label>
                <input className="form-input" value={info.phone}
                  onChange={e => setInfo({ ...info, phone: e.target.value })}
                  placeholder="0901 234 567" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Địa chỉ</label>
              <input className="form-input" value={info.address}
                onChange={e => setInfo({ ...info, address: e.target.value })}
                placeholder="Quận Cầu Giấy, Hà Nội" />
            </div>
          </div>

          {/* Objective */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-bullseye cv-icon"></i> Mục tiêu nghề nghiệp
            </h2>
            <div className="form-group">
              <textarea className="form-textarea" value={objective}
                onChange={e => setObjective(e.target.value)}
                placeholder="Mô tả ngắn gọn mục tiêu nghề nghiệp của bạn..." rows="3" />
            </div>
          </div>

          {/* Education */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-graduation-cap cv-icon"></i> Học vấn
            </h2>
            {educations.map((edu, i) => (
              <div key={i} className="entry-card">
                {educations.length > 1 && (
                  <button className="remove-entry-btn" onClick={() => removeEducation(i)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Trường</label>
                    <input className="form-input" value={edu.school}
                      onChange={e => updateEducation(i, 'school', e.target.value)}
                      placeholder="Đại học Bách Khoa Hà Nội" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Chuyên ngành</label>
                    <input className="form-input" value={edu.major}
                      onChange={e => updateEducation(i, 'major', e.target.value)}
                      placeholder="Công nghệ Thông tin" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Thời gian</label>
                  <input className="form-input" value={edu.period}
                    onChange={e => updateEducation(i, 'period', e.target.value)}
                    placeholder="09/2018 - 06/2022" />
                </div>
              </div>
            ))}
            <button className="add-entry-btn" onClick={addEducation}>
              <i className="fa-solid fa-plus"></i> Thêm học vấn
            </button>
          </div>

          {/* Experience */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-briefcase cv-icon"></i> Kinh nghiệm làm việc
            </h2>
            {experiences.map((exp, i) => (
              <div key={i} className="entry-card">
                {experiences.length > 1 && (
                  <button className="remove-entry-btn" onClick={() => removeExperience(i)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Công ty</label>
                    <input className="form-input" value={exp.company}
                      onChange={e => updateExperience(i, 'company', e.target.value)}
                      placeholder="Công ty TNHH ABC" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Vị trí</label>
                    <input className="form-input" value={exp.position}
                      onChange={e => updateExperience(i, 'position', e.target.value)}
                      placeholder="Frontend Developer" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Thời gian</label>
                  <input className="form-input" value={exp.period}
                    onChange={e => updateExperience(i, 'period', e.target.value)}
                    placeholder="01/2022 - Hiện tại" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mô tả công việc</label>
                  <textarea className="form-textarea" value={exp.description}
                    onChange={e => updateExperience(i, 'description', e.target.value)}
                    placeholder="Mô tả các nhiệm vụ, thành tích..." rows="3" />
                </div>
              </div>
            ))}
            <button className="add-entry-btn" onClick={addExperience}>
              <i className="fa-solid fa-plus"></i> Thêm kinh nghiệm
            </button>
          </div>

          {/* Skills */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-star cv-icon"></i> Kỹ năng
            </h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                  <button className="skill-remove-btn" onClick={() => removeSkill(skill)}>×</button>
                </span>
              ))}
            </div>
            <div className="skill-input-wrap">
              <input className="form-input" value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập kỹ năng rồi Enter" />
              <button className="add-skill-btn" onClick={addSkill}>
                <i className="fa-solid fa-plus"></i> Thêm
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="cv-section-card">
            <h2 className="cv-section-title">
              <i className="fa-solid fa-award cv-icon"></i> Chứng chỉ
            </h2>
            {certifications.map((cert, i) => (
              <div key={i} className="entry-card">
                {certifications.length > 1 && (
                  <button className="remove-entry-btn" onClick={() => removeCert(i)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Tên chứng chỉ</label>
                    <input className="form-input" value={cert.name}
                      onChange={e => updateCert(i, 'name', e.target.value)}
                      placeholder="AWS Certified" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tổ chức cấp</label>
                    <input className="form-input" value={cert.issuer}
                      onChange={e => updateCert(i, 'issuer', e.target.value)}
                      placeholder="Amazon Web Services" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Năm</label>
                  <input className="form-input" value={cert.year}
                    onChange={e => updateCert(i, 'year', e.target.value)}
                    placeholder="2024" />
                </div>
              </div>
            ))}
            <button className="add-entry-btn" onClick={addCert}>
              <i className="fa-solid fa-plus"></i> Thêm chứng chỉ
            </button>
          </div>
        </div>

        {/* Preview Side */}
        <div className="cv-preview-side">
          <div className="cv-preview-card">
            {/* Header */}
            <div className="preview-header">
              <div className="preview-avatar">
                {info.fullName ? info.fullName.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="preview-name">
                {info.fullName || 'Họ và tên'}
              </div>
              <div className="preview-role">
                {info.position || 'Vị trí ứng tuyển'}
              </div>
            </div>

            <div className="preview-body">
              {/* Contact */}
              <div className="preview-section">
                <div className="preview-section-title">Thông tin liên hệ</div>
                <div className="preview-contact">
                  {info.email && (
                    <span><i className="fa-solid fa-envelope icon-green"></i> {info.email}</span>
                  )}
                  {info.phone && (
                    <span><i className="fa-solid fa-phone icon-green"></i> {info.phone}</span>
                  )}
                  {info.address && (
                    <span><i className="fa-solid fa-location-dot icon-green"></i> {info.address}</span>
                  )}
                  {!info.email && !info.phone && !info.address && (
                    <span style={{ color: '#ccc', fontStyle: 'italic' }}>Chưa có thông tin</span>
                  )}
                </div>
              </div>

              {/* Objective */}
              {objective && (
                <div className="preview-section">
                  <div className="preview-section-title">Mục tiêu nghề nghiệp</div>
                  <p className="preview-item-desc">{objective}</p>
                </div>
              )}

              {/* Education */}
              {educations.some(e => e.school) && (
                <div className="preview-section">
                  <div className="preview-section-title">Học vấn</div>
                  {educations.filter(e => e.school).map((edu, i) => (
                    <div key={i} className="preview-item">
                      <div className="preview-item-title">{edu.school}</div>
                      <div className="preview-item-sub">{edu.major} {edu.period && `• ${edu.period}`}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience */}
              {experiences.some(e => e.company) && (
                <div className="preview-section">
                  <div className="preview-section-title">Kinh nghiệm</div>
                  {experiences.filter(e => e.company).map((exp, i) => (
                    <div key={i} className="preview-item">
                      <div className="preview-item-title">{exp.position || exp.company}</div>
                      <div className="preview-item-sub">{exp.company} {exp.period && `• ${exp.period}`}</div>
                      {exp.description && <p className="preview-item-desc">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {skills.length > 0 && (
                <div className="preview-section">
                  <div className="preview-section-title">Kỹ năng</div>
                  <div className="preview-skills">
                    {skills.map(s => (
                      <span key={s} className="preview-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications.some(c => c.name) && (
                <div className="preview-section">
                  <div className="preview-section-title">Chứng chỉ</div>
                  {certifications.filter(c => c.name).map((cert, i) => (
                    <div key={i} className="preview-item">
                      <div className="preview-item-title">{cert.name}</div>
                      <div className="preview-item-sub">{cert.issuer} {cert.year && `• ${cert.year}`}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCV
