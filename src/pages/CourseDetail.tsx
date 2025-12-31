import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Clock, Users, Star, CheckCircle, Play, BookOpen, 
  Award, ArrowLeft, Calendar 
} from "lucide-react";

const coursesData: Record<number, {
  id: number;
  title: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  level: string;
  image: string;
  description: string;
  longDescription: string;
  instructor: { name: string; role: string; image: string };
  curriculum: string[];
  features: string[];
}> = {
  1: {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    category: "Web Development",
    duration: "12 weeks",
    students: 234,
    rating: 4.9,
    price: 150000,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and build real projects.",
    longDescription: "This comprehensive bootcamp takes you from zero to full-stack developer. You'll learn frontend technologies like HTML, CSS, JavaScript, and React, as well as backend development with Node.js, Express, and databases. By the end, you'll have built multiple production-ready projects.",
    instructor: {
      name: "Chinedu Okoro",
      role: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    curriculum: [
      "Week 1-2: HTML & CSS Fundamentals",
      "Week 3-4: JavaScript Deep Dive",
      "Week 5-6: React & State Management",
      "Week 7-8: Node.js & Express",
      "Week 9-10: Databases & APIs",
      "Week 11-12: Final Project & Deployment",
    ],
    features: [
      "Live instructor-led sessions",
      "Hands-on projects",
      "1-on-1 mentoring",
      "Career support",
      "Certificate of completion",
      "Lifetime access to materials",
    ],
  },
  2: {
    id: 2,
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    duration: "10 weeks",
    students: 189,
    rating: 4.8,
    price: 120000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    description: "Build cross-platform mobile apps for iOS and Android.",
    longDescription: "Master mobile app development using React Native. This course covers everything from basic concepts to advanced features like navigation, state management, and native modules. You'll build and publish your own apps to app stores.",
    instructor: {
      name: "Amaka Eze",
      role: "Mobile Developer Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    curriculum: [
      "Week 1-2: React Native Fundamentals",
      "Week 3-4: Navigation & Routing",
      "Week 5-6: State Management",
      "Week 7-8: APIs & Data",
      "Week 9-10: Publishing & Deployment",
    ],
    features: [
      "Live instructor-led sessions",
      "Build 3 complete apps",
      "1-on-1 mentoring",
      "App store publishing guide",
      "Certificate of completion",
      "Lifetime access to materials",
    ],
  },
  3: {
    id: 3,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    duration: "14 weeks",
    students: 156,
    rating: 4.9,
    price: 180000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    description: "Master Python, data analysis, and machine learning algorithms.",
    longDescription: "Dive deep into data science and machine learning. Learn Python, pandas, numpy, scikit-learn, and TensorFlow. You'll work on real datasets and build predictive models that solve actual business problems.",
    instructor: {
      name: "Dr. Oluwaseun Adeyemi",
      role: "Data Scientist at MTN",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    curriculum: [
      "Week 1-3: Python for Data Science",
      "Week 4-6: Data Analysis & Visualization",
      "Week 7-9: Machine Learning Fundamentals",
      "Week 10-12: Deep Learning",
      "Week 13-14: Capstone Project",
    ],
    features: [
      "Live instructor-led sessions",
      "Real-world datasets",
      "1-on-1 mentoring",
      "Industry projects",
      "Certificate of completion",
      "Lifetime access to materials",
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData[Number(id)] || coursesData[1];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 lg:py-20 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-6">
                {course.longDescription}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-primary-foreground/80 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span>{course.rating} rating</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-primary-foreground">{course.instructor.name}</div>
                  <div className="text-sm text-primary-foreground/60">{course.instructor.role}</div>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card-hover border border-border">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">
                ₦{course.price.toLocaleString()}
              </div>
              <p className="text-muted-foreground mb-6">One-time payment, lifetime access</p>
              <Link to={`/enrollment?course=${course.id}`}>
                <Button variant="accent" size="xl" className="w-full mb-4">
                  Enroll Now
                </Button>
              </Link>
              <div className="text-center text-sm text-muted-foreground">
                Next cohort starts January 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Curriculum */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                {course.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of students who have transformed their careers with this course.
          </p>
          <Link to={`/enrollment?course=${course.id}`}>
            <Button variant="accent" size="xl">
              Enroll Now - ₦{course.price.toLocaleString()}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
