import React from 'react';
import { Theme } from '../types';
import { Mail, MapPin, Send, Phone, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';

  const [formData, setFormData] = React.useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${formData.subject || 'Project Inquiry'} - from ${formData.name}`;
    const body = `${formData.message}\n\n---\nContact Details:\nName: ${formData.name}\nEmail: ${formData.email}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${isSpace ? 'bg-blue-950/30' : 'bg-slate-900/50'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className={`p-10 md:w-2/5 flex flex-col justify-between ${
            isSpace 
              ? 'bg-gradient-to-br from-blue-900 to-slate-900 text-white' 
              : 'bg-slate-800 text-white'
          }`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Interested in working together or have a question? I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${isSpace ? 'bg-cyan-500/20' : 'bg-emerald-500/20'}`}>
                    <Mail size={20} className={isSpace ? 'text-cyan-300' : 'text-emerald-300'} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                    <p className="text-sm font-medium">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${isSpace ? 'bg-cyan-500/20' : 'bg-emerald-500/20'}`}>
                    <MessageCircle size={20} className={isSpace ? 'text-cyan-300' : 'text-emerald-300'} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">WhatsApp</p>
                    <p className="text-sm font-medium">{PERSONAL_INFO.phone.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${isSpace ? 'bg-cyan-500/20' : 'bg-emerald-500/20'}`}>
                    <Phone size={20} className={isSpace ? 'text-cyan-300' : 'text-emerald-300'} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Phone</p>
                    <p className="text-sm font-medium">{PERSONAL_INFO.phone.normal}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className={`p-2 rounded-lg ${isSpace ? 'bg-cyan-500/20' : 'bg-emerald-500/20'}`}>
                    <MapPin size={20} className={isSpace ? 'text-cyan-300' : 'text-emerald-300'} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                    <p className="text-sm font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-xs text-slate-400 mb-2">Designed by Baraka J.P.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className={`p-10 md:w-3/5 ${isSpace ? 'bg-slate-900/80 backdrop-blur-sm' : 'bg-slate-50'}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wide ${isSpace ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                      isSpace 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 focus:border-emerald-500'
                    } border-2`}
                    placeholder="Bakari Saidi"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wide ${isSpace ? 'text-slate-400' : 'text-slate-500'}`}>Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                      isSpace 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 focus:border-emerald-500'
                    } border-2`}
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wide ${isSpace ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                      isSpace 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 focus:border-emerald-500'
                    } border-2`}
                    placeholder="email@example.com"
                  />
              </div>

              <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wide ${isSpace ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                      isSpace 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-cyan-500' 
                        : 'bg-white border-slate-300 text-slate-900 focus:border-emerald-500'
                    } border-2`}
                    placeholder="Tell me about your project..."
                  ></textarea>
              </div>

              <button 
                type="submit"
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 ${
                  isSpace 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : 'bg-slate-900 hover:bg-slate-800 shadow-xl'
                }`}
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};