import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  LayoutDashboard, BookOpen, FileText, Briefcase, 
  Mail, Settings, LogOut, Menu, X, Users, TrendingUp,
  Plus, Search
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: BookOpen, label: "Courses", id: "courses" },
  { icon: FileText, label: "Blog Posts", id: "blog" },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Mail, label: "Inquiries", id: "inquiries" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const statsCards = [
  { label: "Total Students", value: "5,234", change: "+12%", icon: Users },
  { label: "Active Courses", value: "24", change: "+3", icon: BookOpen },
  { label: "Revenue (MTD)", value: "₦4.2M", change: "+18%", icon: TrendingUp },
  { label: "New Inquiries", value: "47", change: "+8", icon: Mail },
];

const recentEnrollments = [
  { name: "Adebayo Johnson", course: "Full-Stack Web Development", date: "Dec 18, 2023", status: "Paid" },
  { name: "Chioma Eze", course: "Data Science & ML", date: "Dec 17, 2023", status: "Paid" },
  { name: "Emmanuel Okonkwo", course: "Mobile Development", date: "Dec 17, 2023", status: "Pending" },
  { name: "Fatima Ibrahim", course: "Cybersecurity", date: "Dec 16, 2023", status: "Paid" },
];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">W</span>
              </div>
              {sidebarOpen && (
                <span className="font-display font-bold text-lg text-foreground">
                  Willtech<span className="text-accent">_NG</span>
                </span>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <Link to="/">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                <LogOut className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="font-medium">Back to Site</span>}
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-muted lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-display font-bold text-foreground capitalize">
              {activeTab}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-64" />
            </div>
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-card border border-border shadow-card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-secondary">{stat.change}</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Enrollments */}
              <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="text-lg font-display font-bold text-foreground">
                    Recent Enrollments
                  </h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Student
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {recentEnrollments.map((enrollment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                            {enrollment.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {enrollment.course}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {enrollment.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                enrollment.status === "Paid"
                                  ? "bg-secondary/20 text-secondary"
                                  : "bg-yellow-500/20 text-yellow-600"
                              }`}
                            >
                              {enrollment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-display font-bold text-foreground">
                  Manage Courses
                </h2>
                <Button variant="accent" className="gap-2">
                  <Plus className="w-4 h-4" /> Add Course
                </Button>
              </div>
              <div className="bg-card rounded-2xl border border-border shadow-card p-12 text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Course management interface coming soon. Connect to a backend to manage courses.
                </p>
              </div>
            </div>
          )}

          {activeTab === "blog" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-display font-bold text-foreground">
                  Manage Blog Posts
                </h2>
                <Button variant="accent" className="gap-2">
                  <Plus className="w-4 h-4" /> New Post
                </Button>
              </div>
              <div className="bg-card rounded-2xl border border-border shadow-card p-12 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Blog management interface coming soon. Connect to a backend to manage posts.
                </p>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-display font-bold text-foreground">
                  Portfolio Projects
                </h2>
                <Button variant="accent" className="gap-2">
                  <Plus className="w-4 h-4" /> Add Project
                </Button>
              </div>
              <div className="bg-card rounded-2xl border border-border shadow-card p-12 text-center">
                <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Project management interface coming soon. Connect to a backend to manage portfolio.
                </p>
              </div>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="space-y-6">
              <h2 className="text-lg font-display font-bold text-foreground">
                Contact Inquiries
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-12 text-center">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Inquiry management interface coming soon. Connect to a backend to manage inquiries.
                </p>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-lg font-display font-bold text-foreground">
                Settings
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-12 text-center">
                <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Settings interface coming soon. Connect to a backend to manage settings.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
