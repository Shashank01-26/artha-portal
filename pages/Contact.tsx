import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary text-white py-20 pb-32 mb-[-100px]">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let's Start a Conversation</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Whether you have a question about membership, events, or just want to say hello, we are here to help.
            </p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left Side: Contact Info (Dark) */}
            <div className="bg-slate-900 text-white p-10 lg:p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-8 text-white">Contact Information</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 text-lg">Visit Us</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Tech Park Plaza, Level 4<br/>
                                    Viman Nagar, Pune 411014<br/>
                                    Maharashtra, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                             <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 text-lg">Email</h3>
                                <p className="text-slate-400 text-sm">hello@artha.co</p>
                                <p className="text-slate-400 text-sm">partnerships@artha.co</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-4 group">
                             <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 text-lg">Call</h3>
                                <p className="text-slate-400 text-sm">+91 20 1234 5678</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center gap-3 mb-2 text-primary">
                             <Clock size={20} />
                             <span className="font-bold">Office Hours</span>
                        </div>
                        <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Form (White) */}
            <div className="p-10 lg:p-12 lg:w-3/5 bg-white">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white text-slate-600">
                                <option>General Inquiry</option>
                                <option>Membership Support</option>
                                <option>Event Partnership</option>
                                <option>Press & Media</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50 hover:bg-white resize-none" placeholder="Tell us how we can help..."></textarea>
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 group">
                        Send Message 
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;