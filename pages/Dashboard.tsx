
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
  Share2
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
    confirmPassword: ''
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
    pitch: "Next-gen logistics automation for Tier-2 Indian cities using AI-driven routing.",
    mission: "Our mission is to empower small logistics fleet owners across Maharashtra with enterprise-grade technology. We optimize routes to save up to 30% in fuel costs.",
    website: 'https://techflow.io',
    linkedin: 'linkedin.com/company/techflow',
    github: 'github.com/techflow-labs',
    twitter: 'twitter.com/techflow_hq',
    instagram: 'instagram.com/techflow.io',
    facebook: 'facebook.com/techflowsolutions',
    // Corporate Details
    incorporationNumber: 'U72200PN2022PTC123456',
    gstNumber: '27AAAAA0000A1Z5',
    address: 'Suite 402, Tech Park Plaza, Viman Nagar, Pune - 411014',
    productDetails: 'We are revolutionizing logistics by providing AI-driven route optimization for fleet owners in Tier-2 and Tier-3 cities of India, helping them compete with large organized players.'
  });

  const [techStack, setTechStack] = useState(['React', 'Python', 'AWS', 'TensorFlow']);
  const [founders, setFounders] = useState([
    { id: 1, name: user?.name || 'Aarav Patil', email: user?.email || 'aarav@techflow.io', role: 'CEO', avatar: user?.avatar },
    { id: 2, name: 'Siddharth Varma', email: 'sid@techflow.io', role: 'CTO', avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth` }
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: 'RouteMaster AI', description: 'Dynamic route optimization engine.' },
    { id: 2, name: 'FleetVision Dashboard', description: 'Monitoring tool for fleet owners.' }
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
        alert("File size exceeds 2MB limit.");
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
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
    };
    setFounders([...founders, newFounder]);
  };

  const updateFounder = (id: number, field: string, value: string) => {
    setFounders(founders.map(f => f.id === id ? { ...f, [field]: value } : f));
  };

  const removeFounder = (id: number) => {
    if (founders.length > 1) setFounders(founders.filter(f => f.id !== id));
  };

  const addProduct = () => {
    setProducts([...products, { id: Date.now(), name: '', description: '' }]);
  };

  const updateProduct = (id: number, field: string, value: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
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
    { id: 3, name: 'PuneRobotics', industry: 'Hardware', logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=PuneRobotics&backgroundColor=f59e0b', pitch: 'Precision autonomous drones.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row pt-20">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-72 bg-white border-r border-slate-200 lg:fixed lg:h-[calc(100vh-80px)] z-20">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center font-black text-lg shadow-lg">
              <img src={companyInfo.logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-slate-900 text-sm truncate">{companyInfo.name}</p>
              <span className="flex items-center gap-1 text-[9px] text-green-600 font-black uppercase tracking-tighter">
                <Shield size={10} /> Verified Brand
              </span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Brand Management</p>
            {[
              { id: 'company', label: 'Company Profile', icon: Building2 },
              { id: 'showcase', label: 'Portal Showcase', icon: Rocket },
              { id: 'directory', label: 'Pune Ecosystem', icon: LayoutDashboard },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <tab.icon size={18} /> {tab.label}
              </button>
            ))}
            
            <div className="pt-6 mt-6 border-t border-slate-100">
              <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Member Tools</p>
              <button 
                onClick={() => setActiveTab('user')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'user' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <User size={18} /> Personal Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Bell size={18} /> Inbound Leads
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Settings size={18} /> Preferences
              </button>
            </div>
          </nav>

          <button
            onClick={handleLogout}
            className="mt-8 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 lg:ml-72 p-6 lg:p-10">
        <div className="max-w-6xl mx-auto pb-20">
          
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 border-b border-slate-200 pb-8">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {activeTab === 'company' && 'Company Profile'}
                {activeTab === 'showcase' && 'Portal Narrative'}
                {activeTab === 'directory' && 'Ecosystem Hub'}
                {activeTab === 'user' && 'Your Profile'}
              </h1>
              <p className="text-slate-500 font-medium text-sm mt-1">
                {activeTab === 'company' && 'Manage your official TEAP registry and business details.'}
                {activeTab === 'showcase' && 'Craft the message you share with the world.'}
                {activeTab === 'directory' && 'Explore and connect with fellow Pune innovators.'}
                {activeTab === 'user' && 'Control your personal data and account security.'}
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <Link to="/company/1" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all shadow-sm">
                  <Eye size={16} /> View Public
               </Link>
               <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-70"
               >
                  {isSaving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Save size={16} />}
                  Save Changes
               </button>
            </div>
          </div>

          {/* TAB: PERSONAL PROFILE */}
          {activeTab === 'user' && (
            <div className="animate-fade-in space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Basic Personal Info */}
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                      <div className="p-2.5 bg-blue-50 text-primary rounded-xl"><UserCheck size={22} /></div>
                      General Information
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Full Legal Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                          <input 
                            type="text" 
                            name="name"
                            value={personalProfile.name}
                            onChange={handlePersonalChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800 bg-slate-50/50" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Personal Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input 
                              type="email" 
                              name="personalEmail"
                              value={personalProfile.personalEmail}
                              onChange={handlePersonalChange}
                              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800 bg-slate-50/50" 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Primary Mobile Number</label>
                          <div className="relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input 
                              type="text" 
                              name="mobile"
                              value={personalProfile.mobile}
                              onChange={handlePersonalChange}
                              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800 bg-slate-50/50" 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Professional Company Email</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                          <input 
                            type="email" 
                            name="companyEmail"
                            value={personalProfile.companyEmail}
                            onChange={handlePersonalChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                          />
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium px-1">This email is used for TEAP official correspondence and portal communications.</p>
                      </div>
                    </div>
                  </div>

                  {/* Security Section */}
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                      <div className="p-2.5 bg-red-50 text-red-500 rounded-xl"><Lock size={22} /></div>
                      Security & Authentication
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Current Password</label>
                        <div className="relative">
                          <input 
                            type={showPassword ? 'text' : 'password'}
                            name="currentPassword"
                            placeholder="••••••••"
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-slate-800" 
                          />
                          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">New Password</label>
                          <input 
                            type={showPassword ? 'text' : 'password'}
                            name="newPassword"
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Confirm New Password</label>
                          <input 
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Avatar Section */}
                  <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm text-center">
                    <div className="relative inline-block mb-6">
                      <img src={user?.avatar} className="w-32 h-32 rounded-[2rem] border-4 border-slate-50 shadow-xl" alt="Profile" />
                      <button className="absolute -bottom-2 -right-2 p-3 bg-primary text-white rounded-2xl shadow-lg hover:bg-primary-dark transition-all">
                        <Monitor size={16} />
                      </button>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{personalProfile.name}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">Lead Founder @ TechFlow</p>
                    <div className="flex justify-center gap-2">
                       <button className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-all">Change Photo</button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <Shield className="mb-6 opacity-80" size={40} />
                      <h3 className="font-bold text-xl mb-3">Two-Factor Auth</h3>
                      <p className="text-xs text-blue-100 leading-relaxed mb-8">
                        Enhance your account security by enabling 2FA. We support Google Authenticator and Authy.
                      </p>
                      <button className="w-full py-4 bg-white/20 hover:bg-white/30 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                        Enable Security
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: COMPANY PROFILE */}
          {activeTab === 'company' && (
            <div className="animate-fade-in space-y-12 pb-20">
              
              {/* Brand Assets (LOGO UPLOAD) */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl"><ImageIcon size={22} /></div>
                  Brand Assets
                </h2>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="relative group">
                      <div className="w-32 h-32 bg-slate-50 border-4 border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-lg transition-all group-hover:border-primary/20">
                        <img src={companyInfo.logo} alt="Company Logo" className="w-full h-full object-cover" />
                      </div>
                      <button 
                        onClick={handleLogoUploadClick}
                        className="absolute -bottom-3 -right-3 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-all border-4 border-white"
                      >
                        <Upload size={18} />
                      </button>
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Visual Identity</h3>
                        <p className="text-sm text-slate-500 max-w-md">Your logo will be displayed on the Ecosystem Portal, member directory, and TEAP directory searches.</p>
                      </div>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <button 
                          onClick={handleLogoUploadClick}
                          className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                          <Upload size={14} /> Upload New Logo
                        </button>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest self-center">Max 2MB • PNG, SVG or JPG</p>
                      </div>
                      <input 
                        type="file" 
                        ref={logoInputRef}
                        onChange={handleLogoChange}
                        accept="image/*"
                        className="hidden" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Founder Details */}
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl"><Users size={22} /></div>
                    Founder Details
                  </h2>
                  <button onClick={addFounder} className="flex items-center gap-2 text-[10px] font-black text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-primary/20 shadow-sm">
                    <Plus size={14} /> Add Founder
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {founders.map((founder, idx) => (
                    <div key={founder.id} className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm relative group hover:border-primary transition-all">
                      <button 
                        onClick={() => removeFounder(founder.id)}
                        className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        disabled={founders.length === 1}
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="flex items-center gap-4 mb-6">
                        <img src={founder.avatar} className="w-16 h-16 rounded-2xl border-2 border-slate-50 shadow-sm bg-slate-50" alt="Avatar" />
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founder #{idx+1}</p>
                          <h3 className="font-bold text-slate-800">{founder.name || 'Set Name'}</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter ml-1">Display Name</label>
                          <input 
                            type="text" 
                            value={founder.name}
                            onChange={(e) => updateFounder(founder.id, 'name', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary outline-none bg-slate-50/30 font-bold text-sm" 
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter ml-1">Designation</label>
                          <select 
                            value={founder.role}
                            onChange={(e) => updateFounder(founder.id, 'role', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary outline-none bg-slate-50/30 font-bold text-sm"
                          >
                            <option>CEO</option>
                            <option>CTO</option>
                            <option>Founder</option>
                            <option>Co-Founder</option>
                            <option>Chief Product Officer</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter ml-1">Professional Email</label>
                          <input 
                            type="email" 
                            value={founder.email}
                            onChange={(e) => updateFounder(founder.id, 'email', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary outline-none bg-slate-50/30 font-bold text-sm" 
                            placeholder="email@company.io"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Company Identity */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl"><Building2 size={22} /></div>
                  Company Identity
                </h2>
                
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Registered Entity Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={companyInfo.name}
                        onChange={handleInfoChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800 bg-slate-50/50 shadow-inner" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">CIN / Incorporation Number</label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text" 
                          name="incorporationNumber"
                          value={companyInfo.incorporationNumber}
                          onChange={handleInfoChange}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">GST Number (GSTIN)</label>
                      <input 
                        type="text" 
                        name="gstNumber"
                        value={companyInfo.gstNumber}
                        onChange={handleInfoChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Website URL</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text" 
                          name="website"
                          value={companyInfo.website}
                          onChange={handleInfoChange}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Headquarters (Pune)</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text" 
                          name="location"
                          value={companyInfo.location}
                          onChange={handleInfoChange}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Registered Address</label>
                      <textarea 
                        name="address"
                        rows={3}
                        value={companyInfo.address}
                        onChange={handleInfoChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium text-slate-700 resize-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Venture Narrative */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-3">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><Briefcase size={22} /></div>
                  Venture Narrative
                </h2>
                
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Primary Industry Vertical</label>
                    <select 
                      name="industry"
                      value={companyInfo.industry}
                      onChange={handleInfoChange}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800 bg-white shadow-inner"
                    >
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

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Core Product Narrative</label>
                    <p className="text-[10px] text-slate-400 font-medium px-1 mb-2 uppercase tracking-tight">Explain what you are building and for whom.</p>
                    <textarea 
                      name="productDetails"
                      rows={6}
                      value={companyInfo.productDetails}
                      onChange={handleInfoChange}
                      className="w-full px-5 py-5 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium text-slate-700 resize-none leading-relaxed" 
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: Social Presence */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl"><Share2 size={22} /></div>
                  Social Presence
                </h2>
                
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { name: 'linkedin', label: 'LinkedIn Profile', icon: <Linkedin size={18} className="text-[#0077b5]" /> },
                      { name: 'twitter', label: 'Twitter (X) Profile', icon: <Twitter size={18} className="text-slate-900" /> },
                      { name: 'instagram', label: 'Instagram Handle', icon: <Instagram size={18} className="text-[#e1306c]" /> },
                      { name: 'facebook', label: 'Facebook Page', icon: <Facebook size={18} className="text-[#1877f2]" /> },
                      { name: 'github', label: 'GitHub Organization', icon: <Github size={18} className="text-slate-900" /> },
                      { name: 'website', label: 'Official Website', icon: <Globe size={18} className="text-primary" /> }
                    ].map((social) => (
                      <div key={social.name} className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{social.label}</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-70">
                            {social.icon}
                          </div>
                          <input 
                            type="text" 
                            name={social.name}
                            value={(companyInfo as any)[social.name]}
                            onChange={handleInfoChange}
                            placeholder={`URL or @handle`}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-sm text-slate-800" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PORTAL SHOWCASE */}
          {activeTab === 'showcase' && (
            <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-8">
                {/* Pitch Editor */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><Rocket size={22} /></div>
                    The Showcase Narrative
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">One-Sentence Hook</label>
                      <input 
                        type="text" 
                        name="pitch"
                        value={companyInfo.pitch}
                        onChange={handleInfoChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Detailed Mission Description</label>
                      <textarea 
                        rows={6} 
                        name="mission"
                        value={companyInfo.mission}
                        onChange={handleInfoChange}
                        className="w-full px-5 py-5 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium text-slate-700 resize-none leading-relaxed" 
                      />
                    </div>
                  </div>
                </div>

                {/* Product Manager */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div className="p-2.5 bg-green-50 text-green-600 rounded-xl"><Layers size={22} /></div>
                      Product Offerings
                    </h2>
                    <button onClick={addProduct} className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary/5 border border-primary/20">
                      <Plus size={14} /> Add Product
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {products.map((product) => (
                      <div key={product.id} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-slate-400"><Box size={24} /></div>
                        <div className="flex-1 space-y-3">
                          <input 
                            placeholder="Product Name" 
                            value={product.name}
                            onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                            className="w-full bg-transparent border-b border-slate-200 focus:border-primary outline-none font-bold text-slate-800"
                          />
                          <input 
                            placeholder="Short description..." 
                            value={product.description}
                            onChange={(e) => updateProduct(product.id, 'description', e.target.value)}
                            className="w-full bg-transparent border-b border-slate-200 focus:border-primary outline-none text-sm text-slate-500"
                          />
                        </div>
                        <button onClick={() => removeProduct(product.id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Manager */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 text-primary rounded-xl"><Monitor size={22} /></div>
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {techStack.map(t => (
                      <div key={t} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 group hover:border-primary transition-all">
                        {t} 
                        <button onClick={() => removeTech(t)} className="text-slate-300 hover:text-red-500">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <div className="relative group">
                      <Plus className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-primary" size={14} />
                      <input 
                        placeholder="Add Tool..."
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            addTech(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                        className="pl-9 pr-4 py-2.5 bg-white border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-400 focus:border-primary focus:text-primary outline-none transition-all w-32 focus:w-48"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Portal Preview */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Live Portal View Preview</p>
                <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden animate-fade-in h-fit sticky top-32">
                  <div className="h-24 bg-slate-900 relative">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
                  </div>
                  <div className="p-10 -mt-16 relative">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-20 h-20 bg-white rounded-[1.5rem] overflow-hidden flex items-center justify-center font-black text-3xl shadow-xl ring-8 ring-white">
                        <img src={companyInfo.logo} alt="Logo" className="w-full h-full object-cover" />
                      </div>
                      <span className="bg-slate-50 text-slate-500 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-slate-200 mt-16">
                        {companyInfo.stage}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-1">{companyInfo.name}</h3>
                    <p className="text-xs font-bold text-primary mb-6 uppercase tracking-wider">{companyInfo.industry}</p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 italic font-medium">
                      "{companyInfo.pitch}"
                    </p>

                    <div className="space-y-8 pt-8 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {techStack.slice(0, 3).map(t => (
                          <span key={t} className="text-[9px] font-black bg-slate-50 text-slate-400 px-3 py-1.5 rounded-lg uppercase tracking-tighter">
                            {t}
                          </span>
                        ))}
                        {techStack.length > 3 && <span className="text-[9px] font-black text-slate-300 px-2 py-1.5">+ {techStack.length - 3}</span>}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={founders[0]?.avatar} className="w-10 h-10 rounded-xl border-2 border-slate-50" alt="Lead" />
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">Founder</p>
                            <p className="text-xs font-bold text-slate-800">{founders[0]?.name}</p>
                          </div>
                        </div>
                        <Link to="/company/1" className="flex items-center gap-1 text-[10px] font-black text-primary uppercase tracking-widest hover:underline">
                          Full Bio <ExternalLink size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: ECOSYSTEM DIRECTORY */}
          {activeTab === 'directory' && (
            <div className="animate-fade-in space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Innovation Hub</h2>
                  <p className="text-sm text-slate-500">Search through {directoryCompanies.length} active startups.</p>
                </div>
                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="Search startups, sectors, or tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:border-primary outline-none shadow-inner transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {directoryCompanies.map((company) => (
                  <div key={company.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100 group-hover:ring-4 group-hover:ring-primary/10 transition-all shadow-md">
                        <img src={company.logo} alt="Logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex gap-2">
                         <a href="#" className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-primary transition-colors border border-slate-100"><Globe size={18} /></a>
                         <a href="#" className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-primary transition-colors border border-slate-100"><Mail size={18} /></a>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                      <p className="text-[10px] font-black text-primary mb-4 uppercase tracking-widest">{company.industry}</p>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">"{company.pitch}"</p>
                    </div>
                    <button className="w-full py-3.5 bg-slate-50 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
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
