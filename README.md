# MyoForge - Automotive Customization Platform

## Overview

MyoForge is a cutting-edge automotive customization platform that empowers users to modify every single part of a vehicle with unprecedented freedom and precision. Built for car enthusiasts who want to create their ultimate dream car, MyoForge combines intuitive design with comprehensive customization options.

**Live Demo:** Open `index.html` in your browser

## ✨ Features

### 🎯 Core Features
- **Complete Vehicle Customization:** Explore 30 logical vehicle systems spanning powertrain, chassis, body, cabin, electronics, safety, EV hardware, utility, recovery, and track equipment
- **Smart Role Selection:** Choose between "Beginner" and "Enthusiast" modes with personalized onboarding
- **Multiple Car Builds:** Create unlimited custom cars and explore different build philosophies
- **Real-Time Preview:** See your customizations instantly as you add or remove parts
- **Persistent Storage:** All builds are saved to your profile
- **Gmail Entry:** Gmail-styled local demo sign-in; connect Firebase Google OAuth for production accounts

### 👥 User Modes

**Beginner Mode:**
- Step-by-step guided tour with 5 comprehensive steps
- Educational content explaining each customization phase
- Option to skip and dive into building anytime
- Perfect for newcomers to car customization

**Enthusiast Mode:**
- Two quick-start options: "I Got This" (skip guide) or "Show Me Around" (guided experience)
- Can skip guide at any time during the tour
- Direct access to advanced customization features

### 🚗 Customization Catalog

The builder currently contains **30 systems and 300 components**, including engine variants, forced induction, fuel and ignition, transmissions, cooling and HVAC, suspension geometry, wheels and tires, brakes, steering, body panels, aerodynamics, glass and access, exterior details, seats and restraints, interior trim, controls, audio, lighting, electrical, safety, EV drive, exhaust, finish, cargo, maintenance, sensors, fluid routing, security, off-road recovery, and competition equipment.

Every component includes its own name, image assignment, function summary, significance note, and add/remove workflow.

### 🎨 Design Highlights
- **Olive Green Studio Palette:** Acid green, brass, and deep olive create a distinctive configuration workspace
- **Minimalistic Animations:** Smooth, clean interactions without jarring effects
- **3D Flip Animation:** Parts reveal descriptions with elegant 180° horizontal flip on hover
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode:** Eye-friendly interface optimized for extended use

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend:** Vanilla JavaScript with modern ES6+
- **Styling:** Custom CSS3 with animations and gradients
- **Storage:** LocalStorage for demo (Firebase ready for production)
- **Authentication:** Simulated Gmail OAuth (Firebase Auth ready)
- **Icons:** FontAwesome 6.4.0
- **Fonts:** Google Fonts (Manrope, DM Mono)

### File Structure
```
MyoForge/
├── index.html           # Main HTML structure
├── styles.css          # Complete styling and animations
├── myoforge.js         # Application logic and state management
├── claude.md           # Development reference guide
└── README.md           # This file
```

## 🚀 Getting Started

### Quick Start
1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Sign in with Gmail (simulated)
4. Select your role: Beginner or Enthusiast
5. Follow the onboarding or jump straight to building

### Browser Requirements
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any modern browser with ES6+ support

## 📝 User Workflows

### New User (Beginner)
```
Landing Page → Select "Beginner" → View 5-Step Guide → Start Building
```

### New User (Enthusiast)
```
Landing Page → Select "Enthusiast" → Choose "I Got This" or "Show Me Around" → Build
```

### Returning User
```
Login → My Garage (view all cars) → Select car to edit → Customize parts → Save
```

### Car Builder Workflow
```
Create Car → Select Category → Browse Parts → Hover for Info → Click Add → 
Preview Updates → Continue Customizing → Save Build
```

## 🎮 Interaction Guide

### Part Selection
1. **Browse Categories:** Click tabs to switch between car sections
2. **Hover Parts:** Each part tile has a smooth 180° flip animation
3. **View Details:** See description and significance on the flipped side
4. **Add to Car:** Click "Add Part" to install on your build

### Car Management
1. **Create:** Click "New Car Build" to start a new customization
2. **Edit:** Click "Edit" on any car card to modify
3. **Delete:** Remove cars you no longer want
4. **Save:** Changes are auto-saved and persisted

### Profile Features
1. **Change Role:** Switch between Beginner/Enthusiast modes anytime
2. **View Profile:** See email and account information
3. **Logout:** Sign out and return to landing page

## 🎨 Design System

### Color Palette
- **Primary Green:** `#556B2F` (Olive)
- **Secondary Green:** `#6B8E23` (Yellow-Green)
- **Accent Gold:** `#D4AF37` (Premium)
- **Dark Background:** `#0f0f0f` - `#2a2a2a`
- **Light Text:** `#f5f5f5`

### Typography
- **Headings:** Outfit (700-800 weight)
- **Body:** Inter (300-600 weight)
- **Sizes:** 1rem base, scales to 3.5rem for h1

### Animations
- **Transitions:** 150ms, 300ms, 500ms presets
- **Part Flip:** 400ms ease-in-out horizontal rotation
- **Entrance:** fadeIn, fadeInDown, fadeInUp, slideInRight
- **Performance:** GPU-optimized with transform and opacity

## 💾 Data Persistence

### LocalStorage Structure
```javascript
{
  myoforge_user: {
    id: string,
    email: string,
    name: string,
    role: "beginner" | "enthusiast",
    preferences: { theme, notifications },
    cars: [
      {
        id: string,
        name: string,
        createdAt: ISO8601,
        parts: { category: [parts] },
        color: hex
      }
    ]
  }
}
```

## 🔄 Production Readiness

### Currently Simulated (Demo)
- Gmail OAuth authentication
- Cloud database storage

### Ready for Firebase Integration
- User profile management
- Real-time data sync
- Cloud storage for car builds
- Analytics and user tracking

### Future Enhancements
- 3D vehicle visualization (Three.js)
- Real-time multiplayer customization
- Community marketplace
- Performance calculations
- AR visualization on mobile
- Export and sharing features
- Part compatibility matrix

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small Mobile:** < 480px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color combinations
- Font scaling support
- Focus indicators on buttons

## 🐛 Known Limitations (Demo Version)

- Part images are icons (ready for real images)
- Gmail login is simulated (ready for Firebase Auth)
- No real 3D visualization (placeholder ready for Three.js)
- LocalStorage only (scales to Firestore)

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

## 🌟 Vision

MyoForge aims to become the ultimate creative environment for automotive enthusiasts - a place where imagination meets engineering, enabling users to build the vehicles they envision without limitations.

---

**Built with ❤️ for car enthusiasts**
