import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Settings, ChevronDown, Compass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const isHomePage = location.pathname === '/';
  const isDark = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Mission', path: '/mission' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const handleLogout = () => { logout(); setIsProfileOpen(false); navigate('/'); };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass h-16' : 'bg-transparent h-20'}`}>
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow-indigo transition-transform duration-300 group-hover:scale-105">
              <Compass size={18} className="text-white" />
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#0F1117]'}`}>
              ARTHA<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/8'
                    : isDark
                    ? 'text-white/60 hover:text-white hover:bg-white/8'
                    : 'text-[#6B7280] hover:text-[#0F1117] hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop auth */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 ${isDark ? 'border-white/15 bg-white/8 hover:bg-white/15' : 'border-black/8 bg-black/4 hover:bg-black/8'}`}
                >
                  <img src={user?.avatar} alt={user?.name} className="w-7 h-7 rounded-full" />
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#0F1117]'}`}>{user?.name?.split(' ')[0]}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''} ${isDark ? 'text-white/50' : 'text-[#6B7280]'}`} />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06)] py-1.5 animate-scale-in origin-top-right">
                    <div className="px-4 py-3 border-b border-black/5 mb-1">
                      <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.12em]">Signed in as</p>
                      <p className="text-sm font-semibold text-[#0F1117] truncate mt-0.5">{user?.email}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#374151] hover:bg-black/4 hover:text-[#0F1117] transition-colors"
                    >
                      <User size={15} className="text-[#9CA3AF]" /> Dashboard
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#374151] hover:bg-black/4 hover:text-[#0F1117] transition-colors">
                      <Settings size={15} className="text-[#9CA3AF]" /> Settings
                    </button>
                    <div className="h-px bg-black/5 mx-3 my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-medium"
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${isDark ? 'text-white/70 hover:text-white hover:bg-white/8' : 'text-[#6B7280] hover:text-[#0F1117] hover:bg-black/5'}`}
                >
                  Log In
                </Link>
                <Link
                  to="/join"
                  className="btn-glow px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-full shadow-glow-indigo"
                >
                  Join Artha
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-2 rounded-xl transition-colors ${isDark ? 'text-white/80 hover:bg-white/10' : 'text-[#6B7280] hover:bg-black/6'}`}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-[#07080F]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-80 bg-white flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.2)]"
            style={{ animation: 'slideLeft 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/6">
              <span className="font-display font-bold text-lg text-[#0F1117]">
                ARTHA<span className="text-primary">.</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-black/5 text-[#6B7280]"
              >
                <X size={20} />
              </button>
            </div>

            {isAuthenticated && (
              <div className="flex items-center gap-3 mx-4 mt-4 p-4 bg-[#F2F3F8] rounded-2xl">
                <img src={user?.avatar} alt={user?.name} className="w-11 h-11 rounded-xl" />
                <div>
                  <p className="font-bold text-[#0F1117] text-sm">{user?.name}</p>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{user?.role}</p>
                </div>
              </div>
            )}

            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive('/') ? 'bg-primary/8 text-primary' : 'text-[#374151] hover:bg-black/4'}`}
              >
                Home
              </Link>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive(link.path) ? 'bg-primary/8 text-primary' : 'text-[#374151] hover:bg-black/4'}`}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive('/dashboard') ? 'bg-primary/8 text-primary' : 'text-[#374151] hover:bg-black/4'}`}
                >
                  My Dashboard
                </Link>
              )}
            </nav>

            <div className="p-4 border-t border-black/6 space-y-2.5">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-colors text-sm"
                >
                  <LogOut size={17} /> Sign Out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-[#374151] border border-black/10 hover:bg-black/4 transition-colors text-sm"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/join"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark transition-colors text-sm shadow-glow-indigo"
                  >
                    Join Artha
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
