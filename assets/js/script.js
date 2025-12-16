// Landing Page JavaScript

// Analytics Tracking (replace with your analytics code)
function trackEvent(eventName, eventData) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel example
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Console log for debugging
    console.log('📊 Event tracked:', eventName, eventData);
}

document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Video Play Button Functionality
    const playButton = document.querySelector('.play-button');
    const videoThumbnail = document.querySelector('.video-thumbnail');
    
    if (playButton && videoThumbnail) {
        playButton.addEventListener('click', function() {
            // Replace with actual video embed or modal
            alert('Video would play here. Replace this with your actual video implementation.');
            
            // Example: Replace thumbnail with YouTube embed
            // const videoContainer = document.querySelector('.video-container');
            // videoContainer.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>';
        });
    }
    
    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.benefit-card, .step, .testimonial-card, .feature-item');
    
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Header Scroll Effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form Validation (if you add a contact form)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // Mobile Menu Toggle (if you add a mobile menu)
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (mobileMenu && hamburger) {
            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }
    
    // Call mobile menu function
    toggleMobileMenu();
    
    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Testimonial Slider (if you want to add slider functionality)
    function initTestimonialSlider() {
        const testimonials = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        let currentSlide = 0;
        
        if (testimonials.length > 0 && prevBtn && nextBtn) {
            function showSlide(index) {
                testimonials.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % testimonials.length;
                showSlide(currentSlide);
            }
            
            function prevSlide() {
                currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
                showSlide(currentSlide);
            }
            
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Auto-play slider
            setInterval(nextSlide, 5000);
            
            // Initialize
            showSlide(0);
        }
    }
    
    // Call testimonial slider function
    initTestimonialSlider();
    
    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Loading Animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
    
    // Cookie Consent (if needed)
    function initCookieConsent() {
        const cookieConsent = document.querySelector('.cookie-consent');
        const acceptBtn = document.querySelector('.accept-cookies');
        
        if (cookieConsent && acceptBtn) {
            // Check if user has already accepted cookies
            if (!localStorage.getItem('cookiesAccepted')) {
                cookieConsent.style.display = 'block';
            }
            
            acceptBtn.addEventListener('click', function() {
                localStorage.setItem('cookiesAccepted', 'true');
                cookieConsent.style.display = 'none';
            });
        }
    }
    
    // Call cookie consent function
    initCookieConsent();
    
    // Contact Form Submission with Resend
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            const formData = {
                name: this.querySelector('[name="name"]').value,
                email: this.querySelector('[name="email"]').value,
                phone: this.querySelector('[name="phone"]')?.value || '',
                company: this.querySelector('[name="company"]')?.value || '',
                city: this.querySelector('[name="city"]')?.value || '',
                message: this.querySelector('[name="message"]').value
            };
            
            console.log('🔍 Form data being sent:', formData);
            
            try {
                // Backend API endpoint configuration
                const BACKEND_API = window.location.hostname === 'localhost' 
                    ? 'http://localhost:5000'  // Local development backend
                    : 'https://your-backend-app.onrender.com';  // Production backend on Render
                
                const endpoint = `${BACKEND_API}/api/send-email`;
                console.log('📡 Sending request to', endpoint);
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                console.log('📨 Response received:', response.status, response.statusText);
                
                const result = await response.json();
                console.log('📋 Response data:', result);
                
                if (result.success) {
                    // Success message
                    alert('✅ ' + result.message);
                    contactForm.reset();
                    
                    // Track successful form submission
                    trackEvent('form_submission', {
                        form_name: 'contact_form',
                        status: 'success'
                    });
                } else {
                    alert('❌ Error: ' + (result.message || 'Something went wrong. Please try again.'));
                    console.error('Server error:', result);
                    
                    // Track failed submission
                    trackEvent('form_submission', {
                        form_name: 'contact_form',
                        status: 'error',
                        error: result.message
                    });
                }
            } catch (error) {
                console.error('Error:', error);
                alert('❌ Failed to send message. Please check your connection and try again.');
                
                // Track network error
                trackEvent('form_submission', {
                    form_name: 'contact_form',
                    status: 'network_error'
                });
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
    
    // Track button clicks
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.closest('section')?.className || 'unknown'
            });
        });
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', function() {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            // Track at 25%, 50%, 75%, and 100%
            if ([25, 50, 75, 100].includes(scrollDepth)) {
                trackEvent('scroll_depth', {
                    depth: scrollDepth
                });
            }
        }
    });
    
    console.log('Landing page JavaScript loaded successfully!');
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for use in other scripts
window.LandingPage = {
    trackEvent,
    debounce,
    throttle
};
