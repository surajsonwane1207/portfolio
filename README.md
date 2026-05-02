# Suraj Sonwane - Full Stack MERN Developer Portfolio

A modern, responsive, and high-performance single-page portfolio website built with clean code and a focus on visual appeal. This portfolio showcases projects, skills, and professional expertise with a seamless user experience.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview+Placeholder)

## 🚀 Features

- **Dark & Light Mode:** Seamless theme switching with system preference detection and persistent storage via `localStorage`.
- **Responsive Design:** Optimized for all screen sizes from mobile to desktop using Tailwind CSS.
- **Dynamic Content:** Integrated with a custom SDK for real-time content updates and easy customization.
- **Glassmorphism UI:** Modern aesthetic with backdrop filters, smooth gradients, and entrance animations.
- **Interactive Elements:**
    - Smooth internal navigation.
    - Functional contact form with validation.
    - Resume download integration.
    - Iconography powered by Lucide.

## 🛠️ Tech Stack

- **Frontend:** HTML5, [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** Vanilla JavaScript
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Typography:** [Google Fonts](https://fonts.google.com/) (Playfair Display & Lato)
- **Styling:** Custom CSS for advanced animations and glassmorphism effects.

## 📂 Project Structure

```text
portfolio/
├── portfolio.html   # Main entry point and layout
├── style.css        # Custom styles and theme variables
├── script.js        # Core interactivity and theme logic
├── script1.js       # Security and analytics (Cloudflare)
├── public/
│   └── resume.pdf   # Static assets
└── README.md        # Project documentation
```

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/surajsonwane1207/portfolio.git
   ```

2. **Open the project:**
   Simply open `portfolio.html` in your favorite web browser.

3. **Development:**
   No build step is required as Tailwind CSS and Lucide are loaded via CDN. For a better experience, use a live server extension (like Live Server in VS Code).

## 🎨 Customization

Content can be updated directly in the `script.js` file within the `defaultConfig` object:

```javascript
const defaultConfig = {
    your_name: "Suraj Sonwane",
    your_title: "Full Stack MERN Developer",
    // ... update other fields here
};
```

## 🤝 Contact

Suraj Sonwane - [suraj.sonwane1207@gmail.com](mailto:suraj.sonwane1207@gmail.com)

Project Link: [https://github.com/surajsonwane1207/portfolio](https://github.com/surajsonwane1207/portfolio)

---
Developed with ❤️ by Suraj Sonwane
