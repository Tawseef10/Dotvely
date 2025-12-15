import React from 'react';
import { Globe, ShoppingCart, BarChart3, Repeat, PenTool, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional digital presence for service providers and local businesses.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-converting online stores that simplify management and boost sales.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: Repeat,
    title: "Website Redesign",
    description: "Modernize your outdated site with current tech and fresh aesthetics.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless experiences across mobile, tablet, and desktop devices.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Data-driven strategies to improve visibility and track performance.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces designed to guide users towards action.",
    color: "text-rose-600",
    bg: "bg-rose-50"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Solutions for Every Need</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;