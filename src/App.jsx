import React, { useState, useEffect } from 'react';
import ContactPage from './ContactPage';
import AdmissionsPage from './AdmissionsPage';
import FAQPage from './FAQPage';
import './App.css';



function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  
  const slides = [
    {
      id: 1,
      bgImage: "/images/happy pupils.JPG" ,
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    },
    {
      id: 2,
      bgImage: "/images/pupils 1.JPG",
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    },
    {
      id: 3,
      bgImage: "/images/pupils 2.JPG",
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    },
    {
      id: 4,
      bgImage: "/images/kids.JPG",
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    },
    {
      id: 5,
      bgImage: "/images/teachers and students.JPG",
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    },
    {
      id: 6,
      bgImage: "/images/staff.JPG",
      title: "Welcome to",
      mainTitle: "PAMOJA JUNIOR SCHOOL",
      buttonText: "ENROLL NOW!!"
    }
  ];

  const missionData = [
    {
      title: "SCHOOL MISSION",
      content: "To provide the best quality primary education that emphasizes the spiritual, emotional, social, intellectual and physical development of learners with great future aspirations.As a result oriented institution.",
      image: "/images/pupils.JPG",
      
      color: "#000366"
    },
    {
      title: "SCHOOL VISION",
      content: "To empower all learners to embrace learning ,archieve their personal best and build their emotional,social and physical wellbeing.",
      image: "/images/staff.JPG",
      color: "#00428e"
    },
    {
      title: "OUR CORE VALUES",
      content: "God-fearing, Excellence, service beyond self, Customer Care, Transparency, Teamwork, Honesty. These core values guide our actions and decisions in everything we do.",
      image: "/images/pupils 3.JPG",
      color: "#000366"
    }
  ];

  const events = [
    { date: "07", month: "Sep", title: "Opening of Term 3, 2025", time: "8:00 am - 5:00 pm" },
    { date: "14", month: "Sep", title: "Opening for All Classes", time: "8:00 am - 5:00 pm", location: "Pamoja Junior School" },
    { date: "04", month: "Oct", title: "Candidates' Dedication", time: "8:00 am - 5:00 pm" }
  ];

  const news = [
    { date: "August 31, 2025", title: "END OF TERM TWO CIRCULAR 2025", image: "/images/pupils.JPG" },
    { date: "May 7, 2025", title: "END OF TERM ONE CIRCULAR 2025", image: "/images/pupils 2.JPG" },
    { date: "December 7, 2024", title: "End of Term Three 2024 Circular", image: "/images/pupils 3.JPG" }
  ];

  useEffect(() => {
    // Simple slider functionality
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

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
              <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
              <li><a href="#about" onClick={() => setCurrentPage('home')}>About</a></li>
              <li><a href="#admissions" onClick={() => setCurrentPage('admissions')}>Admissions</a></li>
              <li><a href="#academics" onClick={() => setCurrentPage('home')}>Academics</a></li>
              <li><a href="#programs" onClick={() => setCurrentPage('home')}>Our Programs</a></li>
              <li><a href="#gallery" onClick={() => setCurrentPage('home')}>Gallery</a></li>
              <li><a href="#faq" onClick={() => setCurrentPage('faq')}>FAQ</a></li>
              <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a></li>
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
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="slide-content">
              <div className="slide-title">{slide.title}</div>
              <div className="slide-main-title">{slide.mainTitle}</div>
              <a href="#apply" className="slide-hover-button" onClick={() => setCurrentPage('admissions')}>Apply Now</a>
            </div>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          {missionData.map((item, index) => (
            <div key={index} className="mission-card">
              <div className="mission-header" style={{ backgroundColor: item.color }}>
                <h3>{item.title}</h3>
              </div>
              <div className="mission-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="mission-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h5>Upcoming Events Third term</h5>
            <div className="divider"></div>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <span className="date">{event.date}</span>
                  <span className="month">{event.month}</span>
                </div>
                <div className="event-image">
                  <img src="/images/logo.jpg" alt="Event" />
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-info">
                    <span><i className="fa fa-clock-o"></i> {event.time}</span>
                    {event.location && <span><i className="fa fa-map-marker"></i> {event.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="admissions-section">
        <div className="admissions-image">
          <div className="admissions-badge">
            <img src="/images/logo.jpg" alt="Pamoja Junior School" />
          </div>
        </div>
        <div className="admissions-content">
          <h3>Apply for Admission</h3>
          <span>Fall 2025 applications are now open</span>
          <p>Welcome to the Pamoja Junior School Admissions Office. We accept students from various backgrounds. Our environment is of international standard, catering to the students' different educational and cultural needs.</p>
          <a href="#apply" className="cta-button" onClick={() => setCurrentPage('admissions')}>Apply Now</a>
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#admissions" onClick={() => setCurrentPage('admissions')}>Admissions</a></li>
              <li><a href="#fees">School Fees</a></li>
              <li><a href="#uniform">School Uniform</a></li>
              <li><a href="#contact">Contact Us</a></li>
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
      
      {/* Contact Page */}
      {currentPage === 'contact' && <ContactPage />}
      
      {/* Admissions Page */}
      {currentPage === 'admissions' && <AdmissionsPage />}
      
      {/* FAQ Page */}
      {currentPage === 'faq' && <FAQPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;