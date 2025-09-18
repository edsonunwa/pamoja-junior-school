import React from 'react';
import './ContactPage.css';

function ContactPage({ setCurrentPage }) {
  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <div className="contact-hero">
        <img src="/images/teachers and students.JPG" alt="Pamoja Junior School Contact" className="contact-hero-image" />
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with Pamoja Junior School - We're here to help you with admissions, academic programs, and any questions about our educational community</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academic">Academic Information</option>
                  <option value="fees">Fees and Payment</option>
                  <option value="transport">Transport Services</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" required placeholder="Please share your inquiry or message here..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>NKOOWE, HOIMA Road<br />P.O.BOX 132474<br />WAKISO, Uganda<br /><br />Easily accessible by public transport with ample parking space for visitors.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p>Primary: 0785-135000<br />Secondary: 0754-026921<br /><br />Available during office hours for immediate assistance with your inquiries.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>pamojajunior@gmail.com<br /><br />Send us detailed inquiries and we'll respond within 24 hours during business days.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="info-content">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 7:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 2:00 PM<br />Sunday: Closed<br /><br />School visits are welcome during office hours. Please call ahead to schedule appointments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default ContactPage;