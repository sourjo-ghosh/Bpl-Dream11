# BPL Dream 11 🏏

A fantasy cricket team builder application where users can build their dream cricket team by selecting players within a limited budget. Built with modern web technologies for an engaging and responsive user experience.

**🔗 Live Demo:** [https://bpl-dream11-nu.vercel.app/](https://bpl-dream11-nu.vercel.app/)

---

## 📋 Project Overview

BPL Dream 11 is an interactive fantasy cricket application inspired by the Bangladesh Premier League. Users get a budget of 5 million coins to select their favorite cricket players and build their ultimate dream team. The application provides real-time player information, budget management, and a seamless selection experience.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.2.4
- **Build Tool:** Vite 8.0.1
- **Styling:** Tailwind CSS 4.2.2 with DaisyUI 5.5.19
- **Animation:** Motion 12.38.0
- **Icons:** Lucide React 1.3.0
- **Notifications:** React Toastify 11.0.5
- **Code Quality:** ESLint 9.39.4

---

## ✨ Key Features

- **🏏 Player Browsing:** Explore a comprehensive list of cricket players with detailed statistics
- **💰 Budget Management:** Manage your 5 million coin budget effectively
- **👥 Team Building:** Switch between Available and Selected players tabs
- **📊 Player Details:** View player information including:
  - Rating and performance metrics
  - Batting and bowling styles
  - Player images
  - Price information
- **➕ Add/Remove Players:** Seamlessly add or remove players from your selection
- **📱 Responsive Design:** Fully responsive interface for mobile, tablet, and desktop
- **⏳ Loading States:** Skeleton loaders for smooth loading experience
- **🔔 Toast Notifications:** Real-time feedback on player selections and actions

---

## 📦 Dependencies

### Core Dependencies
- `react@^19.2.4` - UI library
- `react-dom@^19.2.4` - React DOM rendering
- `vite@^8.0.1` - Build tool and dev server
- `tailwindcss@^4.2.2` - Utility-first CSS framework
- `@tailwindcss/vite@^4.2.2` - Tailwind CSS Vite plugin

### UI & UX Libraries
- `lucide-react@^1.3.0` - Icon library
- `motion@^12.38.0` - Animation library
- `daisyui@^5.5.19` - Tailwind CSS component library
- `react-toastify@^11.0.5` - Toast notifications

### Development Dependencies
- ESLint and its plugins for code quality
- React development tools

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/BPL-Dream-11.git
   cd BPL-Dream-11
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The application will start at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

6. **Lint Code**
   ```bash
   npm run lint
   ```

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── HomePage/
│   │   ├── Banner/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Players/
│   │       ├── AvailablePlayers/
│   │       └── SelectedPlayers/
│   ├── UI/
│   │   └── Card.jsx
│   └── Skeleton/
├── App.jsx
└── main.jsx
```

---

## 🎮 How to Use

1. **View Players:** Browse all available cricket players on the Available Players tab
2. **Check Budget:** Monitor your remaining coins in the navbar
3. **Select Players:** Click on player cards to add them to your team (if budget allows)
4. **Manage Team:** Switch to Selected Players tab to view and manage your selections
5. **Remove Players:** Remove players from your selection to free up budget

---

## 🔗 Links

- **Live Demo:** [Live Link](https://bpl-dream11-nu.vercel.app/)

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

---

## 💡 Future Enhancements

- Player filtering and search functionality
- Advanced statistics and player comparisons
- Team templates and suggestions
- Player auction functionality
- Live match integration

---

## 📄 License

This project is open source and made for Educational Purpose

---

## 👨‍💻 Author

Created by Joy Ghosh Sourjo

---

**Enjoy building your dream cricket team! 🏏✨**
