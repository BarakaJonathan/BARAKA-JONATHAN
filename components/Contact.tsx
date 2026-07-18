import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../constants';
import { Reveal, FadeIn } from './Reveal';

export const Contact: React.FC = () => {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gold-400/10">
            
            {/* Info Side */}
            <div className="p-10 md:w-2/5 flex flex-col justify-between bg-forest-900 text-gold-50 border-r border-gold-400/10">
              <FadeIn width="100%" direction="right">
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-6 text-gold-400 tracking-wide">Let's Connect</h3>
                  <p className="text-gold-100/70 mb-8 text-sm leading-relaxed">
                    Interested in working together or have a question? I'm always open to discussing product design work or partnership opportunities.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-semibold font-sans">Email</p>
                        <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                        <FaWhatsapp size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-semibold font-sans">WhatsApp</p>
                        <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.phone.whatsapp}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-semibold font-sans">Phone</p>
                        <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.phone.normal}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold-400/50 uppercase tracking-wider font-semibold font-sans">Location</p>
                        <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-[10px] text-gold-400/40 mb-4 uppercase tracking-widest font-bold font-sans">Follow Me</p>
                  <div className="flex gap-4">
                    <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" 
                      className="p-3 rounded-full transition-all flex items-center justify-center bg-forest-800 text-gold-400 hover:bg-gold-400 hover:text-forest-950 hover:shadow-[0_4px_15px_rgba(197,168,128,0.15)]">
                      <FaGithub size={18} />
                    </a>
                    <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="p-3 rounded-full transition-all flex items-center justify-center bg-forest-800 text-gold-400 hover:bg-gold-400 hover:text-forest-950 hover:shadow-[0_4px_15px_rgba(197,168,128,0.15)]">
                      <FaLinkedin size={18} />
                    </a>
                    <a href={PERSONAL_INFO.social.twitter} target="_blank" rel="noopener noreferrer" 
                      className="p-3 rounded-full transition-all flex items-center justify-center bg-forest-800 text-gold-400 hover:bg-gold-400 hover:text-forest-950 hover:shadow-[0_4px_15px_rgba(197,168,128,0.15)]">
                      <FaXTwitter size={18} />
                    </a>
                  </div>
                  <p className="text-[10px] text-gold-400/30 mt-8 font-sans">Designed by Baraka J.P.</p>
                </div>
              </FadeIn>
            </div>

            {/* Form Side */}
            <div className="p-10 md:w-3/5 bg-forest-900/30 backdrop-blur-sm flex flex-col justify-center">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider font-sans text-gold-400">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-forest-950/60 border border-gold-400/10 focus:border-gold-400/40 text-gold-50 placeholder-gold-300/10"
                      placeholder="Bakari Saidi"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider font-sans text-gold-400">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-forest-950/60 border border-gold-400/10 focus:border-gold-400/40 text-gold-50 placeholder-gold-300/10"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider font-sans text-gold-400">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-forest-950/60 border border-gold-400/10 focus:border-gold-400/40 text-gold-50 placeholder-gold-300/10"
                      placeholder="email@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider font-sans text-gold-400">Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-forest-950/60 border border-gold-400/10 focus:border-gold-400/40 text-gold-50 placeholder-gold-300/10"
                      placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold tracking-wider font-sans uppercase text-xs bg-gold-400 text-forest-950 hover:bg-gold-300 transition-all duration-300 shadow-[0_4px_20px_rgba(197,168,128,0.15)] hover:shadow-[0_4px_25px_rgba(197,168,128,0.25)] flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};