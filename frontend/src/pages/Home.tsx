import { Link } from 'react-router-dom'
import testimonial1 from '../assets/testimonial-1.jpg'
import testimonial2 from '../assets/testimonial-2.jpg'
import testimonial3 from '../assets/testimonial-3.jpg'
import './Home.css'

const STATS = [
  { num: '200+', label: 'Students Trained' },
  { num: '50+',  label: 'Projects Delivered' },
  { num: '6+',   label: 'Courses Offered' },
  { num: '98%',  label: 'Client Satisfaction' },
]

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Software Development',
    desc: 'Custom web and mobile applications built to solve your unique business challenges with modern technologies.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.11 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>,
    title: 'IT Consulting',
    desc: 'Strategic technology advice that aligns your IT infrastructure with your business goals and growth plans.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Digital Marketing',
    desc: 'Data-driven strategies that grow your online presence and convert visitors into paying customers.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    title: 'Tech Academy',
    desc: 'Hands-on training programs that equip students with in-demand tech skills for the Nigerian job market.',
  },
]

const COURSES = [
  { title: 'Full-Stack Web Development', price: '₦150,000', duration: '12 Weeks', level: 'Beginner', color: '#062040' },
  { title: 'Mobile App Development',     price: '₦120,000', duration: '10 Weeks', level: 'Intermediate', color: '#0A3060' },
  { title: 'Ethical Hacking & Cybersecurity', price: '₦100,000', duration: '8 Weeks', level: 'Advanced', color: '#041528' },
]

const TESTIMONIALS = [
  { quote: 'Willtech built our e-commerce platform in record time. The quality is outstanding and they were incredibly communicative throughout.', name: 'Adebayo Ogunlesi', role: 'CEO, TradeMart NG', img: testimonial1 },
  { quote: 'The Full-Stack course completely changed my career. I landed a developer job 3 weeks after graduating. Best investment I\'ve made.', name: 'Fatima Kabiru', role: 'Graduate, Web Dev Bootcamp', img: testimonial2 },
  { quote: 'Their IT consulting team restructured our entire infrastructure. We reduced downtime by 80% and cut costs significantly.', name: 'Chukwuemeka Ihejirika', role: 'CTO, Meridian Finance', img: testimonial3 },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <svg className="hero-visual" viewBox="0 0 500 500" aria-hidden="true">
          <circle cx="250" cy="250" r="200" fill="none" stroke="var(--blue-300)" strokeWidth="1"/>
          <circle cx="250" cy="250" r="150" fill="none" stroke="var(--blue-300)" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="100" fill="none" stroke="var(--blue-300)" strokeWidth="1"/>
          <circle cx="250" cy="250" r="50"  fill="none" stroke="var(--blue-300)" strokeWidth="0.5"/>
          <line x1="50" y1="250" x2="450" y2="250" stroke="var(--blue-300)" strokeWidth="0.5"/>
          <line x1="250" y1="50" x2="250" y2="450" stroke="var(--blue-300)" strokeWidth="0.5"/>
        </svg>
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag fade-up fade-up-1">
              <span className="pulse-dot" />
              Now Enrolling for 2026 cohort
            </div>
            <h1 className="fade-up fade-up-2">
              Build. Learn.<br /><em>Innovate</em> with Willtech.
            </h1>
            <p className="hero-sub fade-up fade-up-3">
              We build world-class software, deliver expert IT consulting, and train
              the next generation of Nigerian tech talent through our hands-on academy.
            </p>
            <div className="hero-actions fade-up fade-up-4">
              <Link to="/services" className="btn btn-white btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Our Services
              </Link>
              <Link to="/academy" className="btn btn-outline btn-lg hero-btn-outline">
                Explore Academy
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="hero-stats fade-up fade-up-4">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-track" aria-hidden="true">
          {['Web Development','Mobile Apps','IT Consulting','Tech Training','Digital Marketing','UI/UX Design','Cloud Solutions','Cybersecurity',
            'Web Development','Mobile Apps','IT Consulting','Tech Training','Digital Marketing','UI/UX Design','Cloud Solutions','Cybersecurity'].map((t,i) => (
            <span key={i} className="strip-item">{t}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="about-visual">
              <div className="about-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M6 21v-1a6 6 0 0112 0v1"/></svg>
                <p>Willtech_NG Team</p>
              </div>
              <div className="about-badge">
                <div className="about-badge-num">5+</div>
                <div className="about-badge-text">Years Experience</div>
              </div>
            </div>
            <div>
              <div className="tag">Who We Are</div>
              <h2 style={{ marginBottom: 16 }}>Empowering Nigeria's<br />Digital Future</h2>
              <p style={{ marginBottom: 16 }}>Willtech_NG is a Nigeria-based technology company delivering software development, IT consulting, digital marketing, and world-class tech education to individuals and businesses across Nigeria.</p>
              <p>We believe technology should be accessible to everyone — from the entrepreneur needing a powerful digital presence to the student breaking into tech for the first time.</p>
              <ul className="check-list" style={{ marginTop: 20 }}>
                {['Expert-led courses with real-world projects','End-to-end software development for businesses','Trusted by 50+ companies across Nigeria'].map(item => (
                  <li key={item}>
                    <span className="check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 8 }}>Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 560, margin: '0 auto 48px' }}>
            <div className="tag">What We Do</div>
            <h2>Services Built for<br />Modern Businesses</h2>
            <p style={{ marginTop: 12 }}>From building your digital products to training your team, Willtech_NG delivers results.</p>
          </div>
          <div className="services-preview-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="service-preview-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--blue-950)' }}>
        <div className="container">
          <div className="courses-header">
            <div>
              <div className="tag tag-dark">Willtech Academy</div>
              <h2 style={{ color: 'white' }}>Learn. Build. Get Hired.</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 8, maxWidth: 440 }}>Industry-relevant courses taught by experienced Nigerian tech professionals.</p>
            </div>
            <Link to="/academy" className="btn btn-outline courses-link">All Courses →</Link>
          </div>
          <div className="grid-3">
            {COURSES.map(c => (
              <div key={c.title} className="course-preview-card">
                <div className="course-thumb" style={{ background: `linear-gradient(135deg, ${c.color}, var(--blue-500))` }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                  <span className={`course-level level-${c.level.slice(0,3).toLowerCase()}`}>{c.level}</span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <div className="course-meta">
                    <span className="course-price">{c.price}</span>
                    <span className="course-dur">{c.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 480, margin: '0 auto 48px' }}>
            <div className="tag">Testimonials</div>
            <h2>What Our Clients & Students Say</h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="quote-mark">"</div>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', marginBottom: 20 }}>{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar-img"><img src={t.img} alt={t.name} /></div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <div className="tag tag-dark">Get Started Today</div>
            <h2>Ready to Build Something Great?</h2>
            <p>Whether you need a world-class product built or want to launch a tech career, Willtech_NG is your partner.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Talk to Us</Link>
              <Link to="/academy" className="btn btn-outline" style={{ color: 'var(--blue-200)', borderColor: 'rgba(255,255,255,0.3)' }}>Browse Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
