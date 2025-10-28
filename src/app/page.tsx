'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Globe, 
  Heart,
  Github,
  Linkedin,
  Phone,
  Calendar,
  Award,
  Users,
  Gamepad2,
  Database,
  Monitor,
  Zap,
  BookOpen,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFED29]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b-2 border-slate-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-800"
            >
              Bünyamin Saka
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
                  Hi, I'm <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">Bünyamin</span>
          </h1>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  A Computer Science student and aspiring full-stack developer from Poznań, Poland.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-slate-700">
                  <div className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-full">
                    <MapPin className="w-5 h-5 text-slate-600" />
                    <span className="font-medium">Poznań, Poland</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-full">
                    <Briefcase className="w-5 h-5 text-slate-600" />
                    <span className="font-medium">Customer Representative at TP Poland</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-900 transition-colors duration-200 shadow-lg"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/80 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-colors duration-200 shadow-lg border-2 border-slate-200"
                >
                  View My Work
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border-4 border-slate-200">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white text-4xl font-bold">BS</span>
                    </div>
                    <p className="text-slate-700 font-medium">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-slate-300 rounded-full opacity-60 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-400 rounded-full opacity-60 shadow-lg"></div>
                <div className="absolute top-8 -left-8 w-12 h-12 bg-slate-200 rounded-full opacity-80"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My academic journey in Computer Science and language learning
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">WSB Merito Poznań</p>
                  <p className="text-slate-600 mb-4">October 2022 – Present (Third Year)</p>
                  <p className="text-slate-600">
                    Currently pursuing my bachelor's degree with focus on software development, 
                    data structures, and computer science fundamentals.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    English Language Course Completion Certificate
                  </h3>
                  <p className="text-green-600 font-medium mb-2">WSB Merito Poznań</p>
                  <p className="text-slate-600 mb-4">October 2021 – July 2022</p>
                  <p className="text-slate-600">
                    Completed comprehensive English language training to achieve B2 proficiency level.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My professional journey and hands-on experience
            </p>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Customer Representative
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">TP Poland</p>
                  <p className="text-slate-600 mb-4">Current Position</p>
                  <p className="text-slate-600">
                    Handling customer inquiries efficiently in a professional environment, 
                    developing strong communication and problem-solving skills.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Sales Department (Turkish)
                  </h3>
                  <p className="text-green-600 font-medium mb-2">Happy Smile Deutschland</p>
                  <p className="text-slate-600 mb-4">May – June 2024</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Sold numerous insurance packages to customers</li>
                    <li>• Improved sales and communication skills</li>
                    <li>• Learned how to navigate business and office environments</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    2D Game Designer
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">Game Jam Participant</p>
                  <p className="text-slate-600 mb-4">July 2021</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Designed a full 2D game with a team in 48 hours</li>
                    <li>• Contributed to gameplay mechanics, level design, and visuals</li>
                    <li>• Gained hands-on experience in teamwork, rapid prototyping, and creative problem-solving</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Technical projects showcasing my development skills
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-orange-600 p-3 rounded-lg w-fit mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Food Outlets Rating System
              </h3>
              <p className="text-slate-600 mb-4">
                A terminal-based system allowing users to rate and manage restaurants, 
                later expanded into a Spring web app with Hibernate integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Maven</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Spring</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Hibernate</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Healthcare Management System
              </h3>
              <p className="text-slate-600 mb-4">
                A client-server application for managing patient records, appointments, 
                and doctor-patient interactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ASP.NET Core</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-purple-600 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                E-sport Betting System
              </h3>
              <p className="text-slate-600 mb-4">
                A web app prototype that allows users to view and bet on e-sport matches 
                with real-time updates and user management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Spring MVC</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Web App</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Technical and soft skills I've developed through education and experience
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Spring MVC', 'Hibernate', 'ASP.NET Core', 'React', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Excel', 'Google Sheets', 'Google Ads', 'Microsoft Office', 'Maven'].map((skill) => (
                      <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-600" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Communication & Teamwork</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Collaboration', 'Customer Service', 'Cross-cultural Communication', 'Presentation Skills'].map((skill) => (
                      <span key={skill} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Problem Solving</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Analytical Thinking', 'Creative Problem Solving', 'Rapid Prototyping', 'Debugging'].map((skill) => (
                      <span key={skill} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Business Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Sales', 'Marketing', 'Data Analysis', 'Project Management'].map((skill) => (
                      <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Languages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Multilingual capabilities for global communication
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Turkish</h3>
              <p className="text-red-600 font-medium">Native</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">English</h3>
              <p className="text-blue-600 font-medium">B2 Level</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Polish</h3>
              <p className="text-green-600 font-medium">A1 Level</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interests & Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Interests & Contact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What drives me and how to get in touch
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                  Interests
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Content creation and digital media</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-slate-700">Politics and history</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700">Learning new languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Code className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-slate-700">Exploring new technologies</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:bunyaminsaka@example.com" className="text-slate-700 hover:text-blue-600 transition-colors">
                    bunyaminsaka@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">+48 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-slate-700">Poznań, Poland</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-slate-700 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8 border-t-4 border-slate-600">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 font-medium">
            © 2024 Bünyamin Saka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}