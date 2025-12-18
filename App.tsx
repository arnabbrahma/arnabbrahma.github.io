
import { motion, useScroll, useSpring, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ChevronRight,
  Award,
  GraduationCap,
  ArrowUp,
  ClipboardList,
  Compass,
  FileSpreadsheet,
  Zap,
  DollarSign,
  Cpu,
  X,
  Calendar,
  Clock,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, STATS, SERVICES } from './constants';

const Counter: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-amber-500 transition-colors"
    >
      <motion.span className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
        {rounded}
      </motion.span>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">
        {label}
      </span>
    </motion.div>
  );
};

const BookingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    date: '',
    timeSlot: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request: ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Consultation Request Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Preferred Time Slot: ${formData.timeSlot}\n` +
      `Requirements:\n${formData.requirement}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "01:00 PM - 02:00 PM",
    "03:00 PM - 04:00 PM",
    "After Hours (By Request)"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            <div className="bg-slate-950 p-8 text-white relative">
              <button 
                type="button"
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 id="modal-title" className="text-3xl font-black uppercase tracking-tighter mb-2">Book Consultation</h2>
              <p className="text-slate-400 text-sm font-medium">Independent consultation starting at $109/hr</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <User className="w-3 h-3 text-amber-600" /> Full Name
                  </label>
                  <input 
                    id="full-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-bold"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company-name" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <Building2 className="w-3 h-3 text-amber-600" /> Company Name
                  </label>
                  <input 
                    id="company-name"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-bold"
                    placeholder="Construction Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="pref-date" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-amber-600" /> Preferred Date
                  </label>
                  <input 
                    id="pref-date"
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time-slot" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <Clock className="w-3 h-3 text-amber-600" /> Time Slot
                  </label>
                  <select 
                    id="time-slot"
                    required
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-bold appearance-none"
                  >
                    <option value="">Select a slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <MessageSquare className="w-3 h-3 text-amber-600" /> Requirements
                </label>
                <textarea 
                  id="requirements"
                  required
                  value={formData.requirement}
                  onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium h-32 resize-none"
                  placeholder="Tell me about your project or consultation needs..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl transition-all shadow-lg shadow-amber-900/20 active:scale-[0.98]"
              >
                Send Request Directly
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 500);
    });
    return () => unsub();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const serviceIcons = [ClipboardList, Compass, FileSpreadsheet, Zap, Cpu];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-amber-600 text-white rounded-full shadow-2xl hover:bg-amber-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <main id="main-content">
        {/* Hero Section */}
        <header className="relative min-h-[95vh] flex items-start bg-slate-950 pt-44 pb-24 md:pt-56 md:pb-32 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
          
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-8 leading-[0.85] tracking-tighter"
                >
                  Arnab <br />
                  <span className="text-amber-500">Brahma, <span className="text-white">P.Eng.</span></span>
                </motion.h1>

                <motion.p 
                  variants={listItemVariants}
                  className="text-2xl md:text-3xl text-slate-300 font-light mb-10 max-w-2xl border-l-4 border-amber-600 pl-8"
                >
                  {PERSONAL_INFO.tagline}
                </motion.p>

                <motion.p 
                  variants={listItemVariants}
                  className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed"
                >
                  Specialized in industrial cost estimation, project controls, and mechanical change management for large-scale mining and energy projects.
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="#experience" 
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white font-black rounded transition-all flex items-center gap-3 uppercase text-xs tracking-widest shadow-lg shadow-amber-900/20"
                >
                  Experience <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-black rounded transition-all uppercase text-xs tracking-widest"
                >
                  Connect
                </motion.button>
              </motion.div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <Section id="about" title="Professional Summary">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-700 leading-relaxed mb-16 font-medium tracking-tight text-justify"
            >
              {PERSONAL_INFO.summary}
            </motion.p>
            
            <motion.div 
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            >
              {STATS.map((stat, i) => (
                <Counter key={i} value={stat.value} label={stat.label} suffix={stat.suffix} />
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="Professional Services" subtitle="Specialized independent consultation for industrial project success.">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 p-10 bg-slate-950 text-white rounded-3xl border-t-8 border-amber-600 shadow-2xl flex flex-col justify-center"
            >
              <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-8">
                <DollarSign className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Independent Consultation</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Tailored expert advice to streamline your mechanical projects and maximize bid accuracy.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-amber-500">$109</span>
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">/ Hourly</span>
              </div>
              <motion.button 
                type="button"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-8 py-4 bg-amber-600 text-white font-black text-center rounded-xl uppercase tracking-widest text-xs"
              >
                Book Consultation
              </motion.button>
            </motion.div>

            <motion.div 
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 grid md:grid-cols-2 gap-6"
            >
              {SERVICES.map((service, i) => {
                const Icon = serviceIcons[i] || ClipboardList;
                return (
                  <motion.div 
                    key={i} 
                    variants={listItemVariants}
                    whileHover={{ y: -5, borderColor: "#d97706" }}
                    className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white transition-all group cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-amber-600 group-hover:border-amber-600 transition-colors mb-6">
                      <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Section>

        {/* Experience Timeline */}
        <Section id="experience" title="Work Experience" dark className="bg-slate-900">
          <div className="max-w-5xl space-y-20">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative pl-10 md:pl-16 border-l-2 border-slate-700 hover:border-amber-500 transition-colors group pb-6"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-amber-500 transition-colors" 
                />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{exp.role}</h3>
                  <span className="text-amber-500 font-black text-sm uppercase tracking-widest bg-slate-800 px-4 py-2 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 font-black text-xl mb-10 uppercase tracking-wider">{exp.company}</p>
                <ul className="grid md:grid-cols-1 gap-6">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="flex gap-6 text-slate-300 leading-relaxed text-lg p-6 bg-white/5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education & Certifications */}
        <Section id="education" title="Credentials" dark className="bg-slate-950">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all shadow-xl"
                >
                  <motion.div whileHover={{ y: -5 }}>
                    <GraduationCap className="text-amber-500 w-12 h-12 mb-8" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-3 leading-tight tracking-tight">{edu.degree}</h3>
                  <p className="text-amber-500 font-bold mb-6 tracking-wide text-xl">{edu.institution}</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">{edu.period}</p>
                  <ul className="space-y-4">
                    {edu.details.map((d, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-base text-slate-400 flex gap-4"
                      >
                        <span className="text-amber-600 font-black">•</span> {d}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-widest flex items-center gap-4">
                <Award className="text-amber-500 w-8 h-8" /> Certifications
              </h3>
              <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={listItemVariants}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="p-5 bg-white/5 border border-white/5 rounded-xl flex items-center gap-6 transition-all"
                  >
                    <div className="w-3 h-3 rounded-full bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
                    <span className="font-bold text-slate-200 text-lg">{cert.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch">
          <div className="max-w-4xl">
            <p className="text-3xl text-slate-700 mb-16 font-medium leading-tight tracking-tight">
              Ready to discuss <span className="text-amber-600 font-black underline underline-offset-8">mechanical precision</span> and <span className="text-amber-600 font-black underline underline-offset-8">project optimization</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-950 text-white rounded-2xl flex flex-col justify-center border-t-8 border-amber-600 shadow-2xl h-full"
              >
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">Current Professional Status</h4>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">Actively seeking opportunities to contribute my expertise in Mechanical Estimation and Project Controls to high-impact industrial projects.</p>
                <motion.div 
                  animate={{ 
                    backgroundColor: ["rgba(34,197,94,0.1)", "rgba(34,197,94,0.3)", "rgba(34,197,94,0.1)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-500/30 w-fit text-green-400 font-black text-xs uppercase tracking-widest"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                  />
                  Active for Collaboration
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Direct Communication Channels</p>
                <motion.button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="w-full text-left group flex items-center gap-8 p-6 border border-slate-200 rounded-2xl hover:bg-slate-900 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <Mail className="w-5 h-5 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 group-hover:text-amber-200 uppercase tracking-widest mb-0.5">Email / Book</p>
                    <p className="font-black text-slate-900 group-hover:text-white text-lg">{PERSONAL_INFO.email}</p>
                  </div>
                </motion.button>
                <motion.a 
                  href={`https://${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={listItemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group flex items-center gap-8 p-6 border border-slate-200 rounded-2xl hover:bg-slate-900 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <Linkedin className="w-5 h-5 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 group-hover:text-amber-200 uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="font-black text-slate-900 group-hover:text-white text-lg">Connect on LinkedIn</p>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-24 bg-slate-950 text-slate-500 border-t border-slate-900 relative overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent)]" 
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div className="text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white font-black text-4xl mb-4 tracking-tighter uppercase inline-block"
              >
                Arnab Brahma, <span className="text-amber-500">P.Eng.</span>
              </motion.span>
              <p className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.6em] mt-2 mb-8">
                {PERSONAL_INFO.tagline}
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Communication</p>
                <div className="flex flex-col gap-3">
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium">{PERSONAL_INFO.phone}</span>
                  </a>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors text-left">
                    <Mail className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Network</p>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
                  <Linkedin className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium">/in/arnab-brahma</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-px w-full bg-slate-900 mb-12" />
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-50 text-center">© {new Date().getFullYear()} Arnab Brahma, P.Eng. Mechanical Engineer.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
