
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Fix: Added missing Users and Globe icons to the lucide-react import
import { User, Building2, Briefcase, Send, CheckCircle2, Mail, Smartphone, Lock, Plus, Trash2, ShieldCheck, Users, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const JoinUs: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Account details
    accountName: '',
    accountEmail: '',
    accountMobile: '',
    // Dynamic Founders list
    founders: [{ id: Date.now(), name: '', email: '', role: 'CEO' }],
    // Company details
    companyName: '',
    industry: '',
    incorporationNumber: '',
    gstNumber: '',
    websiteUrl: '',
    address: '',
    productDetails: '',
    // Security
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFounderChange = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      founders: prev.founders.map(f => f.id === id ? { ...f, [field]: value } : f)
    }));
  };

  const addFounder = () => {
    setFormData(prev => ({
      ...prev,
      founders: [...prev.founders, { id: Date.now(), name: '', email: '', role: 'Founder' }]
    }));
  };

  const removeFounder = (id: number) => {
    if (formData.founders.length > 1) {
      setFormData(prev => ({
        ...prev,
        founders: prev.founders.filter(f => f.id !== id)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log the user in with the account details
    login(formData.accountEmail, formData.accountName);
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Redirect after a brief success message
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-slate-50 flex items-center justify-center">
        <div className="max-w-md w-full p-12 bg-white rounded-3xl shadow-2xl text-center animate-fade-in border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to Artha!</h1>
          <p className="text-slate-600 mb-2">Your onboarding application has been submitted.</p>
          <p className="text-sm font-medium text-primary">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Startup Onboarding</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Become a part of Pune's premier tech ecosystem. Fill out the details below to apply for membership.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-primary px-10 py-8">
            <h2 className="text-white text-2xl font-black flex items-center gap-3">
               Application Portal
            </h2>
            <p className="text-blue-100 text-sm mt-1 font-medium opacity-80">Please provide accurate details for the Artha verification process.</p>
          </div>
          
          <form className="p-8 md:p-12 space-y-16" onSubmit={handleSubmit}>
            
            {/* SECTION: Create Account */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-primary shadow-sm border border-blue-100">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Create Account</h3>
                    <p className="text-xs text-slate-500 font-medium">Used for platform authentication and secure communications.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Full Administrative Name *</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="text" 
                        name="accountName"
                        required 
                        value={formData.accountName}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-bold text-slate-800" 
                        placeholder="e.g. Aarav Patil" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Primary Login Mail ID *</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="email" 
                        name="accountEmail"
                        required 
                        value={formData.accountEmail}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-bold text-slate-800" 
                        placeholder="personal@email.com" 
                      />
                    </div>
                  </div>
                   <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Personal Mobile Number *</label>
                    <div className="relative">
                      <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="tel" 
                        name="accountMobile"
                        required 
                        value={formData.accountMobile}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-bold text-slate-800" 
                        placeholder="+91 98XXX XXXXX" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: Founders Details */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 shadow-sm border border-purple-100">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Founder Details</h3>
                    <p className="text-xs text-slate-500 font-medium">As they will appear on the public Ecosystem Portal.</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={addFounder}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-100 transition-all border border-purple-100"
                >
                  <Plus size={14} /> Add Founder
                </button>
              </div>

              <div className="space-y-6">
                {formData.founders.map((founder, index) => (
                  <div key={founder.id} className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group animate-fade-in">
                    {formData.founders.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removeFounder(founder.id)}
                        className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                    <h4 className="font-black text-slate-400 mb-6 text-[10px] uppercase tracking-widest flex items-center gap-2">
                       <span className="w-6 h-6 rounded-lg bg-white flex items-center justify-center border border-slate-200 text-primary">#{index + 1}</span>
                       Founder Profile
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Public Display Name *</label>
                        <input 
                          type="text" 
                          required 
                          value={founder.name}
                          onChange={(e) => handleFounderChange(founder.id, 'name', e.target.value)}
                          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all bg-white font-bold text-slate-800" 
                          placeholder="e.g. Sana Khan" 
                        />
                      </div>
                       <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Designation / Role *</label>
                        <select 
                          value={founder.role}
                          onChange={(e) => handleFounderChange(founder.id, 'role', e.target.value)}
                          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all bg-white font-bold text-slate-800"
                        >
                            <option>CEO</option>
                            <option>CTO</option>
                            <option>Founder</option>
                            <option>Co-Founder</option>
                            <option>Chief Product Officer</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Professional Email (Public) *</label>
                        <input 
                          type="email" 
                          required 
                          value={founder.email}
                          onChange={(e) => handleFounderChange(founder.id, 'email', e.target.value)}
                          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all bg-white font-bold text-slate-800" 
                          placeholder="founder@startup.io" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: Company Details */}
             <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="bg-blue-50 p-3 rounded-2xl text-primary shadow-sm border border-blue-100">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Company Identity</h3>
                  <p className="text-xs text-slate-500 font-medium">Core business information and registration details.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Registered Entity Name *</label>
                   <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                    placeholder="e.g. PuneTech Solutions Pvt Ltd" 
                   />
                </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">CIN / Incorporation Number *</label>
                   <div className="relative">
                      <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="text" 
                        name="incorporationNumber"
                        required
                        value={formData.incorporationNumber}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                        placeholder="U72200PN2023..." 
                      />
                   </div>
                </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">GST Identification Number (GSTIN) *</label>
                   <input 
                    type="text" 
                    name="gstNumber"
                    required
                    value={formData.gstNumber}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                    placeholder="27AAAAA0000A1Z5" 
                   />
                </div>
                 <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Website URL</label>
                   <div className="relative">
                      <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="url" 
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-bold text-slate-800" 
                        placeholder="https://www.startup.io" 
                      />
                   </div>
                </div>
                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Registered Corporate Address *</label>
                   <textarea 
                    name="address"
                    rows={3} 
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all font-medium text-slate-700 resize-none" 
                    placeholder="Provide full official address including Pincode"
                   ></textarea>
                </div>
              </div>
            </div>

             {/* SECTION: Business Profile */}
             <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="bg-orange-50 p-3 rounded-2xl text-orange-600 shadow-sm border border-orange-100">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Venture Narrative</h3>
                  <p className="text-xs text-slate-500 font-medium">Industry domain and core product offering.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Primary Industry Vertical *</label>
                   <select 
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary outline-none transition-all bg-white font-bold text-slate-800"
                   >
                        <option value="">Select Vertical</option>
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
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Core Product Narrative *</label>
                   <p className="text-[10px] text-slate-400 font-medium px-1 mb-3 uppercase tracking-tighter">Explain what you are building and for whom.</p>
                   <textarea 
                    name="productDetails"
                    rows={5} 
                    required
                    value={formData.productDetails}
                    onChange={handleChange}
                    className="w-full px-5 py-5 rounded-3xl border border-slate-200 focus:border-primary outline-none transition-all font-medium text-slate-700 resize-none leading-relaxed" 
                    placeholder="We are revolutionizing..." 
                   ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100">
               <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white text-lg font-black py-5 rounded-[1.5rem] hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-3 group disabled:bg-slate-300 disabled:shadow-none uppercase tracking-widest"
               >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Submit Application
                    <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              <div className="mt-8 text-center space-y-2">
                <p className="text-slate-400 text-xs font-medium">
                  By submitting, you agree to Artha's <Link to="/code-of-conduct" className="text-primary font-bold hover:underline">Code of Conduct</Link> and <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
                </p>
                <p className="text-slate-300 text-[10px] font-bold uppercase tracking-tighter">Verification usually takes 3-5 business days.</p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
