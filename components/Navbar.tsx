import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, LogOut, User, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  // Track scroll position to adjust nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission', path: '/mission' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-16 shadow-sm' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-xl group-hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
              <Terminal size={24} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900 group-hover:text-primary transition-colors">
              TEAP<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold transition-all rounded-lg ${
                    isActive(link.path) 
                      ? 'text-primary bg-primary/5' 
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 pl-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                >
                  <span className="text-sm font-bold text-slate-700">{user?.name}</span>
                  <img src={user?.avatar} alt="User" className="w-8 h-8 rounded-full border border-white" />
                  <ChevronDown size={16} className={`text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in">
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Signed in as</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{user?.email}</p>
                    </div>
                    <Link to="/dashboard" onClick={() => setIsProfileOpen(false)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                      <User size={18} className="text-slate-400" /> My Dashboard
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                      <Settings size={18} className="text-slate-400" /> Settings
                    </button>
                    <div className="h-px bg-gray-50 my-1"></div>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      <LogOut size={18} /> Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full transition-all duration-200"
                >
                  Log In
                </Link>
                <Link
                  to="/join"
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-7 py-2.5 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all shadow-lg shadow-primary/25 text-sm ring-1 ring-primary/10"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full max-h-screen overflow-y-auto animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {isAuthenticated && (
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl mb-4 border border-slate-100">
                <img src={user?.avatar} alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="font-extrabold text-slate-900">{user?.name}</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{user?.role}</p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive('/dashboard')
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  My Dashboard
                </Link>
              )}
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                >
                  <LogOut size={20} /> Log Out
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-4 rounded-xl font-bold text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 transition-all"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/join"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg shadow-primary/20 transition-all"
                  >
                    Join TEAP Community
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;