import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Willtech<span>_NG</span></div>
            <p>Nigeria's trusted partner for software development, IT consulting, digital marketing, and world-class tech education.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services">Software Dev</Link>
            <Link to="/services">IT Consulting</Link>
            <Link to="/services">Digital Marketing</Link>
            <Link to="/services">UI/UX Design</Link>
          </div>
          <div className="footer-col">
            <h4>Academy</h4>
            <Link to="/academy">All Courses</Link>
            <Link to="/academy">Web Development</Link>
            <Link to="/academy">Mobile Apps</Link>
            <Link to="/academy">Cybersecurity</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Willtech_NG. All rights reserved.</p>
          <p>Lagos, Nigeria · hello@willtech.ng</p>
        </div>
      </div>
    </footer>
  )
}
