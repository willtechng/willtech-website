import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Play, 
  Calendar,
  Bell,
  Settings,
  User,
  ChevronRight
} from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    progress: 65,
    totalLessons: 48,
    completedLessons: 31,
    nextLesson: "Building RESTful APIs",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    progress: 30,
    totalLessons: 32,
    completedLessons: 10,
    nextLesson: "Color Theory Basics",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    progress: 85,
    totalLessons: 24,
    completedLessons: 20,
    nextLesson: "Analytics & Reporting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
  },
];

const recentActivity = [
  { action: "Completed lesson", item: "Introduction to JavaScript", time: "2 hours ago" },
  { action: "Started course", item: "UI/UX Design Fundamentals", time: "1 day ago" },
  { action: "Earned certificate", item: "HTML & CSS Basics", time: "3 days ago" },
  { action: "Submitted assignment", item: "Portfolio Project", time: "5 days ago" },
];

const upcomingEvents = [
  { title: "Live Q&A Session", date: "Jan 10, 2026", time: "3:00 PM" },
  { title: "Project Deadline", date: "Jan 15, 2026", time: "11:59 PM" },
  { title: "Webinar: Career Tips", date: "Jan 20, 2026", time: "2:00 PM" },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/30">
        {/* Header */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h1 className="text-2xl font-display font-bold text-foreground">
                    Welcome back, Student!
                  </h1>
                  <p className="text-muted-foreground">
                    Continue your learning journey
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                    <p className="text-3xl font-bold text-foreground">3</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Hours Learned</p>
                    <p className="text-3xl font-bold text-foreground">47</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Certificates</p>
                    <p className="text-3xl font-bold text-foreground">2</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Progress</p>
                    <p className="text-3xl font-bold text-foreground">60%</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* My Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold text-foreground">
                  My Courses
                </h2>
                <Link to="/courses">
                  <Button variant="ghost" size="sm">
                    Browse More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="bg-card border-border overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 h-32 sm:h-auto">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 p-4">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                              <Badge variant="secondary">{course.progress}% complete</Badge>
                            </div>
                            <Progress value={course.progress} className="h-2 mb-3" />
                            <p className="text-sm text-muted-foreground">
                              Next: <span className="text-foreground">{course.nextLesson}</span>
                            </p>
                          </div>
                          <div className="mt-4">
                            <Link to={`/courses/${course.id}`}>
                              <Button variant="accent" size="sm">
                                <Play className="w-4 h-4 mr-2" />
                                Continue Learning
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="text-sm text-foreground">
                          {activity.action}: <span className="font-medium">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <Calendar className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{event.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/courses" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Courses
                    </Button>
                  </Link>
                  <Link to="/contact" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="w-4 h-4 mr-2" />
                      Get Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
