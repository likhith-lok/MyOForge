# MyoForge - Development Reference Guide

## Project Overview
MyoForge is a next-generation automotive customization platform enabling users to modify every single part of a vehicle with unprecedented freedom and precision.

## Core Features Implemented

### 1. Landing Page & Authentication
- Olive green theme palette with gradient backgrounds
- Gmail OAuth integration for user signup/login
- Role selection toggle: "Enthusiast" vs "Beginner" (changeable anytime)
- Message indicating users can change their role later
- Responsive design

### 2. User Role-Based Onboarding
**Beginner Mode:**
- Mini guide showing how to build a car
- Option to skip/omit guide
- Step-by-step walkthrough

**Enthusiast Mode:**
- Two primary buttons: "I got this" and "Show me around"
- "I got this" → Direct to car builder
- "Show me around" → Interactive guide with skip option

### 3. Car Builder Interface
- Support for multiple cars per user (create, edit, delete)
- Major car sections as tabs/categories:
  - Engine & Drivetrain
  - Suspension & Wheels
  - Body & Exterior
  - Interior
  - Lighting
  - Performance Systems
  - Exhaust
  - Brakes & Cooling

### 4. Part Selection & Customization
- Parts displayed as tiles with images
- Clean, minimalistic hover animations (horizontal flip)
- Part description appears on hover
- Each part shows:
  - High-quality image
  - Part name
  - Short description of function and significance
  - Category badge
  - Compatibility info (when applicable)

### 5. Design Philosophy
- Olive green theme (primary: #556B2F, accent: #6B8E23)
- Minimalistic, clean animations
- Responsive grid layouts
- Intuitive navigation
- Real-time preview of customizations

## Technical Stack
- **Frontend:** React + Vite
- **Styling:** Tailwind CSS + Custom CSS for animations
- **Authentication:** Firebase Auth (Gmail OAuth)
- **Database:** Firebase Firestore
- **State Management:** React Context API
- **3D Rendering:** Three.js (future enhancement)

## File Structure
```
MyoForge/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── OnboardingGuide.jsx
│   │   ├── CarBuilder.jsx
│   │   ├── PartSelector.jsx
│   │   ├── CarGarage.jsx
│   │   └── Navigation.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── UserPreferencesContext.jsx
│   ├── hooks/
│   │   └── useCarBuilder.js
│   ├── utils/
│   │   ├── carParts.js
│   │   └── animations.js
│   ├── styles/
│   │   ├── theme.css
│   │   ├── animations.css
│   │   └── global.css
│   └── App.jsx
├── public/
│   └── car-parts/
│       ├── engines/
│       ├── wheels/
│       ├── body-kits/
│       └── ...
└── README.md
```

## Car Part Categories & Examples

### 1. Engine & Drivetrain
- Turbocharged Engine
- V8 Engine
- Electric Motor
- All-Wheel Drive System
- Manual Transmission
- Automatic Transmission

### 2. Suspension & Wheels
- Air Suspension
- Coil Springs
- All-Terrain Tires
- Racing Slicks
- Custom Alloy Wheels
- Lowering Kits

### 3. Body & Exterior
- Carbon Fiber Hood
- Widebody Kit
- Custom Bumper
- Spoiler/Wing
- Custom Fender
- Lowering Springs

### 4. Interior
- Racing Seats
- Leather Interior
- Carbon Fiber Dashboard
- Custom Steering Wheel
- Ambient Lighting
- Sound System

### 5. Lighting
- LED Headlights
- Neon Underglow
- RGB Tail Lights
- LED Fog Lights
- Custom Light Strip
- Adaptive Headlights

### 6. Performance Systems
- Brakes (Carbon Ceramic, Upgraded)
- Cooling System (Radiator, Intercooler)
- Turbocharger Kit
- Supercharger Kit
- Anti-lock Braking System
- Traction Control

### 7. Exhaust System
- Twin Exhaust
- Quad Exhaust
- Custom Muffler
- Turbo Back Exhaust
- Cat-back Exhaust
- Headers

### 8. Additional Customization
- Paint & Wraps (50+ colors)
- Window Tints
- Custom Badges
- Decals & Stickers
- Vinyl Graphics
- Chrome/Carbon Trim

## Animation Guidelines
- Horizontal flip on hover (180°, ~300ms)
- Smooth ease-in-out timing
- Description fades in during flip
- No jarring movements
- GPU-optimized transforms

## Color Palette
- **Primary Green:** #556B2F (Olive)
- **Secondary Green:** #6B8E23 (Yellow-Green)
- **Accent:** #D4AF37 (Gold)
- **Dark Background:** #2C2C2C
- **Light Text:** #F5F5F5
- **Error/Alert:** #E74C3C

## User Workflow
1. Land on homepage → Select role (Beginner/Enthusiast)
2. If Beginner → Choose guide or skip
3. If Enthusiast → Choose "I got this" or "Show me around"
4. Access Car Garage → Create new car or edit existing
5. Select major car section (tabs)
6. Browse parts in that section (tiles with images)
7. Hover on part → See flip animation + description
8. Click part → Add to car
9. Continue customizing until satisfied
10. Save car to profile
11. View 3D preview (future enhancement)
12. Share with community (future enhancement)

## Future Enhancements
- 3D car visualization with Three.js
- Part compatibility matrix
- Performance calculations (HP, 0-60, etc.)
- Cost estimation
- Community marketplace
- Sharing & liking custom builds
- Real-time multiplayer customization
- AI-powered part recommendations
- AR visualization on mobile

## GitHub Commit Strategy
After major features:
- Initial setup: "initial: setup project structure and authentication"
- Landing page: "feat: add landing page with role selection"
- Onboarding: "feat: implement beginner/enthusiast onboarding"
- Car builder: "feat: build car customization interface"
- Parts system: "feat: implement part selection with animations"
- Bug fixes: "fix: [description]"
- Styling: "style: [description]"

## Notes for Future Development
- Ensure responsive design for mobile/tablet
- Test animations on lower-end devices
- Implement lazy loading for images
- Consider PWA capabilities
- Accessibility (ARIA labels, keyboard navigation)
- Performance optimization (code splitting, image compression)
