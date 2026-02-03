import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in Nigeria",
    excerpt: "Exploring the trends and opportunities shaping the Nigerian tech ecosystem in 2024.",
    category: "Industry Insights",
    author: "Chinedu Okoro",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Everything you need to know to start building modern web applications with React.",
    category: "Tutorials",
    author: "Amaka Eze",
    date: "Dec 10, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Why Data Science Skills Are Essential in 2024",
    excerpt: "Understanding the growing importance of data literacy in the modern workplace.",
    category: "Career Advice",
    author: "Dr. Oluwaseun Adeyemi",
    date: "Dec 5, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Building Secure Applications: Best Practices",
    excerpt: "Essential security practices every developer should implement in their projects.",
    category: "Security",
    author: "Emmanuel Obi",
    date: "Nov 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "From Bootcamp to Job: Success Stories",
    excerpt: "Real stories from Willtech_NG graduates who landed their dream tech jobs.",
    category: "Success Stories",
    author: "Willtech Team",
    date: "Nov 20, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Cloud Computing Fundamentals for Beginners",
    excerpt: "An introduction to cloud computing concepts and popular platforms like AWS and Azure.",
    category: "Tutorials",
    author: "Tunde Bakare",
    date: "Nov 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

const Blog = () => {
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
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest in tech, tutorials, career advice, and success stories from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 lg:py-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium w-fit mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
