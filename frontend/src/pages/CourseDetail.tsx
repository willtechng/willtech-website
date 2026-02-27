import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { COURSES } from './Academy'
import api from '../lib/api'
import { useToast } from '../components/ui/Toast'
import './CourseDetail.css'

interface EnrollForm { firstName: string; lastName: string; email: string; phone: string; hearAboutUs: string }
const EMPTY: EnrollForm = { firstName: '', lastName: '', email: '', phone: '', hearAboutUs: '' }

export default function CourseDetail() {
  const { id } = useParams()
  const { showToast } = useToast()
  const course = COURSES.find(c => c.id === Number(id)) || COURSES[0]

  const [form, setForm] = useState<EnrollForm>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/enrollments', {
        ...form,
        courseName: course.title,
        coursePrice: 0,
      })
      setSuccess(true)
      showToast("Enrollment submitted! We'll contact you within 24 hours.")
    } catch (err: any) {
      showToast(err.response?.data?.message || 'Submission failed.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="cd-hero">
        <div className="container cd-hero-inner">
          <Link to="/academy" className="cd-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Courses
          </Link>
          <div className="cd-hero-grid">
            <div>
              <div className="cd-badges">
                <span className="cd-badge-cat">{course.category}</span>
                <span className="cd-badge-level">{course.level}</span>
              </div>
              <h1>{course.title}</h1>
              <p className="cd-long-desc">{course.longDescription}</p>
              <div className="cd-meta">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  {course.duration}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  {course.students} students enrolled
                </span>
              </div>
            </div>

            <div className="cd-enroll-card">
              <div className="cd-course-img">
                <img src={course.image} alt={course.title} />
              </div>
              {success ? (
                <div className="cd-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3>Enrollment Submitted!</h3>
                  <p>Our team will contact you within 24 hours with payment details and class schedule.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cd-form">
                  <h3>Enroll in This Course</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input className="form-input" required placeholder="John" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input className="form-input" required placeholder="Doe" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" required placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input className="form-input" required placeholder="+234 800 000 0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="enroll-notice" style={{ fontSize: '0.82rem' }}>
                    💳 <strong>Payment collected offline.</strong> Our team will contact you with bank details within 24 hours.
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading ? 'Submitting…' : 'Submit Enrollment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cd-content-grid">
            <div>
              <h2>Curriculum</h2>
              <div className="cd-curriculum">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="cd-curriculum-item">
                    <div className="cd-num">{i + 1}</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>What You'll Get</h2>
              <div className="cd-features">
                {course.features.map(f => (
                  <div key={f} className="cd-feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>Ready to Start Your Journey?</h2>
          <p style={{ marginBottom: 28 }}>Join hundreds of students who have transformed their careers with this course.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/academy" className="btn btn-outline">Browse Other Courses</Link>
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Enroll Now ↑
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
