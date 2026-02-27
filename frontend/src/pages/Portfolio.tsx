import { useState, useEffect } from 'react'
import api from '../lib/api'
import './Portfolio.css'

const STATIC_PROJECTS = [
  { _id: '1', title: 'TradeMart E-Commerce Platform', description: 'Full-featured online marketplace with vendor management, payments, and logistics integration.', category: 'web', technologies: ['React','Node.js','MongoDB','Paystack'] },
  { _id: '2', title: 'Meridian Finance App', description: 'Personal finance tracking and micro-investment app for Android and iOS with 10,000+ downloads.', category: 'mobile', technologies: ['React Native','Firebase','Flutterwave'] },
  { _id: '3', title: 'HealthBridge HMS', description: 'Complete hospital management system deployed across 3 clinics in Lagos with patient records and billing.', category: 'enterprise', technologies: ['Next.js','PostgreSQL','AWS'] },
  { _id: '4', title: 'LagosFresh Brand Campaign', description: 'Full digital marketing campaign that grew organic traffic by 340% and doubled online sales in 6 months.', category: 'marketing', technologies: ['SEO','Meta Ads','Content Strategy'] },
  { _id: '5', title: 'EduTrack LMS', description: 'Learning management system for a secondary school network managing 2,000 students and 120 teachers.', category: 'web', technologies: ['Vue.js','Laravel','MySQL'] },
  { _id: '6', title: 'RideSwift Driver App', description: 'Real-time ride-hailing driver app with GPS tracking, earnings dashboard, and trip management.', category: 'mobile', technologies: ['Flutter','Google Maps','Node.js'] },
]

const FILTERS = ['all','web','mobile','enterprise','marketing']
const FILTER_LABELS: Record<string,string> = { all: 'All Projects', web: 'Web Development', mobile: 'Mobile Apps', enterprise: 'Enterprise', marketing: 'Digital Marketing' }

const GRAD: Record<string,string> = {
  web: 'linear-gradient(135deg,#062040,#0E4A8C)',
  mobile: 'linear-gradient(135deg,#0A3060,#2979D4)',
  enterprise: 'linear-gradient(135deg,#041528,#062040)',
  marketing: 'linear-gradient(135deg,#0E4A8C,#1565C0)',
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState(STATIC_PROJECTS)

  useEffect(() => {
    api.get('/projects/live')
      .then(r => { if (r.data.data?.length) setProjects(r.data.data) })
      .catch(() => {})
  }, [])

  const visible = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">Portfolio</div>
          <h1>Work We're Proud Of</h1>
          <p>A selection of projects we've delivered for clients across Nigeria and beyond.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {visible.map(p => (
              <div key={p._id} className="portfolio-card">
                <div className="portfolio-card-img" style={{ background: GRAD[p.category] || GRAD.web }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                </div>
                <div className="portfolio-card-body">
                  <div className="portfolio-cat">{FILTER_LABELS[p.category] || p.category}</div>
                  <h3>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem' }}>{p.description}</p>
                  <div className="tech-tags">
                    {p.technologies.map((t: string) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
