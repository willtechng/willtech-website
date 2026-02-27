import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Toast from '../ui/Toast'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </>
  )
}
