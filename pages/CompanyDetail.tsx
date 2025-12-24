import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  Globe, 
  Linkedin, 
  Twitter, 
  ArrowLeft, 
  Mail, 
  Rocket, 
  Users, 
  Cpu, 
  ExternalLink,
  ShieldCheck,
  Calendar,
  MapPin,
  Github,
  Instagram,
  Facebook,
  Share2,
  Box,
  Layers,
  Zap
} from 'lucide-react';

const CompanyDetail: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data fetching based on ID - Enhanced with Product Showcase & Real Logo
  const companyData = {
    id: 1,
    name: 'TechFlow Solutions',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=TechFlow&backgroundColor=0539e3',
    industry: 'SaaS / Logistics',
    stage: 'Seed',
    location: 'Viman Nagar, Pune',
    founded: '2022',
    teamSize: '15-25',
    pitch: "Next-gen logistics automation for Tier-2 Indian cities using AI-driven routing.",
    mission: "Our mission is to empower regional logistics players with enterprise-grade intelligence. By optimizing fleet movements across 50+ Indian districts, we help local entrepreneurs reduce operational costs by up to 30% while minimizing carbon footprint.",
    techStack: ['React', 'Python', 'FastAPI', 'AWS Lambda', 'TensorFlow', 'PostgreSQL'],
    founders: [
      {
        name: 'Aarav Patil',
        role: 'Founder & CEO',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
        bio: 'Former Engineering Manager at a global logistics firm. Passionate about bringing tech to the grassroots of Bharat.',
        linkedin: 'https://linkedin.com',
        email: 'aarav@techflow.io'
      },
      {
        name: 'Siddharth Varma',
        role: 'Co-Founder & CTO',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth',
        bio: 'Systems architect with 12 years of experience in distributed computing and neural networks. Previously lead engineer at a Series C mobility startup.',
        linkedin: 'https://linkedin.com',
        email: 'sid@techflow.io'
      }
    ],
    products: [
      {
        name: 'RouteMaster AI',
        description: 'Dynamic route optimization engine that adapts to real-time traffic and weather conditions in Tier-2 cities.',
        icon: <Zap size={24} className="text-orange-500" />
      },
      {
        name: 'FleetVision Dashboard',
        description: 'Comprehensive monitoring tool for small fleet owners to track fuel efficiency and driver performance.',
        icon: <Monitor size={24} className="text-blue-500" />
      },
      {
        name: 'CargoSync Mobile',
        description: 'Lightweight application for field agents to manage deliveries even in low-connectivity zones.',
        icon: <Box size={24} className="text-green-500" />
      }
    ],
    website: 'https://techflow.io',
    socials: [
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={20} />, color: 'hover:bg-[#0077b5] hover:text-white', brandColor: 'text-[#0077b5]' },
      { name: 'Twitter', url: 'https://twitter.com', icon: <Twitter size={20} />, color: 'hover:bg-black hover:text-white', brandColor: 'text-black' },
      { name: 'GitHub', url: 'https://github.com', icon: <Github size={20} />, color: 'hover:bg-[#333] hover:text-white', brandColor: 'text-[#333]' },
      { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram size={20} />, color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white', brandColor: 'text-[#e1306c]' },
      { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook size={20} />, color: 'hover:bg-[#1877f2] hover:text-white', brandColor: 'text-[#1877f2]' }
    ]
  };

  // Helper component for the Monitor icon since it was missing from imports
  function Monitor(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>;
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Banner Decor */}
      <div className="h-48 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0539E3_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24 relative z-10">
        <Link to="/members" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-bold transition-colors">
          <ArrowLeft size={16} /> Back to Ecosystem Portal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
                <div className="w-24 h-24 bg-white rounded-[2rem] overflow-hidden flex items-center justify-center shadow-2xl ring-4 ring-slate-50">
                  <img src={companyData.logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">{companyData.name}</h1>
                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
                      {companyData.stage}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-slate-500">{companyData.industry}</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">The Vision</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                  "{companyData.pitch}"
                </p>
                
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed mb-12">
                  {companyData.mission}
                </p>

                {/* Product Showcase Gallery */}
                <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                  <Layers className="text-primary" size={24} /> Product Showcase
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {companyData.products.map((product, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="mb-4">{product.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{product.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                  <Cpu className="text-primary" size={24} /> Tech Ecosystem
                </h2>
                <div className="flex flex-wrap gap-3 mb-12">
                  {companyData.techStack.map(tech => (
                    <div key={tech} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Founders Section */}
              <div className="mt-16 pt-12 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Meet the Founders</h2>
                <div className="grid grid-cols-1 gap-8">
                  {companyData.founders.map((founder, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:shadow-md hover:bg-white">
                      <img src={founder.avatar} alt={founder.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-white shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-black text-slate-900 mb-1">{founder.name}</h3>
                            <p className="text-sm font-bold text-primary uppercase tracking-widest">{founder.role}</p>
                          </div>
                          <div className="flex gap-2">
                            <a href={founder.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-lg text-slate-400 hover:text-[#0077b5] border border-slate-200 shadow-sm transition-all" title="LinkedIn">
                              <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${founder.email}`} className="p-2 bg-white rounded-lg text-slate-400 hover:text-primary border border-slate-200 shadow-sm transition-all" title="Email">
                              <Mail size={18} />
                            </a>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic">
                          "{founder.bio}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-lg">
              <h3 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-tight">Vitals</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100"><Globe size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Website</p>
                    <a href={companyData.website} target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                      {companyData.name.toLowerCase().replace(' ', '')}.io <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100"><MapPin size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-sm font-bold text-slate-800">{companyData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100"><Calendar size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Founded</p>
                    <p className="text-sm font-bold text-slate-800">{companyData.founded}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100"><Users size={20} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Team Size</p>
                    <p className="text-sm font-bold text-slate-800">{companyData.teamSize} Experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-lg">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
                <Share2 size={20} className="text-primary" /> Social Presence
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {companyData.socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`flex items-center gap-4 p-4 rounded-2xl border border-slate-100 text-slate-500 font-bold transition-all duration-300 ${social.color}`}
                  >
                    <div className={social.brandColor}>
                      {social.icon}
                    </div>
                    <span className="text-sm">{social.name}</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] p-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
              <div className="relative z-10">
                <ShieldCheck className="mb-6 opacity-80" size={48} />
                <h3 className="text-xl font-bold mb-4">TEAP Verified</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed mb-8">
                  This brand identity has been verified by the Tech Entrepreneurs Association of Pune board as an authentic and contributing member of our ecosystem.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md">
                  Elite Status
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 text-center">
              <Rocket className="mx-auto text-primary mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Want a similar page?</h4>
              <p className="text-xs text-slate-500 mb-6">Join TEAP to showcase your brand to Pune's tech giants.</p>
              <Link to="/join" className="text-xs font-black text-primary uppercase tracking-widest hover:underline">Apply Today</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;