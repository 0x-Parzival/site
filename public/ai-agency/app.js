// Parzival AI Agency - Interactive JavaScript

// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const consultationModal = document.getElementById('consultation-modal');
const consultationForm = document.getElementById('consultation-form');
const modalConsultationForm = document.getElementById('modal-consultation-form');

// Mobile Navigation Toggle
function initMobileNavigation() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Modal Functions - Fixed implementation
function openConsultationModal() {
    console.log('Opening consultation modal...');
    if (consultationModal) {
        consultationModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus on first input for accessibility
        const firstInput = consultationModal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
        console.log('Modal opened successfully');
    } else {
        console.error('Consultation modal not found');
    }
}

function closeConsultationModal() {
    console.log('Closing consultation modal...');
    if (consultationModal) {
        consultationModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Modal closed successfully');
    }
}

// Form Handling - Enhanced with proper feedback
function handleFormSubmission(form, isModal = false) {
    if (!form) {
        console.error('Form not found for handling submission');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Form submission started...');
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Get data from input fields if FormData is empty
        if (Object.keys(data).length === 0) {
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.name) {
                    data[input.name] = input.value;
                } else {
                    // Use placeholder as fallback key
                    const key = input.placeholder || input.type;
                    data[key] = input.value;
                }
            });
        }
        
        try {
            // Simulate form submission
            await simulateFormSubmission(data);
            
            // Show success message
            showNotification('Success! We\'ll contact you within 24 hours for your free consultation.', 'success');
            
            // Reset form
            form.reset();
            
            // Close modal if it's a modal form
            if (isModal) {
                setTimeout(() => {
                    closeConsultationModal();
                }, 1500);
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('There was an error submitting your form. Please try again.', 'error');
        } finally {
            // Reset button
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
            }, 500);
        }
    });
}

// Enhanced form submission simulation
async function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Form submitted with data:', data);
            
            // Check if we have some required data
            const hasName = data.name || data['Your Name'] || data['Full Name'] || Object.values(data).some(val => val && val.length > 2);
            
            if (hasName) {
                resolve('Success');
            } else {
                reject(new Error('Please fill in the required fields'));
            }
        }, 1500);
    });
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const bgColor = type === 'success' 
        ? 'rgba(33, 128, 141, 0.95)' 
        : type === 'error' 
        ? 'rgba(192, 21, 47, 0.95)' 
        : 'rgba(98, 108, 113, 0.95)';
    
    const borderColor = type === 'success' 
        ? 'rgba(33, 128, 141, 0.3)' 
        : type === 'error' 
        ? 'rgba(192, 21, 47, 0.3)' 
        : 'rgba(98, 108, 113, 0.3)';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        backdrop-filter: blur(10px);
        border: 1px solid ${borderColor};
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-size: 14px;
        line-height: 1.4;
    `;
    
    // Add notification to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    console.log(`Notification shown: ${type} - ${message}`);
}

// Add notification animations to head
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.1);
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize Button Event Listeners
function initButtonEventListeners() {
    // Get Free Business Report buttons
    const freeReportButtons = document.querySelectorAll('button[onclick*="openConsultationModal"], .btn:contains("Get Free Business Report"), .btn:contains("Get Free Report")');
    
    // More specific selectors for buttons
    const heroFreeReportBtn = document.querySelector('.hero-cta .btn--primary');
    const serviceFreeReportBtn = document.querySelector('.service-card .btn--outline');
    const serviceAutomationBtn = document.querySelector('.service-card.featured .btn--primary');
    const navConsultationBtn = document.querySelector('.nav-cta');
    
    // Add event listeners with explicit functions
    if (heroFreeReportBtn) {
        heroFreeReportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Hero free report button clicked');
            openConsultationModal();
        });
    }
    
    if (serviceFreeReportBtn) {
        serviceFreeReportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Service free report button clicked');
            openConsultationModal();
        });
    }
    
    if (serviceAutomationBtn) {
        serviceAutomationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Service automation button clicked');
            openConsultationModal();
        });
    }
    
    if (navConsultationBtn) {
        navConsultationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Nav consultation button clicked');
            openConsultationModal();
        });
    }
    
    // Explore Automation button
    const exploreBtn = document.querySelector('.hero-cta .btn--outline');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Explore automation button clicked');
            scrollToSection('services');
        });
    }
}

// Fix dropdown functionality
function fixDropdownFunctionality() {
    const dropdowns = document.querySelectorAll('select.form-control');
    dropdowns.forEach(dropdown => {
        dropdown.style.cursor = 'pointer';
        dropdown.addEventListener('click', (e) => {
            console.log('Dropdown clicked');
        });
        
        dropdown.addEventListener('change', (e) => {
            console.log('Dropdown selection changed to:', e.target.value);
        });
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.3)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Tech Orbit Interactions
function initTechOrbitInteractions() {
    const orbitItems = document.querySelectorAll('.orbit-item');
    
    orbitItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const techName = item.getAttribute('data-tech');
            if (techName) {
                showTechTooltip(item, techName);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            hideTechTooltip();
        });
    });
}

function showTechTooltip(element, techName) {
    hideTechTooltip();
    
    const techDescriptions = {
        'OMNet': 'Universal intelligence network connecting all systems',
        'Kalki': 'Divine operating system orchestrating AI workflows',
        'AECH': 'Modular blockchain and global DeFi layer',
        'DataTreya': 'Cybersecurity AI for comprehensive protection',
        'DevDat': 'Advanced identity engine for secure management',
        'Krix': 'Reflective AI soul providing strategic insights'
    };
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    tooltip.textContent = techDescriptions[techName] || 'Advanced AI Technology';
    
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 1000;
        border: 1px solid rgba(33, 128, 141, 0.3);
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
}

function hideTechTooltip() {
    const tooltip = document.querySelector('.tech-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Keyboard Navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeConsultationModal();
        }
        
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    scrollToSection('home');
                    break;
                case '2':
                    e.preventDefault();
                    scrollToSection('services');
                    break;
                case '3':
                    e.preventDefault();
                    scrollToSection('technology');
                    break;
                case '4':
                    e.preventDefault();
                    scrollToSection('process');
                    break;
                case '5':
                    e.preventDefault();
                    scrollToSection('contact');
                    break;
            }
        }
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .tech-card, .process-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize Analytics
function initAnalytics() {
    console.log('Page viewed:', window.location.pathname);
    
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn--primary')) {
            console.log('Primary button clicked:', e.target.textContent);
        }
        
        if (e.target.matches('.nav-link')) {
            console.log('Navigation clicked:', e.target.textContent);
        }
    });
}

// Global Functions
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.scrollToSection = scrollToSection;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Parzival AI Agency - Initializing...');
    
    // Initialize all components
    addNotificationStyles();
    initMobileNavigation();
    initNavbarScrollEffect();
    initTechOrbitInteractions();
    initKeyboardNavigation();
    initScrollAnimations();
    initAnalytics();
    initButtonEventListeners(); // Initialize button listeners
    fixDropdownFunctionality(); // Fix dropdown issues
    
    // Handle form submissions
    handleFormSubmission(consultationForm, false);
    handleFormSubmission(modalConsultationForm, true);
    
    console.log('Parzival AI Agency - Ready!');
    
    // Test notification system
    setTimeout(() => {
        console.log('All systems initialized successfully');
    }, 1000);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('User returned to page');
    }
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Placeholder for service worker registration
        console.log('Service worker support detected');
    });
}