import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Star, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Web Development", "Mobile Development", "Data Science", "Cybersecurity", "Cloud Computing"];

const allCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    category: "Web Development",
    duration: "12 weeks",
    students: 234,
    rating: 4.9,
    price: 150000,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and build real projects.",
  },
  {
    id: 2,
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    duration: "10 weeks",
    students: 189,
    rating: 4.8,
    price: 120000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    description: "Build cross-platform mobile apps for iOS and Android.",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    duration: "14 weeks",
    students: 156,
    rating: 4.9,
    price: 180000,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Master Python, data analysis, and machine learning algorithms.",
  },
  {
    id: 4,
    title: "Ethical Hacking & Cybersecurity",
    category: "Cybersecurity",
    duration: "8 weeks",
    students: 98,
    rating: 4.7,
    price: 100000,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    description: "Learn penetration testing, security audits, and ethical hacking.",
  },
  {
    id: 5,
    title: "AWS Cloud Practitioner",
    category: "Cloud Computing",
    duration: "6 weeks",
    students: 145,
    rating: 4.8,
    price: 80000,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    description: "Get certified in AWS cloud fundamentals and best practices.",
  },
  {
    id: 6,
    title: "Frontend Development with React",
    category: "Web Development",
    duration: "8 weeks",
    students: 210,
    rating: 4.9,
    price: 100000,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description: "Master React, Redux, and modern frontend development practices.",
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Courses
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Learn In-Demand Tech Skills
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Choose from our range of industry-focused courses designed to prepare you for a successful tech career.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-40 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                        {course.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-xs font-medium text-secondary-foreground">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium text-foreground">{course.rating}</span>
                      </div>
                      <span className="text-xl font-display font-bold text-accent">
                        ₦{course.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
