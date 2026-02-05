import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// TikTok icon component since lucide doesn't have it
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/blog" },
  ],
  courses: [
    { name: "All Courses", path: "/courses" },
    { name: "Web Development", path: "/courses" },
    { name: "Mobile Development", path: "/courses" },
    { name: "Data Science", path: "/courses" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "Enrollment", path: "/enrollment" },
    { name: "FAQ", path: "/contact" },
    { name: "Privacy Policy", path: "/" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: " https://x.com/Willtech_Ng", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/willtech-com/", label: "LinkedIn" },
  { icon: TikTok, href: "https://www.tiktok.com/@willtech.ng?_r=1&_t=ZS-92IEF2CEI40p", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">W</span>
              </div>
              <span className="font-display font-bold text-xl">
                Willtech<span className="text-accent">_NG</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering the next generation of tech leaders through world-class education and hands-on training.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70"> No 11 Leo street opposite mosques akure.
No 13 Taino avenue , olorunde estate , ketu Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">+234 0814 011 1408</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">willtechacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Willtech_NG. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
