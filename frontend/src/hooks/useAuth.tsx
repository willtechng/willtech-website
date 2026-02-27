import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import api from '../lib/api'

interface AuthContextType {
  isAuthenticated: boolean
  admin: { email: string; role: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [admin, setAdmin] = useState<{ email: string; role: string } | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('willtech_token')
    const savedAdmin = localStorage.getItem('willtech_admin')
    if (token && savedAdmin) {
      setIsAuthenticated(true)
      setAdmin(JSON.parse(savedAdmin))
    }
  }, [])

  async function login(email: string, password: string) {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('willtech_token', data.access_token)
    localStorage.setItem('willtech_admin', JSON.stringify(data.admin))
    setIsAuthenticated(true)
    setAdmin(data.admin)
  }

  function logout() {
    localStorage.removeItem('willtech_token')
    localStorage.removeItem('willtech_admin')
    setIsAuthenticated(false)
    setAdmin(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
