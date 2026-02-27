import { useState } from 'react'
import api from '../lib/api'
import { useToast } from '../components/ui/Toast'
import './Contact.css'

const SUBJECTS = ['Software Development Project','IT Consulting','Digital Marketing','Course Enrollment','Partnership','General Inquiry']

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/willtechacademy',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/willtech-academy',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/willtechacademy',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const { showToast } = useToast()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contacts', form)
      setSent(true)
      showToast('Message sent! We\'ll get back to you within 24 hours.')
    } catch {
      showToast('Failed to send. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">Contact</div>
          <h1>Let's Talk</h1>
          <p>Have a project idea, a question about our courses, or want to partner with us? We'd love to hear from you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ marginBottom: 32 }}>Get In Touch</h2>
              {[
                { icon: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Office Address', text: '11 leo street, opposite mosque Akure, Ondo state\n 12 olorunda estate, Ketu, Lagos' },
                { icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.11 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/></svg>, title: 'Phone', text: '+234 916 114 5539\nMon–Fri, 9am–6pm WAT' },
                { icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, title: 'Email', text: 'Willtechacademy@gmail.com' },
              ].map(item => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p style={{ fontSize: '0.88rem', whiteSpace: 'pre-line' }}>{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="social-links">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-btn"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              </div>
            </div>

            <div className="contact-form-card">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div className="success-icon" style={{ margin: '0 auto 16px' }}>
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p style={{ marginTop: 8 }}>We'll get back to you within 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: 24 }}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input className="form-input" required placeholder="enter your first name" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input className="form-input" required placeholder="enter your last name" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="enter your email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" placeholder="enter your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select className="form-input form-select" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                        <option value="">Select a subject</option>
                        {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea className="form-input" rows={4} required placeholder="Tell us more about what you need..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                      {loading ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
