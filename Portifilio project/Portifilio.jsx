import React, { useState, useEffect } from "react";
import "./Portifilio.css";

function Portifilio() {

  // Navigation active state logic or mobile toggle state if needed
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Skill Data array based on your HTML structure
  const skills = [
    { name: 'HTML', progress: '100%' },
    { name: 'css', progress: '100%' },
    { name: 'media query', progress: '100%' },
    { name: 'bootstrap', progress: '100%' },
    { name: 'c language', progress: '100%' },
    { name: 'javascript', progress: '100%' },
    { name: 'react js', progress: '100%' },
  ];

  // Service Data array (Completing the third cut-off card from your template dynamically)
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom website development with responsive design, clean code, and optimal performance for all devices.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      description: 'Cross-platform mobile application development using React Native and other modern frameworks.'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Management',
      description: 'Robust database architecture, integration, and management to ensure your application data is secure and scalable.'
    }
  ];

  // Portfolio projects mock array for the section requested
  const projects = [
    { id: 1, title: 'Project One', category: 'Web App', img: './project1.png', link: '#' },
    { id: 2, title: 'Project Two', category: 'Mobile App', img: './project2.png', link: '#' },
    { id: 3, title: 'Project Three', category: 'UI/UX Design', img: './project3.png', link: '#' }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">Portfolio Desk</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleNavCollapse}
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={() => setIsNavCollapsed(true)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={() => setIsNavCollapsed(true)}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={() => setIsNavCollapsed(true)}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" onClick={() => setIsNavCollapsed(true)}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => setIsNavCollapsed(true)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero d-flex align-items-center" style={{ minHeight: '100vh', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1>Preet Raval</h1>
              <h2>Full Stack Developer</h2>
              <p>I create responsive, user-friendly websites and applications with modern technologies. Let's build something amazing together!</p>
              <div className="hero-btns">
                <a href="#portfolio" className="btn btn-light btn-lg me-3">View My Work</a>
                <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
              </div>
            </div>
            <div className="col-lg-6 text-center hero-img-container">
             <img src="src/assets/preet.png" alt="Preet Raval" className="hero-img img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>About Me</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h3>Hello! I'm Preet Raval</h3>
                <p>I'm a passionate Full Stack Developer with expertise in both front-end and back-end technologies. I enjoy creating seamless, responsive web applications that provide excellent user experiences.</p>
                <p>With a strong foundation in computer science and several years of experience, I specialize in JavaScript, React, Node.js, and various databases. I'm always eager to learn new technologies and take on challenging projects.</p>
                <p>When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new hiking trails.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {skills.map((skill, index) => (
                <div className="skill-bar mb-3" key={index}>
                  <div className="skill-name mb-1">
                    <span className="text-uppercase fw-bold">{skill.name}</span>
                  </div>
                  <div className="skill-progress progress" style={{ height: '10px' }}>
                    <div 
                      className="skill-progress-bar progress-bar" 
                      role="progressbar" 
                      style={{ width: skill.progress }}
                      aria-valuenow={parseInt(skill.progress)} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
     <section id="services" className="services">
        <div className="container">
            <div className="section-title">
                <h2>My Services</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Web Development</h3>
                        <p>Custom website development with responsive design, clean code, and optimal performance for all devices.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3>App Development</h3>
                        <p>Cross-platform mobile application development using React Native and other modern frameworks.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3>Backend Development</h3>
                        <p>Robust server-side development with Node.js, Express, MongoDB, and other database technologies.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>User-centered interface design with a focus on usability, accessibility, and engaging experiences.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3>DevOps</h3>
                        <p>Deployment, monitoring, and maintenance of applications using modern DevOps tools and practices.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud Solutions</h3>
                        <p>Cloud infrastructure setup and management using AWS, Azure, and other cloud platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Portfolio/Project Section */}
       <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="section-title">
                <h2>My Portfolio</h2>
            </div>
            <div className="portfolio-filter">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Web</button>
                <button className="filter-btn">Mobile</button>
                <button className="filter-btn">Design</button>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <img src="src/assets/Baker decorating a cake.png" alt="Project 1" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>E-Commerce Platform</h4>
                            <p>Full-stack e-commerce application with React, Node.js, and MongoDB</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">css</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                           <img src="src/assets/task-manager.png" alt="Project 2" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>Task Management App</h4>
                            <p>Productivity application with drag-and-drop functionality</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">css</span>
                                <span className="portfolio-tag">JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                       <img src="src/assets/social media .jpg" alt="Project 3" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>Social Media Dashboard</h4>
                            <p>Real-time social media application with authentication</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">css</span>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                        <img src="src/assets/weather .jpg" alt="Project 4" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>Weather Application</h4>
                            <p>Weather forecasting app with location detection</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">css</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                           <img src="src/assets/rnw.png" alt="Project 5" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>red and white website</h4>
                            <p>free counselling for student</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">CSS</span>
                                <span className="portfolio-tag">media query</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="src/assets/CLOCK.jpg" alt="Project 6" />
                            <div className="portfolio-overlay">
                                <a href="#" className="btn btn-light">View Project</a>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h4>Real-time Clock</h4>
                            <p>A clock is an instrument that measures and displays time</p>
                            <div className="portfolio-tags">
                                <span className="portfolio-tag">html</span>
                                <span className="portfolio-tag">css</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Contact Me</h2>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <div className="contact-info">
                        <h4>Get In Touch</h4>
                        <p>I'm available for freelance work and full-time opportunities. Feel free to reach out to me!</p>
                        <div className="mt-4">
                            <p><i className="fas fa-map-marker-alt contact-icon"></i> Amreli,gujarat </p>
                            <p><i className="fas fa-envelope contact-icon"></i> preetraval8172@gmail.com</p>
                            <p><i className="fas fa-phone contact-icon"></i> +91 7600034385</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                              <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Subject" />
                        <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-light btn-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>


      {/* Footer Section */}
      <footer>
        <div class="container">
            <div class="text-center">
                <div class="social-links">
                    <a hre=" https://in.linkedin.com"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href=" https://github.com."><i class="fa-brands fa-github"></i></a>
                    <a href="https://x.com."><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com."><i class="fa-brands fa-instagram"></i></a>
                </div>
                <p>&copy; 2023 Preet Raval. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    </>
  );
}

export default Portifilio;