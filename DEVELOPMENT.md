# MyoForge Development Guide

## Getting Started with Development

### Prerequisites
- Text editor (VS Code, Sublime, etc.)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)
- Optional: Node.js (for future build tools)

### Development Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/MyoForge.git
cd MyoForge

# Open in your editor
code .

# Start a local server (optional, for testing)
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Project Structure

```
MyoForge/
├── index.html          # Entry point HTML
├── styles.css          # All styling and animations
├── myoforge.js         # Application logic (1000+ lines)
├── README.md           # User documentation
├── QUICKSTART.md       # Quick start guide
├── ARCHITECTURE.md     # Technical architecture
├── claude.md           # Development notes
├── DEVELOPMENT.md      # This file
└── .gitignore          # Git configuration
```

## Code Organization

### styles.css Structure
```css
:root { ... }              /* CSS Variables & Theme */
* { ... }                  /* Reset */
body { ... }               /* Global styles */
h1, h2, h3 { ... }         /* Typography */
.landing-page { ... }      /* Landing page styles */
.role-selector { ... }     /* Role selection styles */
.onboarding-guide { ... }  /* Onboarding styles */
.car-garage { ... }        /* Garage page styles */
.car-builder { ... }       /* Builder page styles */
.parts-grid { ... }        /* Parts grid styles */
.part-tile { ... }         /* Part tile and flip animation */
@keyframes { ... }         /* All animations */
@media { ... }             /* Responsive breakpoints */
```

### myoforge.js Structure
```javascript
// ==========================================
// CONSTANT DATA
// ==========================================
CAR_PARTS = { ... }        // All 48 parts database

// ==========================================
// APPLICATION STATE
// ==========================================
let currentUser = null;
let userRole = null;
// ... more state variables

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function saveToLocalStorage() { ... }
function getFromLocalStorage() { ... }
// ... more utilities

// ==========================================
// AUTHENTICATION
// ==========================================
function simulateGmailLogin() { ... }
function logout() { ... }

// ==========================================
// COMPONENT RENDERING
// ==========================================
function renderLandingPage() { ... }
function renderCarBuilder() { ... }
// ... more components

// ==========================================
// MAIN RENDER ENGINE
// ==========================================
function render(page = null) { ... }

// ==========================================
// INITIALIZATION
// ==========================================
function initApp() { ... }
```

## Adding New Features

### Adding a New Car Part

1. **Locate the parts database** in `myoforge.js`:
```javascript
const CAR_PARTS = {
    'Category Name': {
        icon: 'fa-icon',
        parts: [
            // Add new part here
            {
                id: 'unique-id-slug',
                name: 'Part Display Name',
                icon: 'fa-icon-name',
                description: 'What does this part do?',
                significance: 'Why should users care about this?'
            }
        ]
    }
};
```

2. **Choose an appropriate category** (30 systems available)

3. **Use a descriptive ID** in kebab-case: `'turbo-hybrid-engine'`

4. **Pick a FontAwesome icon** from [fontawesome.com](https://fontawesome.com)

5. **Write clear description** (1-2 sentences max)

6. **Explain significance** (benefits and use cases)

7. **Test by**:
   - Selecting the category
   - Hovering over the new part tile
   - Clicking to add it to a car
   - Checking preview updates

### Adding a New Car Category

1. **Add to CAR_PARTS object**:
```javascript
'New Category Name': {
    icon: 'fa-new-icon',
    parts: [
        // 6+ unique parts
    ]
}
```

2. **The category will automatically appear**:
   - In builder tabs
   - In parts filtering
   - In car part lists

3. **Update documentation** in README.md and claude.md

### Modifying Styles

1. **Find the relevant CSS section** using the structure above

2. **Make changes following conventions**:
   - Use CSS variables: `var(--primary-green)`
   - Follow naming: `.component-name`
   - Maintain responsive design
   - Test on mobile/tablet

3. **Animation changes**:
```css
/* Part flip animation location */
.part-tile:hover .part-tile-inner {
    transform: rotateY(180deg);
    transition: 400ms ease-in-out;
}

/* Modify transition duration or easing here */
```

4. **Color changes**:
```css
:root {
    --primary-green: #556B2F;        /* Change here */
    --secondary-green: #6B8E23;
    --accent-gold: #D4AF37;
}
```

## Common Development Tasks

### Task: Add Role-Specific Features

Example: Show different buttons for Beginner vs Enthusiast

```javascript
function renderCarBuilder() {
    const car = getCurrentCar();
    const isBeginnerMode = userRole === 'beginner';
    
    return `
        <div class="car-builder">
            ${isBeginnerMode ? `
                <div class="helper-tip">
                    <p>Hover over parts to learn what they do!</p>
                </div>
            ` : ''}
            <!-- rest of builder -->
        </div>
    `;
}
```

### Task: Add New Onboarding Step

Edit the appropriate guide component:

```javascript
function renderBeginnerGuide() {
    return `
        <div class="onboarding-guide">
            <div class="guide-step">
                <div class="step-number">NEW_NUMBER</div>
                <h3>New Step Title</h3>
                <p>New step description...</p>
            </div>
            <!-- rest of guide -->
        </div>
    `;
}
```

### Task: Modify Persistence Logic

Find the persistence functions:

```javascript
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('localStorage save failed:', e);
    }
}

// Modify the logic here for future enhancements
// Example: Add Firebase call
```

## Testing Checklist

### Functionality Tests
- [ ] Landing page loads correctly
- [ ] Login/logout works
- [ ] Role selection persists
- [ ] Can create new car
- [ ] Can add parts to car
- [ ] Can remove parts from car
- [ ] Can edit existing car
- [ ] Can delete car with confirmation
- [ ] Data persists on page refresh
- [ ] Beginner guide shows all 5 steps
- [ ] Enthusiast mode offers both options
- [ ] Skip buttons work everywhere
- [ ] Navigation between pages works

### Visual Tests
- [ ] Landing page looks good
- [ ] Role buttons toggle correctly
- [ ] Flip animation is smooth
- [ ] Colors match theme
- [ ] Text is readable
- [ ] No layout broken elements
- [ ] Hover effects work

### Responsive Tests (Mobile)
- [ ] Works on iPhone/iPad
- [ ] Works on Android phones
- [ ] Buttons are clickable (no tiny touch targets)
- [ ] Text is readable (no horizontal scroll)
- [ ] Parts grid adapts to screen
- [ ] Modals/dropdowns work

### Performance Tests
- [ ] Page loads quickly
- [ ] Animations are smooth (60fps)
- [ ] No lag when adding/removing parts
- [ ] Console has no errors

## Git Workflow

### Branching Strategy
```bash
# Create feature branch
git checkout -b feature/new-feature-name

# Make changes
git add .
git commit -m "feat: description of feature"

# Push to origin
git push origin feature/new-feature-name

# Create Pull Request on GitHub
```

### Commit Message Conventions
```
Type: Description

Types:
- feat:  New feature
- fix:   Bug fix
- docs:  Documentation
- style: Formatting, CSS
- refactor: Code restructuring
- perf:  Performance improvement
- test:  Adding tests
- chore: Build, dependencies, etc.

Examples:
- feat: add carbon fiber hood part
- fix: part tile animation lag on mobile
- docs: update architecture guide
- style: improve color contrast on dark mode
- refactor: simplify car builder state
```

### Useful Git Commands
```bash
# View commit history
git log --oneline

# Check changes
git status
git diff

# Undo last commit
git reset --soft HEAD~1

# Create and switch to new branch
git checkout -b feature/name

# Switch branch
git checkout branch-name

# Merge branch
git merge feature/name

# Delete branch
git branch -d branch-name
```

## Performance Optimization Tips

### CSS Performance
```css
/* ✅ Good - Uses transform (GPU accelerated) */
.part-tile:hover {
    transform: translateY(-5px);
}

/* ❌ Bad - Uses top (CPU rendered) */
.part-tile:hover {
    top: -5px;
}
```

### JavaScript Performance
```javascript
/* ✅ Good - Minimal DOM updates */
function updatePreview() {
    render('builder');  // Single re-render
}

/* ❌ Bad - Multiple DOM updates */
document.getElementById('item1').textContent = 'A';
document.getElementById('item2').textContent = 'B';
document.getElementById('item3').textContent = 'C';
```

### Loading Performance
```html
<!-- ✅ Fonts loaded early -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Icons loaded via CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/...">

<!-- Script at end of body -->
<script src="myoforge.js"></script>
```

## Browser DevTools Tips

### Console
```javascript
// Check current user
console.log(currentUser);

// Check user cars
console.log(userCars);

// Clear localStorage
localStorage.clear();

// Check car parts
console.log(CAR_PARTS);
```

### Performance
1. Open DevTools → Performance tab
2. Click Record
3. Perform action (hover part, add part)
4. Click Stop
5. Analyze the timeline

### Mobile Testing
1. DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
2. Select device type
3. Test interactions
4. Check console for errors

## Firebase Migration Checklist

When migrating from localStorage to Firebase:

- [ ] Setup Firebase project
- [ ] Install Firebase SDK
- [ ] Configure authentication
- [ ] Create Firestore database
- [ ] Implement user signup/login
- [ ] Migrate user data schema
- [ ] Implement real-time listeners
- [ ] Test offline support
- [ ] Setup cloud backups
- [ ] Configure security rules
- [ ] Deploy to production
- [ ] Monitor performance

### Firebase Implementation Example
```javascript
// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Save user car to Firestore
async function saveCarToFirebase(car) {
    try {
        await db.collection('users')
            .doc(currentUser.id)
            .collection('cars')
            .doc(car.id)
            .set(car);
    } catch (e) {
        console.error('Firebase save failed:', e);
    }
}
```

## Debugging Tips

### Common Issues

**Problem: Parts not showing in grid**
- Check if category is selected correctly
- Verify CAR_PARTS has parts for that category
- Check browser console for errors

**Problem: Data not persisting**
- Check if localStorage is enabled
- Look for localStorage quota exceeded error
- Check browser's storage settings

**Problem: Flip animation not working**
- Verify CSS is loaded
- Check if `.part-tile:hover` rule exists
- Test in different browser
- Check browser DevTools for CSS errors

**Problem: Page doesn't load**
- Check browser console for JavaScript errors
- Verify all files are in same directory
- Clear browser cache
- Try different browser

### Logging Strategy
```javascript
// Add logging to trace execution
function addPartToCar(partId, category) {
    console.log('Adding part:', partId, 'to category:', category);
    const car = getCurrentCar();
    console.log('Current car:', car);
    
    if (!car) {
        console.error('No car selected!');
        return;
    }
    
    // ... rest of logic
    console.log('Part added successfully');
}
```

## Code Style Guide

### Naming Conventions
```javascript
// Variables: camelCase
let currentUser = null;
let userCars = [];

// Functions: camelCase
function renderLandingPage() { }
function createNewCar(name) { }

// Constants: UPPER_SNAKE_CASE
const MAX_CARS_PER_USER = 100;

// CSS classes: kebab-case
.car-builder
.part-tile
.guide-step
```

### Formatting
```javascript
// 1. Use arrow functions where appropriate
const filtered = parts.filter(p => p.category === 'Engine');

// 2. Use template literals for strings
const message = `Welcome, ${currentUser.name}!`;

// 3. Use const by default, let when reassignment needed
const user = getUser();  // ✅
let counter = 0;
counter++;              // ✅

// 4. Destructure when helpful
const { name, email } = currentUser;

// 5. Keep functions focused and small
function validateEmail(email) {
    return email.includes('@');
}
```

## Documentation Standards

### Code Comments
```javascript
// Good: Explains WHY, not WHAT
function deleteCar(carId) {
    // Remove from array and update storage to sync across tabs
    userCars = userCars.filter(car => car.id !== carId);
    if (currentUser) {
        currentUser.cars = userCars;
        saveToLocalStorage('myoforge_user', currentUser);
    }
}

// Poor: States obvious
function deleteCar(carId) {
    // Delete the car
    userCars = userCars.filter(car => car.id !== carId);
}
```

### JSDoc Style
```javascript
/**
 * Creates a new car in the user's garage
 * @param {string} carName - The name for the new car
 * @returns {Object} The newly created car object
 */
function createNewCar(carName) {
    // ...
}
```

## Resources

### Learning
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Web.dev](https://web.dev)

### Tools
- [VS Code](https://code.visualstudio.com)
- [FontAwesome Icons](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)
- [Can I Use](https://caniuse.com)

### References
- HTML5 Spec: https://html.spec.whatwg.org
- CSS Spec: https://www.w3.org/Style/CSS
- JavaScript: https://tc39.es

---

**Happy coding! 🚗✨**
