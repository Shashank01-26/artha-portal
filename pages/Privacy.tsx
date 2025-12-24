
import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Security & Trust
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your trust is our most valuable asset. Learn how we handle your data with integrity.
            <br />
            <span className="text-sm text-slate-400">Last Updated: October 24, 2024</span>
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12 text-slate-600 leading-relaxed">
            
            {/* Section 1 */}
            <div className="group">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                <Database className="text-primary" size={24} />
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us when applying for membership or registering for an event. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold text-slate-800">Personal Data:</span> Name, email address, job title, and professional background.</li>
                <li><span className="font-bold text-slate-800">Company Data:</span> Business name, GST number, office address, and industry segment.</li>
                <li><span className="font-bold text-slate-800">Payment Data:</span> Transaction details for membership tiers or paid events (processed securely via PCI-compliant partners).</li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                <Shield className="text-primary" size={24} />
                2. How We Use Your Data
              </h2>
              <p className="mb-4">
                The Tech Entrepreneurs Association of Pune uses collected data for the following purposes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Verifying membership eligibility and founder status.</span>
                </li>
                <li className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Managing event registrations and access control.</span>
                </li>
                <li className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Sending critical updates and association newsletters.</span>
                </li>
                <li className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Improving our ecosystem services and platform features.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                <Lock className="text-primary" size={24} />
                3. Data Security
              </h2>
              <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4 items-start">
                <Bell className="text-primary shrink-0" size={20} />
                <p className="text-sm text-blue-900">
                  In the event of any data breach, we are committed to notifying our members within 72 hours of discovering the anomaly.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                <UserCheck className="text-primary" size={24} />
                4. Your Rights
              </h2>
              <p className="mb-4">
                As a member of the TEAP community, you have the following rights regarding your data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and update your profile information at any time.</li>
                <li>The right to request the deletion of your account and all associated personal data.</li>
                <li>The right to opt-out of marketing communications while remaining a member.</li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Section 5 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                <Eye className="text-primary" size={24} />
                5. Third-Party Sharing
              </h2>
              <p>
                TEAP does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted partners who assist us in operating our website or conducting our association business, so long as those parties agree to keep this information confidential.
              </p>
            </div>

          </div>
          
          <div className="bg-slate-900 p-10 border-t border-slate-800 text-center text-white">
             <h3 className="text-xl font-bold mb-4">Privacy Questions?</h3>
             <p className="text-slate-400 text-sm mb-6">Our Data Protection Officer is available for any clarifications.</p>
             <a href="mailto:privacy@teap.org" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
                Email DPO
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
