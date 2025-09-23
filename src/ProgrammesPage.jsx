import React, { useState } from 'react';
import './ProgrammesPage.css';

function ProgrammesPage({ setCurrentPage }) {
  const [activeProgram, setActiveProgram] = useState('all');

  const programmes = [
    
    {
      id: 'Transport',
      title: 'Transport Services',
      category: 'care',
      description: 'Safe and reliable transport services ensuring timely and secure travel for all learners to and from school,it is important to note that this is a prepaid service and the rates depend on the distance from school.',
      features: [
        'Safe and Secure Vehicles',
        'Experienced Drivers',
        
        'Flexible Pick-up and Drop-off Points',
        'Affordable Rates',
        
      ],
      ageGroups: 'all age groups',
      duration: 'every school day',
      imagePlaceholder: '/images/trans.jpg',
      
      //
    },
    {
      id: 'vocational',
      title: 'Vocational Skills',
      category: 'practical',
      description: 'Hands-on practical skills training that prepares students for real-world applications and future career paths.',
      features: [
        
        
        'Tailoring & Fashion Design',
        'Agriculture & Gardening',
        'Cooking & Food Preparation',
        'Arts & Crafts '
      ],
      ageGroups: 'Primary 4 to Primary 7',
      duration: '3 hours per week',
      imagePlaceholder: '/images/Screenshot 2025-09-23 232551.png'
    },
    {
      id: 'sports',
      title: 'Games & Sports',
      category: 'physical',
      description: 'Comprehensive sports and games program promoting physical fitness, teamwork, and healthy competition.',
      features: [
        'Football & handball',
        'Basketball & Netball',
        
        
        'Swimming (Seasonal)',
        'Indoor Games & Chess'
      ],
      ageGroups: 'All Age Groups',
      duration: '4 hours per week',
      imagePlaceholder: '/images/sports2.jpg'
    },
    {
      id: 'daycare',
      title: 'Day Care',
      category: 'care',
      description: 'Comprehensive childcare services providing a safe, nurturing environment for our youngest learners.',
      features: [
        'Full-Day Supervision',
        'Nutritious Meals & Snacks',
        'Nap Time & Rest Periods',
        'Educational Play Activities',
        
      ],
      ageGroups: 'Ages 1-6 years',
      duration: 'Full School Day',
      imagePlaceholder: '/images/IMG-20250923-WA0035.jpg'
    },
    {
      id: 'handwriting',
      title: 'Handwriting & Reading',
      category: 'academic',
      description: 'Foundational literacy program focusing on proper handwriting techniques and comprehensive reading skills.',
      features: [
        'Proper Letter Formation',
        
        'Phonics & Word Recognition',
        'Reading Comprehension',
        'Vocabulary Building',
        
      ],
      ageGroups: 'All classes',
      duration: '5 hours per week',
      imagePlaceholder: '/images/classs.jpg'
    },
    {
      id: 'debating',
      title: 'Debating & Public Speaking',
      category: 'academic',
      description: 'Comprehensive program designed to boost learners\'s public speaking skills, critical thinking, and confidence in expression.',
      features: [
        'Public Speaking Techniques',
        'Critical Thinking Development',
        
        'Confidence Building',
        'Research Skills',
        
        'Presentation Skills',
        
      ],
      ageGroups: 'Primary 3 to Primary 7',
      duration: '2 hours per week',
      imagePlaceholder: '/images/Screenshot 2025-09-23 233027.png'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Programs' },
    { key: 'academic', label: 'Academic' },
    { key: 'practical', label: 'Practical Skills' },
    { key: 'physical', label: 'Physical Development' },
    { key: 'care', label: 'Child Care' }
  ];

  const getFilteredPrograms = () => {
    if (activeProgram === 'all') {
      return programmes;
    }
    return programmes.filter(program => program.category === activeProgram);
  };

  return (
    <div className="programmes-page">
      {/* Programmes Hero Section */}
      <div className="programmes-hero">
        <div className="programmes-hero-slide">
          <img src="/images/kids.JPG" alt="Pamoja Junior School Programs" className="programmes-hero-image" />
          <div className="programmes-hero-overlay">
            <div className="programmes-hero-content">
              <h1>Our Programs</h1>
              <p>Comprehensive educational programs designed to nurture well-rounded individuals through academic excellence, practical skills, and character development - All programs are free of charge to every learner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Programs Introduction */}
        <section className="programmes-intro">
          <div className="intro-content">
            <h2>Excellence in Education</h2>
            <p>
              At Pamoja Junior School, we offer a diverse range of programs designed to cater for the holistic development of every child. 
              Our curriculum combines traditional academic subjects with modern skills training, ensuring our learners are well-prepared for the challenges of tomorrow. 
              <strong>Except the transport service which is PREPAID , the rest of our programs are available for all students at no extra cost. </strong>
            </p>
          </div>
        </section>

        {/* Program Categories */}
        <section className="programme-categories">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeProgram === category.key ? 'active' : ''}`}
                onClick={() => setActiveProgram(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Programs Grid */}
        <section className="programmes-grid">
          <div className="programmes-container">
            {getFilteredPrograms().map((program) => (
              <div key={program.id} className="programme-card">
                <div className="programme-image">
                  <img
                  src={program.imagePlaceholder}
                  alt={program.title}
                  className="programme-img"
                />
                </div>

 

                
                <div className="programme-content">
                  <h3>{program.title}</h3>
                  <p className="programme-description">{program.description}</p>
                  
                  <div className="programme-details">
                    <div className="detail-item">
                      <i className="fa fa-users"></i>
                      <span><strong>Age Groups:</strong> {program.ageGroups}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fa fa-clock"></i>
                      <span><strong>Duration:</strong> {program.duration}</span>
                    </div>
                    
                  </div>

                  <div className="programme-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {program.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Benefits */}
        <section className="programme-benefits">
          <div className="benefits-content">
            <h2>What Makes Our Programs Special?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h3>Qualified Instructors</h3>
                <p>Our experienced teachers and specialists ensure quality education in every program.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-cogs"></i>
                </div>
                <h3>Modern Facilities</h3>
                <p>State-of-the-art equipment and facilities support effective learning experiences.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-child"></i>
                </div>
                <h3>Individual Attention</h3>
                <p>Small class sizes ensure personalized attention for every learners's development.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-money"></i>
                </div>
                <h3>Free Education</h3>
                <p>All the necessary programs are provided free of charge to ensure every child has access to quality education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="programmes-cta">
          <div className="cta-content">
            <h2>Ready to Enroll Your Child?</h2>
            <p>Experience our comprehensive programs and see why Pamoja Junior School provides the best foundation for your child's future - all at no cost to families.</p>
            <div className="cta-buttons">
              <a href="#admissions" className="cta-button primary" onClick={() => setCurrentPage('admissions')}>
                Apply for Admission
              </a>
              <a href="#contact" className="cta-button secondary" onClick={() => setCurrentPage('contact')}>
                Schedule a Visit
              </a>
            </div>
          </div>
        </section>
      </div>

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
              <li><a href="#programmes" onClick={() => setCurrentPage('programmes')}>Programs</a></li>
              <li><a href="#gallery" onClick={() => setCurrentPage('gallery')}>Gallery</a></li>
              <li><a href="#admissions" onClick={() => setCurrentPage('admissions')}>Admissions</a></li>
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
                <span>NKOOWE,GAYAZA VILLAGE, HOIMA Rd, P.O.BOX 132474, WAKISO-UGANDA</span>
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
    </div>
  );
}

export default ProgrammesPage;