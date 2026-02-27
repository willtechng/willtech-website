import { useState, useEffect, createContext, useContext, useCallback, ReactNode } from 'react'

interface ToastCtx {
  showToast: (msg: string, type?: 'success' | 'error') => void
}

const ToastContext = createContext<ToastCtx>({ showToast: () => {} })

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error'; show: boolean } | null>(null)

  const showToast = useCallback((msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type, show: true })
    setTimeout(() => setToast(t => t ? { ...t, show: false } : null), 3200)
    setTimeout(() => setToast(null), 3700)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`toast ${toast.show ? 'show' : ''} ${toast.type === 'error' ? 'error' : ''}`}>
          <svg viewBox="0 0 24 24">
            {toast.type === 'error'
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <polyline points="20 6 9 17 4 12"/>
            }
          </svg>
          <span>{toast.msg}</span>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}


export default function Toast() { return null }
