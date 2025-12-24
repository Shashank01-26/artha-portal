
import React from 'react';
// Fix: Ensure correct import of Link from react-router-dom
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Upcoming Events</h1>

        <div className="grid gap-8">
          {/* Featured Event */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl group">
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/seed/eventmain/1200/600" 
                alt="Background" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>
            <div className="relative p-8 md:p-12 lg:w-2/3">
              <span className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wide mb-4">Featured</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pune Tech Summit 2024</h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                The biggest gathering of tech minds in Maharashtra. 3 days of keynotes, workshops, and networking with industry titans.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-8 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2"><Calendar className="text-primary" size={20} /> Oct 15-17, 2024</div>
                <div className="flex items-center gap-2"><Clock className="text-primary" size={20} /> 9:00 AM - 6:00 PM</div>
                <div className="flex items-center gap-2"><MapPin className="text-primary" size={20} /> Hyatt Regency, Pune</div>
              </div>
              <Link to="/events/1" className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Register Now
              </Link>
            </div>
          </div>

          {/* Regular Events Grid */}
          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">November Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/ev${i}/400/300`} 
                    alt="Event" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                    In-Person
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-bold mb-2">Nov {10 + i}, 2024</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Startup Fundraising Masterclass</h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    Learn the secrets of raising capital from top VCs in the Indian ecosystem.
                  </p>
                  <Link to={`/events/${i + 10}`} className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                    View Details <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
