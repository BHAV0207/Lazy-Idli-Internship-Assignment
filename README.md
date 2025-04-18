---

# 🎮 Play Arena - React Landing Page

Welcome to the official repository for **Play Arena**, an engaging and visually dynamic React-based landing page for an entertainment center. This project is built to showcase Play Arena's vibrant activities, bookings, group events, and family fun, all while offering a smooth, responsive, and interactive user experience.

## 🚀 Features

- ⚡ **Fully Responsive Design** – Looks great on mobile, tablet, and desktop.
- 🎯 **Interactive Dropdown Navigation** – Mega menu with categorized activity lists.
- 📸 **Hero Section** – High-quality imagery and visual impact.
- 🧩 **Activity Cards** – Dynamic data-driven cards for each activity category.
- 🧒 **Play Your Way Section** – Highlights group events, birthdays, and team-building activities.
- 🎠 **Image Carousel** – Rotating image display for visual storytelling.
- 🗓️ **Booking Section** – CTA to drive user engagement.
- ❄️ **Play It Cool** – Dedicated F&B promotional section.
- 💌 **Newsletter Signup** – Engaging email capture section.
- 🦶 **Sticky Header + Smooth UX** – Navigation remains accessible at all times.

---

## 🛠️ Tech Stack

- **React.js** – JavaScript library for UI components.
- **Tailwind CSS** – Utility-first CSS framework for rapid styling.
- **Lucide Icons** – Clean and elegant open-source icon set.
- **React Context API** – For managing and sharing dropdown data globally.

---

## 📁 Folder Structure

```
play-arena/
├── public/
├── src/
│   ├── components/
│   │   ├── BookingSection.jsx
│   │   ├── Cards.jsx
│   │   ├── Carousal.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── NewsLetterSection.jsx
│   │   ├── PlayItCool.jsx
│   │   └── PlayYourWay.jsx
│   ├── Store/
│   │   └── DataContext.jsx
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🌐 Live Demo

(https://zingy-snickerdoodle-cae28c.netlify.app/)
---

## 🔧 Installation & Setup

Clone the repo:

```bash
git clone https://github.com/your-username/play-arena.git
cd play-arena
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🧠 Key Concepts

### 🔄 Data Context (`DataContext.jsx`)
We use `React.createContext()` to share and manage categorized activity data across the header and cards components.

### 🎯 Dynamic Dropdowns
The `Header.jsx` component renders multi-level dropdowns based on an object structure representing activity categories.

### ⚙️ Responsive Layout
Tailwind’s grid and flex utilities are used to ensure that the layout adapts to various screen sizes seamlessly.

---

## ✨ Contribution Guide

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## 🧾 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash](https://unsplash.com/) for placeholder images
- Inspiration: [playarena.in](https://playarena.in)

---
