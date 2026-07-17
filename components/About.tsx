import React from 'react';
import { Theme } from '../types';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, Mail, Phone, Award } from 'lucide-react';

import { Reveal, FadeIn } from './Reveal';

export const About: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
           <Reveal>
             <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isSpace ? 'text-white' : 'text-slate-100'}`}>
              About <span className={isSpace ? 'text-cyan-400' : 'text-emerald-500'}>Me</span>
             </h2>
             <div className={`h-1 w-20 mx-auto rounded-full ${isSpace ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-emerald-500 to-teal-600'}`}></div>
           </Reveal>
        </div>

        {/* Personal Information */}
        <Reveal delay={0.2}>
          <div className={`mb-16 p-8 rounded-2xl ${isSpace ? 'bg-slate-900/50 border border-blue-900/30' : 'bg-slate-800 border border-slate-700'}`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`}>Personal Information</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-white">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-white">{PERSONAL_INFO.phone.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Calendar className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Date of Birth</p>
                  <p className="text-white">{PERSONAL_INFO.dateOfBirth}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Award className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Nationality</p>
                  <p className="text-white">{PERSONAL_INFO.nationality}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Briefcase className={`w-5 h-5 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                <div>
                  <p className="text-xs text-slate-500">Languages</p>
                  <p className="text-white">{PERSONAL_INFO.languages}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Work Experience Section */}
        <Reveal delay={0.3}>
          <div className="mb-16 max-w-5xl mx-auto">
            <h3 className={`text-2xl font-bold mb-8 flex items-center justify-center gap-3 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`}>
              <Briefcase className="w-6 h-6" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <FadeIn key={exp.id} delay={idx * 0.1} direction="up">
                  <div className={`p-6 rounded-xl ${isSpace ? 'bg-slate-900/50 border border-blue-900/30' : 'bg-slate-800 border border-slate-700'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className={`text-lg ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`}>{exp.company}</p>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full mt-2 md:mt-0 ${isSpace ? 'bg-blue-950 text-cyan-300' : 'bg-slate-700 text-slate-300'}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-400 mb-4 text-center md:text-left">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-white mb-2 text-center md:text-left">Key Responsibilities:</h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isSpace ? 'bg-cyan-400' : 'bg-emerald-500'}`}></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2 text-center md:text-left">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, aIdx) => (
                            <li key={aIdx} className="text-sm text-slate-400 flex items-start gap-2">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isSpace ? 'bg-purple-400' : 'bg-amber-500'}`}></span>
                              {achievement}
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
            <h3 className={`text-2xl font-bold mb-8 flex items-center justify-center gap-3 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`}>
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <FadeIn key={edu.id} delay={idx * 0.1} direction="up">
                  <div className={`p-6 rounded-xl ${isSpace ? 'bg-slate-900/50 border border-blue-900/30' : 'bg-slate-800 border border-slate-700'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${isSpace ? 'bg-blue-950' : 'bg-slate-900'}`}>
                        <GraduationCap className={`w-6 h-6 ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                        <p className={`text-sm ${isSpace ? 'text-cyan-400' : 'text-emerald-500'} mb-2`}>{edu.institution}</p>
                        <p className="text-xs text-slate-500 mb-2">{edu.period}</p>
                        {edu.details && (
                          <p className="text-sm text-slate-400">{edu.details}</p>
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