import { Link } from 'react-router-dom'
import teamSola from '../assets/team-sola.jpeg'
import teamTobi from '../assets/team-tobi.jpeg'
import teamAbiola from '../assets/team-abiola.jpeg'
import teamPelumi from '../assets/team-pelumi.jpeg'
import teamKolade from '../assets/team-kolade.jpeg'
import handsOnVideo from '../assets/hands-on-learning.webm'
import mentorsVideo from '../assets/experienced-mentors.webm'
import studentVideo from '../assets/student-centric.webm'
import careerVideo from '../assets/career-project-support.webm'
import './About.css'

const VALUES = [
  { video: handsOnVideo,  title: 'Hands-On Learning Environment',          desc: 'Learn by doing with real-world projects and practical exercises.' },
  { video: mentorsVideo,  title: 'Experienced Mentors & Industry Experts',  desc: 'Learn from professionals with years of industry experience.' },
  { video: studentVideo,  title: 'Student & Client-Centric',               desc: 'Your success is our priority with personalized support.' },
  { video: careerVideo,   title: 'Career & Project Support',                desc: 'Get guidance on career paths and real project experience.' },
]

const TEAM = [
  {
    name: 'Sola Williams',
    role: 'Director & Founder',
    image: teamSola,
    desc: 'A visionary leader with 15+ years in tech, Sola founded Willtech_NG to bridge the digital skills gap in Africa.',
  },
  {
    name: 'Tobi James',
    role: 'Co-Director & Head of Admin',
    image: teamTobi,
    desc: 'Tobi oversees all administrative operations, ensuring smooth running of programs and student services.',
  },
  {
    name: 'Abiola',
    role: 'Head of Projects',
    image: teamAbiola,
    desc: 'Abiola leads project-based learning initiatives, helping students build real-world applications.',
  },
  {
    name: 'Pelumi Asefon',
    role: 'Patron',
    image: teamPelumi,
    desc: 'Pelumi provides strategic guidance and mentorship to the Willtech_NG community.',
  },
  {
    name: 'Kolade',
    role: 'Principal Supporter & Head of Product',
    image: teamKolade,
    desc: 'Kolade leads product strategy and provides principal support to drive innovation and excellence at Willtech_NG.',
  },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag tag-dark">About Us</div>
          <h1>Empowering Africa's<br />Tech Future</h1>
          <p>Since 2023, we've been on a mission to bridge the digital skills gap in Nigeria and prepare the next generation of tech leaders.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64 }}>
            <div>
              <div className="tag">Our Story</div>
              <h2 style={{ marginBottom: 20 }}>From a Small Training Center to Nigeria's Leading Tech Academy</h2>
              <p style={{ marginBottom: 16 }}>
                Willtech Nigeria was founded in 2023 with a clear vision to bridge the digital skills gap in Nigeria while providing innovative software solutions.
              </p>
              <p style={{ marginBottom: 24 }}>
                Willtech Nigeria is a technology company specializing in software solutions and digital skills training. The company focuses on delivering innovative software development services and empowering individuals with digital skills needed to thrive in the modern tech industry. Today, Willtech stands as a forward-thinking technology company at the forefront of Nigeria's digital transformation.
              </p>
              <ul className="check-list">
                {['Industry-relevant curriculum','Expert instructors','Hands-on projects','Career support'].map(item => (
                  <li key={item}>
                    <span className="check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-story-visual">
              <div className="about-story-img">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Willtech team collaboration"
                />
              </div>
              <div className="about-badge">
                <div className="about-badge-num">5+</div>
                <div className="about-badge-text">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 520, margin: '0 auto 48px' }}>
            <div className="tag">Our Values</div>
            <h2>What Drives Us</h2>
          </div>
          <div className="values-video-grid">
            {VALUES.map(v => (
              <div key={v.title} className="value-video-card">
                <div className="value-video-wrap">
                  <video src={v.video} autoPlay loop muted playsInline />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 480, margin: '0 auto 48px' }}>
            <div className="tag">Our People</div>
            <h2>Meet The Team</h2>
            <p style={{ marginTop: 12 }}>The passionate individuals behind Willtech_NG's success.</p>
          </div>
          <div className="real-team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="real-team-card">
                <div className="real-team-photo">
                  <img src={m.image} alt={m.name} />
                </div>
                <h3>{m.name}</h3>
                <div className="real-team-role">{m.role}</div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to Join Our Community?</h2>
            <p>Start your journey with Willtech_NG and become part of Africa's growing tech ecosystem.</p>
            <div className="cta-actions">
              <Link to="/academy" className="btn btn-white btn-lg">Get Started</Link>
              <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--blue-200)', borderColor: 'rgba(255,255,255,0.3)' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
