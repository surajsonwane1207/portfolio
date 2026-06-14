
let typingTimeout = null;
let typeIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function getRoles() {
    return [
        config.your_title || "Full Stack MERN Developer",
        "MERN Stack Specialist",
        "Problem Solver",
        "Scalable API Engineer"
    ];
}

function typeEffect() {
    clearTimeout(typingTimeout);
    const heroTitleEl = document.getElementById('hero-title');
    if (!heroTitleEl) return;
    
    const rolesList = getRoles();
    const currentRole = rolesList[typeIdx % rolesList.length];
    
    if (isDeleting) {
        heroTitleEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingDelay = erasingDelay;
    } else {
        heroTitleEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay; // Pause at the top
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        typeIdx++;
        typingDelay = 500; // Pause before next role
    }
    
    typingTimeout = setTimeout(typeEffect, typingDelay);
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const defaultConfig = {
    your_name: "Suraj Sonwane",
    your_title: "Full Stack MERN Developer",
    project_title: "Featured Work",
    skills_title: "Skills & Expertise",
    contact_email: "suraj.sonwane1207@gmail.com",
    contact_phone: "+91 8263937371"
};

let config = { ...defaultConfig };

const element = {
    defaultConfig,
    async onConfigChange(newConfig) {
        config = { ...config, ...newConfig };

        document.getElementById('hero-name').textContent = config.your_name;
        
        // Reset typing loop to start with the new title immediately
        const heroTitleEl = document.getElementById('hero-title');
        if (heroTitleEl) {
            clearTimeout(typingTimeout);
            charIdx = 0;
            typeIdx = 0;
            isDeleting = false;
            typeEffect();
        }

        document.getElementById('projects-title').textContent = config.project_title;
        document.getElementById('skills-title').textContent = config.skills_title;
        document.getElementById('contact-email').href = `mailto:${config.contact_email}`;
        document.getElementById('contact-email').textContent = config.contact_email;
        document.getElementById('contact-phone').href = `tel:${config.contact_phone.replace(/\D/g, '')}`;
        document.getElementById('contact-phone').textContent = config.contact_phone;
    },
    mapToCapabilities() {
        return {
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        };
    },
    mapToEditPanelValues() {
        return new Map([
            ["your_name", config.your_name],
            ["your_title", config.your_title],
            ["project_title", config.project_title],
            ["skills_title", config.skills_title],
            ["contact_email", config.contact_email],
            ["contact_phone", config.contact_phone]
        ]);
    }
};

// Safely initialize SDK
try {
    if (window.elementSdk) {
        window.elementSdk.init(element);
    }
} catch (e) {
    console.warn("Element SDK not loaded or failed to initialize", e);
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const icon = document.getElementById('menu-icon');
    
    if (!menu || !overlay) return;
    
    const isOpen = menu.classList.contains('open');
    
    if (isOpen) {
        menu.classList.remove('open');
        overlay.classList.remove('opacity-100');
        setTimeout(() => {
            if (!menu.classList.contains('open')) {
                overlay.classList.add('hidden');
            }
        }, 300);
        if (window.lucide && icon) {
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    } else {
        overlay.classList.remove('hidden');
        // Trigger reflow
        overlay.offsetHeight;
        overlay.classList.add('opacity-100');
        menu.classList.add('open');
        if (window.lucide && icon) {
            icon.setAttribute('data-lucide', 'x');
            lucide.createIcons();
        }
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const formMessage = document.getElementById('form-message');
    if (!formMessage) return;
    
    formMessage.innerHTML = '<span class="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold mt-4"><i data-lucide="check-circle" class="w-4 h-4"></i> Message sent successfully! Thank you.</span>';
    if (window.lucide) {
        lucide.createIcons();
    }
    
    e.target.reset();
    
    setTimeout(() => {
        formMessage.innerHTML = '';
    }, 4000);
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const options = {
        root: null,
        threshold: 0.2,
        rootMargin: '-20% 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const onClickAttr = link.getAttribute('onclick') || '';
                    if (onClickAttr.includes(`'${id}'`) || onClickAttr.includes(`"${id}"`)) {
                        link.classList.add('nav-link-active');
                    } else {
                        link.classList.remove('nav-link-active');
                    }
                });
            }
        });
    }, options);
    
    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Start Typing Loop
    typeEffect();
    
    // Init Navigation Scrollspy
    initScrollSpy();
});
