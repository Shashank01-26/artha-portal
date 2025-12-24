import React from 'react';
import { Target, Lightbulb, Heart, Shield, Users, Rocket, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-50">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"></div>
         
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Our North Star
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mt-2 mb-8 tracking-tight leading-tight">
              Empowering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Builders of Tomorrow
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We exist to transform Pune into a global epicenter of technology and innovation, one founder at a time.
            </p>
         </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Card */}
                <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                        <Target size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed flex-grow">
                        To create a robust, inclusive, and dynamic ecosystem for tech entrepreneurs in Pune that facilitates knowledge sharing, provides access to global opportunities, and advocates for policy frameworks that support startup growth.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden group flex flex-col h-full">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            To position Pune as a top-tier global innovation hub where technology entrepreneurs can thrive, scale their ventures, and contribute significantly to the digital economy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Strategic Pillars</h2>
                <p className="text-xl text-slate-500">How we translate our vision into reality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Community First</h3>
                    <p className="text-slate-600 leading-relaxed">Building a dense network of high-trust relationships between founders, avoiding transactional interactions.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Rocket size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Global Access</h3>
                    <p className="text-slate-600 leading-relaxed">Bridging the gap between Pune and global markets like Silicon Valley, London, and Singapore.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Shield size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Policy Advocacy</h3>
                    <p className="text-slate-600 leading-relaxed">Working closely with government bodies to ease the cost and complexity of doing business.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Our DNA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { title: "Integrity", desc: "We do the right thing, even when no one is watching.", color: "bg-red-50 text-red-600" },
                { title: "Innovation", desc: "We challenge the status quo and embrace change.", color: "bg-orange-50 text-orange-600" },
                { title: "Collaboration", desc: "We believe a rising tide lifts all boats.", color: "bg-blue-50 text-blue-600" },
                { title: "Excellence", desc: "We set the highest standards for ourselves.", color: "bg-teal-50 text-teal-600" }
             ].map((val, i) => (
                 <div key={i} className={`p-6 rounded-2xl ${val.color} bg-opacity-50 border border-transparent hover:border-slate-200 transition-all`}>
                     <h3 className="font-bold text-lg mb-2 text-slate-900">{val.title}</h3>
                     <p className="text-sm text-slate-700">{val.desc}</p>
                 </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;