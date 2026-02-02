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
  level: string;
  description: string;
  longDescription: string;
  curriculum: string[];
  features: string[];
}> = {
  1: {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    category: "Web Development",
    duration: "24 weeks",
    students: 234,
    level: "Beginner",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and build real projects.",
    longDescription: "Become a professional Fullstack Developer. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, Express, and deployment. Build real-time, interactive web applications.",
    curriculum: [
      "1. HTML & CSS Fundamentals",
      "2. JavaScript Basics.",
      "3. Object-Oriented JavaScript",
      "4. DOM Manipulation.",
      "5. React Library.",
      "6. Version Control.",
      "7. Node.js.",
      "8. Deployment.",
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
    title: "Product Design/ UI/UX",
    category: "Product Design/ UI/UX",
    duration: "12 weeks",
    students: 189,
    level: "Intermediate",
    description: "Build cross-platform mobile apps for iOS and Android.",
    longDescription: "Learn to design and deliver digital products from user research to prototyping and usability testing.",
    
    curriculum: [
      "1. Introduction to Product Design (Figma)",
      "2. User Interface / Visual Design",
      "3. Interaction Design (Figma)",
      "4. User Experience (FigJam, Google Forms)",
      "5. Capstone Project",
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
    title: "Data Analysis & Machine Learning",
    category: "Data Science",
    duration: "12 weeks",
    students: 156,
    level: "Intermediate",
    description: "Master Python, data analysis, and machine learning algorithms.",
    longDescription: "Learn Python, Excel, SQL, Power BI, and build predictive machine learning models to analyze and forecast trends.",
    
    curriculum: [
      "1. Microsoft Excel",
      "2. SQL",
      "3. Power BI.",
      "4. Python Basics.",
      "5. Python NumPy.",
      "6. Python Pandas..",
      "7. Python Plotly.",
      "8. Machine Learning Basics.",
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
  4: {
    id: 1,
    title: "Cybersecurity",
    category: "Cybersecurity",
    duration: "12 weeks",
    students: 234,
    level: "Beginner",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and build real projects.",
    longDescription: "This course provides an overview of the fundamental concepts, approaches, and methods needed to protect networks, information systems, and digital assets.",
    curriculum: [
      "1. Introduction to Cybersecurity.",
      "2. Fundamentals of Networking",
      "3. Social Engineering",
      "4. Access Controls & Biometric.",
      "5. Operating System Security",
      "6. Cryptography.",
      "7. Security Policies & Procedures.",
      "8. Web Security.",
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
  5: {
    id: 1,
    title: "Frontend Engineering",
    category: "Frontend Engineering",
    duration: "5 weeks",
    students: 234,
    level: "Beginner",
    description: "Learn HTML, CSS, JavaScript, React, Next.js, and build real projects.",
    longDescription: "Jumpstart your career as a frontend web developer. Learn HTML, CSS, JavaScript, React, Next.js, and build dynamic Single Page Applications (SPAs).",
    curriculum: [
      "1. HTML & CSS",
      "2. JavaScript Basics",
      "3. Object-Oriented JavaScript",
      "4. DOM Manipulation",
      "5. React Library",
      "6. Next.js",
      "7. Version Control (Git/GitHub)",
      "8. Capstone Project",
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
                
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
      
                <div>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card-hover border border-border">
              
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">
              
              </div>
              <p className="text-muted-foreground mb-6"></p>
              <Link to={`/enrollment?course=${course.id}`}>
                
              </Link>
              <div className="text-center text-sm text-muted-foreground">
                Next cohort starts June 2026
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
              Enroll Now - 
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
