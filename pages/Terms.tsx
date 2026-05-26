import React from 'react';
import { Shield, Scale, FileText, AlertCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before becoming a member of Artha.
            <br />
            <span className="text-sm text-slate-400">Last Updated: October 2024</span>
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-12 space-y-8 md:space-y-10 text-slate-600 leading-relaxed">
            
            {/* Section 1 */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <FileText className="text-primary shrink-0" size={24} />
                1. Membership Agreement
              </h2>
              <p className="mb-4">
                By applying for membership with the Artha Collective (Artha), you agree to abide by the organization's bylaws, code of conduct, and ethical standards. Membership is subject to approval by the screening committee.
              </p>
              <p>
                Artha reserves the right to revoke membership if a member is found engaging in activities detrimental to the community's interest or reputation.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <Shield className="text-primary shrink-0" size={24} />
                2. Code of Conduct
              </h2>
              <p className="mb-4">
                We are committed to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat all members with respect and dignity.</li>
                <li>Refrain from demeaning, discriminatory, or harassing behavior.</li>
                <li>Respect the confidentiality of sensitive business information shared within closed-door sessions.</li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <Scale className="text-primary shrink-0" size={24} />
                3. Event Participation
              </h2>
              <p>
                Registration for events is non-transferable unless explicitly stated otherwise. Refunds for paid events are subject to the specific cancellation policy of that event. Artha may record events for promotional purposes; by attending, you consent to being photographed or filmed.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <div>
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 mb-4">
                <AlertCircle className="text-primary shrink-0" size={24} />
                4. Liability & Disclaimer
              </h2>
              <p className="mb-4">
                Artha acts as a facilitator for networking and knowledge sharing. We do not guarantee funding, business partnerships, or specific business outcomes.
              </p>
              <p>
                The association is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our resources, website, or participation in our events.
              </p>
            </div>

             <hr className="border-gray-100" />

            {/* Section 5 */}
             <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </div>

          </div>
          
          <div className="bg-slate-50 p-8 border-t border-gray-100 text-center">
             <p className="text-slate-500 text-sm mb-4">Have questions about these terms?</p>
             <a href="/#/contact" className="text-primary font-bold hover:underline">Contact our Legal Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;