import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Linkedin, Twitter, Facebook, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080F] text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Compass size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ARTHA<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-7 max-w-[260px]">
              Empowering Pune's most ambitious founders through community, capital, and context.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Discover links */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.12em] mb-5">Discover</p>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Mission', path: '/mission' },
                { label: 'Membership', path: '/members' },
                { label: 'Events Calendar', path: '/events' },
                { label: 'FAQ / Help', path: '/faq' },
              ].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.12em] mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="text-sm text-white/50 leading-relaxed">
                  Tech Park Plaza, Level 4,<br />Viman Nagar, Pune 411014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="text-sm text-white/50">+91 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-primary" />
                </div>
                <span className="text-sm text-white/50">contact@artha.co</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.12em] mb-5">Stay Updated</p>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Founder insights, event invites, and ecosystem updates. No noise.
            </p>
            <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 rounded-xl focus:outline-none focus:border-primary/60 focus:bg-white/8 text-sm transition-all duration-200"
              />
              <button
                type="submit"
                className="btn-glow w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-glow-indigo"
              >
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 font-medium">
            © {new Date().getFullYear()} Artha Collective. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {[
              { label: 'Terms', path: '/terms' },
              { label: 'Privacy', path: '/privacy' },
              { label: 'Code of Conduct', path: '/code-of-conduct' },
            ].map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
