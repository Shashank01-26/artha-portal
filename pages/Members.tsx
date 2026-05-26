import React, { useState } from 'react';
import { Building2, ExternalLink, Rocket, Globe, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  { 
    id: 1, 
    name: 'TechFlow', 
    founder: 'Aarav Patil',
    industry: 'SaaS / Logistics', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=TechFlow&backgroundColor=0539e3', 
    pitch: 'Next-gen logistics automation for Tier-2 Indian cities using AI-driven routing.',
    stage: 'Seed',
    tech: ['React', 'Python', 'AWS']
  },
  { 
    id: 2, 
    name: 'GreenCode', 
    founder: 'Sana Khan',
    industry: 'Cleantech / IoT', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=GreenCode&backgroundColor=10b981', 
    pitch: 'Smart waste management systems that reduce carbon footprint for metropolitan cities.',
    stage: 'Series A',
    tech: ['IoT', 'Node.js', 'TensorFlow']
  },
  { 
    id: 3, 
    name: 'DataMinds', 
    founder: 'Rohan Deshmukh',
    industry: 'Big Data / Analytics', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=DataMinds&backgroundColor=6366f1', 
    pitch: 'Processing 1B+ events daily to provide real-time behavioral insights for E-commerce.',
    stage: 'Growth',
    tech: ['Spark', 'Scala', 'K8s']
  },
  { 
    id: 4, 
    name: 'PuneRobotics', 
    founder: 'Priya Sharma',
    industry: 'Hardware / Drones', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=PuneRobotics&backgroundColor=f59e0b', 
    pitch: 'Precision autonomous drones for high-altitude medical supply delivery.',
    stage: 'Pre-Seed',
    tech: ['C++', 'ROS', 'Embedded']
  },
  { 
    id: 5, 
    name: 'PayEasy', 
    founder: 'Vikram Singh',
    industry: 'Fintech / Payments', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=PayEasy&backgroundColor=ec4899', 
    pitch: 'Simplifying cross-border payments for small Indian exporters.',
    stage: 'Bootstrapped',
    tech: ['Go', 'Postgres', 'React Native']
  },
  { 
    id: 6, 
    name: 'EdVantage', 
    founder: 'Ananya Gupta',
    industry: 'EdTech / Mobile', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=EdVantage&backgroundColor=3b82f6', 
    pitch: 'Interactive learning platforms for vocational training in rural Maharashtra.',
    stage: 'Series B',
    tech: ['Flutter', 'Firebase', 'GraphQL']
  }
];

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companies.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
            Member Showcase
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">
            Pune's Tech <br/><span className="text-primary">Ecosystem Portal</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Discover the most innovative startups building the future of technology from the heart of Maharashtra.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-16 max-w-4xl mx-auto">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by company, tech stack, or industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary outline-none shadow-sm transition-all font-medium"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold hover:border-primary hover:text-primary transition-all shadow-sm">
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
              {/* Branding Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <Link to={`/company/${company.id}`} className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-slate-100 shadow-md">
                    <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                  </Link>
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-200">
                    {company.stage}
                  </span>
                </div>

                <div className="flex-grow mb-8">
                  <Link to={`/company/${company.id}`} className="inline-block">
                    <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                  </Link>
                  <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">{company.industry}</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-3">
                    "{company.pitch}"
                  </p>
                </div>

                <div className="space-y-6 pt-6 border-t border-slate-50">
                  <div className="flex flex-wrap gap-2">
                    {company.tech.map(t => (
                      <span key={t} className="text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded-md uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${company.founder}`} className="w-8 h-8 rounded-full bg-slate-100" alt={company.founder} />
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">Founder</p>
                        <p className="text-xs font-bold text-slate-800">{company.founder}</p>
                      </div>
                    </div>
                    <Link to={`/company/${company.id}`} className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-all">
                      View Profile <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 animate-fade-in">
            <Building2 className="mx-auto text-slate-200 mb-4" size={64} />
            <p className="text-slate-500 font-bold text-xl">No startups matching your criteria.</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-primary font-bold hover:underline">Clear search filters</button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 md:mt-24 text-center bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <Rocket className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-2xl md:text-3xl font-black mb-4">Want to Showcase Your Startup?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto font-medium">
              Join Pune's premier entrepreneur association and get your company in front of investors, partners, and the tech community.
            </p>
            <Link to="/join" className="inline-flex items-center gap-2 bg-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
              Apply for Membership <Globe size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;