import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onViewAll: () => void;
}

const projects = [
  { 
    id: 1, 
    title: "Dotvely Studios", 
    category: "Web Agency", 
    img: "https://image2url.com/r2/bucket2/images/1768059360431-9aba5450-b173-43c9-8012-58cf13bfab1e.png",
    url: "https://dotvely.vercel.app/" 
  },
  { 
    id: 2, 
    title: "BluBloom Interiors", 
    category: "Interior Designer", 
    img: "https://image2url.com/r2/bucket3/images/1768059406953-eac2a3d6-e1bf-40df-8ae4-5b354e687a7c.png",
    url: "https://blubloom-interior.vercel.app/" 
  },
  { 
    id: 3, 
    title: "Pitambra Books", 
    category: "Printing Agency", 
    img: "https://image2url.com/r2/bucket3/images/1768059452162-e98f73eb-0dc1-4b42-bc87-9de3ab9df5ec.png",
    url: "https://your-local-website-3.com" 
  },
  { 
    id: 4, 
    title: "Tawseef's Portfolio", 
    category: "Portfolio", 
    img: "https://image2url.com/r2/bucket2/images/1768059834351-28e68e33-8a6f-469f-9d73-442ba9108184.png",
    url: "https://your-local-website-4.com" 
  },
];

const Portfolio: React.FC<PortfolioProps> = ({ onViewAll }) => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Selected Work</h2>
            <p className="text-slate-500 max-w-md">Browse some of our recent collaborations with local businesses.</p>
          </div>
          <button 
            onClick={onViewAll}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium transition-all group border border-slate-200 hover:border-indigo-200"
          >
            View All Projects 
            <div className="bg-white rounded-full p-1 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:-rotate-45" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-indigo-300 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-bold">
                    {project.title}
                    </h3>
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={onViewAll}
            className="w-full px-6 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            View All Projects
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
