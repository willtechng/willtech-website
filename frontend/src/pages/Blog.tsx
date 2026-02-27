import { useState, useEffect } from 'react'
import api from '../lib/api'
import './Blog.css'

const STATIC_POSTS = [
  { _id: '1', title: 'Why Every Nigerian Business Needs a Mobile App in 2025', excerpt: 'With smartphone penetration at 60% and rising, here\'s why mobile-first is no longer optional for Nigerian businesses.', category: 'Development', createdAt: '2025-01-15' },
  { _id: '2', title: 'From Zero to Hired: Our Students\' Journey into Tech', excerpt: 'We spoke to 10 graduates from our bootcamp who landed tech jobs within 3 months of completing their course.', category: 'Academy', createdAt: '2025-01-08' },
  { _id: '3', title: 'The State of Cybersecurity in Nigeria: What You Need to Know', excerpt: 'Cyberattacks on Nigerian businesses increased 300% in 2024. Here\'s how to protect your company.', category: 'Security', createdAt: '2024-12-20' },
  { _id: '4', title: 'How to Use WhatsApp Business to 3x Your Sales in Nigeria', excerpt: 'Practical tactics for using WhatsApp Business API and broadcast lists to drive sales for Nigerian SMEs.', category: 'Marketing', createdAt: '2024-12-10' },
  { _id: '5', title: 'Top 5 Tech Skills With the Highest Salaries in Nigeria Right Now', excerpt: 'Based on 500+ job listings, we rank the highest-paying tech skills in the Nigerian market this quarter.', category: 'Career', createdAt: '2024-11-28' },
  { _id: '6', title: 'React vs Vue in 2025: Which Should You Learn First?', excerpt: 'An honest comparison of the two most popular JavaScript frameworks for developers in the African market.', category: 'Development', createdAt: '2024-11-15' },
]

const CAT_COLORS: Record<string, string> = {
  Development: 'linear-gradient(135deg,#062040,#0E4A8C)',
  Academy: 'linear-gradient(135deg,#0A3060,#2979D4)',
  Security: 'linear-gradient(135deg,#041528,#062040)',
  Marketing: 'linear-gradient(135deg,#0E4A8C,#1565C0)',
  Career: 'linear-gradient(135deg,#0A3060,var(--blue-400))',
}

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Blog() {
  const [posts, setPosts] = useState(STATIC_POSTS)

  useEffect(() => {
    api.get('/blog/published')
      .then(r => { if (r.data.data?.length) setPosts(r.data.data) })
      .catch(() => {})
  }, [])

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">Blog</div>
          <h1>Tech Insights &<br />Industry News</h1>
          <p>Stay ahead with articles from the Willtech_NG team on development, careers, and the Nigerian tech scene.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map(p => (
              <div key={p._id} className="blog-card">
                <div className="blog-thumb" style={{ background: CAT_COLORS[p.category] || CAT_COLORS.Development }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span className="blog-category">{p.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{fmt(p.createdAt)}</span>
                    <span>·</span>
                    <span>5 min read</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem' }}>{p.excerpt}</p>
                  <a href="#" className="read-more">
                    Read Article
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
