import React from 'react';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  const leaders = [
    { name: 'Dr. Rajesh Kumar', role: 'President', img: 'https://picsum.photos/seed/lead1/400/400', bio: 'Former VP at Infosys, now Angel Investor. 20+ years in tech.' },
    { name: 'Anita Desai', role: 'Vice President', img: 'https://picsum.photos/seed/lead2/400/400', bio: 'Founder of GreenCode. Champion for women in tech.' },
    { name: 'Sanket Patil', role: 'Secretary', img: 'https://picsum.photos/seed/lead3/400/400', bio: 'CTO at DataMinds. Community builder and open source advocate.' },
    { name: 'Meera Iyer', role: 'Treasurer', img: 'https://picsum.photos/seed/lead4/400/400', bio: 'CFO turned Fintech Founder. Expert in startup compliance.' },
  ];

  const advisors = [
    { name: 'Vikram Sethi', role: 'Strategic Advisor', company: 'Global Ventures' },
    { name: 'Dr. Alok Sharma', role: 'Policy Mentor', company: 'Innovation Council' },
    { name: 'Priya Godbole', role: 'Growth Advisor', company: 'Unicorn Systems' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-6">
             Since 2015
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Building the Backbone of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Pune's Tech Economy
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From a small meetup in Koregaon Park to a city-wide movement, we are the voice of Pune's technology ecosystem.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/pune_meetup/800/600" 
                  alt="Early meetup" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium">The first TEAP gathering, 2015</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Origin Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  It started with ten founders, a lot of coffee, and a shared frustration: 
                  <span className="italic text-slate-800 font-medium"> "Why do we have to move to Bangalore to build big things?"</span>
                </p>
                <p>
                  In 2015, Pune had talent, it had deep engineering roots from the automotive era, but it lacked a cohesive startup community. Founders were building in silos.
                </p>
                <p>
                  TEAP was born to break those silos. We started by organizing weekly knowledge-sharing sessions. Today, we represent over 500 companies, ranging from bootstrapped SaaS tools to Series-C funded unicorns. We actively work with government bodies to shape policy and with universities to upgrade curriculum.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-lg font-bold">
                    <span className="text-2xl">500+</span> Companies Represented
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Leadership Council</h2>
            <p className="text-xl text-slate-500">Volunteers elected by the community to serve the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <button className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-50 transition-colors">
                        <Linkedin size={20} />
                     </button>
                     <button className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-50 transition-colors">
                        <Twitter size={20} />
                     </button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wide mb-3">{leader.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Board of Advisors</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((advisor, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl bg-slate-50">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 font-bold border border-gray-200 mb-3 shadow-sm">
                          {advisor.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-slate-900">{advisor.name}</h3>
                      <p className="text-xs text-primary font-bold uppercase mb-1">{advisor.role}</p>
                      <p className="text-sm text-slate-500">{advisor.company}</p>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to help shape the ecosystem?</h2>
          <p className="text-lg text-slate-400 mb-8">
            We are always looking for volunteers and committee members. If you have the passion to give back, join us.
          </p>
          <a href="/#/join" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all">
            Become a Member <ArrowUpRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;