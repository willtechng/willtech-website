import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  published: boolean;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const estimateReadTime = (content: string) => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

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

      {loading ? (
        <section className="py-24 bg-background">
          <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        </section>
      ) : posts.length === 0 ? (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.featured_image || "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:py-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium w-fit mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt || featuredPost.content.substring(0, 150) + "..."}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{estimateReadTime(featuredPost.content)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <section className="py-16 lg:py-24 bg-muted/30">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                  Recent Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.featured_image || "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt || post.content.substring(0, 100) + "..."}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{formatDate(post.created_at)}</span>
                          <span>{estimateReadTime(post.content)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </Layout>
  );
};

export default Blog;
