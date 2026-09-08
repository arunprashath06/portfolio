# Arun Prashath — AI & ML Engineer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-React-ff4154.svg?logo=framer&logoColor=white)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, responsive personal engineering portfolio showcasing machine learning systems, time-series retail forecasting, conversational LLM architectures, operating systems simulators, verified certifications, and downloadable resumes.

---

## 🌟 Key Highlights & Features

- **Interactive AI Engineering Sandbox**:
  - **Prophet Forecast Simulator**: Dynamic SVG time-series forecast curve with an interactive *Isolation Forest Anomaly Spike* simulator.
  - **Groq LLaMA 3.1 Inference**: Live conversational regex slot extractor and sub-150ms recommendation engine display.
  - **C++ Page Replacer**: Interactive RAM frame simulator comparing FIFO vs. LRU page hit/fault ratios.
- **Authentic Project Visuals & Dual-View Lightbox**:
  - Full-screen lightbox zoom with in-modal view switching (`View 1: Primary Output` vs. `View 2: Secondary Matrix`).
  - Keyboard arrow key navigation (`←` / `→`) and Esc key dismiss.
- **Production Certifications & Summer Training Hub**:
  - Direct PDF preview modal with in-browser viewer and dedicated download buttons.
  - Real verified credentials from Lovely Professional University, Infosys, and iamneo.
- **Privacy-Protected Contact Suite**:
  - Spam-bot protected phone number with a client-side *Click-to-Reveal* toggle.
  - Functional Formspree contact form with real-time feedback.
  - Direct resume download (`resume.pdf`).
- **Clean Architecture & Fast Build**:
  - Zero bloated cursor scripts; native fluid scrolling.
  - Production builds in sub-350ms with Vite and Tailwind CSS.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ES6+), Vite 8 |
| **Styling & Design** | Tailwind CSS, Glassmorphism, CSS Grid, Responsive Design |
| **Animations** | Motion (`motion/react`), Hardware-accelerated SVG transitions |
| **Backend & Forms** | Formspree API |
| **Icons & Media** | SVG Vector Icons, Custom Typography, Responsive Lightbox |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── certificates/        # Verified PDF credentials & badges
│   ├── projects/            # Real project output plots & architecture diagrams
│   └── resume.pdf           # Downloadable curriculum vitae
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive navigation with mobile menu drawer
│   │   ├── Hero.jsx         # Headline, stats, and Interactive AI Sandbox Console
│   │   ├── About.jsx        # Engineering profile, career bio, and specialization tags
│   │   ├── Projects.jsx     # 4 Core engineering projects with dual-view lightbox
│   │   ├── Training.jsx     # LPU Summer Training capstone spotlight with modal
│   │   ├── Skills.jsx       # Interactive skills matrix across AI, backend & DSA
│   │   ├── Certifications.jsx # Category filterable verified credentials
│   │   ├── Education.jsx    # Academic history & milestone timeline
│   │   └── Contact.jsx      # Contact form, socials, and anti-spam phone reveal
│   ├── App.jsx              # Main layout & section orchestration
│   ├── main.jsx             # React DOM root entry
│   └── index.css            # Custom scrollbars and Tailwind styling
├── package.json
└── vite.config.js
```

---

## 🚀 Quickstart & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/arunprashath06/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized static production bundle will be generated in `dist/`.

---

## 👤 Author

**P. Arun Prashath**
- **GitHub**: [@arunprashath06](https://github.com/arunprashath06)
- **LinkedIn**: [linkedin.com/in/arunprashath](https://www.linkedin.com/in/arunprashath/)
- **Email**: [arunprashathpersonal@gmail.com](mailto:arunprashathpersonal@gmail.com)
