# 🚀 Simplified CSAT Campaign Builder

A responsive **Customer Satisfaction (CSAT) Campaign Builder** web application built with **React** and **Tailwind CSS**. It allows users to dynamically configure CSAT campaign popups via **Content** and **Styling** control panels while instantly viewing real-time updates inside an interactive mobile preview container.

---

## 🔗 Project Links

* **GitHub Repository:** [https://github.com/24-amit/CSAT-Campaign-Builder.git](https://github.com/24-amit/CSAT-Campaign-Builder.git)
* **Live Deployment (Render):** [https://csat-campaign-builder.onrender.com/](https://csat-campaign-builder.onrender.com/)

---

## ✨ Features & Requirements

### 🎯 1. Real-Time Mobile Preview
* **Instant State Synchronization:** All changes made in the configuration controls update the live mobile preview instantly with zero latency—no save buttons or page refreshes required.
* **Multi-Step Flow:** Toggle seamlessly between **Initial**, **Feedback**, and **Thank You** screen states.

### 📝 2. Content Builder
* **Initial Page:** Custom Title and Subtitle inputs.
* **Feedback Page:**
  * Rating style selection (**Stars 1–5** or **Numbers 1–5**).
  * Dynamic option list management (add/remove options in real time).
  * Toggle switch for an optional feedback comment textarea.
  * Customizable submit button text.
* **Thank You Page:**
  * Media upload support via image URL (supports PNG, JPG, JPEG, GIF, Lottie).
  * Custom Title, Subtitle, and action button text.

### 🎨 3. Styling Builder
* **Color Palette Customization:** Fine-tune background color, title color, subtitle color, button background color, button text color, and selected/unselected rating colors.
* **Layout & Typography Controls:** Interactive sliders to adjust base font size, border radius, button width (percentage), and button height (pixels).

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (v19)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (v4) & PostCSS
* **Code Linting:** ESLint & Oxlint
* **Deployment:** Render

---

## 📂 Project Structure

```text
csat-builder/
├── node_modules/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.jsx            # Core Builder & Mobile Preview Component
│   ├── index.css          # Global Styles & Tailwind CSS Directives
│   └── main.jsx           # React Entry Point
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md              # Project Documentation
├── tailwind.config.js     # Tailwind Configuration
└── vite.config.js         # Vite Configuration
```

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/24-amit/CSAT-Campaign-Builder.git
   cd CSAT-Campaign-Builder
