import React from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             {/* Abstract shape decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-60"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://picsum.photos/seed/techworkspace/800/600" 
                alt="Modern Agency Workspace" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">New Delhi HQ</p>
                <p className="text-sm opacity-80">Serving clients globally</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We Don't Just Build Websites.<br/>
              <span className="text-indigo-600">We Build Digital Engines.</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Based in New Delhi, Dotvely helps ambitious local businesses transcend the ordinary. We combine cutting-edge design with robust engineering to create websites that are fast, secure, and designed to convert.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our philosophy is simple: technology should serve the business, not the other way around. Whether you are a startup or an established retailer, we tailor our digital solutions to fit your specific growth goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Zap, label: "Lightning Fast", desc: "Optimized for speed" },
                { icon: ShieldCheck, label: "Secure", desc: "Enterprise protection" },
                { icon: Users, label: "User Centric", desc: "Designed for humans" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;