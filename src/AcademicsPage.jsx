import React, { useState } from 'react';
import './AcademicsPage.css';

function AcademicsPage({ setCurrentPage }) {
  const [activeLevel, setActiveLevel] = useState('all');

  const academicLevels = [
    {
      id: 'nursery',
      title: 'Nursery Section',
      ageRange: '3-5 years',
      category: 'early',
      description: 'Foundation learning through play-based education, building essential skills for future academic success.',
      subjects: [
        'Pre-Reading Skills',
        'Number Recognition',
        'Creative Arts',
      
        'Social Skills',
        'Basic English',
        'Environmental Awareness'
      ],
      highlights: [
        'Play-based learning approach',
        'Individual attention for each child',
        'Safe and nurturing environment',
        'Preparation for formal education'
      ],
      imagePlaceholder: 'nursery-students.jpg'
    },
    {
      id: 'primary-lower',
      title: 'Lower Primary (P1-P3)',
      ageRange: '6-8 years',
      category: 'primary',
      description: 'Building strong foundational skills in literacy, numeracy, and critical thinking through engaging and interactive learning.',
      subjects: [
        'English Language',
        'Mathematics',
        'Science',
        'Social Studies',
        'Religious Education',
        'Physical Education',
        'Creative Arts',
        'Life Skills'
      ],
      highlights: [
        'Phonics-based reading instruction',
        'Hands-on mathematics learning',
        'Interactive science experiments',
        'Character development focus'
      ],
      imagePlaceholder: 'lower-primary.jpg'
    },
    {
      id: 'primary-upper',
      title: 'Upper Primary (P4-P7)',
      ageRange: '9-13 years',
      category: 'primary',
      description: 'Advanced academic preparation with comprehensive curriculum leading to Primary Leaving Examinations excellence.',
      subjects: [
        'English Language',
        'Mathematics',
        'Science',
        'Social Studies',
        'Religious Education',
        'Physical Education',
        'Agricultural Science',
        'Computer Studies'
      ],
      highlights: [
        'PLE examination preparation',
        'Advanced problem-solving skills',
        'Research and project work',
        'Leadership development'
      ],
      imagePlaceholder: 'upper-primary.jpg'
    }
  ];

  const academicFeatures = [
    {
      icon: 'fa-graduation-cap',
      title: 'Academic Excellence',
      description: 'Consistently high performance in national examinations with personalized learning approaches.'
    },
    {
      icon: 'fa-users',
      title: 'Personalized Learning Environment',
      description: 'Carefully managed class sizes ensuring individual attention and quality teacher-student interaction for optimal learning.'
    },
    {
      icon: 'fa-book',
      title: 'Comprehensive Curriculum',
      description: 'Following the Uganda National Curriculum with additional enrichment programs for holistic development.'
    },
    {
      icon: 'fa-trophy',
      title: 'Outstanding Results',
      description: 'Proven track record of students excelling in Primary Leaving Examinations and gaining admission to top secondary schools.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovative Teaching',
      description: 'Modern teaching methodologies combining traditional values with contemporary educational practices.'
    },
    {
      icon: 'fa-heart',
      title: 'Holistic Development',
      description: 'Nurturing not just academic success but also character, values, and life skills for well-rounded individuals.'
    }
  ];

  const assessmentMethods = [
    {
      title: 'Continuous Assessment',
      description: 'Regular evaluations throughout the term to track student progress and provide timely support.',
      icon: 'fa-chart-line'
    },
    {
      title: 'Project-Based Learning',
      description: 'Hands-on projects that develop critical thinking and practical application of knowledge.',
      icon: 'fa-project-diagram'
    },
    {
      title: 'Standardized Testing',
      description: 'Preparation for national examinations with mock tests and comprehensive review sessions.',
      icon: 'fa-clipboard-check'
    },
    {
      title: 'Portfolio Development',
      description: 'Student work collections showcasing growth, creativity, and academic achievements over time.',
      icon: 'fa-folder-open'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Levels' },
    { key: 'early', label: 'Early Years' },
    { key: 'primary', label: 'Primary Education' }
  ];

  const getFilteredLevels = () => {
    if (activeLevel === 'all') {
      return academicLevels;
    }
    return academicLevels.filter(level => level.category === activeLevel);
  };

  return (
    <div className="academics-page">
      {/* Academics Hero Section */}
      <div className="academics-hero">
        <div className="academics-hero-slide">
          <img src="/images/teachers and students.JPG" alt="Academic Excellence at Pamoja Junior School" className="academics-hero-image" />
          <div className="academics-hero-overlay">
            <div className="academics-hero-content">
              <h1>Academic Excellence</h1>
              <p>The heart and soul of Pamoja Junior School - Where exceptional education shapes tomorrow's leaders through rigorous academics, innovative teaching, and unwavering commitment to student success</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Academics Introduction */}
        <section className="academics-intro">
          <div className="intro-content">
            <h2>Our Educational Foundation</h2>
            <p>
              At Pamoja Junior School, academics is not just what we do - it's who we are. Every decision, every program, 
              and every moment in our school day is designed around one central mission: providing exceptional education 
              that prepares our students for academic success and lifelong learning. Our comprehensive curriculum, 
              experienced faculty, and proven teaching methodologies create an environment where every child can excel.
            </p>
            <div className="academic-stats">
              
              <div className="stat-item">
                <h3>15+</h3>
                <p>Qualified Teachers</p>
              </div>
              <div className="stat-item">
                <h3>8</h3>
                <p>Core Subjects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Level Categories */}
        <section className="academic-categories">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeLevel === category.key ? 'active' : ''}`}
                onClick={() => setActiveLevel(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Academic Levels Grid */}
        <section className="academic-levels">
          <div className="levels-container">
            {getFilteredLevels().map((level) => (
              <div key={level.id} className="level-card">
                <div className="level-image">
                  <div className="image-placeholder">
                    <i className="fa fa-image"></i>
                    <span>{level.imagePlaceholder}</span>
                  </div>
                </div>
                <div className="level-content">
                  <div className="level-header">
                    <h3>{level.title}</h3>
                    <span className="age-range">{level.ageRange}</span>
                  </div>
                  <p className="level-description">{level.description}</p>
                  
                  <div className="subjects-section">
                    <h4>Core Subjects:</h4>
                    <div className="subjects-grid">
                      {level.subjects.map((subject, index) => (
                        <span key={index} className="subject-tag">{subject}</span>
                      ))}
                    </div>
                  </div>

                  <div className="highlights-section">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {level.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Features */}
        <section className="academic-features">
          <div className="features-content">
            <h2>What Makes Our Academics Outstanding?</h2>
            <div className="features-grid">
              {academicFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <i className={`fa ${feature.icon}`}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Methods */}
        <section className="assessment-methods">
          <div className="assessment-content">
            <h2>Our Assessment Approach</h2>
            <p>We believe in comprehensive evaluation that supports learning and growth, not just grading.</p>
            <div className="methods-grid">
              {assessmentMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-icon">
                    <i className={`fa ${method.icon}`}></i>
                  </div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="academics-cta">
          <div className="cta-content">
            <h2>Experience Academic Excellence</h2>
            <p>Join a school where academics is our passion, our purpose, and our promise to your child's future. Discover what exceptional education truly means.</p>
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
              <li><a href="#academics" onClick={() => setCurrentPage('academics')}>Academics</a></li>
              <li><a href="#programs" onClick={() => setCurrentPage('programmes')}>Our Programs</a></li>
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
    </div>
  );
}

export default AcademicsPage;