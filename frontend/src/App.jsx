import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, ExternalLink, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "Khilao.com",
      subtitle: "Food Recipe Platform",
      description: "Built a MERN-based platform for creating, managing, and discovering food recipes. Developed and Deployed.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Multer"],
      features: [
        "Implemented JWT-based authentication and role-based access control",
        "Developed full CRUD with image uploads using Multer"
      ],
      github: "https://github.com/anujrajincludemyself/-Khilao.com",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "CareStack",
      subtitle: "Hospital Management System",
      description: "CareStack is a full-stack Hospital Management System designed to manage patients. Developed and Deployed.",
      tech: ["Node.js", "React.js", "Tailwind CSS", "MongoDB"],
      features: [
        "Focused on real-world CRUD operations",
        "Modular backend APIs and modern frontend UI"
      ],
      github: "https://github.com/anujrajincludemyself/CareStack",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "GoFood",
      subtitle: "Online Food Delivery Platform",
      description: "A full-stack food delivery e-commerce application built using the MERN stack. Developed and Deployed.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "Payment Gateway"],
      features: [
        "Implemented secure JWT-based authentication and protected user sessions",
        "Built cart, order management, and online payment flow with real-time order tracking"
      ],
      github: "https://github.com/anujrajincludemyself/GoFood",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const internships = [
    {
      title: "Full Stack Developer Intern",
      company: "Jesty CRM",
      period: "Jan 2026 - Present",
      points: [
        "Working on a SaaS CRM platform built with React, Node.js, and REST APIs",
        "Mainly making frontend and improving onboarding and features"
      ]
    },
    {
      title: "Backend Developer Intern",
      company: "Shumi Fashions",
      period: "Part-Time",
      points: [
        "Developing backend APIs using Node.js and Express.js",
        "Managing MongoDB models and JWT authentication"
      ]
    },
    {
      title: "Research Intern",
      company: "IIT Patna",
      period: "Jun 2025 - Jul 2025",
      points: [
        "Conducted ML-based analysis for network security",
        "Built an exam seating system using Python and Streamlit (95% accuracy)"
      ]
    }
  ];

  const skills = {
    "Languages": ["C++", "Python", "Kotlin", "JavaScript"],
    "Web": ["React.js", "HTML5", "Node.js", "Express.js", "Tailwind CSS", "EJS", "Streamlit", "Bootstrap"],
    "Mobile": ["Android (Jetpack Compose)"],
    "Tools": ["Git", "GitHub", "VS Code", "Figma", "Google Colab", "Inngest", "Postman", "Jira"],
    "Databases": ["MongoDB", "MySQL", "SQLAlchemy"],
    "CS Fundamentals": ["DSA", "DBMS", "OOP", "CN", "OS", "Compiler Design"]
  };

  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'shadow-lg' : ''}`} style={{
        background: scrolled ? 'rgba(26, 26, 46, 0.98)' : 'rgba(26, 26, 46, 0.9)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home" style={{ color: '#667eea' }}>
            &lt;AnujRaj /&gt;
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link px-3" href={`#${item.toLowerCase()}`}
                     style={{ transition: 'color 0.3s' }}
                     onMouseEnter={(e) => e.target.style.color = '#667eea'}
                     onMouseLeave={(e) => e.target.style.color = ''}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '80px'
      }}>
        <div className="position-absolute w-100 h-100" style={{
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="text-white">
                <p className="fs-5 mb-2" style={{ opacity: 0.9 }}>Hi there! I'm</p>
                <h1 className="display-1 fw-bold mb-3" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                  ANUJ RAJ
                </h1>
                <h2 className="display-6 mb-4" style={{ opacity: 0.95 }}>
                  Full Stack Developer & Problem Solver
                </h2>
                <p className="lead mb-4" style={{ maxWidth: '600px', opacity: 0.9 }}>
                  B.Tech IT student at RTU Kota with a passion for building scalable web applications 
                  and solving complex problems. Currently interning at Jesty CRM.
                </p>
                
                {/* Social Links */}
                <div className="d-flex gap-3 mb-4 flex-wrap">
                  <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noopener noreferrer"
                     className="btn btn-light btn-lg d-flex align-items-center gap-2">
                    <Github size={20} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/anujrajmish" target="_blank" rel="noopener noreferrer"
                     className="btn btn-light btn-lg d-flex align-items-center gap-2">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <a href="https://leetcode.com/u/anujsolveproblem24242/" target="_blank" rel="noopener noreferrer"
                     className="btn btn-light btn-lg d-flex align-items-center gap-2">
                    <Code size={20} /> LeetCode
                  </a>
                </div>

                <div className="d-flex gap-4 flex-wrap">
                  <a href="mailto:anujraj24go@gmail.com" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <Mail size={18} /> anujraj24go@gmail.com
                  </a>
                  <a href="tel:+919199455366" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <Phone size={18} /> +91-9199455366
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
          <div className="text-white" style={{ animation: 'bounce 2s infinite' }}>
            <div className="text-center">
              <small>Scroll Down</small>
              <div style={{ fontSize: '24px' }}>↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <div className="rounded-circle bg-gradient d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <GraduationCap size={60} className="text-white" />
                      </div>
                      <h4 className="fw-bold">CGPA: 8.8</h4>
                      <p className="text-muted">Till 5th Semester</p>
                    </div>
                    <div className="col-md-8">
                      <h3 className="fw-bold mb-4">Education</h3>
                      <div className="mb-4">
                        <h5 className="fw-bold">Rajasthan Technical University, Kota</h5>
                        <p className="text-muted mb-2">B.Tech in Information Technology | 2023 - Present</p>
                        <p className="mb-0">CGPA: 8.8</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="fw-bold">Senior Secondary Education (Class XII)</h5>
                        <p className="text-muted mb-0">CBSE Board | Percentage: 86%</p>
                      </div>
                      <div>
                        <h5 className="fw-bold">Secondary Education (Class X)</h5>
                        <p className="text-muted mb-0">CBSE Board | Percentage: 90%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5">Featured Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-lg hover-lift" style={{ transition: 'transform 0.3s' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="card-header border-0 text-white p-4" style={{ background: project.gradient }}>
                    <h4 className="fw-bold mb-1">{project.name}</h4>
                    <p className="mb-0 opacity-75">{project.subtitle}</p>
                  </div>
                  <div className="card-body p-4">
                    <p className="mb-3">{project.description}</p>
                    
                    <div className="mb-3">
                      <h6 className="fw-bold mb-2">Tech Stack:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="badge bg-light text-dark border">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <ul className="list-unstyled mb-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <span className="text-success me-2">✓</span>
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>

                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2">
                      <Github size={18} /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5">Experience</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {internships.map((internship, index) => (
                <div key={index} className="card border-0 shadow mb-4">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-3 mb-3 mb-md-0">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <Briefcase size={24} className="text-primary" />
                          <span className="badge bg-primary">{internship.period}</span>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <h4 className="fw-bold mb-1">{internship.title}</h4>
                        <h5 className="text-primary mb-3">{internship.company}</h5>
                        <ul className="mb-0">
                          {internship.points.map((point, i) => (
                            <li key={i} className="mb-2">{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5 text-white">Technical Skills</h2>
          <div className="row g-4">
            {Object.entries(skills).map(([category, items], index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3 text-primary">{category}</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span key={i} className="badge bg-light text-dark border px-3 py-2"
                              style={{ fontSize: '0.9rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-5">
            <h3 className="fw-bold text-center mb-4 text-white">Achievements & Competitions</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Trophy size={32} className="text-warning" />
                      <div>
                        <h5 className="fw-bold mb-0">Amazon ML Challenge 2025</h5>
                        <p className="text-muted mb-0">Amazon India</p>
                      </div>
                    </div>
                    <p className="mb-0">Achieved 79% accuracy; ranked 82nd nationally</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Award size={32} className="text-success" />
                      <div>
                        <h5 className="fw-bold mb-0">HackCrux 2025</h5>
                        <p className="text-muted mb-0">GDG, INMUT Jaipur</p>
                      </div>
                    </div>
                    <p className="mb-0">Secured 2nd Runner-Up for AI-powered Digital Twin solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <p className="lead text-center mb-5">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <a href="mailto:anujraj24go@gmail.com" className="text-decoration-none">
                        <div className="card border h-100 hover-card" style={{ transition: 'all 0.3s' }}
                             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div className="card-body text-center p-4">
                            <Mail size={40} className="text-primary mb-3" />
                            <h5 className="fw-bold mb-2">Email</h5>
                            <p className="text-muted mb-0">anujraj24go@gmail.com</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="tel:+919199455366" className="text-decoration-none">
                        <div className="card border h-100 hover-card" style={{ transition: 'all 0.3s' }}
                             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          <div className="card-body text-center p-4">
                            <Phone size={40} className="text-success mb-3" />
                            <h5 className="fw-bold mb-2">Phone</h5>
                            <p className="text-muted mb-0">+91-9199455366</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <h5 className="fw-bold mb-3">Connect with me</h5>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noopener noreferrer"
                         className="btn btn-dark btn-lg">
                        <Github size={24} />
                      </a>
                      <a href="https://www.linkedin.com/in/anujrajmish" target="_blank" rel="noopener noreferrer"
                         className="btn btn-primary btn-lg">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://leetcode.com/u/anujsolveproblem24242/" target="_blank" rel="noopener noreferrer"
                         className="btn btn-warning btn-lg">
                        <Code size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-white text-center" style={{ background: '#1a1a2e' }}>
        <div className="container">
          <p className="mb-2">© 2026 Anuj Raj. All rights reserved.</p>
          <p className="mb-0 small opacity-75">Built with React & Bootstrap</p>
           <div className="mt-4">
                    <a href="https://buymeacoffee.com/anujraj24gb" target="_blank" rel="noopener noreferrer"
                       className="btn btn-warning btn-lg d-inline-flex align-items-center gap-2 shadow-lg"
                       style={{ 
                         background: 'linear-gradient(135deg, #FFDD00 0%, #FBB034 100%)',
                         border: 'none',
                         fontWeight: '600'
                       }}>
                      <i className="bi bi-cup-hot-fill"></i> Buy Me a Coffee
                    </a>
                  </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        html { scroll-behavior: smooth; }
        
        .hover-lift:hover { transform: translateY(-10px); }
      `}</style>
    </div>
  );
};

export default Portfolio;