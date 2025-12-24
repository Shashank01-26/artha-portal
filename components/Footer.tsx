import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
              <div className="bg-primary p-1.5 rounded-md">
                <Terminal size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">TEAP</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering Pune's tech ecosystem through innovation, mentorship, and strategic networking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn Profile"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter Profile"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook Page"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link to="/members" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events Calendar</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ / Help</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Tech Park Plaza, Level 4,<br/>Viman Nagar, Pune 411014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>contact@teap.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest tech news.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Tech Entrepreneurs Association of Pune. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
             <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
             <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link to="/code-of-conduct" className="hover:text-primary transition-colors">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;