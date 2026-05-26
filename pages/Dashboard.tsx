import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User,
  Users,
  LogOut,
  Building2,
  Mail,
  Search,
  ExternalLink,
  Shield,
  Settings,
  Bell,
  Rocket,
  Plus,
  LayoutDashboard,
  Globe,
  Monitor,
  Trash2,
  Linkedin,
  Github,
  X,
  Layers,
  Zap,
  Box,
  Save,
  Eye,
  Smartphone,
  Lock,
  EyeOff,
  UserCheck,
  Image as ImageIcon,
  Upload,
  ShieldCheck,
  MapPin,
  Briefcase,
  Twitter,
  Instagram,
  Facebook,
  Share2,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const logoInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'company' | 'showcase' | 'directory' | 'user'>('company');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // User Profile State
  const [personalProfile, setPersonalProfile] = useState({
    name: user?.name || 'Aarav Patil',
    personalEmail: 'aarav.patil@gmail.com',
    mobile: '+91 98765 43210',
    companyEmail: user?.email || 'aarav@techflow.io',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Company Profile State
  const [companyInfo, setCompanyInfo] = useState({
    name: 'TechFlow Solutions Pvt Ltd',
    logo: `https://api.dicebear.com/7.x/shapes/svg?seed=TechFlow&backgroundColor=0539e3`,
    industry: 'saas',
    stage: 'Seed',
    location: 'Viman Nagar, Pune',
    founded: '2022',
    teamSize: '11-50',
    pitch: 'Next-gen logistics automation for Tier-2 Indian cities using AI-driven routing.',
    mission:
      'Our mission is to empower small logistics fleet owners across Maharashtra with enterprise-grade technology. We optimize routes to save up to 30% in fuel costs.',
    website: 'https://techflow.io',
    linkedin: 'linkedin.com/company/techflow',
    github: 'github.com/techflow-labs',
    twitter: 'twitter.com/techflow_hq',
    instagram: 'instagram.com/techflow.io',
    facebook: 'facebook.com/techflowsolutions',
    incorporationNumber: 'U72200PN2022PTC123456',
    gstNumber: '27AAAAA0000A1Z5',
    address: 'Suite 402, Tech Park Plaza, Viman Nagar, Pune - 411014',
    productDetails:
      'We are revolutionizing logistics by providing AI-driven route optimization for fleet owners in Tier-2 and Tier-3 cities of India, helping them compete with large organized players.',
  });

  const [techStack, setTechStack] = useState(['React', 'Python', 'AWS', 'TensorFlow']);
  const [founders, setFounders] = useState([
    { id: 1, name: user?.name || 'Aarav Patil', email: user?.email || 'aarav@techflow.io', role: 'CEO', avatar: user?.avatar },
    { id: 2, name: 'Siddharth Varma', email: 'sid@techflow.io', role: 'CTO', avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth` },
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: 'RouteMaster AI', description: 'Dynamic route optimization engine.' },
    { id: 2, name: 'FleetVision Dashboard', description: 'Monitoring tool for fleet owners.' },
  ]);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoUploadClick = () => {
    logoInputRef.current?.click();
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyInfo(prev => ({ ...prev, logo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addFounder = () => {
    const newFounder = {
      id: Date.now(),
      name: '',
      email: '',
      role: 'Co-Founder',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`,
    };
    setFounders([...founders, newFounder]);
  };

  const updateFounder = (id: number, field: string, value: string) => {
    setFounders(founders.map(f => (f.id === id ? { ...f, [field]: value } : f)));
  };

  const removeFounder = (id: number) => {
    if (founders.length > 1) setFounders(founders.filter(f => f.id !== id));
  };

  const addProduct = () => {
    setProducts([...products, { id: Date.now(), name: '', description: '' }]);
  };

  const updateProduct = (id: number, field: string, value: string) => {
    setProducts(products.map(p => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addTech = (tech: string) => {
    if (tech && !techStack.includes(tech)) setTechStack([...techStack, tech]);
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter(t => t !== tech));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const directoryCompanies = [
    { id: 1, name: 'GreenCode', industry: 'Cleantech', logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=GreenCode&backgroundColor=10b981', pitch: 'Smart waste management systems.' },
    { id: 2, name: 'DataMinds', industry: 'Analytics', logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=DataMinds&backgroundColor=6366f1', pitch: 'Real-time behavioral insights.' },
    { id: 3, name: 'PuneRobotics', industry: 'Hardware', logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=PuneRobotics&backgroundColor=f59e0b', pitch: 'Precision autonomous drones.' },
  ];

  // ─── Shared input style ──────────────────────────────────────────────────────
  const inputCls = 'w-full px-5 py-3.5 rounded-2xl border border-black/8 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-[#0F1117] bg-[#F2F3F8] placeholder-[#9CA3AF] text-sm';
  const labelCls = 'block text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.12em] mb-1.5';

  return (
    <div className="min-h-screen bg-[#F2F3F8] flex flex-col lg:flex-row pt-16">

      {/* ─── SIDEBAR ─────────────────────────────────────────────────────────── */}
      <aside className="w-full lg:w-64 bg-[#07080F] border-r border-white/8 lg:fixed lg:h-[calc(100vh-64px)] z-20 flex flex-col">
        <div className="flex flex-col h-full px-4 py-6">

          {/* Company logo widget */}
          <div className="flex items-center gap-3 mb-8 p-3.5 bg-white/5 rounded-2xl border border-white/8">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-[#141728] border border-white/10 flex-shrink-0">
              <img src={companyInfo.logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-white text-sm truncate leading-tight">{companyInfo.name}</p>
              <span className="flex items-center gap-1 text-[9px] text-green-400/80 font-bold uppercase tracking-[0.1em] mt-0.5">
                <Shield size={8} /> Verified
              </span>
            </div>
          </div>

          <nav className="flex-1 space-y-0.5 overflow-y-auto">
            <p className="px-3 text-[9px] font-bold text-white/30 uppercase tracking-[0.12em] mb-3">Brand Management</p>
            {[
              { id: 'company', label: 'Company Profile', icon: Building2 },
              { id: 'showcase', label: 'Portal Showcase', icon: Rocket },
              { id: 'directory', label: 'Pune Ecosystem', icon: LayoutDashboard },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-glow-indigo'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}

            <div className="pt-5 mt-5 border-t border-white/8">
              <p className="px-3 text-[9px] font-bold text-white/30 uppercase tracking-[0.12em] mb-3">Member Tools</p>
              <button
                onClick={() => setActiveTab('user')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'user'
                    ? 'bg-primary text-white shadow-glow-indigo'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <User size={16} /> Personal Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200">
                <Bell size={16} /> Inbound Leads
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200">
                <Settings size={16} /> Preferences
              </button>
            </div>
          </nav>

          <button
            onClick={handleLogout}
            className="mt-6 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-red-500/70 hover:text-red-500 hover:bg-red-500/8 transition-all duration-200 text-sm border border-transparent hover:border-red-500/15"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* ─── CONTENT AREA ────────────────────────────────────────────────────── */}
      <main className="flex-1 lg:ml-64">

        {/* Header */}
        <div className="bg-white border-b border-black/6 px-6 lg:px-10 py-5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-display font-bold text-2xl text-[#0F1117] tracking-tight">
                {activeTab === 'company' && 'Company Profile'}
                {activeTab === 'showcase' && 'Portal Narrative'}
                {activeTab === 'directory' && 'Ecosystem Hub'}
                {activeTab === 'user' && 'Your Profile'}
              </h1>
              <p className="text-sm text-[#9CA3AF] mt-0.5">
                {activeTab === 'company' && 'Manage your official Artha registry and business details.'}
                {activeTab === 'showcase' && 'Craft the message you share with the world.'}
                {activeTab === 'directory' && 'Explore and connect with fellow Pune innovators.'}
                {activeTab === 'user' && 'Control your personal data and account security.'}
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/company/1"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F2F3F8] border border-black/8 text-[#374151] rounded-xl text-xs font-bold hover:bg-[#E2E5EF] transition-all"
              >
                <Eye size={14} /> View Public
              </Link>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-dark transition-all shadow-glow-indigo disabled:opacity-60"
              >
                {isSaving ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save size={14} />
                )}
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto pb-20">

          {/* ── TAB: PERSONAL PROFILE ─────────────────────────────────────────── */}
          {activeTab === 'user' && (
            <div className="animate-fade-in space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">

                  {/* General info */}
                  <div className="bg-white rounded-3xl p-8 shadow-card">
                    <h2 className="font-bold text-[#0F1117] mb-6 flex items-center gap-3 text-base">
                      <div className="p-2 bg-primary/8 text-primary rounded-xl"><UserCheck size={18} /></div>
                      General Information
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>Full Legal Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                          <input
                            type="text"
                            name="name"
                            value={personalProfile.name}
                            onChange={handlePersonalChange}
                            className={`${inputCls} pl-11`}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Personal Email</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                            <input
                              type="email"
                              name="personalEmail"
                              value={personalProfile.personalEmail}
                              onChange={handlePersonalChange}
                              className={`${inputCls} pl-11`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Mobile Number</label>
                          <div className="relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                            <input
                              type="text"
                              name="mobile"
                              value={personalProfile.mobile}
                              onChange={handlePersonalChange}
                              className={`${inputCls} pl-11`}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Professional Company Email</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                          <input
                            type="email"
                            name="companyEmail"
                            value={personalProfile.companyEmail}
                            onChange={handlePersonalChange}
                            className={`${inputCls} pl-11`}
                          />
                        </div>
                        <p className="text-[10px] text-[#9CA3AF] font-medium mt-1.5 px-1">Used for Artha official correspondence and portal communications.</p>
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-white rounded-3xl p-8 shadow-card">
                    <h2 className="font-bold text-[#0F1117] mb-6 flex items-center gap-3 text-base">
                      <div className="p-2 bg-red-50 text-red-500 rounded-xl"><Lock size={18} /></div>
                      Security & Authentication
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="currentPassword"
                            placeholder="••••••••"
                            className={inputCls}
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151]"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>New Password</label>
                          <input type={showPassword ? 'text' : 'password'} name="newPassword" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Confirm Password</label>
                          <input type={showPassword ? 'text' : 'password'} name="confirmPassword" className={inputCls} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar + 2FA sidebar */}
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-7 shadow-card text-center">
                    <div className="relative inline-block mb-5">
                      <img src={user?.avatar} className="w-28 h-28 rounded-[1.5rem] border-4 border-[#F2F3F8] shadow-xl" alt="Profile" />
                      <button className="absolute -bottom-2 -right-2 p-2.5 bg-primary text-white rounded-2xl shadow-glow-indigo hover:bg-primary-dark transition-all">
                        <Monitor size={14} />
                      </button>
                    </div>
                    <h3 className="font-bold text-[#0F1117] text-base mb-1">{personalProfile.name}</h3>
                    <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.1em] mb-5">Lead Founder @ TechFlow</p>
                    <button className="px-5 py-2 bg-[#F2F3F8] border border-black/8 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] text-[#6B7280] hover:bg-[#E2E5EF] transition-all">
                      Change Photo
                    </button>
                  </div>

                  <div className="bg-[#07080F] rounded-3xl p-7 text-white relative overflow-hidden border border-white/8">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <Shield className="mb-5 text-primary-light" size={32} />
                      <h3 className="font-bold text-lg mb-2">Two-Factor Auth</h3>
                      <p className="text-xs text-white/40 leading-relaxed mb-6">
                        Enhance your account security. We support Google Authenticator and Authy.
                      </p>
                      <button className="w-full py-3 bg-white/8 hover:bg-white/14 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-[0.1em] transition-all">
                        Enable Security
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: COMPANY PROFILE ──────────────────────────────────────────── */}
          {activeTab === 'company' && (
            <div className="animate-fade-in space-y-8 pb-10">

              {/* Brand Assets */}
              <div>
                <h2 className="font-bold text-[#0F1117] mb-4 flex items-center gap-2.5 text-sm">
                  <div className="p-1.5 bg-primary/8 text-primary rounded-lg"><ImageIcon size={16} /></div>
                  Brand Assets
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group flex-shrink-0">
                      <div className="w-28 h-28 bg-[#F2F3F8] border-4 border-[#E2E5EF] rounded-3xl overflow-hidden flex items-center justify-center shadow-card">
                        <img src={companyInfo.logo} alt="Company Logo" className="w-full h-full object-cover" />
                      </div>
                      <button
                        onClick={handleLogoUploadClick}
                        className="absolute -bottom-2 -right-2 p-2.5 bg-primary text-white rounded-2xl shadow-glow-indigo hover:bg-primary-dark transition-all border-4 border-white"
                      >
                        <Upload size={14} />
                      </button>
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-3">
                      <div>
                        <h3 className="font-bold text-[#0F1117]">Visual Identity</h3>
                        <p className="text-sm text-[#9CA3AF] max-w-md mt-1">
                          Your logo appears on the Ecosystem Portal, member directory, and Artha search results.
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <button
                          onClick={handleLogoUploadClick}
                          className="flex items-center gap-2 px-5 py-2 bg-[#0F1117] text-white text-[10px] font-bold uppercase tracking-[0.1em] rounded-xl hover:bg-[#374151] transition-all"
                        >
                          <Upload size={12} /> Upload Logo
                        </button>
                        <p className="text-[10px] text-[#9CA3AF] font-medium self-center">Max 2MB · PNG, SVG or JPG</p>
                      </div>
                      <input type="file" ref={logoInputRef} onChange={handleLogoChange} accept="image/*" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-[#0F1117] flex items-center gap-2.5 text-sm">
                    <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg"><Users size={16} /></div>
                    Founder Details
                  </h2>
                  <button
                    onClick={addFounder}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:bg-primary/8 px-4 py-2 rounded-xl transition-all uppercase tracking-[0.1em] border border-primary/20"
                  >
                    <Plus size={13} /> Add Founder
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {founders.map((founder, idx) => (
                    <div key={founder.id} className="bg-white rounded-3xl p-6 shadow-card relative group hover:shadow-card-hover transition-all border border-transparent hover:border-primary/15">
                      <button
                        onClick={() => removeFounder(founder.id)}
                        className="absolute top-5 right-5 p-1.5 text-[#9CA3AF] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        disabled={founders.length === 1}
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="flex items-center gap-3 mb-5">
                        <img src={founder.avatar} className="w-12 h-12 rounded-2xl border-2 border-[#F2F3F8] bg-[#F2F3F8]" alt="Avatar" />
                        <div>
                          <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-[0.1em]">Founder #{idx + 1}</p>
                          <h3 className="font-bold text-[#0F1117] text-sm">{founder.name || 'Set Name'}</h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className={labelCls}>Display Name</label>
                          <input
                            type="text"
                            value={founder.name}
                            onChange={e => updateFounder(founder.id, 'name', e.target.value)}
                            className={inputCls}
                            placeholder="Full Name"
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Designation</label>
                          <select
                            value={founder.role}
                            onChange={e => updateFounder(founder.id, 'role', e.target.value)}
                            className={inputCls}
                          >
                            <option>CEO</option>
                            <option>CTO</option>
                            <option>Founder</option>
                            <option>Co-Founder</option>
                            <option>Chief Product Officer</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Professional Email</label>
                          <input
                            type="email"
                            value={founder.email}
                            onChange={e => updateFounder(founder.id, 'email', e.target.value)}
                            className={inputCls}
                            placeholder="email@company.io"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Identity */}
              <div>
                <h2 className="font-bold text-[#0F1117] mb-4 flex items-center gap-2.5 text-sm">
                  <div className="p-1.5 bg-primary/8 text-primary rounded-lg"><Building2 size={16} /></div>
                  Company Identity
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-card space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className={labelCls}>Registered Entity Name</label>
                      <input type="text" name="name" value={companyInfo.name} onChange={handleInfoChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>CIN / Incorporation Number</label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                        <input type="text" name="incorporationNumber" value={companyInfo.incorporationNumber} onChange={handleInfoChange} className={`${inputCls} pl-11`} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>GST Number (GSTIN)</label>
                      <input type="text" name="gstNumber" value={companyInfo.gstNumber} onChange={handleInfoChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Website URL</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                        <input type="text" name="website" value={companyInfo.website} onChange={handleInfoChange} className={`${inputCls} pl-11`} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Headquarters (Pune)</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                        <input type="text" name="location" value={companyInfo.location} onChange={handleInfoChange} className={`${inputCls} pl-11`} />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelCls}>Registered Address</label>
                      <textarea name="address" rows={3} value={companyInfo.address} onChange={handleInfoChange} className={`${inputCls} resize-none`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Venture Narrative */}
              <div>
                <h2 className="font-bold text-[#0F1117] mb-4 flex items-center gap-2.5 text-sm">
                  <div className="p-1.5 bg-orange-50 text-orange-600 rounded-lg"><Briefcase size={16} /></div>
                  Venture Narrative
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-card space-y-6">
                  <div>
                    <label className={labelCls}>Primary Industry Vertical</label>
                    <select name="industry" value={companyInfo.industry} onChange={handleInfoChange} className={inputCls}>
                      <option value="fintech">Fintech</option>
                      <option value="healthtech">Healthtech</option>
                      <option value="edtech">Edtech</option>
                      <option value="saas">SaaS / Enterprise Software</option>
                      <option value="ecommerce">E-commerce / D2C</option>
                      <option value="deeptech">Deeptech (AI/ML/IoT)</option>
                      <option value="agritech">Agritech</option>
                      <option value="logistics">Logistics & Supply Chain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Core Product Narrative</label>
                    <p className="text-[10px] text-[#9CA3AF] mb-2">Explain what you are building and for whom.</p>
                    <textarea name="productDetails" rows={6} value={companyInfo.productDetails} onChange={handleInfoChange} className={`${inputCls} resize-none leading-relaxed`} />
                  </div>
                </div>
              </div>

              {/* Social Presence */}
              <div>
                <h2 className="font-bold text-[#0F1117] mb-4 flex items-center gap-2.5 text-sm">
                  <div className="p-1.5 bg-primary/8 text-primary rounded-lg"><Share2 size={16} /></div>
                  Social Presence
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: 'linkedin', label: 'LinkedIn Profile', icon: <Linkedin size={16} className="text-[#0077b5]" /> },
                      { name: 'twitter', label: 'Twitter (X) Profile', icon: <Twitter size={16} className="text-[#0F1117]" /> },
                      { name: 'instagram', label: 'Instagram Handle', icon: <Instagram size={16} className="text-[#e1306c]" /> },
                      { name: 'facebook', label: 'Facebook Page', icon: <Facebook size={16} className="text-[#1877f2]" /> },
                      { name: 'github', label: 'GitHub Organization', icon: <Github size={16} className="text-[#0F1117]" /> },
                      { name: 'website', label: 'Official Website', icon: <Globe size={16} className="text-primary" /> },
                    ].map(social => (
                      <div key={social.name}>
                        <label className={labelCls}>{social.label}</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2">{social.icon}</div>
                          <input
                            type="text"
                            name={social.name}
                            value={(companyInfo as any)[social.name]}
                            onChange={handleInfoChange}
                            placeholder="URL or @handle"
                            className={`${inputCls} pl-11`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: PORTAL SHOWCASE ──────────────────────────────────────────── */}
          {activeTab === 'showcase' && (
            <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 space-y-6">

                {/* Pitch Editor */}
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h2 className="font-bold text-[#0F1117] mb-6 flex items-center gap-2.5 text-base">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Rocket size={18} /></div>
                    The Showcase Narrative
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className={labelCls}>One-Sentence Hook</label>
                      <input type="text" name="pitch" value={companyInfo.pitch} onChange={handleInfoChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Detailed Mission Description</label>
                      <textarea rows={6} name="mission" value={companyInfo.mission} onChange={handleInfoChange} className={`${inputCls} resize-none leading-relaxed`} />
                    </div>
                  </div>
                </div>

                {/* Product Manager */}
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-[#0F1117] flex items-center gap-2.5 text-base">
                      <div className="p-2 bg-green-50 text-green-600 rounded-xl"><Layers size={18} /></div>
                      Product Offerings
                    </h2>
                    <button
                      onClick={addProduct}
                      className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] flex items-center gap-1.5 px-4 py-2 rounded-xl hover:bg-primary/8 border border-primary/20 transition-all"
                    >
                      <Plus size={13} /> Add
                    </button>
                  </div>
                  <div className="space-y-3">
                    {products.map(product => (
                      <div key={product.id} className="bg-[#F2F3F8] p-5 rounded-2xl flex gap-4 items-start">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-[#9CA3AF] flex-shrink-0"><Box size={20} /></div>
                        <div className="flex-1 space-y-2">
                          <input
                            placeholder="Product Name"
                            value={product.name}
                            onChange={e => updateProduct(product.id, 'name', e.target.value)}
                            className="w-full bg-transparent border-b border-black/10 focus:border-primary outline-none font-bold text-[#0F1117] text-sm pb-1"
                          />
                          <input
                            placeholder="Short description..."
                            value={product.description}
                            onChange={e => updateProduct(product.id, 'description', e.target.value)}
                            className="w-full bg-transparent border-b border-black/10 focus:border-primary outline-none text-sm text-[#6B7280] pb-1"
                          />
                        </div>
                        <button onClick={() => removeProduct(product.id)} className="p-1.5 text-[#9CA3AF] hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h2 className="font-bold text-[#0F1117] mb-6 flex items-center gap-2.5 text-base">
                    <div className="p-2 bg-primary/8 text-primary rounded-xl"><Monitor size={18} /></div>
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {techStack.map(t => (
                      <div
                        key={t}
                        className="flex items-center gap-2 px-3.5 py-2 bg-[#F2F3F8] border border-black/8 rounded-xl text-xs font-bold text-[#374151] group hover:border-primary/30 transition-all"
                      >
                        {t}
                        <button onClick={() => removeTech(t)} className="text-[#9CA3AF] hover:text-red-500 transition-colors">
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                    <div className="relative group">
                      <Plus className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-primary transition-colors" size={13} />
                      <input
                        placeholder="Add Tool..."
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            addTech(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                        className="pl-8 pr-4 py-2 bg-[#F2F3F8] border-2 border-dashed border-black/10 rounded-xl text-xs font-bold text-[#9CA3AF] focus:border-primary focus:text-primary focus:bg-white outline-none transition-all w-32 focus:w-44"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Portal Preview */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-[0.12em] px-1">Live Portal Preview</p>
                <div className="bg-white rounded-3xl shadow-card overflow-hidden sticky top-24">
                  <div className="h-20 bg-[#07080F] relative">
                    <div className="absolute inset-0 bg-line-grid opacity-100" />
                  </div>
                  <div className="p-7 -mt-12 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-card ring-4 ring-white border border-black/6">
                        <img src={companyInfo.logo} alt="Logo" className="w-full h-full object-cover" />
                      </div>
                      <span className="bg-[#F2F3F8] text-[#9CA3AF] text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.1em] border border-black/6 mt-14">
                        {companyInfo.stage}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0F1117] mb-1">{companyInfo.name}</h3>
                    <p className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.1em]">{companyInfo.industry}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-6 italic">"{companyInfo.pitch}"</p>
                    <div className="space-y-5 pt-5 border-t border-black/5">
                      <div className="flex flex-wrap gap-1.5">
                        {techStack.slice(0, 3).map(t => (
                          <span key={t} className="text-[9px] font-bold bg-[#F2F3F8] text-[#9CA3AF] px-2.5 py-1 rounded-lg uppercase tracking-tight">
                            {t}
                          </span>
                        ))}
                        {techStack.length > 3 && (
                          <span className="text-[9px] font-bold text-[#9CA3AF] px-2 py-1">+{techStack.length - 3}</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img src={founders[0]?.avatar} className="w-8 h-8 rounded-xl border-2 border-[#F2F3F8]" alt="Lead" />
                          <div>
                            <p className="text-[9px] font-bold text-[#9CA3AF] uppercase leading-none mb-0.5">Founder</p>
                            <p className="text-xs font-bold text-[#0F1117]">{founders[0]?.name}</p>
                          </div>
                        </div>
                        <Link to="/company/1" className="flex items-center gap-1 text-[9px] font-bold text-primary uppercase tracking-[0.1em] hover:underline">
                          Full Bio <ExternalLink size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: ECOSYSTEM DIRECTORY ──────────────────────────────────────── */}
          {activeTab === 'directory' && (
            <div className="animate-fade-in space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-card">
                <div>
                  <h2 className="font-display font-bold text-xl text-[#0F1117]">Innovation Hub</h2>
                  <p className="text-sm text-[#9CA3AF] mt-0.5">Search through {directoryCompanies.length} active startups.</p>
                </div>
                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="Search startups, sectors, or tools..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className={`${inputCls} pl-11`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {directoryCompanies.map(company => (
                  <div key={company.id} className="hover-lift bg-white rounded-3xl p-7 shadow-card flex flex-col group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-white rounded-2xl overflow-hidden border border-black/8 group-hover:ring-4 group-hover:ring-primary/10 transition-all shadow-sm">
                        <img src={company.logo} alt="Logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex gap-2">
                        <a href="#" className="p-2 bg-[#F2F3F8] rounded-xl text-[#9CA3AF] hover:text-primary transition-colors border border-black/6">
                          <Globe size={15} />
                        </a>
                        <a href="#" className="p-2 bg-[#F2F3F8] rounded-xl text-[#9CA3AF] hover:text-primary transition-colors border border-black/6">
                          <Mail size={15} />
                        </a>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-[#0F1117] mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                      <p className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.1em]">{company.industry}</p>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 italic">"{company.pitch}"</p>
                    </div>
                    <button className="w-full py-3 bg-[#F2F3F8] text-[#374151] rounded-2xl text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-[#07080F] hover:text-white transition-all duration-200">
                      Request Meeting
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
