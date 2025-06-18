# 🌤️ Fireblocks Weather App

A modern weather application built with React, TypeScript, and Material-UI. Features real-time weather data, activity suggestions, and interactive trivia!

## ✨ Key Features

- 🔍 **Weather Search** - Real-time data with autocomplete for popular cities
- 🎯 **Activity Suggestions** - Personalized recommendations based on weather conditions
- 🧠 **Interactive Trivia** - Educational quiz with 8+ weather questions and scoring
- 🎨 **Modern Design** - Glassmorphism UI with smooth animations and mobile-first responsive design
- 🏗️ **Quality Code** - TypeScript, modular architecture, comprehensive error handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone and install**
   ```bash
   git clone [repository-url]
   cd fireblocks-weather-app
   npm install
   ```

2. **Environment setup**
   If you want you can use your own API key, but I included mine in `.env`, so you're good to go
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

3. **Run the app**
   ```bash
   npm run dev  # Development server
   npm run build  # Production build
   ```

## 🛠️ Technology Stack & Architecture

- **Vite** - Lightning fast builds and HMR
- **Material-UI** - Professional design system with accessibility
- **TypeScript** - Type safety and better developer experience

### Modular Project Structure
Created tons of organized folders to make the project modular and maintainable:
```
src/
├── components/    # 16+ reusable components in individual folders
├── utils/         # Weather helpers, trivia data, styling utilities
├── services/      # API calls and error handling
├── types/         # TypeScript definitions
└── styles/        # Shared animations and glassmorphism effects
```

## 📱 Mobile Compatibility
Fully responsive design optimized for phones, tablets, and desktop with touch-friendly interfaces.

## 🏆 Backend Component Note

**Regarding the bonus backend component**: I wasn't entirely sure about its specific purpose, so I focused on the frontend requirements. If implemented, I would add API caching for ~15 minutes to prevent rate limiting (429 errors) and request optimization.

## 🔧 Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build  
- `npm run preview` - Preview build

---

Built with ❤️ using React, TypeScript, Vite, and Material-UI
