// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Notification Modal (modal still exists but CTAs removed)
const notifyModal = document.getElementById('notifyModal');
const closeModal = document.getElementById('closeModal');

function openModal() {
    notifyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    notifyModal.classList.remove('active');
    document.body.style.overflow = '';
}

// All CTA buttons removed; no open triggers from nav/hero

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

// Close modal on outside click
if (notifyModal) {
    notifyModal.addEventListener('click', (e) => {
        if (e.target === notifyModal) {
            closeModalFunc();
        }
    });
}

// Form Submissions
const notifyForm = document.getElementById('notifyForm');
const modalNotifyForm = document.getElementById('modalNotifyForm');
const comingSoonForm = document.getElementById('comingSoonForm');
const comingSoonEmail = document.getElementById('comingSoonEmail');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

function showToast(message) {
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function handleFormSubmit(e, emailInput) {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (!email) {
        showToast('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    console.log('Email submitted:', email);
    
    showToast('Thank you! We\'ll notify you when VERCE launches.');
    
    // Clear form
    emailInput.value = '';
    
    // Close modal if open
    if (notifyModal) {
        closeModalFunc();
    }
}

if (notifyForm) {
    const emailInput = document.getElementById('emailInput');
    notifyForm.addEventListener('submit', (e) => {
        handleFormSubmit(e, emailInput);
    });
}

if (modalNotifyForm) {
    const modalEmailInput = document.getElementById('modalEmailInput');
    modalNotifyForm.addEventListener('submit', (e) => {
        handleFormSubmit(e, modalEmailInput);
    });
}

if (comingSoonForm && comingSoonEmail) {
    comingSoonForm.addEventListener('submit', (e) => {
        handleFormSubmitWithDebounce(e, comingSoonEmail);
    });
}

// Scroll Animation
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

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step-item, .use-case-card, .pricing-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Prevent form submission spam
let isSubmitting = false;

function handleFormSubmitWithDebounce(e, emailInput) {
    e.preventDefault();
    
    if (isSubmitting) {
        return;
    }
    
    isSubmitting = true;
    
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email address');
        isSubmitting = false;
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        console.log('Email submitted:', email);
        showToast('Thank you! We\'ll notify you when VERCE launches.');
        emailInput.value = '';
        isSubmitting = false;
        
        if (notifyModal) {
            closeModalFunc();
        }
    }, 500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Update form handlers with debounce
if (notifyForm) {
    const emailInput = document.getElementById('emailInput');
    notifyForm.addEventListener('submit', (e) => {
        handleFormSubmitWithDebounce(e, emailInput);
    });
}

if (modalNotifyForm) {
    const modalEmailInput = document.getElementById('modalEmailInput');
    modalNotifyForm.addEventListener('submit', (e) => {
        handleFormSubmitWithDebounce(e, modalEmailInput);
    });
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && notifyModal && notifyModal.classList.contains('active')) {
        closeModalFunc();
    }
});

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.style.opacity = '0.6';
        button.style.cursor = 'not-allowed';
    } else {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    }
}

// Countdown logic (15 days from now)
(function initCountdown() {
    const launchDateEl = document.getElementById('launchDate');
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMinutes = document.getElementById('cdMinutes');
    const cdSeconds = document.getElementById('cdSeconds');

    if (!cdDays || !cdHours || !cdMinutes || !cdSeconds) return;

    const launch = new Date();
    launch.setDate(launch.getDate() + 15);

    if (launchDateEl) {
        const fmt = launch.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        launchDateEl.textContent = fmt;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const dist = launch.getTime() - now;

        if (dist <= 0) {
            cdDays.textContent = '00';
            cdHours.textContent = '00';
            cdMinutes.textContent = '00';
            cdSeconds.textContent = '00';
            return;
        }

        const days = Math.floor(dist / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dist % (1000 * 60)) / 1000);

        cdDays.textContent = String(days).padStart(2, '0');
        cdHours.textContent = String(hours).padStart(2, '0');
        cdMinutes.textContent = String(minutes).padStart(2, '0');
        cdSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();

