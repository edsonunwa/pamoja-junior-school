import React from 'react';
import './AboutPage.css';

function AboutPage({ setCurrentPage }) {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <div className="about-hero">
        <div className="about-hero-slide">
          <img src="/images/pupils 2.JPG" alt="Pamoja Junior School About Us" className="about-hero-image" />
          <div className="about-hero-overlay">
            <div className="about-hero-content">
              <h1>About Pamoja Junior School</h1>
              <p>ONE OF THE LEADING DAY AND BOARDING JUNIOR SCHOOLS IN WAKISO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Mission & Vision Section */}
        <section className="mission-vision-section">
          <div className="section-header">
            <h2>Mission & Vision</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <i className="fa fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
              To provide the best quality primary education that emphasizes the spiritual, 
              emotional, social, intellectual and physical development of learners with great future aspirations .
              As a result oriented institution.
      
              </p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon">
                <i className="fa fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
              Empowering all learners to embrace learning ,
              achieve their personal best and build their emotional, social and physical wellbeing.
              As a way of shapping the future of our national leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Messages Section */}
        <section className="leadership-section">
          <div className="section-header">
            <h2>Leadership Messages</h2>
            <div className="section-underline"></div>
          </div>

          {/* Proprietor's Message */}
          <div className="message-card">
            <div className="message-content">
              <div className="message-text">
                <h3>Headteachers  Message</h3>
                <div className="quote-icon">
                  <i className="fa fa-quote-left"></i>
                </div>
                <p>
                  Welcome to Pamoja Junior School, where we believe every child is unique and deserves 
                  the best educational foundation. Since our establishment, we have been committed to 
                  providing quality education that not only focuses on academic excellence but also on 
                  the holistic development of each learner.
                </p>
                <p>
                  Our school is built on the foundation of strong values, innovative teaching methods, 
                  and a nurturing environment that allows children to explore their potential and develop 
                  into responsible citizens of tomorrow. We are proud of our dedicated staff, supportive 
                  parents, and most importantly, our wonderful students who make Pamoja Junior School 
                  a truly special place.
                </p>
                
                  
                
                <div className="signature">
                  <strong>Mr. TUMURAMYE SHINE RONALD</strong>
                  <span>School Headteacher</span>
                </div>
              </div>
              <div className="message-image">
                <img src="/images/headtr.jpg" alt="Mr. Tumuryamye Shine Ronald - School Proprietor" className="director-image" />
              </div>
            </div>
          </div>

          {/* Chairman's Message */}
          <div className="message-card reverse">
            <div className="message-content">
              <div className="message-image">
                <img src="/images/WhatsApp Image 2025-09-18 at 17.23.38_2ac86097.jpg" alt="Mr. Tumuryamye Shine Ronald - Board Chairman" className="director-image" />
              </div>
              <div className="message-text">
                <h3>DO'S Message</h3>
                <div className="quote-icon">
                  <i className="fa fa-quote-left"></i>
                </div>
                <p>
                  As director of studies Pamoja Junior School, I am honored to be part of an institution that 
                  has consistently demonstrated excellence in education and character formation. Our 
                  commitment to providing world-class education in a supportive and caring environment 
                  remains unwavering.
                </p>
                <p>
                  We believe that education is the key to unlocking a child's potential, and at Pamoja, 
                  we ensure that every student receives individual attention and support to thrive 
                  academically, socially, and personally. Our investment in quality infrastructure, 
                  qualified teachers, and modern teaching methods reflects our dedication to excellence.
                  This is through our well drafted timetable that balances academics, co-curricular activities,
                  and personal development.
                </p>
                <div className="signature">
                  <strong>Mr.ALFRED KARAMAGI</strong>
                  <span>Director of studies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Director's Message */}
          <div className="message-card">
            <div className="message-content">
              <div className="message-text">
                <h3>Managing Director's Message</h3>
                <div className="quote-icon">
                  <i className="fa fa-quote-left"></i>
                </div>
                <p>
                  At Pamoja junior school , we believe unity is what enables mankind to grow to greater heights . 
                  This is where we derive our name, PAMOJA a swahili word that means TOGETHER .Dear parents unite with us as we grow our school to another level.
                </p>
                <p>
                  Our approach to education goes beyond traditional classroom learning. We emphasize 
                  critical thinking, creativity, character development and teamwork . Our students are not just 
                  academically prepared but are also equipped with life skills, moral values, and the 
                  confidence to face future challenges with resilience and determination. 
                </p>
                <div className="signature">
                  <strong>Mr. TALEMWA EDSON </strong>
                  <span>One of our Directors</span>
                </div>
              </div>
              <div className="message-image">
                <img src="/images/director.jpg" alt="Mr. Tumuryamye Shine Ronald - Managing Director" className="director-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="teachers-section">
          <div className="section-header">
            <h2>Our Dedicated Teachers</h2>
            <div className="section-underline"></div>
            <p>Meet our qualified and passionate educators who make learning come alive</p>
          </div>

          <div className="teachers-content">
            <div className="teachers-image">
              <img src="/public/images/staff.JPG" alt="Our Teachers" />
              <div className="teachers-overlay">
                <div className="overlay-text">
                  <h3>Excellence in Teaching</h3>
                  <p>Our educators bring passion and expertise to every classroom</p>
                </div>
              </div>
            </div>

            <div className="teachers-info">
              <h3>Why Our Teachers Make the Difference</h3>
              
              <div className="teacher-qualities">
                <div className="quality-item">
                  <div className="quality-icon">
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <div className="quality-text">
                    <h4>Qualified & Experienced</h4>
                    <p>All our teachers hold relevant qualifications and bring years of experience in primary education.</p>
                  </div>
                </div>

                <div className="quality-item">
                  <div className="quality-icon">
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="quality-text">
                    <h4>Passionate & Caring</h4>
                    <p>Our educators are passionate about teaching and genuinely care for each student's success and wellbeing.</p>
                  </div>
                </div>

                <div className="quality-item">
                  <div className="quality-icon">
                    <i className="fa fa-lightbulb"></i>
                  </div>
                  <div className="quality-text">
                    <h4>Innovative Methods</h4>
                    <p>We employ modern teaching methods and technology to make learning engaging and effective.</p>
                  </div>
                </div>

                <div className="quality-item">
                  <div className="quality-icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="quality-text">
                    <h4>Individual Attention</h4>
                    <p>With small class sizes, our teachers provide personalized attention to each student's unique learning needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to Join the Pamoja Family?</h2>
            <p>Experience our commitment to excellence firsthand. We invite you to visit our school and see why Pamoja Junior School is the right choice for your child's educational journey.</p>
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
    </div>
  );
}

export default AboutPage;