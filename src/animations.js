// Professional Animation System for Pamoja Junior School Website

// Initialize animations when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

function initializeAnimations() {
    // Add scroll-triggered animations
    const animatedElements = document.querySelectorAll([
        '.animate-fadeInUp',
        '.animate-fadeInLeft', 
        '.animate-fadeInRight',
        '.animate-fadeInScale',
        '.animate-slideInLeft',
        '.animate-slideInRight',
        '.animate-bounceIn',
        '.animate-zoomIn'
    ].join(','));

    // Set initial state for animated elements
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = getInitialTransform(element);
    });

    // Create Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAnimation(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add enhanced hover effects
    addEnhancedHoverEffects();
    
    // Add page transition effects
    addPageTransitions();
}

function getInitialTransform(element) {
    if (element.classList.contains('animate-fadeInUp')) {
        return 'translateY(30px)';
    } else if (element.classList.contains('animate-fadeInLeft') || element.classList.contains('animate-slideInLeft')) {
        return 'translateX(-30px)';
    } else if (element.classList.contains('animate-fadeInRight') || element.classList.contains('animate-slideInRight')) {
        return 'translateX(30px)';
    } else if (element.classList.contains('animate-fadeInScale') || element.classList.contains('animate-zoomIn')) {
        return 'scale(0.9)';
    } else if (element.classList.contains('animate-bounceIn')) {
        return 'scale(0.8)';
    }
    return 'none';
}

function triggerAnimation(element) {
    // Get delay from class
    let delay = 0;
    if (element.classList.contains('animate-delay-1')) delay = 100;
    else if (element.classList.contains('animate-delay-2')) delay = 200;
    else if (element.classList.contains('animate-delay-3')) delay = 300;
    else if (element.classList.contains('animate-delay-4')) delay = 400;
    else if (element.classList.contains('animate-delay-5')) delay = 500;
    else if (element.classList.contains('animate-delay-6')) delay = 600;

    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'none';
        element.style.transition = 'all 0.8s ease-out';
        
        // Add special effects for specific animations
        if (element.classList.contains('animate-bounceIn')) {
            element.style.animation = 'bounceIn 0.8s ease-out';
        }
    }, delay);
}

function addEnhancedHoverEffects() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll([
        '.mission-card',
        '.vision-card', 
        '.requirement-card',
        '.value-item',
        '.gallery-item',
        '.level-card',
        '.program-card',
        '.contact-info-card',
        '.message-card'
    ].join(','));

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll([
        '.cta-button',
        '.btn-primary',
        '.btn-secondary',
        '.event-btn',
        '.submit-btn',
        '.category-btn'
    ].join(','));

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

function addPageTransitions() {
    // Smooth page transitions
    const pageElements = document.querySelectorAll([
        '.about-page',
        '.academics-page', 
        '.admissions-page',
        '.contact-page',
        '.faq-page',
        '.gallery-page',
        '.programmes-page'
    ].join(','));

    pageElements.forEach(page => {
        if (page) {
            page.style.opacity = '0';
            page.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                page.style.transition = 'all 0.6s ease-out';
                page.style.opacity = '1';
                page.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

// Staggered animation for lists and grids
function addStaggeredAnimations() {
    const gridContainers = document.querySelectorAll([
        '.mission-vision-grid',
        '.requirements-grid',
        '.values-grid',
        '.images-container',
        '.levels-container',
        '.programs-grid',
        '.highlight-grid'
    ].join(','));

    gridContainers.forEach(container => {
        const items = container.children;
        Array.from(items).forEach((item, index) => {
            item.classList.add('animate-fadeInUp');
            item.classList.add(`animate-delay-${Math.min(index + 1, 6)}`);
        });
    });
}

// Initialize staggered animations after DOM content loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addStaggeredAnimations, 500);
});

// Export for use in other modules
export { initializeAnimations, addStaggeredAnimations };