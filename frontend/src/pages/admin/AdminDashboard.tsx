import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useToast } from '../../components/ui/Toast'
import api from '../../lib/api'
import './Admin.css'

interface FieldDef {
  key: string
  label: string
  type?: 'text' | 'number' | 'textarea' | 'select'
  options?: string[]
  required?: boolean
  placeholder?: string
}

interface EditModalProps {
  title: string
  fields: FieldDef[]
  data: Record<string, any> | null
  onClose: () => void
  onSave: (values: Record<string, any>) => Promise<void>
}

function EditModal({ title, fields, data, onClose, onSave }: EditModalProps) {
  const [values, setValues] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data) {
      const initial: Record<string, any> = {}
      fields.forEach(f => { initial[f.key] = data[f.key] ?? '' })
      setValues(initial)
    }
  }, [data])

  if (!data) return null

  async function handleSave() {
    setLoading(true)
    try { await onSave(values) } finally { setLoading(false) }
  }

  return (
    <div
      className="modal-overlay open"
      onClick={e => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) onClose() }}
    >
      <div className="modal" style={{ maxWidth: 580 }}>
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <h3 style={{ marginBottom: 24, fontSize: '1.3rem' }}>{title}</h3>
        <div className="edit-modal-fields">
          {fields.map(f => (
            <div key={f.key} className={`form-group${f.type === 'textarea' ? ' full-width' : ''}`}>
              <label className="form-label">{f.label}{f.required && ' *'}</label>
              {f.type === 'textarea' ? (
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder={f.placeholder}
                  value={values[f.key] || ''}
                  onChange={e => setValues({ ...values, [f.key]: e.target.value })}
                />
              ) : f.type === 'select' ? (
                <select
                  className="form-input form-select"
                  value={values[f.key] || ''}
                  onChange={e => setValues({ ...values, [f.key]: e.target.value })}
                >
                  {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  className="form-input"
                  type={f.type || 'text'}
                  placeholder={f.placeholder}
                  value={values[f.key] || ''}
                  onChange={e => setValues({ ...values, [f.key]: f.type === 'number' ? Number(e.target.value) : e.target.value })}
                />
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
          <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving…' : 'Save Changes'}
          </button>
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const items = [
    { to: '/admin', label: 'Dashboard', end: true, icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
    { to: '/admin/enrollments', label: 'Enrollments', icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
    { to: '/admin/courses', label: 'Courses', icon: <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
    { to: '/admin/blog', label: 'Blog Posts', icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg> },
    { to: '/admin/projects', label: 'Projects', icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
    { to: '/admin/contacts', label: 'Inquiries', icon: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  ]

  return (
    <div className="admin-sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-text">Willtech<span>_NG</span></div>
        <div className="sidebar-subtitle">Admin Dashboard</div>
      </div>
      <div className="sidebar-section">Overview</div>
      {items.slice(0, 1).map(i => (
        <NavLink key={i.to} to={i.to} end className={({ isActive }) => `sidebar-btn${isActive ? ' active' : ''}`}>
          {i.icon}{i.label}
        </NavLink>
      ))}
      <div className="sidebar-section">Content</div>
      {items.slice(1).map(i => (
        <NavLink key={i.to} to={i.to} className={({ isActive }) => `sidebar-btn${isActive ? ' active' : ''}`}>
          {i.icon}{i.label}
        </NavLink>
      ))}
      <div className="sidebar-section">Account</div>
      <button className="sidebar-btn" onClick={() => { logout(); navigate('/admin/login') }}>
        <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
        Sign Out
      </button>
    </div>
  )
}

function Overview() {
  const [stats, setStats] = useState({ enrollments: 0, pending: 0, contacts: 0, posts: 0, courses: 0 })

  useEffect(() => {
    Promise.all([
      api.get('/enrollments/stats').catch(() => ({ data: {} })),
      api.get('/contacts').catch(() => ({ data: { count: 0 } })),
      api.get('/blog').catch(() => ({ data: { count: 0 } })),
      api.get('/courses').catch(() => ({ data: { count: 0 } })),
    ]).then(([enr, contacts, blog, courses]) => {
      setStats({
        enrollments: enr.data.total || 0,
        pending: enr.data.pending || 0,
        contacts: contacts.data.count || 0,
        posts: blog.data.count || 0,
        courses: courses.data.count || 0,
      })
    })
  }, [])

  const cards = [
    { label: 'Total Enrollments', value: stats.enrollments },
    { label: 'Pending Payment',   value: stats.pending },
    { label: 'Active Courses',    value: stats.courses },
    { label: 'Blog Posts',        value: stats.posts },
    { label: 'Contact Inquiries', value: stats.contacts },
  ]

  return (
    <div>
      <div className="admin-header"><h2>Dashboard Overview</h2><p>Welcome back, Admin. Here's what's happening at Willtech_NG.</p></div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
        {cards.map(c => (
          <div key={c.label} className="stat-card">
            <div className="stat-label">{c.label}</div>
            <div className="stat-value">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Enrollments() {
  const { showToast } = useToast()
  const [rows, setRows] = useState<any[]>([])
  const [editing, setEditing] = useState<any | null>(null)

  useEffect(() => { api.get('/enrollments').then(r => setRows(r.data.data)).catch(() => {}) }, [])

  async function markPaid(id: string) {
    await api.patch(`/enrollments/${id}/pay`)
    setRows(rows.map(r => r._id === id ? { ...r, paymentStatus: 'paid' } : r))
    showToast('Marked as paid!')
  }

  async function deleteRow(id: string) {
    if (!confirm('Delete this enrollment?')) return
    await api.delete(`/enrollments/${id}`)
    setRows(rows.filter(r => r._id !== id))
    showToast('Enrollment deleted')
  }

  const fields: FieldDef[] = [
    { key: 'firstName',   label: 'First Name',  required: true },
    { key: 'lastName',    label: 'Last Name',   required: true },
    { key: 'email',       label: 'Email',       required: true },
    { key: 'phone',       label: 'Phone',       required: true },
    { key: 'courseName',  label: 'Course Name', required: true },
    { key: 'coursePrice', label: 'Course Price (₦)', type: 'number' },
    { key: 'paymentStatus', label: 'Payment Status', type: 'select', options: ['pending', 'paid'] },
  ]

  async function saveEdit(values: Record<string, any>) {
    try {
      const { data } = await api.put(`/enrollments/${editing._id}`, values)
      setRows(rows.map(r => r._id === editing._id ? data.data : r))
      setEditing(null)
      showToast('Enrollment updated!')
    } catch (err: any) {
      showToast(err.response?.data?.message || 'Failed to update enrollment', 'error')
    }
  }

  return (
    <div>
      <div className="admin-header"><h2>Enrollments</h2><p>Student enrollment requests and payment status.</p></div>
      <div className="admin-table-wrap">
        <div className="admin-table-header"><h3>All Enrollments ({rows.length})</h3></div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Student</th><th>Email</th><th>Phone</th><th>Course</th><th>Price</th><th>Date</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {rows.length === 0
                ? <tr><td colSpan={8} className="empty-row">No enrollments yet.</td></tr>
                : rows.map(r => (
                  <tr key={r._id}>
                    <td><strong>{r.firstName} {r.lastName}</strong></td>
                    <td>{r.email}</td>
                    <td>{r.phone}</td>
                    <td style={{ maxWidth: 160 }}>{r.courseName}</td>
                    <td>₦{Number(r.coursePrice || 0).toLocaleString()}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                    <td><span className={`badge badge-${r.paymentStatus}`}>{r.paymentStatus}</span></td>
                    <td>
                      <div className="action-btns">
                        <button className="btn btn-outline btn-sm" onClick={() => setEditing(r)}>Edit</button>
                        {r.paymentStatus === 'pending' && (
                          <button className="btn btn-primary btn-sm" onClick={() => markPaid(r._id)}>Mark Paid</button>
                        )}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteRow(r._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <EditModal
        title="Edit Enrollment"
        fields={fields}
        data={editing}
        onClose={() => setEditing(null)}
        onSave={saveEdit}
      />
    </div>
  )
}

const EMPTY_COURSE = { title: '', description: '', price: 0, duration: '', cohortSize: 20, level: 'Beginner', status: 'active' }

function CoursesManager() {
  const { showToast } = useToast()
  const [courses, setCourses] = useState<any[]>([])
  const [form, setForm] = useState({ ...EMPTY_COURSE })
  const [editing, setEditing] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => { api.get('/courses').then(r => setCourses(r.data.data || [])).catch(() => {}) }, [])

  function handleChange(key: string, value: any) {
    setForm(f => ({ ...f, [key]: value }))
  }

  async function saveCourse() {
    if (!form.title.trim())       { showToast('Course title is required', 'error'); return }
    if (!form.description.trim()) { showToast('Description is required', 'error'); return }
    if (!form.duration.trim())    { showToast('Duration is required', 'error'); return }
    if (form.price <= 0)          { showToast('Price must be greater than 0', 'error'); return }

    setLoading(true)
    try {
      const payload = { ...form, price: Number(form.price), cohortSize: Number(form.cohortSize) }
      const { data } = await api.post('/courses', payload)
      setCourses([data.data, ...courses])
      setForm({ ...EMPTY_COURSE })
      showToast('Course created successfully!')
    } catch (err: any) {
      showToast(err.response?.data?.message || 'Failed to create course', 'error')
    } finally {
      setLoading(false)
    }
  }

  const editFields: FieldDef[] = [
    { key: 'title',       label: 'Course Title',      required: true },
    { key: 'duration',    label: 'Duration',           required: true, placeholder: 'e.g. 12 Weeks' },
    { key: 'price',       label: 'Price (₦)',          type: 'number', required: true },
    { key: 'cohortSize',  label: 'Cohort Size',        type: 'number' },
    { key: 'level',       label: 'Level',              type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'status',      label: 'Status',             type: 'select', options: ['active', 'inactive'] },
    { key: 'description', label: 'Description',        type: 'textarea', required: true },
  ]

  async function saveEdit(values: Record<string, any>) {
    const payload = { ...values, price: Number(values.price), cohortSize: Number(values.cohortSize) }
    const { data } = await api.put(`/courses/${editing._id}`, payload)
    setCourses(courses.map(c => c._id === editing._id ? data.data : c))
    setEditing(null)
    showToast('Course updated!')
  }

  async function deleteCourse(id: string) {
    if (!confirm('Delete this course?')) return
    await api.delete(`/courses/${id}`)
    setCourses(courses.filter(c => c._id !== id))
    showToast('Course deleted')
  }

  async function toggleStatus(course: any) {
    const newStatus = course.status === 'active' ? 'inactive' : 'active'
    const { data } = await api.put(`/courses/${course._id}`, { status: newStatus })
    setCourses(courses.map(c => c._id === course._id ? data.data : c))
    showToast(`Course ${newStatus === 'active' ? 'activated' : 'deactivated'}`)
  }

  return (
    <div>
      <div className="admin-header"><h2>Course Management</h2><p>Create, edit, and manage academy courses.</p></div>

      
      <div className="admin-card">
        <h3>Add New Course</h3>
        <div className="admin-form-grid">
          <div className="form-group">
            <label className="form-label">Course Title *</label>
            <input className="form-input" placeholder="e.g. Full-Stack Web Development" value={form.title} onChange={e => handleChange('title', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Duration *</label>
            <input className="form-input" placeholder="e.g. 12 Weeks" value={form.duration} onChange={e => handleChange('duration', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Price (₦) *</label>
            <input className="form-input" type="number" min="0" placeholder="150000" value={form.price || ''} onChange={e => handleChange('price', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Cohort Size</label>
            <input className="form-input" type="number" min="1" placeholder="20" value={form.cohortSize || ''} onChange={e => handleChange('cohortSize', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Level</label>
            <select className="form-input form-select" value={form.level} onChange={e => handleChange('level', e.target.value)}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-input form-select" value={form.status} onChange={e => handleChange('status', e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Description *</label>
          <textarea className="form-input" rows={3} placeholder="What students will learn in this course…" value={form.description} onChange={e => handleChange('description', e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={saveCourse} disabled={loading}>
          {loading ? 'Saving…' : 'Create Course'}
        </button>
      </div>

      
      <div className="admin-table-wrap">
        <div className="admin-table-header"><h3>All Courses ({courses.length})</h3></div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Title</th><th>Price</th><th>Duration</th><th>Level</th><th>Cohort</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {courses.length === 0
                ? <tr><td colSpan={7} className="empty-row">No courses yet. Create one above.</td></tr>
                : courses.map(c => (
                  <tr key={c._id}>
                    <td><strong>{c.title}</strong></td>
                    <td>₦{Number(c.price).toLocaleString()}</td>
                    <td>{c.duration}</td>
                    <td>{c.level}</td>
                    <td>{c.cohortSize}</td>
                    <td>
                      <span
                        className={`badge ${c.status === 'active' ? 'badge-live' : 'badge-hidden'}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleStatus(c)}
                        title="Click to toggle"
                      >
                        {c.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button className="btn btn-outline btn-sm" onClick={() => setEditing(c)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteCourse(c._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <EditModal title="Edit Course" fields={editFields} data={editing} onClose={() => setEditing(null)} onSave={saveEdit} />
    </div>
  )
}

const EMPTY_POST = { title: '', excerpt: '', content: '', category: 'Development' }

function BlogManager() {
  const { showToast } = useToast()
  const [posts, setPosts] = useState<any[]>([])
  const [form, setForm] = useState({ ...EMPTY_POST })
  const [editing, setEditing] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => { api.get('/blog').then(r => setPosts(r.data.data || [])).catch(() => {}) }, [])

  async function save(status: string) {
    if (!form.title.trim()) { showToast('Please enter a title', 'error'); return }
    setLoading(true)
    try {
      const { data } = await api.post('/blog', { ...form, status })
      setPosts([data.data, ...posts])
      setForm({ ...EMPTY_POST })
      showToast(status === 'published' ? 'Post published!' : 'Draft saved!')
    } catch { showToast('Failed to save post', 'error') }
    finally { setLoading(false) }
  }

  const editFields: FieldDef[] = [
    { key: 'title',    label: 'Post Title',  required: true },
    { key: 'category', label: 'Category',    type: 'select', options: ['Development','Academy','Security','Marketing','Career','Company News'] },
    { key: 'status',   label: 'Status',      type: 'select', options: ['published', 'draft'] },
    { key: 'excerpt',  label: 'Excerpt',     type: 'textarea' },
    { key: 'content',  label: 'Content',     type: 'textarea' },
  ]

  async function saveEdit(values: Record<string, any>) {
    const { data } = await api.put(`/blog/${editing._id}`, values)
    setPosts(posts.map(p => p._id === editing._id ? data.data : p))
    setEditing(null)
    showToast('Post updated!')
  }

  async function remove(id: string) {
    if (!confirm('Delete this post?')) return
    await api.delete(`/blog/${id}`)
    setPosts(posts.filter(p => p._id !== id))
    showToast('Post deleted')
  }

  return (
    <div>
      <div className="admin-header"><h2>Blog Management</h2><p>Write, edit, and publish articles.</p></div>
      <div className="admin-card">
        <h3>Write New Post</h3>
        <div className="admin-form-grid">
          <div className="form-group">
            <label className="form-label">Title *</label>
            <input className="form-input" placeholder="Article title…" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-input form-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {['Development', 'Academy', 'Security', 'Marketing', 'Career', 'Company News'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Excerpt</label>
          <input className="form-input" placeholder="Short description shown in listings…" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea className="form-input" rows={5} placeholder="Full article content…" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-primary btn-sm" onClick={() => save('published')} disabled={loading}>Publish</button>
          <button className="btn btn-outline btn-sm" onClick={() => save('draft')} disabled={loading}>Save Draft</button>
        </div>
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-header"><h3>All Posts ({posts.length})</h3></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Title</th><th>Category</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {posts.length === 0
                ? <tr><td colSpan={5} className="empty-row">No posts yet.</td></tr>
                : posts.map(p => (
                  <tr key={p._id}>
                    <td style={{ maxWidth: 260 }}>{p.title}</td>
                    <td>{p.category}</td>
                    <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                    <td><span className={`badge badge-${p.status}`}>{p.status}</span></td>
                    <td>
                      <div className="action-btns">
                        <button className="btn btn-outline btn-sm" onClick={() => setEditing(p)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => remove(p._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <EditModal title="Edit Blog Post" fields={editFields} data={editing} onClose={() => setEditing(null)} onSave={saveEdit} />
    </div>
  )
}

const EMPTY_PROJECT = { title: '', description: '', category: 'web', technologies: '', status: 'live' }

function ProjectsManager() {
  const { showToast } = useToast()
  const [projects, setProjects] = useState<any[]>([])
  const [form, setForm] = useState({ ...EMPTY_PROJECT })
  const [editing, setEditing] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => { api.get('/projects').then(r => setProjects(r.data.data || [])).catch(() => {}) }, [])

  async function save() {
    if (!form.title.trim()) { showToast('Please enter a project name', 'error'); return }
    setLoading(true)
    try {
      const techs = form.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
      const { data } = await api.post('/projects', { ...form, technologies: techs })
      setProjects([data.data, ...projects])
      setForm({ ...EMPTY_PROJECT })
      showToast('Project added!')
    } catch { showToast('Failed to save project', 'error') }
    finally { setLoading(false) }
  }

  const editFields: FieldDef[] = [
    { key: 'title',        label: 'Project Name', required: true },
    { key: 'category',     label: 'Category',     type: 'select', options: ['web','mobile','enterprise','marketing'] },
    { key: 'status',       label: 'Status',        type: 'select', options: ['live','hidden'] },
    { key: 'description',  label: 'Description',   type: 'textarea' },
  ]

  async function saveEdit(values: Record<string, any>) {
    const { data } = await api.put(`/projects/${editing._id}`, values)
    setProjects(projects.map(p => p._id === editing._id ? data.data : p))
    setEditing(null)
    showToast('Project updated!')
  }

  async function remove(id: string) {
    if (!confirm('Delete this project?')) return
    await api.delete(`/projects/${id}`)
    setProjects(projects.filter(p => p._id !== id))
    showToast('Project deleted')
  }

  return (
    <div>
      <div className="admin-header"><h2>Portfolio Management</h2><p>Add and manage portfolio projects.</p></div>
      <div className="admin-card">
        <h3>Add New Project</h3>
        <div className="admin-form-grid">
          <div className="form-group">
            <label className="form-label">Project Name *</label>
            <input className="form-input" placeholder="e.g. TradeMart Platform" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-input form-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {['web', 'mobile', 'enterprise', 'marketing'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea className="form-input" rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">Technologies (comma-separated)</label>
          <input className="form-input" placeholder="React, Node.js, MongoDB" value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} />
        </div>
        <button className="btn btn-primary btn-sm" onClick={save} disabled={loading}>
          {loading ? 'Saving…' : 'Add Project'}
        </button>
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-header"><h3>All Projects ({projects.length})</h3></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Project</th><th>Category</th><th>Technologies</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {projects.length === 0
                ? <tr><td colSpan={5} className="empty-row">No projects yet.</td></tr>
                : projects.map(p => (
                  <tr key={p._id}>
                    <td><strong>{p.title}</strong></td>
                    <td>{p.category}</td>
                    <td style={{ maxWidth: 180 }}>{(p.technologies || []).join(', ')}</td>
                    <td><span className={`badge badge-${p.status}`}>{p.status}</span></td>
                    <td>
                      <div className="action-btns">
                        <button className="btn btn-outline btn-sm" onClick={() => setEditing(p)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => remove(p._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <EditModal title="Edit Project" fields={editFields} data={editing} onClose={() => setEditing(null)} onSave={saveEdit} />
    </div>
  )
}

function ContactsPanel() {
  const { showToast } = useToast()
  const [rows, setRows] = useState<any[]>([])
  const [viewing, setViewing] = useState<any | null>(null)

  useEffect(() => { api.get('/contacts').then(r => setRows(r.data.data || [])).catch(() => {}) }, [])

  async function remove(id: string) {
    if (!confirm('Delete this message?')) return
    await api.delete(`/contacts/${id}`)
    setRows(rows.filter(r => r._id !== id))
    showToast('Message deleted')
  }

  return (
    <div>
      <div className="admin-header"><h2>Contact Inquiries</h2><p>Messages received through the contact form.</p></div>
      <div className="admin-table-wrap">
        <div className="admin-table-header"><h3>All Messages ({rows.length})</h3></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Subject</th><th>Date</th><th>Actions</th></tr></thead>
            <tbody>
              {rows.length === 0
                ? <tr><td colSpan={6} className="empty-row">No inquiries yet. Messages from the contact form will appear here.</td></tr>
                : rows.map(r => (
                  <tr key={r._id}>
                    <td><strong>{r.firstName} {r.lastName}</strong></td>
                    <td>{r.email}</td>
                    <td>{r.phone || '—'}</td>
                    <td>{r.subject}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="action-btns">
                        <button className="btn btn-outline btn-sm" onClick={() => setViewing(r)}>View</button>
                        <button className="btn btn-danger btn-sm" onClick={() => remove(r._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {viewing && (
        <div className="modal-overlay open" onClick={e => { if (e.currentTarget === e.target) setViewing(null) }}>
          <div className="modal" style={{ maxWidth: 520 }}>
            <button className="modal-close" onClick={() => setViewing(null)}>
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div style={{ marginBottom: 6, fontSize: '0.78rem', color: 'var(--blue-500)', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {viewing.subject}
            </div>
            <h3 style={{ marginBottom: 4 }}>{viewing.firstName} {viewing.lastName}</h3>
            <p style={{ fontSize: '0.85rem', marginBottom: 20 }}>{viewing.email} {viewing.phone ? `· ${viewing.phone}` : ''}</p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '16px 20px', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
              {viewing.message}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 14 }}>
              Received: {new Date(viewing.createdAt).toLocaleString()}
            </p>
            <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => setViewing(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="enrollments" element={<Enrollments />} />
          <Route path="courses" element={<CoursesManager />} />
          <Route path="blog" element={<BlogManager />} />
          <Route path="projects" element={<ProjectsManager />} />
          <Route path="contacts" element={<ContactsPanel />} />
        </Routes>
      </div>
    </div>
  )
}
