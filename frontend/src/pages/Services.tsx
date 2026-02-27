import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Software Development',
    desc: 'We design and build custom web and mobile applications — from MVPs to enterprise-grade platforms. Our development process is agile, transparent, and focused on delivering real business value on time and on budget.',
    features: ['React / Next.js', 'Node.js / NestJS', 'React Native', 'MongoDB', 'PostgreSQL', 'AWS / Cloud', 'REST APIs'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.11 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/></svg>,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance for businesses at every stage. We assess your current infrastructure, identify gaps and opportunities, and build a roadmap that aligns your IT with your business strategy.',
    features: ['IT Audit', 'Infrastructure Design', 'Cloud Migration', 'Security Assessment', 'Tech Strategy', 'System Integration'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Digital Marketing',
    desc: 'Full-service digital marketing that gets your brand in front of the right audience. From SEO and content strategy to social media management and paid advertising — we drive traffic, leads, and revenue.',
    features: ['SEO / SEM', 'Social Media', 'Content Strategy', 'Email Marketing', 'Meta & Google Ads', 'Analytics & Reporting'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: 'UI/UX Design',
    desc: 'Beautiful, user-centered design that converts. We conduct user research, build wireframes and prototypes, and deliver pixel-perfect interfaces that delight users and achieve your business objectives.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'Design Systems', 'Usability Testing'],
  },
]

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">Services</div>
          <h1>What We Can Build<br />For You</h1>
          <p>Comprehensive technology services tailored for Nigerian businesses ready to grow.</p>
        </div>
      </div>

      <section className="section">
        <div className="container services-list">
          {SERVICES.map(s => (
            <div key={s.title} className="service-full-card">
              <div className="service-full-icon">{s.icon}</div>
              <div className="service-full-body">
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 20 }}>{s.desc}</p>
                <div className="feature-pills">
                  {s.features.map(f => <span key={f} className="feature-pill">{f}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="cta-band">
            <h2>Have a Project in Mind?</h2>
            <p>Tell us what you're building and we'll tell you exactly how we can help.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
