
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Info, Rocket, Users, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: "Membership",
      icon: <Users size={20} />,
      questions: [
        {
          q: "Who is eligible to join Artha?",
          a: "Artha is primarily for tech founders, co-founders, and C-level executives of startups based in or operating out of Pune. We also welcome freelancers and individual tech professionals in our Individual tier."
        },
        {
          q: "What is the membership fee?",
          a: "Membership fees are tiered. Individual memberships start at ₹5,000/year, while Corporate tiers vary based on company size and required visibility. Detailed pricing is provided after initial application screening."
        },
        {
          q: "How long does the application process take?",
          a: "Once you submit the 'Join Us' form, our screening committee usually responds within 5-7 business days. We ensure all members meet our community standards to maintain a high-quality network."
        }
      ]
    },
    {
      category: "Events & Programs",
      icon: <Rocket size={20} />,
      questions: [
        {
          q: "Are Artha events open to non-members?",
          a: "Most flagship events like the Pune Tech Summit have public tickets available. However, monthly mixers, masterclasses, and peer learning circles are strictly member-only."
        },
        {
          q: "How can I pitch my startup to Artha Angels?",
          a: "Members can apply for the 'Capital + Context' program quarterly. Selected startups get the opportunity to pitch directly to our pool of seasoned angel investors who have successfully built tech companies in Pune."
        }
      ]
    },
    {
      category: "General",
      icon: <Info size={20} />,
      questions: [
        {
          q: "Where is the Artha office located?",
          a: "Our administrative hub is located in Viman Nagar, Pune. However, we operate as a 'city-wide campus,' holding events across various tech parks and venues in Baner, Hinjewadi, and Magarpatta."
        },
        {
          q: "Is Artha affiliated with any government body?",
          a: "Artha is an independent non-profit association. However, we actively collaborate with the Maharashtra State Innovation Society and central bodies to provide policy feedback and secure benefits for our members."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 mb-10">Everything you need to know about Pune's largest tech entrepreneur community.</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-12">
          {filteredFaqs.map((category, catIdx) => (
            <div key={catIdx} className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6 text-slate-900">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const globalIdx = catIdx * 100 + qIdx; // Unique key for indexing
                  const isOpen = openIndex === globalIdx;
                  
                  return (
                    <div 
                      key={qIdx} 
                      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-primary/5' : 'hover:border-primary/30'}`}
                    >
                      <button 
                        onClick={() => toggleFaq(globalIdx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <span className={`font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="text-primary shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-slate-400 shrink-0" size={20} />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-fade-in">
                          <p className="pt-2 border-t border-gray-50">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <ShieldAlert className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500 font-medium">No results found for "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
           <div className="relative z-10">
              <MessageCircle className="mx-auto text-primary mb-6" size={48} />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Can't find the answer you're looking for? Please reach out to our support team and we'll be happy to help.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
                Contact Support
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
