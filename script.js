
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // No need to call createIcons() here as they are already injected SVGs 
    // with dark mode utility classes.
}

const defaultConfig = {
    your_name: "Suraj Sonwane",
    your_title: "Full Stack MERN Developer",
    project_title: "Featured Projects",
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
        document.getElementById('hero-title').textContent = config.your_title;
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

function handleSubmit(e) {
    e.preventDefault();
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Message sent! Thank you for reaching out.';
    formMessage.classList.add('text-green-400');
    e.target.reset();
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('text-green-400');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});
