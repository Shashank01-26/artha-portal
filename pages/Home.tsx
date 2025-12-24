
import React from 'react';
// Fix: Ensure correct import of Link from react-router-dom
import { Link } from 'react-router-dom';
import { ArrowRight, Users, IndianRupee, Network, Award, Code2, Rocket, HeartHandshake, TrendingUp, Globe2, Check, User, Building2, GraduationCap, Wallet, Cpu } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Pune's Premier Tech Community
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Igniting the Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Tech Entrepreneurship
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the most influential network of founders, innovators, and visionaries in Pune. TEAP connects you with the resources you need to scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/join" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50">
                Become a Member
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/events" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-gray-50 transition-all">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Stats Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission Content */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              The Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Innovation Thrives in Community.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded on the belief that founders shouldn't build in isolation, TEAP serves as the catalyst for the local startup economy. We enable local entrepreneurs to think globally while building locally.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 text-center hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-slate-600 font-medium">Professionals</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 text-center hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <IndianRupee size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">₹100Cr+</h3>
              <p className="text-slate-600 font-medium">Capital Deployed</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 text-center hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Network size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">1</h3>
              <p className="text-slate-600 font-medium">Unified Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Modern UI */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Ecosystem</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400">
              Explaining who belongs here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: The Veterans */}
            <div className="relative group p-0.5 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800 hover:from-blue-500 hover:to-blue-400 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#0f172a] h-full rounded-[23px] p-8 relative overflow-hidden">
                 {/* Inner Glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-blue-400 group-hover:text-white transition-colors" size={28} />
                  </div>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold tracking-wider uppercase mb-4 border border-blue-500/20">
                    Guided by Giants
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">The Veterans</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    Industry stalwarts who have navigated market cycles and built legacy enterprises. They provide steady hands and strategic foresight to the next generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: The Members */}
            <div className="relative group p-0.5 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800 hover:from-purple-500 hover:to-purple-400 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#0f172a] h-full rounded-[23px] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="text-purple-400 group-hover:text-white transition-colors" size={28} />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold tracking-wider uppercase mb-4 border border-purple-500/20">
                    The Builders
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors">The Members</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    A community of CEOs, CTOs, and Product Visionaries driving the digital economy. From early-stage founders to Series B leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Emerging Stars */}
            <div className="relative group p-0.5 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800 hover:from-orange-500 hover:to-orange-400 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#0f172a] h-full rounded-[23px] p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/40 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="text-orange-400 group-hover:text-white transition-colors" size={28} />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 text-xs font-bold tracking-wider uppercase mb-4 border border-orange-500/20">
                    The Disruptors
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors">Emerging Stars</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    Highlighting the startups putting Pune on the global map. We shine a light on companies with exceptional promise and grit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAP Angels Section (Capital + Context) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decor elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Feature Spotlight: TEAP Angels
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Capital + Context
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium">
              Money is a commodity. <span className="text-slate-900 font-bold">Experience is an asset.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-blue-500/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Founder-to-Founder Empathy</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Investors who have been in your shoes and built huge businesses. We understand the lonely journey of the founder.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-blue-500/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Skin in the Game</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Personal investment in your success, not just managing a fund. When you win, we win.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-blue-500/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Globe2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Context, Global Reach</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Deep understanding of the Pune market nuances combined with access to global distribution networks.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/contact" className="inline-flex items-center text-primary font-bold text-lg hover:underline group">
               Pitch your startup <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Membership Tiers</h2>
            <p className="text-xl text-slate-600">
              Choose the plan that fits your growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option A: Individual */}
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                <User size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Individual Member</h3>
              <p className="text-slate-500 font-medium mb-8">For Founders, Freelancers, & Tech Professionals</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Network with the top 1% of Pune tech talent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Access to exclusive peer learning circles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Entry to monthly masterclasses.</span>
                </li>
              </ul>
              
              <Link to="/join" className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold text-center hover:bg-primary hover:text-white transition-colors">
                Join as Individual
              </Link>
            </div>

            {/* Option B: Corporate */}
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl flex flex-col relative overflow-hidden text-white transform md:-translate-y-4 border border-slate-800">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-slate-700">
                  <Building2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Corporate Member</h3>
                  <p className="text-slate-400 font-medium mb-8">For Startups & Enterprises</p>
                  
                  <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3">
                      <Check className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Brand visibility via the "Emerging Stars" program.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Bulk access to events for your team.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">Policy advocacy and hiring support.</span>
                  </li>
                  </ul>
                  
                  <Link to="/join" className="w-full py-4 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
                  Join as Corporate
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pune? Section */}
      <section className="py-24 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              The Ecosystem Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Build in Pune?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              We are sitting on a <span className="text-primary font-bold">powder keg</span> of talent and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Talent Pipeline</h3>
              <p className="text-slate-600 leading-relaxed">
                Home to top engineering institutions, offering a dense concentration of technical talent ready to build the next unicorn.
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Cost Advantage</h3>
              <p className="text-slate-600 leading-relaxed">
                Extend your runway. Pune offers a high quality of life with significantly lower operational costs compared to Bangalore or Mumbai.
              </p>
            </div>

            {/* Point 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Cpu size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Deep Tech Heritage</h3>
              <p className="text-slate-600 leading-relaxed">
                From automotive giants to IT services, Pune has a DNA of engineering excellence that is now evolving into product innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96 md:h-[500px]">
            <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
              <img 
                src="https://picsum.photos/seed/tech1/800/800" 
                alt="Conference" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Annual Tech Summit</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://picsum.photos/seed/tech2/400/400" 
                alt="Networking" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-bold">Networking Mixers</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://picsum.photos/seed/tech3/400/400" 
                alt="Workshop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-bold">Workshops</h3>
              </div>
            </div>
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl">
              <img 
                src="https://picsum.photos/seed/tech4/800/400" 
                alt="Hackathon" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Pune Hackathon 2024</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Startup?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Connect with the right mentors, investors, and peers at TEAP. Your journey to the next level starts here.
          </p>
          <Link to="/join" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
            Join TEAP Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
