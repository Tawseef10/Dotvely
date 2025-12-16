import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AllProjectsProps {
  onBack: () => void;
}

const allProjects = [
  { id: 1, title: "Urban Coffee", category: "E-Commerce", img: "https://source.unsplash.com/featured/?coffee,coffee-shop" },
  { id: 2, title: "Apex Construction", category: "Business", img: "https://source.unsplash.com/featured/?construction,building" },
  { id: 3, title: "Lumina Studio", category: "Portfolio", img: "https://source.unsplash.com/featured/?creative,studio" },
  { id: 4, title: "Fresh Eats", category: "Restaurant", img: "https://source.unsplash.com/featured/?restaurant,food" },
  { id: 5, title: "Tech flow", category: "SaaS", img: "https://source.unsplash.com/featured/?saas,technology" },
  { id: 6, title: "Green Garden", category: "Local Business", img: "https://source.unsplash.com/featured/?garden,plants" },
  { id: 7, title: "Dr. Smith Clinic", category: "Healthcare", img: "https://source.unsplash.com/featured/?clinic,healthcare" },
  { id: 8, title: "Law & Order", category: "Legal", img: "https://source.unsplash.com/featured/?law,lawyer" },
];

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all mb-8 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12">All Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm mt-2">Web Design • Development</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;