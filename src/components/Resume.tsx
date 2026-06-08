import React, { useState } from 'react';
import { Mail, Phone, MapPin, Link, Download, Printer, Award, BookOpen, Briefcase, GraduationCap, Languages, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cv-data';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Resume = () => {
  const [layout, setLayout] = useState<'modern' | 'elegant'>('modern');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      {/* Controls */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
        <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border">
          <button
            onClick={() => setLayout('modern')}
            className={`px-4 py-2 rounded-md transition-all ${
              layout === 'modern'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            Modern Layout
          </button>
          <button
            onClick={() => setLayout('elegant')}
            className={`px-4 py-2 rounded-md transition-all ${
              layout === 'elegant'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            Elegant Layout
          </button>
        </div>
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Print / Save PDF
        </Button>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-5xl mx-auto print:max-w-none print:shadow-none shadow-2xl rounded-xl overflow-hidden bg-white dark:bg-slate-950">
        <AnimatePresence mode="wait">
          {layout === 'modern' ? (
            <ModernLayout key="modern" data={cvData} />
          ) : (
            <ElegantLayout key="elegant" data={cvData} />
          )}
        </AnimatePresence>
      </div>

      <footer className="max-w-5xl mx-auto mt-12 text-center text-slate-500 dark:text-slate-400 text-sm print:hidden">
        <p>© {new Date().getFullYear()} {cvData.personalInfo.name} - Professional Engineering Portfolio</p>
      </footer>
    </div>
  );
};

const ModernLayout = ({ data }: { data: typeof cvData }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col md:flex-row min-h-[1100px]"
  >
    {/* Sidebar */}
    <aside className="w-full md:w-80 bg-slate-900 dark:bg-black text-white p-8 space-y-10">
      <div className="space-y-4">
        <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 mx-auto flex items-center justify-center overflow-hidden">
          <span className="text-4xl font-bold text-slate-400">
            {data.personalInfo.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{data.personalInfo.name}</h1>
          <p className="text-slate-400 font-medium">{data.personalInfo.title}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Contact</h2>
        <div className="space-y-3">
          <ContactItem icon={<Mail className="w-4 h-4" />} text={data.personalInfo.email} />
          <ContactItem icon={<Phone className="w-4 h-4" />} text={data.personalInfo.phone} />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text={data.personalInfo.address} />
          <ContactItem icon={<Link className="w-4 h-4" />} text={data.personalInfo.linkedin} />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold text-slate-400 mb-2 uppercase">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.technical.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-200 border-none hover:bg-slate-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-400 mb-2 uppercase">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.soft.map(skill => (
                <Badge key={skill} variant="outline" className="text-slate-300 border-slate-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Languages</h2>
        <div className="space-y-3">
          {data.languages.map(lang => (
            <div key={lang.name} className="flex justify-between items-center">
              <span className="text-sm text-slate-300">{lang.name}</span>
              <span className="text-xs text-slate-500 font-medium">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-8 md:p-12 space-y-12 bg-white dark:bg-slate-950">
      <section className="space-y-4">
        <div className="flex items-center gap-3 text-primary border-b-2 border-primary/20 pb-2 w-fit">
          <Award className="w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Professional Summary</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
          "{data.summary}"
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary border-b-2 border-primary/20 pb-2 w-fit">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1 sm:mt-0 sm:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary border-b-2 border-primary/20 pb-2 w-fit">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Education</h2>
        </div>
        <div className="space-y-6">
          {data.education.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-primary font-semibold">{edu.school}</p>
                <p className="text-sm text-slate-500 mt-1 italic">{edu.description}</p>
              </div>
              <div className="text-sm text-slate-500 font-medium sm:text-right">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  </motion.div>
);

const ElegantLayout = ({ data }: { data: typeof cvData }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    className="p-12 md:p-16 space-y-12 bg-white dark:bg-slate-950 min-h-[1100px]"
  >
    <header className="text-center space-y-6 border-b pb-10 border-slate-100 dark:border-slate-800">
      <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase">
        {data.personalInfo.name}
      </h1>
      <p className="text-xl text-primary font-medium tracking-wide uppercase">{data.personalInfo.title}</p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500 font-medium">
        <ContactItem icon={<Mail className="w-4 h-4" />} text={data.personalInfo.email} />
        <ContactItem icon={<Phone className="w-4 h-4" />} text={data.personalInfo.phone} />
        <ContactItem icon={<MapPin className="w-4 h-4" />} text={data.personalInfo.address} />
        <ContactItem icon={<Link className="w-4 h-4" />} text={data.personalInfo.linkedin} />
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="md:col-span-2 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 inline-block">Professional Summary</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {data.summary}
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 inline-block">Experience</h2>
          <div className="space-y-10">
            {data.experience.map((exp, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                  <span className="text-sm font-semibold text-slate-500">{exp.period}</span>
                </div>
                <div className="flex justify-between items-baseline italic">
                  <p className="text-primary font-medium">{exp.position}</p>
                  <span className="text-xs text-slate-400">{exp.location}</span>
                </div>
                <ul className="grid grid-cols-1 gap-1 text-slate-600 dark:text-slate-400 text-sm list-disc list-inside">
                  {exp.responsibilities.map((resp, j) => (
                    <li key={j} className="leading-snug">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 inline-block">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                <span className="text-sm text-slate-500">{edu.period}</span>
              </div>
              <p className="text-primary italic">{edu.degree}</p>
              <p className="text-xs text-slate-400">{edu.description}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 block">Technical Expertise</h2>
          <div className="flex flex-col gap-3">
            {data.skills.technical.map(skill => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 block">Competencies</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.soft.map(skill => (
              <Badge key={skill} variant="outline" className="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold border-b-2 border-slate-900 dark:border-white pb-2 block">Languages</h2>
          <div className="space-y-4">
            {data.languages.map(lang => (
              <div key={lang.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{lang.name}</span>
                  <span className="text-slate-500">{lang.level}</span>
                </div>
                <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: lang.level === 'Maternel' ? '100%' : lang.level === 'Courant' ? '85%' : '60%' }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </motion.div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 group">
    <div className="text-primary/70 group-hover:text-primary transition-colors">{icon}</div>
    <span className="text-sm transition-colors">{text}</span>
  </div>
);

export default Resume;
