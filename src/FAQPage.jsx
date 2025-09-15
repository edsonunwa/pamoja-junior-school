import React, { useState, useEffect } from 'react';
import './FAQPage.css';

function FAQPage({ setCurrentPage }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero slider images
  const heroImages = [
    "/images/pupils 2.JPG",
    "/images/happy pupils.JPG",
    "/images/kids.JPG",
    "/images/teachers and students.JPG",
    "/images/staff.JPG"
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const faqData = [
    {
      category: "Admissions & Enrollment",
      questions: [
        {
          question: "What are the age requirements for admission?",
          answer: "Children applying for Kindergarten must be at least 3 years old by the start of the academic year. For Primary 1, applicants should be at least 6 years old. We assess each child individually to ensure proper placement."
        },
        {
          question: "When can I apply for admission?",
          answer: "Applications are accepted throughout the year based on availability. However, we recommend applying early as spaces fill up quickly. The main admission period is November to January for the following academic year."
        },
        {
          question: "What documents do I need for admission?",
          answer: "Required documents include: birth certificate or proof of age, previous school records (if applicable), passport-sized photographs, completed application form, and medical records/immunization certificate."
        },
        {
          question: "Is there an entrance exam?",
          answer: "We conduct a brief assessment and interview to gauge the child's readiness for school and ensure proper grade placement. This is not a competitive exam but helps us understand your child's learning needs."
        }
      ]
    },
    {
      category: "Academic Programs",
      questions: [
        {
          question: "What curriculum does the school follow?",
          answer: "Pamoja Junior School follows the Ugandan National Curriculum with enhanced international best practices. We focus on holistic education that develops spiritual, emotional, social, intellectual, and physical aspects of each learner."
        },
        {
          question: "What languages are taught at the school?",
          answer: "We teach in English as the primary language of instruction. We also offer local languages and basic French as part of our comprehensive language program to prepare students for global citizenship."
        },
        {
          question: "What is the teacher-to-student ratio?",
          answer: "We maintain small class sizes with a maximum teacher-to-student ratio of 1:25 to ensure personalized attention and quality education for every child."
        },
        {
          question: "Do you offer extracurricular activities?",
          answer: "Yes, we offer a wide range of activities including sports (football, netball, athletics), music, drama, art, debate club, science club, and various cultural activities to develop well-rounded students."
        }
      ]
    },
    {
      category: "Fees & Payments",
      questions: [
        {
          question: "What are the school fees?",
          answer: "School fees vary by grade level and include tuition, meals, and basic supplies. Please contact our admissions office at 0785-135000 for current fee structure and payment plans."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, mobile money (MTN Mobile Money, Airtel Money), cash payments at the school office, and bank deposits. Payment schedules can be arranged termly or monthly."
        },
        {
          question: "Are there any additional fees?",
          answer: "Additional fees may include school uniform, books, examination fees, and optional activities like school trips. All fees are clearly communicated before each term begins."
        },
        {
          question: "Do you offer scholarships or financial aid?",
          answer: "We offer limited scholarships based on academic merit and financial need. Please contact our admissions office to inquire about available scholarship opportunities and application procedures."
        }
      ]
    },
    {
      category: "School Life & Facilities",
      questions: [
        {
          question: "What are the school hours?",
          answer: "School hours are Monday to Friday from 7:00 AM to 5:00 PM. Saturday classes run from 8:00 AM to 2:00 PM. We also offer extended care for working parents."
        },
        {
          question: "Do you provide meals?",
          answer: "Yes, we provide nutritious breakfast, lunch, and snacks as part of our meal program. Our meals are prepared on-site with fresh, locally sourced ingredients to ensure proper nutrition for growing children."
        },
        {
          question: "Is transportation provided?",
          answer: "We provide safe and reliable school transport to various routes around Kampala and Wakiso. Transport fees are separate from tuition fees. Contact us for available routes and costs."
        },
        {
          question: "What safety measures are in place?",
          answer: "We have 24/7 security, CCTV monitoring, trained first aid staff, secure perimeter fencing, and strict visitor protocols. All staff undergo background checks and child protection training."
        }
      ]
    },
    {
      category: "Health & Wellness",
      questions: [
        {
          question: "What health services do you provide?",
          answer: "We have a qualified nurse on-site, basic medical facilities for first aid, regular health screenings, and partnerships with nearby medical facilities for emergencies."
        },
        {
          question: "What is your policy on sick children?",
          answer: "Children with fever, contagious illnesses, or symptoms of illness should stay home. We have isolation facilities for children who become unwell during school hours and will contact parents immediately."
        },
        {
          question: "Are vaccinations required?",
          answer: "Yes, children must be up-to-date with all routine vaccinations as per Uganda's immunization schedule. We require proof of vaccination during the admission process."
        }
      ]
    },
    {
      category: "Communication & Support",
      questions: [
        {
          question: "How do you communicate with parents?",
          answer: "We maintain regular communication through termly reports, parent-teacher conferences, SMS updates, WhatsApp groups, newsletters, and our school notice board. Parents can also schedule meetings with teachers as needed."
        },
        {
          question: "How can I track my child's progress?",
          answer: "We provide detailed termly reports, continuous assessment feedback, and regular parent-teacher conferences. Teachers are also available for individual consultations to discuss your child's progress."
        },
        {
          question: "What support is available for children with special needs?",
          answer: "We provide individualized support for children with learning differences. Our teachers are trained to identify and support various learning needs, and we work closely with parents to develop appropriate support plans."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      {/* FAQ Hero Section */}
      <div className="faq-hero">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`faq-hero-slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Pamoja Junior School FAQ ${index + 1}`} className="faq-hero-image" />
            <div className="faq-hero-overlay">
              <div className="faq-hero-content">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about Pamoja Junior School - Your questions matter to us</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider dots */}
        <div className="faq-slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`faq-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="container">
        {/* FAQ Introduction */}
        <section className="faq-intro">
          <div className="intro-content">
            <h2>We're Here to Help</h2>
            <p>
              Below you'll find answers to the most frequently asked questions about Pamoja Junior School. 
              If you don't find what you're looking for, please don't hesitate to contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="faq-content">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h3 className="category-title">
                <i className="fa fa-folder-open"></i>
                {category.category}
              </h3>
              
              <div className="faq-accordion">
                {category.questions.map((faq, questionIndex) => {
                  const accordionIndex = `${categoryIndex}-${questionIndex}`;
                  return (
                    <div key={questionIndex} className="accordion-item">
                      <div 
                        className={`accordion-header ${activeAccordion === accordionIndex ? 'active' : ''}`}
                        onClick={() => toggleAccordion(accordionIndex)}
                      >
                        <h4>{faq.question}</h4>
                        <i className={`fa fa-chevron-${activeAccordion === accordionIndex ? 'up' : 'down'}`}></i>
                      </div>
                      <div className={`accordion-content ${activeAccordion === accordionIndex ? 'active' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="faq-contact">
          <div className="contact-cta">
            <h2>Still Have Questions?</h2>
            <p>We're always happy to help! Get in touch with us for any additional information you need.</p>
            
            <div className="contact-options">
              <div className="contact-option">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>0785-135000 / 0754-026921</p>
                  <small>Available during office hours</small>
                </div>
              </div>
              
              <div className="contact-option">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p>pamojajunior@gmail.com</p>
                  <small>We respond within 24 hours</small>
                </div>
              </div>
              
              <div className="contact-option">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-details">
                  <h4>Visit Us</h4>
                  <p>NKOOWE, HOIMA Road</p>
                  <small>Monday - Friday: 7:00 AM - 5:00 PM</small>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary" onClick={() => setCurrentPage('contact')}>Contact Us</a>
              <a href="#admissions" className="cta-button secondary" onClick={() => setCurrentPage('admissions')}>Apply Now</a>
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
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#admissions">Admissions</a></li>
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
    </div>
  );
}

export default FAQPage;