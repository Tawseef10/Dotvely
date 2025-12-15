import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'Business Website',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        // Use FormSubmit.co for backend-less email handling
        const response = await fetch("https://formsubmit.co/ajax/DotvelyTY@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formState.name,
                email: formState.email,
                project_type: formState.type,
                message: formState.message,
                _subject: `New Inquiry: ${formState.type} from ${formState.name}`,
                _template: "table",
                _captcha: "false"
            })
        });

        if (response.ok) {
            setShowSuccessModal(true);
            setFormState({ name: '', email: '', type: 'Business Website', message: '' });
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Something went wrong. Please try calling us or emailing DotvelyTY@gmail.com directly.');
        console.error("Form Error:", error);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 -z-0"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Get in touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Build Something<br />Amazing Together.</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Ready to take your business to the next level? Fill out the form or give us a call directly. We are always excited to hear new ideas.
            </p>

            <div className="space-y-6">
              <a href="tel:8527960872" className="flex items-center gap-5 group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Call Us Directly</p>
                  <p className="text-2xl font-bold text-slate-900">8527960872</p>
                  <p className="text-lg font-semibold text-slate-700">9653057438</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                    <ArrowRight className="text-indigo-400" />
                </div>
              </a>

              <a href="mailto:DotvelyTY@gmail.com" className="flex items-center gap-5 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-lg font-semibold text-slate-900">DotvelyTY@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Visit Us</p>
                  <p className="text-lg font-semibold text-slate-900">Pul Pehlad Pur, New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                <div className="relative">
                  <select 
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option>Business Website</option>
                    <option>E-Commerce Store</option>
                    <option>Portfolio / Personal</option>
                    <option>Website Redesign</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 bg-slate-900 text-white font-bold rounded-xl overflow-hidden group/btn hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-70"
              >
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                 <div className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
                 </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-indigo-100 transform transition-all scale-100 relative overflow-hidden animate-in zoom-in-95 duration-200">
             <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="text-center mt-2">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-8">Thank you for reaching out. We have received your message and will get back to you shortly.</p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ChevronDown = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
)

export default Contact;