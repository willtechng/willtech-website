import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  
  useEffect(() => {
    const handler = () => { if (menuOpen) setMenuOpen(false) }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [menuOpen])

  const links = [
    { to: '/',          label: 'Home',      end: true },
    { to: '/about',     label: 'About Us' },
    { to: '/services',  label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/academy',   label: 'Academy' },
    { to: '/blog',      label: 'Blog' },
    { to: '/contact',   label: 'Contact' },
    { to: '/admin',     label: 'Admin Dashboard', isAdmin: true },
  ]

  function close() { setMenuOpen(false) }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          
          <NavLink to="/" className="nav-logo" onClick={close}>
            Willtech<span>_NG</span>
          </NavLink>

          
          <button
            ref={btnRef}
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      
      <div
        ref={menuRef}
        className={`nav-dropdown${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-dropdown-inner">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `dropdown-link${isActive ? ' active' : ''}${l.isAdmin ? ' dropdown-admin' : ''}`
              }
              onClick={close}
            >
              {l.isAdmin && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              )}
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>

     
      {menuOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  )
}
