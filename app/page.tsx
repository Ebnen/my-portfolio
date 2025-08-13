"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  PenToolIcon as Tool,
  MessageCircle,
  Twitter,
  Smartphone,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VisitorStats } from "@/components/VisitorStats"

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  * {
    font-family: 'Inter', sans-serif;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes typewriter {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes floatHorizontal {
    0%, 100% { 
      transform: translateX(-10px) translateY(0px); 
    }
    25% { 
      transform: translateX(10px) translateY(-5px); 
    }
    50% { 
      transform: translateX(15px) translateY(0px); 
    }
    75% { 
      transform: translateX(-5px) translateY(-3px); 
    }
  }
  
  .animate-typewriter {
    overflow: hidden;
    border-right: 2px solid #FF6B35;
    white-space: nowrap;
    animation: typewriter 3s steps(40, end);
  }
  
  .animate-float {
    animation: floatHorizontal 4s ease-in-out infinite;
  }
  
  .glass-card {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 107, 53, 0.2);
  }
  
  .glass-nav {
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(255, 107, 53, 0.2);
  }
  
  .text-shadow {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }
  
  .orange-button {
    background: #FF6B35;
    color: white;
    border: 1px solid #FF6B35;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .orange-button:hover {
    background: #FF8A65;
    border-color: #FF8A65;
    color: white;
  }
  
  .orange-outline-button {
    background: rgba(255, 107, 53, 0.1);
    color: #FF6B35;
    border: 1px solid #FF6B35;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .orange-outline-button:hover {
    background: rgba(255, 107, 53, 0.2);
    color: #FF8A65;
    border-color: #FF8A65;
  }

  /* Enhanced responsive design */
  
  /* Base grid layouts */
  .hero-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .project-grid {
    display: grid;
    gap: 2rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  /* Extra small devices (phones, 480px and down) */
  @media (max-width: 480px) {
    .glass-card {
      margin: 0 0.5rem;
      padding: 1rem !important;
    }
    
    .animate-typewriter {
      font-size: 1.8rem !important;
      line-height: 1.2 !important;
      border-right-width: 1px !important;
    }
    
    .hero-stats {
      flex-direction: column;
      gap: 0.5rem;
      padding: 0 1rem;
    }
    
    .hero-stats .glass-card {
      min-width: 100px;
      padding: 0.75rem !important;
    }
    
    .skills-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem;
    }
    
    /* Navigation improvements */
    .nav-brand {
      font-size: 1.25rem !important;
    }
    
    /* Hero section improvements */
    .hero-avatar {
      width: 5rem !important;
      height: 5rem !important;
    }
    
    .hero-title {
      font-size: 1.8rem !important;
      margin-bottom: 1rem !important;
    }
    
    .hero-subtitle {
      font-size: 1.1rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .hero-description {
      font-size: 0.95rem !important;
      margin-bottom: 1.5rem !important;
      padding: 0 0.5rem;
    }
    
    /* Button improvements */
    .hero-buttons {
      flex-direction: column !important;
      width: 100%;
      padding: 0 1rem;
    }
    
    .hero-buttons button,
    .hero-buttons a {
      width: 100% !important;
      justify-content: center !important;
    }
    
    /* Social links */
    .hero-social {
      gap: 1.5rem !important;
    }
    
    /* About section */
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .about-stats {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0.75rem !important;
    }
    
    .about-stats .glass-card {
      padding: 1rem !important;
    }
    
    /* Project cards */
    .project-card-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    
    .project-image {
      height: 200px !important;
    }
    
    .project-tech {
      gap: 0.25rem !important;
    }
    
    .project-tech span {
      font-size: 0.7rem !important;
      padding: 0.25rem 0.5rem !important;
    }
    
    .project-buttons {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    
    .project-buttons a {
      width: 100% !important;
      justify-content: center !important;
    }
    
    /* Experience and Education cards */
    .experience-card,
    .education-card {
      padding: 1rem !important;
    }
    
    .experience-header,
    .education-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.5rem !important;
    }
    
    .experience-badge,
    .education-badge {
      align-self: flex-start !important;
    }
  }

  /* Small devices (tablets, 641px to 768px) */
  @media (max-width: 768px) {
    .glass-card {
      margin: 0 0.75rem;
      padding: 1.5rem !important;
    }
    
    .animate-typewriter {
      font-size: 2.25rem !important;
    }
    
    .hero-stats {
      gap: 1rem;
      padding: 0 1rem;
    }
    
    .skills-grid {
      grid-template-columns: 1fr !important;
      gap: 1.25rem;
    }
    
    .project-grid {
      gap: 2rem;
    }
    
    .contact-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem;
    }
    
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    
    .project-card-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .hero-buttons {
      gap: 0.75rem !important;
    }
    
    .nav-desktop {
      display: none !important;
    }
  }

  /* Medium devices (small laptops, 769px to 1024px) */
  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
    
    .skills-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .project-card-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* Large devices (laptops/desktops, 1025px to 1200px) */
  @media (min-width: 1025px) and (max-width: 1200px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .contact-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Extra large devices (large laptops and desktops, 1201px and up) */
  @media (min-width: 1201px) {
    .skills-grid {
      grid-template-columns: repeat(5, 1fr);
    }
    
    .contact-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  /* Landscape phone orientation */
  @media (max-height: 500px) and (orientation: landscape) {
    .hero-section {
      padding-top: 5rem !important;
      padding-bottom: 2rem !important;
    }
    
    .hero-avatar {
      width: 4rem !important;
      height: 4rem !important;
      margin-bottom: 1rem !important;
    }
    
    .hero-title {
      font-size: 2rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .hero-subtitle {
      font-size: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .hero-description {
      font-size: 0.9rem !important;
      margin-bottom: 1rem !important;
    }
  }
`

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Bootstrap"],
    backend: ["Python", "Node.js", "C", "C#", "Kotlin", "Flask", "Express", "Django"],
    mobile: ["Android Development", "Kotlin", "React Native"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "RESTful APIs", "GraphQL", "Webpack"],
  }

  const experiences = [
    {
      period: "February 2025 - Present",
      company: "Footprint Mentorship",
      location: "Lagos (Remote)",
      position: "Backend Developer (Intern)",
      achievements: [
        "Developed and maintained backend for 'Keeping the Faith' Christian app",
        "Designed RESTful APIs for seamless content delivery",
        "Optimized database queries for efficient media file storage and retrieval",
        "Ensured secure, scalable, and performant backend architecture",
        "Collaborated with frontend team for smooth API integration",
        "Technologies: TypeScript, Express, JWT, Nodemailer, MongoDB",
      ],
    },
    {
      period: "September 2024 - January 2025",
      company: "CodeCrafters Agency",
      location: "Abuja (Remote)",
      position: "Software Engineer (Intern)",
      achievements: [
        "Collaborated on company website design and development",
        "Built responsive website using React, Node.js, and Express",
        "Integrated features for services showcase and client testimonials",
        "Ensured cross-browser compatibility and accessibility",
        "Used Git for version control and Trello for task management",
      ],
    },
    {
      period: "January 2024 - August 2024",
      company: "Aid for Rural Education Access Initiative (AREAI)",
      location: "Volunteer",
      position: "IT Support & Frontend Developer",
      achievements: [
        "Maintained operating systems and application software",
        "Improved IT system performance through proactive maintenance",
        "Designed visually appealing interfaces aligned with branding",
        "Worked with HTML and CSS for optimal results",
      ],
    },
  ]

  const education = [
    {
      period: "04/2024 - Present",
      institution: "Afrihub ICT Institute",
      location: "Abuja, FCT, Nigeria",
      degree: "BSc Software Engineering",
      status: "In Progress",
    },
    {
      period: "01/2024 - 01/2025",
      institution: "ALX (Skills African Leadership International)",
      location: "Abuja, FCT, Nigeria",
      degree: "Diploma in Software Engineering (Backend)",
      status: "Completed",
    },
    {
      period: "07/2023 - 10/2023",
      institution: "Afrihub ICT Institute",
      location: "Abuja, FCT, Nigeria",
      degree: "Certified Internet Webmaster",
      status: "Completed",
    },
    {
      period: "2016 - 2021",
      institution: "University of London, International Program",
      location: "Accra, Ghana",
      degree: "LLB in Law",
      status: "Completed",
    },
  ]

  const projects = [
    {
      title: "Keeping the Faith - Christian App API",
      description:
        "Developed the complete backend infrastructure for a comprehensive Christian mobile application. Built scalable RESTful APIs to serve multimedia content including audio, books, music, and spiritual resources to thousands of users.",
      technologies: ["TypeScript", "Express.js", "MongoDB", "JWT", "Nodemailer", "RESTful APIs", "Node.js"],
      features: [
        "Complete backend API development and architecture",
        "User authentication and authorization system",
        "Media content management and streaming APIs",
        "Search and filtering functionality for content discovery",
        "Email notification system for user engagement",
      ],
      image: "/images/keeping-faith-screenshot.jpg",
      liveUrl: "https://keeping-faith-api.onrender.com/",
      githubUrl: "https://github.com/Ebnen/keeping-the-faith-api",
      status: "In Production",
    },
    {
      title: "CodeCrafters Agency Website",
      description:
        "A modern, responsive website for a software development agency focused on helping programmers find jobs and providing training to aspiring developers. Features cutting-edge design with smooth animations and professional branding.",
      technologies: ["React", "Node.js", "Express", "HTML5", "CSS3", "JavaScript", "Vercel"],
      features: [
        "Modern responsive design with dark theme",
        "Interactive service showcase and portfolio",
        "Professional branding with green accent colors",
        "Smooth animations and user experience",
        "Contact forms and client engagement features",
      ],
      image: "/images/codecrafters-screenshot.png",
      liveUrl: "https://codecraftersagency.vercel.app/",
      githubUrl: "https://github.com/Ebnen/codecrafters-website",
      status: "Live",
    },
    {
      title: "Along9ja - Public Transport Navigator",
      description:
        "A comprehensive web application that helps Nigerian citizens navigate cities using public transportation. Built with Google Maps API integration for real-time directions and bus stop locations.",
      technologies: ["React", "Node.js", "TailwindCSS", "Google Maps API", "Express.js", "JavaScript"],
      features: [
        "Find nearest bus stops to your current location",
        "Get step-by-step directions in simple, layman terms",
        "Real-time public transport route planning",
        "Google Maps integration for accurate navigation",
        "User-friendly interface with Nigerian Pidgin support",
      ],
      image: "/images/along9ja-screenshot.png",
      liveUrl: "https://along9ja.onrender.com/",
      githubUrl: "https://github.com/Ebnen/along9ja",
      status: "Live",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="nav-brand text-xl sm:text-2xl font-bold text-white text-shadow">Ebenezer Osigwe</div>

            {/* Desktop Navigation */}
            <div className="nav-desktop hidden lg:flex space-x-6 xl:space-x-8">
              {["Home", "About", "Projects", "Experience", "Skills", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors text-shadow ${
                    activeSection === item.toLowerCase() ? "text-[#FF6B35]" : "text-white hover:text-[#FF6B35]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-3 sm:py-4 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                {["Home", "About", "Projects", "Experience", "Skills", "Education", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left py-2 px-2 text-sm font-medium transition-colors text-shadow rounded ${
                      activeSection === item.toLowerCase() 
                        ? "text-[#FF6B35] bg-[#FF6B35]/10" 
                        : "text-white hover:text-[#FF6B35] hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-3 sm:px-4 lg:px-8 min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assets_task_01k0s7zs36e9ktvbx4tbxa0hv6_task_01k0s7zs36e9ktvbx4tbxa0hv6_genid_b55ede51-3cf7-489e-a96b-4cedf365c9eb_25_07_22_14_19_097560_videos_00000_219882644_md-c4aqt8Dnrd9RlgcVJoHJ00WBc7xZtp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="text-center animate-fadeInUp">
            <Avatar className="hero-avatar w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 border-2 sm:border-4 border-[#FF6B35] shadow-xl animate-float hover:scale-110 transition-transform duration-300">
              <AvatarImage src="/images/displaypic.jpg?height=128&width=128" />
              <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-bold bg-[#FF6B35] text-white">EO</AvatarFallback>
            </Avatar>

            <div className="overflow-hidden mb-3 sm:mb-4">
              <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white animate-typewriter text-shadow leading-tight">
                Ebenezer Ezechimere Osigwe
              </h1>
            </div>
            <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 animate-fadeInUp delay-500 text-shadow">
              Full-Stack Software Engineer
            </p>
            <p className="hero-description text-sm sm:text-base lg:text-lg text-white max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 animate-fadeInUp delay-700 text-shadow leading-relaxed px-2 sm:px-0">
              Passionate about building innovative, user-friendly, and scalable software solutions. With 3+ years of
              experience in both frontend and backend development, I create impactful digital experiences that make a
              difference.
            </p>

            {/* Real Visitor Stats */}
            <div className="mb-6 sm:mb-8">
              <VisitorStats />
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0">
              <button className="orange-button px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium flex items-center justify-center gap-2 min-w-[160px] sm:min-w-auto">
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                Download Resume
              </button>
              <button
                className="orange-outline-button px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium min-w-[160px] sm:min-w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-social flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://github.com/Ebnen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B35] transition-colors p-1"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ebenzy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B35] transition-colors p-1"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="mailto:ebenzy1996@gmail.com" className="text-white hover:text-[#FF6B35] transition-colors p-1">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-shadow">About Me</h2>
          <div className="about-grid grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-white text-shadow leading-relaxed">
                I'm a dedicated full-stack developer with a unique background in law and technology. My journey from
                legal studies to software engineering has given me a distinctive perspective on problem-solving and
                attention to detail.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white text-shadow leading-relaxed">
                Currently pursuing my BSc in Software Engineering while gaining hands-on experience through internships
                and volunteer work. I specialize in building scalable web applications using modern technologies like
                React, Node.js, and various databases.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-white">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[#FF6B35] flex-shrink-0" />
                  <span className="text-shadow text-sm sm:text-base">Abuja, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[#FF6B35] flex-shrink-0" />
                  <span className="text-shadow text-sm sm:text-base">+234 802 095 3079</span>
                </div>
              </div>
            </div>
            <div className="about-stats grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">3+</div>
                <div className="text-xs sm:text-sm text-white text-shadow">Years Experience</div>
              </div>
              <div className="glass-card rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-white text-shadow">Technologies</div>
              </div>
              <div className="glass-card rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-white text-shadow">Projects</div>
              </div>
              <div className="glass-card rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">3</div>
                <div className="text-xs sm:text-sm text-white text-shadow">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-shadow">Featured Projects</h2>
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-lg sm:rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`project-card-grid grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="project-image w-full h-48 sm:h-56 lg:h-64 object-cover rounded-md lg:rounded-lg border border-[#FF6B35]/20"
                    />
                  </div>
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-shadow">{project.title}</h3>
                        <span
                          className={`self-start px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Live"
                              ? "bg-[#FF6B35] text-white"
                              : project.status === "In Production"
                                ? "bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]"
                                : "bg-white/10 text-white border border-white/20"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-white text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-shadow">{project.description}</p>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="font-semibold text-white mb-2 text-shadow text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-white text-shadow">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-white mb-2 text-shadow text-sm sm:text-base">Technologies:</h4>
                      <div className="project-tech flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-buttons flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="orange-button px-3 sm:px-4 py-2 text-sm font-medium inline-block text-center"
                      >
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="orange-outline-button px-3 sm:px-4 py-2 text-sm font-medium inline-flex items-center justify-center gap-2"
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-shadow">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="experience-header flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#FF6B35] text-shadow">{exp.position}</h3>
                    <p className="text-base sm:text-lg font-medium text-white mt-1 text-shadow">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="experience-badge mt-2 lg:mt-0 px-2 sm:px-3 py-1 bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30 rounded text-xs sm:text-sm self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-white text-shadow text-sm sm:text-base leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-shadow">
            Skills & Technologies
          </h2>
          <div className="skills-grid">
            <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
              <Code className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#FF6B35] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-shadow text-sm sm:text-base">Frontend</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-white/10 text-white rounded border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
              <Server className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#FF6B35] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-shadow text-sm sm:text-base">Backend</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-white/10 text-white rounded border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
              <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#FF6B35] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-shadow text-sm sm:text-base">Mobile</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills.mobile.map((skill) => (
                  <span key={skill} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-white/10 text-white rounded border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
              <Database className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#FF6B35] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-shadow text-sm sm:text-base">Database</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-white/10 text-white rounded border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
              <Tool className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#FF6B35] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-shadow text-sm sm:text-base">Tools & Others</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-white/10 text-white rounded border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-shadow">Education</h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="education-card glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="education-header flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-shadow">{edu.degree}</h3>
                    <p className="text-base sm:text-lg text-[#FF6B35] font-medium mb-1">{edu.institution}</p>
                    <p className="text-white text-shadow text-sm sm:text-base">{edu.location}</p>
                  </div>
                  <div className="mt-3 lg:mt-0 lg:text-right">
                    <span
                      className={`education-badge px-2 sm:px-3 py-1 rounded text-xs font-medium mb-1 sm:mb-2 inline-block ${
                        edu.status === "In Progress"
                          ? "bg-[#FF6B35] text-white"
                          : "bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <p className="text-xs sm:text-sm text-white text-shadow">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto glass-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-shadow">Let's Work Together</h2>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto text-shadow leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="contact-grid mb-8 sm:mb-12">
            <div className="text-center p-3 sm:p-4">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[#FF6B35] mx-auto mb-2 sm:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 text-shadow">Email</h3>
              <a
                href="mailto:ebenzy1996@gmail.com"
                className="text-white hover:text-[#FF6B35] transition-colors text-shadow text-xs sm:text-sm lg:text-base break-all"
              >
                ebenzy1996@gmail.com
              </a>
            </div>
            <div className="text-center p-3 sm:p-4">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-[#FF6B35] mx-auto mb-2 sm:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 text-shadow">Phone</h3>
              <a href="tel:+2348020953079" className="text-white hover:text-[#FF6B35] transition-colors text-shadow text-xs sm:text-sm lg:text-base">
                +234 802 095 3079
              </a>
            </div>
            <div className="text-center p-3 sm:p-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#FF6B35] mx-auto mb-2 sm:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 text-shadow">Location</h3>
              <span className="text-white text-shadow text-xs sm:text-sm lg:text-base">Karu/Jikwoyi, Abuja, FCT</span>
            </div>
            <div className="text-center p-3 sm:p-4">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#FF6B35] mx-auto mb-2 sm:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 text-shadow">WhatsApp</h3>
              <a
                href="https://wa.me/2348020953079"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B35] transition-colors text-shadow text-xs sm:text-sm lg:text-base"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="text-center p-3 sm:p-4">
              <Twitter className="h-6 w-6 sm:h-8 sm:w-8 text-[#FF6B35] mx-auto mb-2 sm:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 text-shadow">Twitter</h3>
              <a
                href="https://twitter.com/ebenzy1996"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6B35] transition-colors text-shadow text-xs sm:text-sm lg:text-base"
              >
                @ebenzy1996
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 flex-wrap gap-2 sm:gap-4">
            <a
              href="https://github.com/Ebnen"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-outline-button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2"
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ebenzy"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-outline-button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2"
            >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:ebenzy1996@gmail.com"
              className="orange-button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              Email Me
            </a>
            <a
              href="https://wa.me/2348020953079"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-outline-button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2"
            >
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              WhatsApp
            </a>
            <a
              href="https://twitter.com/ebenzy1996"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-outline-button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2"
            >
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-nav py-6 sm:py-8 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-shadow text-xs sm:text-sm lg:text-base">© 2025 Ebenezer Ezechimere Osigwe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
