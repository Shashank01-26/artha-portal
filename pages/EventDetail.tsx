
import React, { useEffect } from 'react';
// Fix: Ensure correct imports of useParams and Link from react-router-dom for dynamic routing
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, CheckCircle, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Image Section */}
      <div className="relative h-[240px] md:h-[400px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/eventmain/1600/800"
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/30"></div>
        
        {/* Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-20">
             <Link to="/events" className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/30 transition-colors font-medium text-sm">
                <ArrowLeft size={16} /> Back to Events
             </Link>
        </div>

        {/* Hero Content text (Desktop only, mobile moves to body) */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-10 hidden md:block">
            <div className="max-w-7xl mx-auto">
                 <span className="inline-block bg-primary text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide mb-4 shadow-lg shadow-primary/25">
                  Flagship Conference
                </span>
                <h1 className="text-5xl font-bold text-white mb-2 shadow-sm">
                  Pune Tech Summit 2024
                </h1>
                <p className="text-blue-100 text-lg">Scaling Indian Startups for the World</p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-20 -mt-10 md:mt-8">
        {/* Mobile Title (Visible only on small screens) */}
        <div className="md:hidden bg-white rounded-t-3xl p-6 -mt-16 relative z-20 border-b border-gray-100">
             <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              Conference
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Pune Tech Summit 2024</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3">
             <div className="bg-white rounded-b-3xl md:rounded-3xl shadow-sm border border-gray-100 p-5 md:p-10">
                
                {/* Meta Info Bar */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-10 text-slate-600 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Date</p>
                            <p className="font-semibold text-slate-900">Oct 15-17, 2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                            <Clock size={20} />
                        </div>
                         <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Time</p>
                            <p className="font-semibold text-slate-900">9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                            <MapPin size={20} />
                        </div>
                         <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
                            <p className="font-semibold text-slate-900">Hyatt Regency, Pune</p>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="prose prose-slate max-w-none mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Event</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Join over 2,000 tech leaders, founders, and investors for Pune's premier technology conference. The Pune Tech Summit 2024 is dedicated to exploring the future of AI, SaaS, and DeepTech in the Indian ecosystem.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Whether you are an early-stage founder looking for product-market fit or a scaling enterprise seeking global expansion, this summit offers actionable insights and unparalleled networking opportunities.
                    </p>
                </div>

                {/* Agenda */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Agenda Highlights</h3>
                    <div className="space-y-4">
                         <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-20 font-mono text-sm font-bold text-primary pt-1">09:00 AM</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Registration & Breakfast Networking</h4>
                                <p className="text-sm text-slate-500 mt-1">Start your day connecting with fellow delegates over coffee.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-20 font-mono text-sm font-bold text-primary pt-1">10:30 AM</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Keynote: The State of Indian Tech 2025</h4>
                                <p className="text-sm text-slate-500 mt-1">Insights on market trends, funding landscapes, and future predictions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-20 font-mono text-sm font-bold text-primary pt-1">02:00 PM</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Panel: Scaling from 0 to 100 Cr ARR</h4>
                                <p className="text-sm text-slate-500 mt-1">Real stories from founders who have built massive revenue engines.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Speakers */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Featured Speakers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {[
                            { name: 'Dr. Sarah Johnson', role: 'CTO, Global AI Corp', img: 'https://picsum.photos/seed/spk1/100/100' },
                            { name: 'Rajiv Mehta', role: 'Partner, Venture India', img: 'https://picsum.photos/seed/spk2/100/100' },
                            { name: 'Priya Desai', role: 'Founder, EcoSystems', img: 'https://picsum.photos/seed/spk3/100/100' },
                            { name: 'Arun Kumar', role: 'VP Engineering, TechGiant', img: 'https://picsum.photos/seed/spk4/100/100' }
                        ].map((speaker, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all group">
                                <img src={speaker.img} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-primary transition-colors" alt={speaker.name} />
                                <div>
                                    <h4 className="font-bold text-slate-900">{speaker.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{speaker.role}</p>
                                    <div className="flex gap-2 text-slate-400">
                                        <Linkedin size={14} className="hover:text-primary cursor-pointer" />
                                        <Twitter size={14} className="hover:text-primary cursor-pointer" />
                                    </div>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          {/* Sidebar / Booking Column */}
          <div className="lg:w-1/3">
             <div className=" sticky top-24 space-y-6">
                
                {/* Ticket Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    
                    <div className="mb-6">
                        <span className="text-sm text-slate-500 font-bold uppercase tracking-wide">Standard Pass</span>
                        <div className="flex items-end gap-2 mt-2">
                            <span className="text-5xl font-extrabold text-slate-900">₹2,499</span>
                            <span className="text-lg text-slate-400 mb-1 line-through font-medium">₹4,999</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                            <CheckCircle size={16} /> 50% Early Bird Discount
                        </div>
                    </div>

                    <ul className="space-y-3 mb-8 text-sm text-slate-600">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                            <span>Access to all keynote sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                            <span>Networking lunch & coffee breaks</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                            <span>Event merchandise kit</span>
                        </li>
                    </ul>

                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 mb-4 transform active:scale-95">
                        Register Now
                    </button>
                     <button className="w-full bg-white text-slate-700 font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                        <Share2 size={18} /> Share Event
                    </button>
                </div>

                {/* Map Card */}
                <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
                    <div className="h-48 rounded-2xl bg-slate-100 overflow-hidden relative">
                         <img src="https://picsum.photos/seed/map/600/400" className="w-full h-full object-cover opacity-80" alt="Map Location" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-3 rounded-full shadow-lg text-primary animate-bounce">
                                <MapPin size={24} />
                            </div>
                         </div>
                    </div>
                    <div className="p-4">
                        <h4 className="font-bold text-slate-900 mb-1">Hyatt Regency</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Weikfield IT Park, Pune Nagar Road, Pune, Maharashtra 411014
                        </p>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="block mt-4 text-center text-primary font-bold text-sm hover:underline">
                            Get Directions
                        </a>
                    </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetail;
