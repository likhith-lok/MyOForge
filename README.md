# MyoForge - Automotive Customization Platform

## Overview

MyoForge is a cutting-edge automotive customization platform that empowers users to modify every single part of a vehicle with unprecedented freedom and precision. Built for car enthusiasts who want to create their ultimate dream car, MyoForge combines intuitive design with comprehensive customization options.

**Live Demo:** Open `index.html` in your browser

##  Features

###  Core Features
- **Complete Vehicle Customization:** Explore 30 logical vehicle systems spanning powertrain, chassis, body, cabin, electronics, safety, EV hardware, utility, recovery, and track equipment
- **Enthusiast Workshop:** Access the complete component catalog with optional guided onboarding
- **Guest Sessions:** Start building immediately with no account or verification
- **Real-Time Preview:** See your customizations instantly as you add or remove parts
- **Build Downloads:** Export any build as a portable JSON file
- **Temporary Garage:** Builds last for the current session; a car database is coming soon

### 👥 Onboarding

- Choose between jumping straight into the garage or taking the optional guide
- Two quick-start options: "I Got This" (skip guide) or "Show Me Around" (guided experience)
- Can skip guide at any time during the tour
- Direct access to the complete customization catalog

###  Customization Catalog

The builder currently contains **30 systems and 300 components**, including engine variants, forced induction, fuel and ignition, transmissions, cooling and HVAC, suspension geometry, wheels and tires, brakes, steering, body panels, aerodynamics, glass and access, exterior details, seats and restraints, interior trim, controls, audio, lighting, electrical, safety, EV drive, exhaust, finish, cargo, maintenance, sensors, fluid routing, security, off-road recovery, and competition equipment.

Every component includes its own name, image assignment, function summary, significance note, and add/remove workflow.

###  Design Highlights
- **Olive Green Studio Palette:** Acid green, brass, and deep olive create a distinctive configuration workspace
- **Minimalistic Animations:** Smooth, clean interactions without jarring effects
- **3D Flip Animation:** Parts reveal descriptions with elegant 180° horizontal flip on hover
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode:** Eye-friendly interface optimized for extended use

##  Technical Architecture

### Tech Stack
- **Frontend:** Vanilla JavaScript with modern ES6+
- **Styling:** Custom CSS3 with animations and gradients
- **Storage:** In-memory guest session; no backend or account system
- **Authentication:** None
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

##  Getting Started

### Quick Start
1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Click **Start building**; no account is required
4. Choose the quick start or optional guide
5. Create a build, customize it, and download a copy to keep it

### Browser Requirements
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any modern browser with ES6+ support

##  User Workflows

### New User
```
Landing Page → Start Building → Choose "I Got This" or "Show Me Around" → Build
```

### Returning User
```
Start Workshop → My Garage (current session) → Select a build → Customize parts → Download
```

### Car Builder Workflow
```
Create Car → Select Category → Browse Parts → Hover for Info → Click Add → 
Preview Updates → Continue Customizing → Download Build
```

##  Interaction Guide

### Part Selection
1. **Browse Categories:** Click tabs to switch between car sections
2. **Hover Parts:** Each part tile has a smooth 180° flip animation
3. **View Details:** See description and significance on the flipped side
4. **Add to Car:** Click "Add Part" to install on your build

### Car Management
1. **Create:** Click "New Car Build" to start a new customization
2. **Edit:** Click "Edit" on any car card to modify
3. **Delete:** Remove cars you no longer want
4. **Download:** Export a JSON copy to keep your build beyond this session

### Session Features
1. **No account:** Enter the workshop without signup or verification
2. **Download:** Save a JSON copy of any build
3. **Exit:** Clear the current in-memory session

##  Design System

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

## Build Data

Builds exist only in memory while the page is open. Use **Download Build** to export a portable `.myoforge.json` file. Refreshing or closing the page clears session builds. A database for saving and restoring cars is coming soon.

### Future Enhancements
- 3D vehicle visualization (Three.js)
- Real-time multiplayer customization
- Community marketplace
- Performance calculations
- AR visualization on mobile
- Export and sharing features
- Part compatibility matrix

##  Responsive Breakpoints

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small Mobile:** < 480px

##  Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color combinations
- Font scaling support
- Focus indicators on buttons

##  Known Limitations (Demo Version)

- Part images are icons (ready for real images)
- No backend, sign-in, or verification is used
- Builds are temporary until downloaded
- No real 3D visualization (placeholder ready for Three.js)

##  License

This project is licensed under the MIT License.

##  Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

##  Vision

MyoForge aims to become the ultimate creative environment for automotive enthusiasts - a place where imagination meets engineering, enabling users to build the vehicles they envision without limitations.

---

