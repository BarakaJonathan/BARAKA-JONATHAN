import React from 'react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, Mail, Phone, Award } from 'lucide-react';
import { Reveal, FadeIn } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
           <Reveal>
             <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gold-50 tracking-wide">
              About <span className="text-gold-400 italic">Me</span>
             </h2>
             <div className="h-0.5 w-16 mx-auto rounded-full bg-gold-400/40"></div>
           </Reveal>
        </div>

        {/* Personal Information */}
        <Reveal delay={0.2}>
          <div className="mb-20 p-8 rounded-2xl bg-forest-900 border border-gold-400/10 shadow-[0_10px_30px_rgba(3,20,17,0.3)]">
            <h3 className="text-xl font-serif font-semibold mb-8 text-center text-gold-400 tracking-wider">Personal Details</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Location</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Email</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Phone</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.phone.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Date of Birth</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.dateOfBirth}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Nationality</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.nationality}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-2.5 rounded-lg bg-forest-800 text-gold-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-400/50">Languages</p>
                  <p className="text-sm font-medium text-gold-100">{PERSONAL_INFO.languages}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Work Experience Section */}
        <Reveal delay={0.3}>
          <div className="mb-20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-10 flex items-center justify-center gap-3 text-gold-400 tracking-wide">
              <Briefcase className="w-6 h-6" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <FadeIn key={exp.id} delay={idx * 0.1} direction="up">
                  <div className="p-8 rounded-xl bg-forest-900 border border-gold-400/10 shadow-[0_10px_30px_rgba(3,20,17,0.2)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-serif font-semibold text-gold-50">{exp.role}</h4>
                        <p className="text-md font-serif italic text-gold-400 mt-1">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-bold font-sans tracking-widest uppercase px-3.5 py-1.5 rounded-full mt-3 md:mt-0 bg-forest-800 text-gold-300 border border-gold-400/10">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gold-100/70 mb-6 text-center md:text-left leading-relaxed text-sm">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="text-xs uppercase tracking-wider font-semibold font-sans text-gold-400 mb-3 text-center md:text-left">Key Responsibilities</h5>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-sm text-gold-100/70 flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-gold-400/60"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h5 className="text-xs uppercase tracking-wider font-semibold font-sans text-gold-400 mb-3 text-center md:text-left">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, aIdx) => (
                            <li key={aIdx} className="text-sm text-gold-100/70 flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-gold-400"></span>
                              <span className="font-medium text-gold-50">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education Section */}
        <Reveal delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-10 flex items-center justify-center gap-3 text-gold-400 tracking-wide">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <FadeIn key={edu.id} delay={idx * 0.1} direction="up">
                  <div className="p-6 rounded-xl bg-forest-900 border border-gold-400/10 shadow-[0_10px_30px_rgba(3,20,17,0.2)] h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-forest-800 text-gold-400 shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-serif font-semibold text-gold-50 mb-1 leading-tight">{edu.degree}</h4>
                        <p className="text-sm font-serif italic text-gold-400 mb-2">{edu.institution}</p>
                        <p className="text-xs text-gold-300/40 font-medium mb-2">{edu.period}</p>
                        {edu.details && (
                          <p className="text-sm text-gold-100/60 leading-relaxed">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};