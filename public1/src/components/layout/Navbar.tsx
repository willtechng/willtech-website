import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import willtechLogo from "@/assets/willtech-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "FAQs", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={willtechLogo} alt="Willtech Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-xl text-foreground">
              Willtech<span className="text-accent">_NG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="default">
                    Dashboard
                  </Button>
                </Link>
                {isAdmin && (
                  <Link to="/admin/dashboard">
                    <Button variant="outline" size="default">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="default" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="default">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/enrollment">
                  <Button variant="accent" size="default">
                    Enroll Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full mt-4">
                    Dashboard
                  </Button>
                </Link>
                {isAdmin && (
                  <Link to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="lg" className="w-full mt-2">
                      Admin Panel
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="lg" className="w-full mt-2" onClick={() => { signOut(); setIsOpen(false); }}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full mt-4">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/enrollment" onClick={() => setIsOpen(false)}>
                  <Button variant="accent" size="lg" className="w-full mt-2">
                    Enroll Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
