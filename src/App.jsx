import React, { useState, useEffect } from 'react';
import ContactPage from './ContactPage';
import AdmissionsPage from './AdmissionsPage';
import FAQPage from './FAQPage';
import GalleryPage from './GalleryPage';
import AboutPage from './AboutPage';
import ProgrammesPage from './ProgrammesPage';
import AcademicsPage from './AcademicsPage';
import './App.css';



function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  
  // Hero slider images
  const heroImages = [
    "/images/happy pupils.JPG",
    "/images/pupils 1.JPG",
    "/images/pupils 2.JPG",
    "/images/kids.JPG",
    "/images/teachers and students.JPG",
    "/images/staff.JPG"
  ];

  const heroContent = {
    title: "Welcome to",
    mainTitle: "PAMOJA JUNIOR SCHOOL",
    buttonText: "ENROLL NOW!!"
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const missionData = [
    {
      title: "ACADEMIC EXCELLENCE",
      content: "Delivering outstanding education through innovative teaching methods, qualified instructors, and a comprehensive curriculum that prepares students for future success.",
      image: "/images/pupils.JPG",
      color: "#1a237e"
    },
    {
      title: "HOLISTIC DEVELOPMENT",
      content: "Nurturing well-rounded individuals through academic, physical, social, and spiritual development programs that build character and life skills.",
      image: "/images/staff.JPG",
      color: "#3f51b5"
    },
    {
      title: "FUTURE READY",
      content: "Equipping students with 21st-century skills, critical thinking abilities, and the confidence to excel in an ever-changing world.",
      image: "/images/pupils 3.JPG",
      color: "#1976d2"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Visitation sunday",
      date: "November 2, 2025",
      time: "9:00 AM - 4:00 PM",
      description: "Parents visit their children and get to know about how they are fairing and check on thier academics.",
      imagePlaceholder: "parent-teacher-conference.jpg"
    },
    {
      id: 2,
      title: "Top class graduation",
      date: "November 30, 2025",
      time: "10:00 AM - 2:00 PM",
      description: "A ceremony  where the top tenderers (top class) graduate to obidient ones (primary one) Each child in top class will contribute a fee of UGX fifty thousand shillings only.",
      imagePlaceholder: "science-fair.jpg"
    },
    {
      id: 3,
      title: "End of term Mega concert(Fun day)& closure of term III",
      date: "november 30, 2025",
      time: "8:00 AM - 5:00 PM",
      description: "students get to enjoy their last day at school and in their respective classes.",
      imagePlaceholder: "sports-day.jpg"
    }
  ];



  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="#home" onClick={() => setCurrentPage('home')}>
              <img src="/images/logo.jpg" alt="Pamoja Junior School" />
            </a>
          </div>
          <nav className={`navigation ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#academics" onClick={() => setCurrentPage('academics')} className={currentPage === 'academics' ? 'active' : ''}>Academics</a></li>
              <li><a href="#admissions" onClick={() => setCurrentPage('admissions')} className={currentPage === 'admissions' ? 'active' : ''}>Admissions</a></li>
              <li><a href="#programs" onClick={() => setCurrentPage('programmes')} className={currentPage === 'programmes' ? 'active' : ''}>Our Programs</a></li>
              <li><a href="#gallery" onClick={() => setCurrentPage('gallery')} className={currentPage === 'gallery' ? 'active' : ''}>Gallery</a></li>
              <li><a href="#faq" onClick={() => setCurrentPage('faq')} className={currentPage === 'faq' ? 'active' : ''}>FAQ</a></li>
              <li><a href="#contact" onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="#apply" className="cta-button" onClick={() => setCurrentPage('admissions')}>Apply Now</a>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Conditional Page Rendering */}
      {currentPage === 'home' && (
        <>

      {/* Hero Slider */}
      <section className="hero-slider">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Pamoja Junior School ${index + 1}`} className="hero-image" />
            <div className="hero-overlay">
              <div className="slide-content">
                <div className="slide-title">{heroContent.title}</div>
                <div className="slide-main-title">{heroContent.mainTitle}</div>
                <a href="#apply" className="slide-hover-button" onClick={() => setCurrentPage('admissions')}>Apply Now</a>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider dots */}
        <div className="hero-slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-hero">
            <h1 className="welcome-title">Nurturing Tomorrow's Leaders</h1>
            <p className="welcome-tagline">Where Academic Excellence Meets Character Development</p>
          </div>
          
          <div className="welcome-content">
            <div className="welcome-text">
              <div className="section-intro">
                <h2>Welcome to Pamoja Junior School</h2>
                <div className="intro-line"></div>
              </div>
              <p className="welcome-description">
                At Pamoja Junior School, we believe every child deserves an exceptional start to their educational journey. 
                Our innovative approach combines rigorous academics with character building, ensuring students develop both 
                intellectual capabilities and strong moral foundations.
              </p>
              
              <div className="welcome-highlights">
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fa fa-chalkboard-teacher"></i>
                    </div>
                    <div className="highlight-content">
                      <h4>Expert Educators</h4>
                      <p>Qualified teachers passionate about student success</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fa fa-microscope"></i>
                    </div>
                    <div className="highlight-content">
                      <h4>Modern Facilities</h4>
                      <p>State-of-the-art learning environments and resources</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fa fa-heart"></i>
                    </div>
                    <div className="highlight-content">
                      <h4>Holistic Development</h4>
                      <p>Nurturing mind, body, and character simultaneously</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">
                      <i className="fa fa-user-friends"></i>
                    </div>
                    <div className="highlight-content">
                      <h4>Personalized Attention</h4>
                      <p>Small classes ensuring individual student focus</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="welcome-actions">
                <a href="#academics" className="btn-primary" onClick={() => setCurrentPage('academics')}>Explore Academics</a>
                <a href="#about" className="btn-secondary" onClick={() => setCurrentPage('about')}>Our Story</a>
              </div>
            </div>
            
            <div className="welcome-visual">
              <div className="image-stack">
                <div className="main-image">
                  <img src="/images/teachers and students.JPG" alt="Teachers and Students at Pamoja" />
                  <div className="image-badge">
                    <span>Quality Education</span>
                  </div>
                </div>
                <div className="accent-image">
                  <img src="/images/logo.jpg" alt="Pamoja Junior School Badge" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Stay connected with our school community through exciting events and activities</p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <div className="image-placeholder">
                    <i className="fa fa-calendar"></i>
                    <span>{event.imagePlaceholder}</span>
                  </div>
                </div>
                <div className="event-content">
                  <div className="event-date">
                    <i className="fa fa-calendar-alt"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-time">
                    <i className="fa fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <a href="#contact" className="event-btn" onClick={() => setCurrentPage('contact')}>Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="admissions-section">
        <div className="container">
          <div className="admissions-wrapper">
            <div className="admissions-visual">
              <div className="admissions-badge">
                <div className="badge-content">
                  <img src="/images/logo.jpg" alt="Pamoja Junior School Logo" className="badge-logo" />
                </div>
              </div>
            </div>
            <div className="admissions-content">
              <div className="content-header">
                <h2>Start Your Child's Journey</h2>
                <div className="header-accent"></div>
              </div>
              <h3>Apply for Admission Today</h3>
              <div className="admission-highlight">
                <i className="fa fa-calendar-check"></i>
                <a href="#apply" onClick={() => setCurrentPage('admissions')} className="admission-link">
                  <span>Fall 2025 Applications Now Open</span>
                </a>
              </div>
              <p>Join the Pamoja Junior School family and give your child the foundation for lifelong success. Our admission process is designed to welcome students from diverse backgrounds into our nurturing, academically excellent environment.</p>
              
              <div className="admission-features">
                <div className="feature-row">
                  <div className="feature-icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Inclusive Community</h4>
                    <p>Welcoming students from all backgrounds and cultures</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="feature-icon">
                    <i className="fa fa-award"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Academic Excellence</h4>
                    <p>Proven track record of outstanding student achievement</p>
                  </div>
                </div>
              </div>
              
              <div className="admission-actions">
                <a href="#apply" className="btn-apply-primary" onClick={() => setCurrentPage('admissions')}>Start Application</a>
                <a href="#contact" className="btn-apply-secondary" onClick={() => setCurrentPage('contact')}>Schedule Visit</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-column">
            <h3>About Our School</h3>
            <div className="footer-underline"></div>
            <p>Pamoja Junior School in Uganda is a thriving educational institution known for its high academic standards, individual-focused learning, and holistic education approach. Established with a mission to offer quality education in a supportive environment, Pamoja combines excellent primary and nursery education programs, allowing learners to excel academically and socially.</p>
            <div className="footer-social">
              <a href="#facebook" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#twitter" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#youtube" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <div className="footer-underline"></div>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => setCurrentPage('about')}>About Us</a></li>
              <li><a href="#programs" onClick={() => setCurrentPage('programmes')}>Our Programs</a></li>
              <li><a href="#gallery" onClick={() => setCurrentPage('gallery')}>Gallery</a></li>
              <li><a href="#admissions" onClick={() => setCurrentPage('admissions')}>Admissions</a></li>
              <li><a href="#fees" onClick={() => setCurrentPage('admissions')}>School Fees</a></li>
              <li><a href="#uniform" onClick={() => setCurrentPage('admissions')}>School Uniform</a></li>
              <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="footer-underline"></div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <span>0785-135000 / 0754-026921</span>
              </div>
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <span>pamojajunior@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <span>NKOOWE, HOIMA Rd, P.O.BOX 132474, WAKISO, Uganda</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="copyright-center">
              © 2025 Pamoja Junior School. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
        </>
      )}
      
      {/* About Page */}
      {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
      
      {/* Academics Page */}
      {currentPage === 'academics' && <AcademicsPage setCurrentPage={setCurrentPage} />}
      
      {/* Programmes Page */}
      {currentPage === 'programmes' && <ProgrammesPage setCurrentPage={setCurrentPage} />}
      
      {/* Gallery Page */}
      {currentPage === 'gallery' && <GalleryPage setCurrentPage={setCurrentPage} />}
      
      {/* Contact Page */}
      {currentPage === 'contact' && <ContactPage setCurrentPage={setCurrentPage} />}
      
      {/* Admissions Page */}
      {currentPage === 'admissions' && <AdmissionsPage setCurrentPage={setCurrentPage} />}
      
      {/* FAQ Page */}
      {currentPage === 'faq' && <FAQPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;