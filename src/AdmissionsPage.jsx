import React, { useState } from 'react';
import './AdmissionsPage.css';

function AdmissionsPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    parentFirstName: '',
    parentLastName: '',
    parentPhone: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    previousSchool: '',
    documents: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      documents: e.target.files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="admissions-page">
      {/* Admissions Hero Section */}
      <div className="admissions-hero">
        <img src="/images/kids.JPG" alt="Pamoja Junior School Admissions" className="admissions-hero-image" />
        <div className="admissions-hero-overlay">
          <div className="admissions-hero-content">
            <h1>Admissions</h1>
            <p>Join the Pamoja Junior School family - Where excellence meets opportunity in a nurturing educational environment</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Admission Requirements Section */}
        <section className="admission-requirements">
          <div className="requirements-content">
            <h2>Admission Requirements</h2>
            <p className="intro-text">
              We welcome new learners to Pamoja Junior School, where we strive to provide an inclusive and enriching educational environment. 
              Our admission process is designed to ensure that each child is placed in the most suitable learning environment based on their age and educational background.
            </p>

            <div className="requirements-grid">
              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-birthday-cake"></i>
                </div>
                <h3>Age Criteria</h3>
                <ul>
                  <li>Children applying for Kindergarten must be at least 3 years old by the start of the academic year.</li>
                  <li>For Primary 1, applicants should be at least 6 years old.</li>
                </ul>
              </div>

              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-file-text"></i>
                </div>
                <h3>Documentation</h3>
                <ul>
                  <li>Birth certificate or other proof of age.</li>
                  <li>Previous school records or reports (if applicable).</li>
                  <li>Passport-sized photographs.</li>
                </ul>
              </div>

              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-edit"></i>
                </div>
                <h3>Application Form</h3>
                <ul>
                  <li>Interested parents should complete the application form available at the school office or online below.</li>
                </ul>
              </div>

              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-users"></i>
                </div>
                <h3>Interview and Assessment</h3>
                <ul>
                  <li>An interview with the learner and a brief assessment may be conducted to gauge readiness for school and placement in the appropriate grade.</li>
                </ul>
              </div>

              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-money"></i>
                </div>
                <h3>Enrollment Fee</h3>
                <ul>
                  <li>A non-refundable enrollment fee is required upon acceptance to secure the learner's place at the school.</li>
                </ul>
              </div>

              <div className="requirement-card">
                <div className="requirement-icon">
                  <i className="fa fa-calendar"></i>
                </div>
                <h3>Academic Calendar</h3>
                <ul>
                  <li>School year begins in February and ends in November.</li>
                  <li>Three terms with mid-term breaks and holidays.</li>
                  <li>Applications accepted throughout the year based on availability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Online Application Form Section */}
        <section className="online-application">
          <div className="application-header">
            <h2>Online Admission Form</h2>
            <p>Complete the form below to apply for admission to Pamoja Junior School</p>
          </div>

          <div className="application-content">
            <div className="form-container">
              <form className="admission-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Child's Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">Child's First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Child's Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="gender">Applicant's Gender/Sex *</label>
                      <select 
                        id="gender" 
                        name="gender" 
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Date of Birth of Applicant (Child) *</label>
                      <input 
                        type="date" 
                        id="dateOfBirth" 
                        name="dateOfBirth" 
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="nationality">Nationality of Applicant *</label>
                    <input 
                      type="text" 
                      id="nationality" 
                      name="nationality" 
                      value={formData.nationality}
                      onChange={handleInputChange}
                      placeholder="e.g., Ugandan"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="previousSchool">Name of Previous School (if applicable)</label>
                    <input 
                      type="text" 
                      id="previousSchool" 
                      name="previousSchool" 
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      placeholder="Enter previous school name"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Parent/Guardian Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="parentFirstName">Parent/Guardian's First Name *</label>
                      <input 
                        type="text" 
                        id="parentFirstName" 
                        name="parentFirstName" 
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parentLastName">Parent/Guardian's Last Name *</label>
                      <input 
                        type="text" 
                        id="parentLastName" 
                        name="parentLastName" 
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="parentPhone">Parent/Guardian Phone (Preferably WhatsApp) *</label>
                    <input 
                      type="tel" 
                      id="parentPhone" 
                      name="parentPhone" 
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="e.g., +256 700 000 000"
                      required 
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Required Documents</h3>
                  
                  <div className="form-group file-upload">
                    <label htmlFor="documents">Upload Documents *</label>
                    <div className="file-upload-area">
                      <input 
                        type="file" 
                        id="documents" 
                        name="documents" 
                        onChange={handleFileChange}
                        multiple 
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        required 
                      />
                      <div className="file-upload-text">
                        <i className="fa fa-cloud-upload"></i>
                        <p>Click or drag files to this area to upload</p>
                        <small>You can upload up to 5 files (PDF, Images, Documents)</small>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit-application-btn">
                  Submit Application
                </button>
              </form>
            </div>

            <div className="admission-info">
              <div className="info-card">
                <h3>Application Process</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Submit Application</h4>
                      <p>Complete and submit the online application form with required documents.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Review Process</h4>
                      <p>Our admissions team will review your application and documents.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Interview & Assessment</h4>
                      <p>Schedule an interview and assessment session for your child.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Admission Decision</h4>
                      <p>Receive admission decision and enrollment instructions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h3>Need Help?</h3>
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
                  <span>NKOOWE, HOIMA Rd, WAKISO, Uganda</span>
                </div>
              </div>
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

export default AdmissionsPage;