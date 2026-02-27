import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../lib/api'
import { useToast } from '../components/ui/Toast'
import './Academy.css'

export const COURSES = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    duration: '24 weeks',
    students: 234,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and build real projects.',
    longDescription: 'Become a professional Fullstack Developer. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, Express, and deployment. Build real-time, interactive web applications.',
    curriculum: ['HTML & CSS', 'JavaScript Basics', 'Object-Oriented JavaScript', 'DOM Manipulation', 'React Library', 'Version Control', 'Node.js', 'Deployment'],
    features: ['Live instructor-led sessions', 'Hands-on projects', '1-on-1 mentoring', 'Career support', 'Certificate of completion', 'Lifetime access to materials'],
  },
  {
    id: 2,
    title: 'Product Design / UI/UX',
    category: 'Product Design UI/UX',
    duration: '12 weeks',
    students: 189,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    description: 'Build cross-platform Product design for iOS and Android.',
    longDescription: 'Learn to design and deliver digital products from user research to prototyping and usability testing.',
    curriculum: ['Introduction to Product Design (Figma)', 'User Interface / Visual Design', 'Interaction Design (Figma)', 'User Experience (FigJam, Google Forms)', 'Capstone Project'],
    features: ['Live instructor-led sessions', 'Build 3 complete projects', '1-on-1 mentoring', 'Design portfolio', 'Certificate of completion', 'Lifetime access to materials'],
  },
  {
    id: 3,
    title: 'Data Analysis & Machine Learning',
    category: 'Data Analysis',
    duration: '12 weeks',
    students: 156,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    description: 'Master Python, data analysis, and machine learning algorithms.',
    longDescription: 'Learn Python, Excel, SQL, Power BI, and build predictive machine learning models to analyze and forecast trends.',
    curriculum: ['Microsoft Excel', 'SQL', 'Power BI', 'Python Basics', 'Python NumPy', 'Python Pandas', 'Python Plotly', 'Machine Learning Basics'],
    features: ['Live instructor-led sessions', 'Real-world datasets', '1-on-1 mentoring', 'Industry projects', 'Certificate of completion', 'Lifetime access to materials'],
  },
  {
    id: 4,
    title: 'Cybersecurity',
    category: 'Cybersecurity',
    duration: '12 weeks',
    students: 98,
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
    description: 'Learn penetration testing, security audits, and ethical hacking.',
    longDescription: 'This course provides an overview of the fundamental concepts, approaches, and methods needed to protect networks, information systems, and digital assets.',
    curriculum: ['Introduction to Cybersecurity', 'Fundamentals of Networking', 'Social Engineering', 'Access Controls & Biometric', 'Operating System Security', 'Cryptography', 'Security Policies & Procedures', 'Web Security'],
    features: ['Live instructor-led sessions', 'Hands-on labs', '1-on-1 mentoring', 'Real attack simulations', 'Certificate of completion', 'Lifetime access to materials'],
  },
  {
    id: 5,
    title: 'Frontend Engineering',
    category: 'Web Development',
    duration: '5 weeks',
    students: 210,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    description: 'Master React, Redux, and modern frontend development practices.',
    longDescription: 'Jumpstart your career as a frontend web developer. Learn HTML, CSS, JavaScript, React, Next.js, and build dynamic Single Page Applications (SPAs).',
    curriculum: ['HTML & CSS', 'JavaScript Basics', 'Object-Oriented JavaScript', 'DOM Manipulation', 'React Library', 'Next.js', 'Version Control (Git/GitHub)', 'Capstone Project'],
    features: ['Live instructor-led sessions', 'Build 3 complete apps', '1-on-1 mentoring', 'Portfolio guidance', 'Certificate of completion', 'Lifetime access to materials'],
  },
]

const CATEGORIES = ['All', 'Web Development', 'Product Design UI/UX', 'Data Analysis', 'Cybersecurity']
const LEVEL_CLASS: Record<string, string> = { Beginner: 'level-beg', Intermediate: 'level-int', Advanced: 'level-adv' }

interface EnrollForm { firstName: string; lastName: string; email: string; phone: string; hearAboutUs: string }
const EMPTY: EnrollForm = { firstName: '', lastName: '', email: '', phone: '', hearAboutUs: '' }

export default function Academy() {
  const { showToast } = useToast()
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null)
  const [form, setForm] = useState<EnrollForm>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const visible = COURSES.filter(c => {
    const matchCat = category === 'All' || c.category === category
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  function openModal(course: typeof COURSES[0]) {
    setSelectedCourse(course)
    setForm(EMPTY)
    setSuccess(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedCourse) return
    setLoading(true)
    try {
      await api.post('/enrollments', {
        ...form,
        courseName: selectedCourse.title,
        coursePrice: 0,
      })
      setSuccess(true)
      showToast("Enrollment submitted! We'll contact you within 24 hours.")
    } catch (err: any) {
      showToast(err.response?.data?.message || 'Submission failed. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">Our Courses</div>
          <h1>Learn In-Demand<br />Tech Skills</h1>
          <p>Choose from our range of industry-focused courses designed to prepare you for a successful tech career.</p>
        </div>
      </div>

      {/* ── FILTERS BAR ── */}
      <div className="courses-filter-bar">
        <div className="container courses-filter-inner">
          <div className="course-search-wrap">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="course-search-input"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="category-pills">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`cat-pill${category === c ? ' active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {visible.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No courses found matching your search.
            </div>
          ) : (
            <div className="courses-grid">
              {visible.map(c => (
                <div key={c.id} className="course-card-outer">
                  <Link to={`/academy/${c.id}`} className="course-card-link">
                    <div className="course-card-img-wrap">
                      <img src={c.image} alt={c.title} />
                      <div className="course-card-badges">
                        <span className="course-cat-badge">{c.category}</span>
                        <span className={`course-level-badge ${LEVEL_CLASS[c.level]}`}>{c.level}</span>
                      </div>
                    </div>
                    <div className="course-card-body">
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                      <div className="course-card-meta">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          {c.duration}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                          {c.students} students
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="course-card-footer">
                    <Link to={`/academy/${c.id}`} className="btn btn-outline btn-sm">View Details</Link>
                    <button className="btn btn-primary btn-sm" onClick={() => openModal(c)}>Enroll Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div
        className={`modal-overlay${selectedCourse ? ' open' : ''}`}
        onClick={e => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) setSelectedCourse(null) }}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setSelectedCourse(null)}>
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {success ? (
            <div className="enroll-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3>Enrollment Submitted!</h3>
              <p>Thank you! Our team will contact you within 24 hours with payment details and class schedule for <strong>{selectedCourse?.title}</strong>.</p>
              <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => setSelectedCourse(null)}>Close</button>
            </div>
          ) : (
            <>
              <div className="modal-course-label">{selectedCourse?.title}</div>
              <h2 style={{ marginBottom: 6 }}>Enroll in This Course</h2>
              <p style={{ fontSize: '0.9rem', marginBottom: 24 }}>Fill in your details and our team will contact you with payment information and class schedule.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input className="form-input" required placeholder="John" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input className="form-input" required placeholder="Doe" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" required placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" required placeholder="+234 800 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">How did you hear about us?</label>
                  <select className="form-input form-select" value={form.hearAboutUs} onChange={e => setForm({ ...form, hearAboutUs: e.target.value })}>
                    <option value="">Select an option</option>
                    <option>Social Media</option>
                    <option>Friend / Family</option>
                    <option>Google Search</option>
                    <option>Event / Workshop</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="enroll-notice">
                  💳 <strong>Payment is collected offline.</strong> After submitting, our team will contact you within 24 hours with bank details, class schedule, and next steps.
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading ? 'Submitting…' : 'Submit Enrollment Request'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}
