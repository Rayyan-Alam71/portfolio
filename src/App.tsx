import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Globe, ChevronDown, MapPin, Calendar, User, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
//   @ts-ignore
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js','Express.js', 'Python',  'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'Tools & DevOps', items: ['Git','Prisma', 'Mongoose', 'Docker', 'AWS', 'LangChain' , 'CI/CD', ] }
  ];

  const projects = [
    {
      title: 'DevFusion',
      description: 'Full-stack real-time code collaboration platform built using Next.js, TypeScript, DrizzleORM, OAuth 2.0 , Tailwind and ShadCN/UI. Features include user authentication, room creation, user-dashboard, live-room-sharing ',
      tech: ['Next.js', 'TypeScript', 'DrizzleORM', 'OAuth 2.0', 'Tailwind'],
      image: '/dev_fusion_ss.png',
      github: 'https://github.com/Rayyan-Alam71/DevFusion',
      live: 'https://dev-fusion-three.vercel.app/'
    },
    {
      title: 'ReviewNest',
      description : 'A commuity driven book-review platform using Next.js, TypeScript, and Prisma ORM with PostgreSQL, designed to provide users with an intuitive interface to explore and rate books.',
      tech: ['Next.js', 'Prisma ORM',  'PostgreSQL', 'OAuth', 'Tailwind'],
      image: '/reviewnest_ss.png',
      github: 'https://github.com/Rayyan-Alam71/ReviewNest',
      live: 'https://review-nest-app.vercel.app/'
    }
  ];

 
  return (
    <div className="bg-gray-950 text-white min-h-screen w-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RAYYAN ALAM
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                      activeSection === item
                        ? 'text-blue-600 border-b-2 border-blue-400'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-white"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-white capitalize w-6/7 mx-auto text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mt-14">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                  <User size={48} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-950"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-300">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
              Rayyan Alam
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating innovative digital solutions
            that make a difference in people's lives
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
            onClick={()=>{
              window.open('https://drive.google.com/file/d/1animXldm7N3OlUlAPPGFnuJC2fHJdfhO/view?usp=drivesdk', '_blank');
            }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              My Resume
              
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-gray-600 text-gray-800 rounded-lg font-semibold hover:border-gray-300  transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Rayyan-Alam71/" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rayyan-alam-40b6a3299/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/rayyanAlam1234" className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate developer with hands on experience of creating digital solutions
            </p>
          </div>
          
          <div className="max-w-3/4 mx-auto">
            <div className="space-y-6">
              <p className="text-md md:text-lg text-gray-200 leading-relaxed">
                I'm a full-stack developer with a passion for creating innovative web applications 
                that solve real-world problems. With expertise in modern JavaScript frameworks, 
                backend technologies, and cloud platforms, I enjoy building scalable solutions 
                that deliver exceptional user experiences.
              </p>
              
              <p className="text-md md:text-lg text-gray-200 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying at the forefront of web development trends.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-blue-400" />
                  <span>Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={20} className="text-blue-400" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    {index === 0 && <Code size={20} className="text-white" />}
                    {index === 1 && <Globe size={20} className="text-white" />}
                    {index === 2 && <Briefcase size={20} className="text-white" />}
                    {index === 3 && <Palette size={20} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target='_blank'
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target='_blank'
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:text-black rounded-lg hover:from-blue-400 hover:to-purple-400  transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                <p className="text-gray-300">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white">alamrayyan167@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-white">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/Rayyan-Alam71/" target='_blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/rayyan-alam-40b6a3299/" target='_blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/rayyanAlam1234" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                    <X size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                ></textarea>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Rayyan Alam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;