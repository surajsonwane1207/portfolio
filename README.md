# Suraj Sonwane - Full Stack MERN Developer Portfolio

A premium, highly interactive, and optimized single-page portfolio website designed to showcase projects, skills, and technical expertise. Built with modern web design standards and clean practices to be completely recruiter-ready.

## 🚀 Key Features

- **Recruiter-Focused UI/UX:** Clean, elegant dark/light theme switching with automatic system preference detection and persistent state storage.
- **Dynamic IDE Visualizer:** Interactive simulated VS Code dashboard displaying developer schemas and credentials in real-time.
- **Scroll Spy Navigation:** Interactive floating navbar that highlights current section position as you scroll.
- **MERN-Stack Showcase:** 4 full-stack projects highlighting database design, real-time networking (WebSockets), authentication, and analytics pipelines.
- **Micro-Animations:** Fluid CSS animations, dynamic typing loops, and glowing hover elevations.
- **Fully Responsive:** Device-agnostic grid layout tailored for seamless mobile, tablet, and desktop layouts.

## 🛠️ Tech Stack

- **Design & Typography:** [Plus Jakarta Sans](https://fonts.google.com/) (Headings) & [Inter](https://fonts.google.com/) (Body Text).
- **Core Structure:** HTML5 with semantic structures.
- **Utility Styling:** Tailwind CSS CDN.
- **Custom CSS:** Advanced custom scrollbars, keyframe floating animations, glassmorphic layouts, and theme transition systems.
- **Interactivity:** Modern Vanilla JavaScript (typing logic, Intersection Observer scrollspy, and mobile hamburger drawer).
- **Icons:** Lucide Icons.

## 📂 Project Structure

```text
portfolio/
├── index.html       # Main entry point and semantic layouts
├── style.css        # Premium style declarations and dark mode theme variables
├── script.js        # Core animations, typing loop, navigation spy, and drawer controls
├── script1.js       # Cloudflare platform challenge script
├── public/
│   └── suraj_sonwane_fullstack.pdf   # Resume asset
└── README.md        # Technical project documentation
```

## ⚙️ Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/surajsonwane1207/portfolio.git
   ```

2. **Run Locally:**
   Simply open `index.html` in any web browser, or launch it with a local server runner (e.g. Live Server in VS Code, or python server):
   ```bash
   python3 -m http.server 8000
   ```

## 🎨 Customization

Content configuration properties can be customized dynamically in `script.js` within the `defaultConfig` object:

```javascript
const defaultConfig = {
    your_name: "Suraj Sonwane",
    your_title: "Full Stack MERN Developer",
    project_title: "Featured Work",
    skills_title: "Skills & Expertise",
    contact_email: "suraj.sonwane1207@gmail.com",
    contact_phone: "+91 8263937371"
};
```

## 🤝 Contact & Profiles

- **Email:** [suraj.sonwane1207@gmail.com](mailto:suraj.sonwane1207@gmail.com)
- **LinkedIn:** [linkedin.com/in/surajsonwanefullstack](https://www.linkedin.com/in/surajsonwanefullstack)
- **GitHub:** [github.com/surajsonwane1207/](https://github.com/surajsonwane1207/)

---
Developed with 💻 and ☕ by Suraj Sonwane
