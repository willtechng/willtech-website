import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Users,
  LogOut,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Eye,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", icon: LayoutDashboard, id: "overview" },
  { name: "Courses", icon: BookOpen, id: "courses" },
  { name: "Blog Posts", icon: FileText, id: "blog" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Inquiries", icon: MessageSquare, id: "inquiries" },
  { name: "Users", icon: Users, id: "users" },
];

const stats = [
  { title: "Total Revenue", value: "₦2,450,000", change: "+12%", icon: DollarSign },
  { title: "Active Students", value: "1,234", change: "+8%", icon: Users },
  { title: "Course Views", value: "45,678", change: "+24%", icon: Eye },
  { title: "Enrollments", value: "156", change: "+18%", icon: TrendingUp },
];

const recentEnrollments = [
  { name: "John Doe", course: "Web Development Bootcamp", date: "2 hours ago", amount: "₦150,000" },
  { name: "Jane Smith", course: "UI/UX Design", date: "5 hours ago", amount: "₦120,000" },
  { name: "Mike Johnson", course: "Digital Marketing", date: "1 day ago", amount: "₦100,000" },
  { name: "Sarah Wilson", course: "Mobile App Development", date: "2 days ago", amount: "₦180,000" },
];

const recentInquiries = [
  { name: "Alex Brown", subject: "Course duration query", status: "pending", date: "1 hour ago" },
  { name: "Emily Davis", subject: "Payment issue", status: "resolved", date: "3 hours ago" },
  { name: "Chris Lee", subject: "Certificate request", status: "pending", date: "5 hours ago" },
];

export default function AdminDashboard() {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">Admin</span>
                <p className="text-xs text-muted-foreground">Willtech_NG</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  activeTab === link.id
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </button>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user.email}
                </p>
                <div className="flex items-center gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {isAdmin ? "Admin" : "User"}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <h1 className="text-xl font-display font-bold text-foreground capitalize">
                {activeTab}
              </h1>
            </div>
            <Button variant="accent" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.title} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.title}</p>
                          <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                          <p className="text-sm text-green-500 mt-1">{stat.change} from last month</p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Enrollments */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Enrollments</CardTitle>
                    <CardDescription>Latest course registrations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentEnrollments.map((enrollment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <p className="font-medium text-foreground">{enrollment.name}</p>
                            <p className="text-sm text-muted-foreground">{enrollment.course}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-accent">{enrollment.amount}</p>
                            <p className="text-xs text-muted-foreground">{enrollment.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Inquiries */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Inquiries</CardTitle>
                    <CardDescription>Messages from potential students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentInquiries.map((inquiry, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <p className="font-medium text-foreground">{inquiry.name}</p>
                            <p className="text-sm text-muted-foreground">{inquiry.subject}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={inquiry.status === "resolved" ? "secondary" : "default"}>
                              {inquiry.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{inquiry.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Manage Courses</CardTitle>
                <CardDescription>Add, edit, or remove courses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Course management interface coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "blog" && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>Manage your blog content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Blog management interface coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "projects" && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Portfolio Projects</CardTitle>
                <CardDescription>Showcase your work</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Project management interface coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "inquiries" && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Customer Inquiries</CardTitle>
                <CardDescription>Respond to messages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Inquiry management interface coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "users" && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User management interface coming soon...</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
