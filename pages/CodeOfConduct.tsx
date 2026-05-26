import React from 'react';
import { ShieldCheck, Scale, Heart, AlertTriangle, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeOfConduct: React.FC = () => {
  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Community Standards
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Code of Conduct</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Establishing a culture of respect, collaboration, and professional excellence within Pune's tech ecosystem.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-12 space-y-8 md:space-y-12 text-slate-600 leading-relaxed">
            
            {/* Our Pledge */}
            <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <Heart className="text-primary shrink-0" size={24} />
                Our Pledge
              </h2>
              <p className="text-slate-700">
                In the interest of fostering an open and welcoming environment, we as members and organizers pledge to make participation in our association and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
              </p>
            </div>

            {/* Expected Behavior */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <ShieldCheck className="text-primary shrink-0" size={24} />
                Expected Behavior
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Participating in an authentic and active way.</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Exercising consideration and respect in your speech and actions.</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Attempting collaboration before conflict.</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Refraining from demeaning, discriminatory, or harassing behavior.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Unacceptable Behavior */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <AlertTriangle className="text-red-500 shrink-0" size={24} />
                Unacceptable Behavior
              </h2>
              <p className="mb-4">The following behaviors are considered harassment and are unacceptable within our community:</p>
              <div className="space-y-3">
                {[
                  "Violence, threats of violence, or violent language directed against another person.",
                  "Sexist, racist, homophobic, transphobic, ableist or otherwise discriminatory jokes and language.",
                  "Posting or displaying sexually explicit or violent material.",
                  "Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability.",
                  "Inappropriate physical contact and unwelcome sexual attention.",
                  "Deliberate intimidation, stalking or following (online or in person)."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Reporting */}
            <div className="group">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <MessageCircle className="text-primary shrink-0" size={24} />
                Reporting Guidelines
              </h2>
              <p className="mb-6">
                If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a Artha organizer as soon as possible.
              </p>
              <div className="bg-slate-900 text-white p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Info className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Reporting Email</p>
                    <p className="text-slate-400 text-sm">conduct@artha.co</p>
                  </div>
                </div>
                <Link to="/contact" className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors text-sm">
                  Contact Organizers
                </Link>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Enforcement */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <Scale className="text-primary shrink-0" size={24} />
                Enforcement
              </h2>
              <p>
                Organizers will follow these Community Guidelines in spirit and in letter. If a participant engages in harassing behavior, organizers may take any action they deem appropriate, including warning the offender or expulsion from the association with no refund.
              </p>
            </div>

          </div>
          
          <div className="bg-slate-50 p-8 border-t border-gray-100 text-center">
             <p className="text-slate-500 text-sm">Thank you for helping us keep the Pune tech community healthy and vibrant.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;