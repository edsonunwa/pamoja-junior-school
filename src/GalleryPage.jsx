import React, { useState } from 'react';
import './GalleryPage.css';

function GalleryPage({ setCurrentPage }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Gallery images organized by categories
  const galleryImages = {
    students: [
      {
        src: "/images/IMG-20250905-WA0049.jpg",
        title: "Happy Students",
        description: "Our joyful students during their learning activities"
      },
      {
        src: "/images/kids.JPG",
        title: "Primary Students",
        description: "Students engaged in classroom activities"
      },
      {
        src: "/images/WhatsApp Image 2025-09-18 at 17.21.42_5acc5477.jpg",
        title: "Learning Together",
        description: "Students collaborating in their studies"
      },
      
      {
        src: "/images/WhatsApp Image 2025-09-18 at 17.21.51_f9e594e6.jpg",
        title: "School Community",
        description: "Our vibrant school community"
      },
      {
        src: "/images/classs.jpg",
        title: "classroom environment",
        description: "How our classes are arranged"
      }
    ],
    staff: [
      {
        src: "/images/staff.JPG",
        title: "Dedicated Staff",
        description: "Some of our committed teaching and administrative staff"
      },
      {
        src: "/images/teachers and students.JPG",
        title: "Teachers and Students",
        description: "Building strong relationships between educators and learners"
      },
      {
        src: "/images/teaches and students.JPG",
        title: "Prefectorial Body",
        description: "staff leaders and student leaders"
      }
    ],
    facilities: [
      {
        src: "/images/logo.jpg",
        title: "School Logo",
        description: "Official Pamoja Junior School emblem"
      }
    ]
  };

  // Get all images or filtered by category
  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[activeCategory] || [];
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'students', label: 'Students' },
    { key: 'staff', label: 'Staff & Teachers' },
    { key: 'facilities', label: 'Facilities' }
  ];

  return (
    <div className="gallery-page">
      {/* Gallery Hero Section */}
      <div className="gallery-hero">
        <div className="gallery-hero-slide">
          <img src="/images/Screenshot 2025-09-20 001843.png" alt="Pamoja Junior School Gallery" className="gallery-hero-image" />
          <div className="gallery-hero-overlay">
            <div className="gallery-hero-content">
              <h1>School Gallery</h1>
              <p>Explore moments that capture the spirit of Pamoja Junior School - Where learning comes alive through memorable experiences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Gallery Introduction */}
        <section className="gallery-intro">
          <div className="intro-content">
            <h2>Capturing Our Journey</h2>
            <p>
              Welcome to our photo gallery showcasing the vibrant life at Pamoja Junior School. 
              From classroom activities to special events, these images tell the story of our 
              educational community and the memorable moments we create together.
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="gallery-categories">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-grid">
          <div className="images-container">
            {getFilteredImages().map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <div className="image-wrapper">
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <button className="view-btn">
                        <i className="fa fa-expand"></i>
                        View Full Size
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="gallery-cta">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Experience the vibrant learning environment at Pamoja Junior School firsthand.</p>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <i className="fa fa-times"></i>
            </button>
            <div className="modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

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

export default GalleryPage;