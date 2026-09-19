/* ==========================================
   MYOFORGE - MAIN APPLICATION
   =========================================== */

// Car Parts Database
const CAR_PARTS = {
    'Engine & Drivetrain': {
        icon: 'fa-car-battery',
        parts: [
            {
                id: 'engine-turbo',
                name: 'Turbocharged Engine',
                icon: 'fa-wind',
                description: 'High-performance turbocharged engine with increased air intake pressure.',
                significance: 'Increases horsepower and torque significantly, perfect for acceleration enthusiasts.'
            },
            {
                id: 'engine-v8',
                name: 'V8 Engine',
                icon: 'fa-explosion',
                description: '8-cylinder naturally aspirated engine with powerful performance.',
                significance: 'Iconic performance upgrade for raw power and distinctive engine sound.'
            },
            {
                id: 'engine-electric',
                name: 'Electric Motor',
                icon: 'fa-charging-station',
                description: 'Advanced electric motor system with instant torque delivery.',
                significance: 'Zero emissions with superior acceleration and smooth power delivery.'
            },
            {
                id: 'drivetrain-awd',
                name: 'All-Wheel Drive',
                icon: 'fa-arrows-alt',
                description: 'Advanced AWD system for superior traction and handling.',
                significance: 'Better control in all weather conditions and improved cornering performance.'
            },
            {
                id: 'transmission-manual',
                name: 'Manual Transmission',
                icon: 'fa-gears',
                description: 'Traditional manual gear system for driver engagement.',
                significance: 'Full control and connection between driver and machine.'
            },
            {
                id: 'transmission-auto',
                name: 'Automatic Transmission',
                icon: 'fa-cogs',
                description: 'Advanced automatic transmission with multiple speed modes.',
                significance: 'Optimal gear selection for efficiency and smooth acceleration.'
            }
        ]
    },
    'Suspension & Wheels': {
        icon: 'fa-ring',
        parts: [
            {
                id: 'suspension-air',
                name: 'Air Suspension',
                icon: 'fa-cloud',
                description: 'Adjustable air suspension for customizable ride height and stiffness.',
                significance: 'Perfect balance between comfort and performance, height-adjustable for style.'
            },
            {
                id: 'suspension-coil',
                name: 'Coil Spring Suspension',
                icon: 'fa-spring',
                description: 'Performance-tuned coil springs with optimized damping.',
                significance: 'Better handling response and reduced body roll during aggressive driving.'
            },
            {
                id: 'wheels-racing',
                name: 'Racing Slicks',
                icon: 'fa-circle-notch',
                description: 'High-grip racing tires with minimal tread pattern.',
                significance: 'Maximum traction for track use and extreme performance driving.'
            },
            {
                id: 'wheels-terrain',
                name: 'All-Terrain Tires',
                icon: 'fa-shield-alt',
                description: 'Versatile tires suitable for various road and off-road conditions.',
                significance: 'Excellent grip on different surfaces for adventure and exploration.'
            },
            {
                id: 'wheels-alloy',
                name: 'Custom Alloy Wheels',
                icon: 'fa-gems',
                description: 'Lightweight premium alloy wheels with stunning design.',
                significance: 'Improved performance through weight reduction and visual enhancement.'
            },
            {
                id: 'lowering-kit',
                name: 'Lowering Kit',
                icon: 'fa-arrow-down',
                description: 'Suspension lowering system for aggressive stance.',
                significance: 'Lowers center of gravity for better handling and aggressive appearance.'
            }
        ]
    },
    'Body & Exterior': {
        icon: 'fa-car',
        parts: [
            {
                id: 'hood-carbon',
                name: 'Carbon Fiber Hood',
                icon: 'fa-layer-group',
                description: 'Lightweight carbon fiber hood with racing aesthetic.',
                significance: 'Reduces weight for better performance, premium appearance.'
            },
            {
                id: 'widebody-kit',
                name: 'Widebody Kit',
                icon: 'fa-expand-alt',
                description: 'Extended fenders and body panels for aggressive stance.',
                significance: 'Dramatic visual transformation and improved aerodynamics.'
            },
            {
                id: 'bumper-custom',
                name: 'Custom Front Bumper',
                icon: 'fa-shield',
                description: 'Aggressive custom bumper with integrated air intakes.',
                significance: 'Unique styling and improved air flow for cooling.'
            },
            {
                id: 'spoiler-wing',
                name: 'Performance Spoiler',
                icon: 'fa-arrow-up',
                description: 'Aerodynamic spoiler or wing for downforce generation.',
                significance: 'Improves stability at high speeds and track performance.'
            },
            {
                id: 'fender-custom',
                name: 'Custom Fender',
                icon: 'fa-square',
                description: 'Reinforced and styled custom fender panels.',
                significance: 'Accommodates larger wheels and improves aerodynamics.'
            },
            {
                id: 'skirt-side',
                name: 'Side Skirts',
                icon: 'fa-horizontal-rule',
                description: 'Extended side panels for aerodynamic efficiency.',
                significance: 'Reduces turbulence and adds aggressive racing appearance.'
            }
        ]
    },
    'Interior': {
        icon: 'fa-chair',
        parts: [
            {
                id: 'seats-racing',
                name: 'Racing Seats',
                icon: 'fa-person-sitting',
                description: 'High-performance bucket seats with extensive side support.',
                significance: 'Superior support during aggressive cornering and track driving.'
            },
            {
                id: 'interior-leather',
                name: 'Premium Leather Interior',
                icon: 'fa-couch',
                description: 'Hand-stitched leather upholstery throughout cabin.',
                significance: 'Luxury appeal with comfort and durability.'
            },
            {
                id: 'dashboard-carbon',
                name: 'Carbon Fiber Dashboard',
                icon: 'fa-rectangle-landscape',
                description: 'Lightweight carbon fiber dashboard with modern styling.',
                significance: 'Performance aesthetic with premium appearance.'
            },
            {
                id: 'steering-wheel',
                name: 'Custom Steering Wheel',
                icon: 'fa-circle-notch',
                description: 'Performance steering wheel with ergonomic grip.',
                significance: 'Enhanced control and driving feel with unique design.'
            },
            {
                id: 'lighting-ambient',
                name: 'Ambient Lighting System',
                icon: 'fa-lightbulb',
                description: 'Customizable RGB ambient lighting throughout cabin.',
                significance: 'Creates personalized atmosphere and enhances nighttime driving.'
            },
            {
                id: 'sound-system',
                name: 'Premium Sound System',
                icon: 'fa-volume-up',
                description: 'High-fidelity audio system with multiple speakers.',
                significance: 'Superior sound quality for entertainment and driving experience.'
            }
        ]
    },
    'Lighting': {
        icon: 'fa-lightbulb',
        parts: [
            {
                id: 'headlights-led',
                name: 'LED Headlights',
                icon: 'fa-sun',
                description: 'Advanced LED headlights with superior brightness and efficiency.',
                significance: 'Better visibility at night with modern aesthetic appeal.'
            },
            {
                id: 'underglow-neon',
                name: 'Neon Underglow',
                icon: 'fa-palette',
                description: 'Customizable neon lighting system under the vehicle.',
                significance: 'Unique visual customization for nighttime presence.'
            },
            {
                id: 'taillights-rgb',
                name: 'RGB Tail Lights',
                icon: 'fa-traffic-light',
                description: 'Programmable RGB tail light system with multiple modes.',
                significance: 'Distinctive rear styling with customizable lighting patterns.'
            },
            {
                id: 'fog-lights-led',
                name: 'LED Fog Lights',
                icon: 'fa-cloud',
                description: 'Dedicated LED fog light system for poor visibility conditions.',
                significance: 'Enhanced safety in fog and low light situations.'
            },
            {
                id: 'light-strip',
                name: 'Custom Light Strip',
                icon: 'fa-line-chart',
                description: 'Flexible programmable light strips for custom placements.',
                significance: 'Creative customization with endless design possibilities.'
            },
            {
                id: 'headlights-adaptive',
                name: 'Adaptive Headlights',
                icon: 'fa-compass',
                description: 'Smart headlights that adjust beam angle based on driving conditions.',
                significance: 'Improved safety with intelligent light distribution.'
            }
        ]
    },
    'Performance Systems': {
        icon: 'fa-tachometer-alt',
        parts: [
            {
                id: 'brakes-ceramic',
                name: 'Carbon Ceramic Brakes',
                icon: 'fa-hand-paper',
                description: 'Ultra-high-performance carbon ceramic brake system.',
                significance: 'Superior stopping power with reduced fade at high temperatures.'
            },
            {
                id: 'brakes-upgraded',
                name: 'Upgraded Brake System',
                icon: 'fa-stop',
                description: 'Enhanced brake pads and rotors for improved stopping.',
                significance: 'Increased safety and better brake modulation.'
            },
            {
                id: 'radiator-performance',
                name: 'Performance Radiator',
                icon: 'fa-snowflake',
                description: 'Heavy-duty radiator for efficient engine cooling.',
                significance: 'Maintains optimal engine temperature during extreme driving.'
            },
            {
                id: 'intercooler',
                name: 'Intercooler System',
                icon: 'fa-wind',
                description: 'Advanced air-to-air intercooler for turbo efficiency.',
                significance: 'Cooler intake air for maximum turbo boost performance.'
            },
            {
                id: 'turbo-kit',
                name: 'Turbocharger Kit',
                icon: 'fa-tornado',
                description: 'Complete turbocharging system with installation.',
                significance: 'Massive power increase with forced induction technology.'
            },
            {
                id: 'supercharger',
                name: 'Supercharger Kit',
                icon: 'fa-rotate-right',
                description: 'Mechanical supercharger for instant power delivery.',
                significance: 'Instant boost with no turbo lag for immediate acceleration.'
            }
        ]
    },
    'Exhaust System': {
        icon: 'fa-pipe',
        parts: [
            {
                id: 'exhaust-twin',
                name: 'Twin Exhaust System',
                icon: 'fa-exchange-alt',
                description: 'Dual exhaust setup for improved flow and sound.',
                significance: 'Better exhaust flow and aggressive engine sound.'
            },
            {
                id: 'exhaust-quad',
                name: 'Quad Exhaust System',
                icon: 'fa-compress',
                description: 'Four-pipe exhaust system for maximum flow.',
                significance: 'Premium appearance with optimal exhaust performance.'
            },
            {
                id: 'muffler-custom',
                name: 'Custom Muffler',
                icon: 'fa-volume-mute',
                description: 'Performance muffler with aggressive sound signature.',
                significance: 'Iconic engine sound with performance benefits.'
            },
            {
                id: 'exhaust-turbo',
                name: 'Turbo Back Exhaust',
                icon: 'fa-fire',
                description: 'Complete exhaust from turbo to tail with performance design.',
                significance: 'Maximizes turbo efficiency and power output.'
            },
            {
                id: 'exhaust-catback',
                name: 'Cat-back Exhaust',
                icon: 'fa-pipe-smoking',
                description: 'Exhaust system from catalytic converter backward.',
                significance: 'Good power gains with improved exhaust note.'
            },
            {
                id: 'headers-performance',
                name: 'Performance Headers',
                icon: 'fa-bezier-curve',
                description: 'Optimized header tubes for better scavenging.',
                significance: 'Improved exhaust flow and increased horsepower.'
            }
        ]
    },
    'Paint & Wrap': {
        icon: 'fa-paint-brush',
        parts: [
            {
                id: 'paint-matte-black',
                name: 'Matte Black Paint',
                icon: 'fa-square',
                description: 'Premium matte black finish with stealth appearance.',
                significance: 'Aggressive, modern look with sophisticated aesthetics.'
            },
            {
                id: 'paint-pearl-white',
                name: 'Pearl White Paint',
                icon: 'fa-cloud',
                description: 'Pristine pearl white with depth and shine.',
                significance: 'Classic elegant appearance with premium finish.'
            },
            {
                id: 'paint-metallic-red',
                name: 'Metallic Red Paint',
                icon: 'fa-palette',
                description: 'Vibrant metallic red with striking appearance.',
                significance: 'Eye-catching color that turns heads everywhere.'
            },
            {
                id: 'wrap-carbon',
                name: 'Carbon Fiber Wrap',
                icon: 'fa-layer-group',
                description: 'Carbon fiber texture vinyl wrap.',
                significance: 'Premium racing aesthetic without full carbon cost.'
            },
            {
                id: 'wrap-custom',
                name: 'Custom Vinyl Wrap',
                icon: 'fa-image',
                description: 'Fully customizable color and pattern wrap.',
                significance: 'Unlimited color possibilities for unique personalization.'
            },
            {
                id: 'chrome-trim',
                name: 'Chrome Trim Package',
                icon: 'fa-ring',
                description: 'Premium chrome accents and trim pieces.',
                significance: 'Luxury and elegance with premium finishing touches.'
            }
        ]
    }
};

// Application State
let currentUser = null;
let userRole = null;
let userPreferences = {};
let userCars = [];
let currentCarId = null;
let currentCategory = null;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3j8qXqZ7w8kL9m2n3o4p5q6r7s8t9u",
    authDomain: "myoforge-app.firebaseapp.com",
    projectId: "myoforge-app",
    storageBucket: "myoforge-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};

// Note: In production, use actual Firebase config
// For demo, we'll use localStorage

// Utility Functions
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('localStorage save failed:', e);
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('localStorage read failed:', e);
        return null;
    }
}

function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function showMessage(text, type = 'info') {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    const root = document.getElementById('root');
    root.insertBefore(message, root.firstChild);
    
    setTimeout(() => {
        message.remove();
    }, 4000);
}

// Authentication Functions
function initAuth() {
    const savedUser = getFromLocalStorage('myoforge_user');
    if (savedUser) {
        currentUser = savedUser;
        userRole = savedUser.role;
        userPreferences = savedUser.preferences || {};
        userCars = savedUser.cars || [];
    }
}

function simulateGmailLogin() {
    // Simulate Gmail OAuth login
    const user = {
        id: generateId(),
        email: 'user' + Math.floor(Math.random() * 10000) + '@gmail.com',
        name: 'Car Enthusiast',
        role: null,
        preferences: {
            theme: 'dark',
            notifications: true
        },
        cars: []
    };
    
    currentUser = user;
    saveToLocalStorage('myoforge_user', user);
    showMessage('Successfully logged in with Gmail!', 'success');
    return user;
}

function logout() {
    currentUser = null;
    userRole = null;
    userCars = [];
    localStorage.removeItem('myoforge_user');
    showMessage('Logged out successfully', 'info');
    render();
}

// Role Selection
function setUserRole(role) {
    userRole = role;
    if (currentUser) {
        currentUser.role = role;
        saveToLocalStorage('myoforge_user', currentUser);
    }
    showMessage(`Role set to ${role}`, 'success');
    render();
}

// Car Management
function createNewCar(carName) {
    const newCar = {
        id: generateId(),
        name: carName || 'My Custom Build',
        createdAt: new Date().toISOString(),
        parts: {},
        color: '#556B2F'
    };
    
    userCars.push(newCar);
    currentCarId = newCar.id;
    
    if (currentUser) {
        currentUser.cars = userCars;
        saveToLocalStorage('myoforge_user', currentUser);
    }
    
    showMessage(`Car "${newCar.name}" created!`, 'success');
    return newCar;
}

function deleteCar(carId) {
    userCars = userCars.filter(car => car.id !== carId);
    if (currentCarId === carId) {
        currentCarId = null;
    }
    
    if (currentUser) {
        currentUser.cars = userCars;
        saveToLocalStorage('myoforge_user', currentUser);
    }
    
    showMessage('Car deleted', 'info');
    render();
}

function getCurrentCar() {
    return userCars.find(car => car.id === currentCarId);
}

function addPartToCar(partId, category) {
    const car = getCurrentCar();
    if (!car) return;
    
    const parts = CAR_PARTS[category].parts;
    const part = parts.find(p => p.id === partId);
    
    if (part) {
        if (!car.parts[category]) {
            car.parts[category] = [];
        }
        car.parts[category].push(part);
        
        if (currentUser) {
            currentUser.cars = userCars;
            saveToLocalStorage('myoforge_user', currentUser);
        }
        
        showMessage(`Added ${part.name} to your car!`, 'success');
        render();
    }
}

function removePartFromCar(partIndex, category) {
    const car = getCurrentCar();
    if (car && car.parts[category]) {
        car.parts[category].splice(partIndex, 1);
        
        if (currentUser) {
            currentUser.cars = userCars;
            saveToLocalStorage('myoforge_user', currentUser);
        }
        
        showMessage('Part removed', 'info');
        render();
    }
}

function saveCar() {
    if (currentUser) {
        currentUser.cars = userCars;
        saveToLocalStorage('myoforge_user', currentUser);
    }
    showMessage('Car saved successfully!', 'success');
}

// Component Rendering Functions

function renderLandingPage() {
    return `
        <div class="landing-page">
            <div class="landing-hero">
                <h1>MyoForge</h1>
                <p class="tagline">Create Your Dream Car</p>
                <p class="description">
                    Customize every single part of your vehicle with unprecedented freedom and precision. 
                    From engines to exhaust systems, body kits to interior upgrades - build the car you've always imagined.
                </p>
            </div>
            
            <div class="role-selector">
                <h2>How would you like to get started?</h2>
                
                <div class="role-toggle-container">
                    <div class="role-toggle">
                        <button class="role-btn ${!userRole || userRole === 'beginner' ? 'active' : ''}" 
                                onclick="setUserRole('beginner')">
                            <i class="fas fa-book"></i><br>Beginner
                        </button>
                    </div>
                    <div class="role-toggle">
                        <button class="role-btn ${userRole === 'enthusiast' ? 'active' : ''}" 
                                onclick="setUserRole('enthusiast')">
                            <i class="fas fa-star"></i><br>Enthusiast
                        </button>
                    </div>
                </div>
                
                <div class="role-info">
                    <p><i class="fas fa-info-circle"></i> You can change this setting anytime in your profile.</p>
                </div>
                
                <button class="get-started-btn" onclick="proceedFromLanding()">
                    Get Started <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

function renderBeginnerGuide() {
    return `
        <div class="onboarding-guide">
            <div class="guide-container">
                <div class="guide-header">
                    <h1>Getting Started with MyoForge</h1>
                    <p>Learn how to build your custom car step by step</p>
                </div>
                
                <div class="guide-content">
                    <div class="guide-step">
                        <div class="step-number">1</div>
                        <h3>Create Your First Car</h3>
                        <p>Start by naming your custom car build. This is your canvas - give it a name that represents your vision. You can create multiple cars to explore different build concepts.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">2</div>
                        <h3>Choose a Category</h3>
                        <p>Browse through 8 major car categories including Engine, Suspension, Body, Interior, Lighting, Performance, Exhaust, and Paint. Each category contains carefully curated parts for that section.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">3</div>
                        <h3>Select Parts</h3>
                        <p>Explore available parts as interactive tiles. Hover over any part to see a flip animation revealing its description and significance. Understanding what each part does helps you make informed decisions.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">4</div>
                        <h3>Preview Your Build</h3>
                        <p>Your selected parts appear in real-time on the preview panel. You can see everything you've added and remove parts anytime if you change your mind.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">5</div>
                        <h3>Save & Customize</h3>
                        <p>Once satisfied with your build, save it to your garage. You can continue customizing anytime, create multiple variations, or start fresh with a new car.</p>
                    </div>
                </div>
                
                <div class="guide-navigation">
                    <button class="guide-nav-btn back" onclick="goBackToLanding()">Back</button>
                    <div class="progress-indicator">Ready to build?</div>
                    <button class="guide-nav-btn" style="background: linear-gradient(135deg, #6B8E23, #556B2F); border-color: #D4AF37; color: white;" 
                            onclick="startBuilding()">Start Building <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `;
}

function renderEnthusiastOnboarding() {
    return `
        <div class="onboarding-guide">
            <div class="guide-container" style="text-align: center; margin-top: 100px;">
                <div class="guide-header">
                    <h1>Welcome, Enthusiast!</h1>
                    <p>Ready to create your masterpiece?</p>
                </div>
                
                <div style="margin-top: 60px;">
                    <div class="enthusiast-buttons">
                        <button class="action-btn secondary" onclick="skipGuideAndBuild()" style="flex: 1;">
                            <i class="fas fa-rocket"></i> I Got This
                        </button>
                        <button class="action-btn primary" onclick="showEnthusiastGuide()" style="flex: 1;">
                            <i class="fas fa-compass"></i> Show Me Around
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderEnthusiastGuide() {
    return `
        <div class="onboarding-guide">
            <div class="guide-container">
                <div class="guide-header">
                    <h1>The MyoForge Experience</h1>
                    <p>Explore the full potential of automotive customization</p>
                </div>
                
                <div class="guide-content">
                    <div class="guide-step">
                        <div class="step-number">🔧</div>
                        <h3>Unlimited Customization</h3>
                        <p>Every single part of your vehicle can be modified. From turbocharged engines to custom paint jobs, carbon fiber hoods to ambient lighting - your creativity is the only limit.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">🎨</div>
                        <h3>Smart Part Selection</h3>
                        <p>Hover over parts to instantly see descriptions and significance. Make informed choices about performance gains, aesthetic impact, and compatibility without confusion.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">🚗</div>
                        <h3>Multiple Builds</h3>
                        <p>Create unlimited car builds and explore different philosophies. Build a track beast, a daily driver, a show car - all within the same platform.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">✨</div>
                        <h3>Real-Time Preview</h3>
                        <p>See your customizations come together in real-time. The preview panel updates instantly as you add or remove parts.</p>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">💾</div>
                        <h3>Save & Iterate</h3>
                        <p>Save your builds anytime and come back to refine them. Experiment, evolve, and perfect your dream car at your own pace.</p>
                    </div>
                </div>
                
                <div class="guide-navigation">
                    <button class="skip-guide-btn guide-nav-btn" onclick="skipGuideAndBuild()">Skip & Build Now</button>
                    <button class="guide-nav-btn" style="background: linear-gradient(135deg, #6B8E23, #556B2F); border-color: #D4AF37; color: white;" 
                            onclick="startBuilding()">Let's Build <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `;
}

function renderCarGarage() {
    return `
        <div class="car-garage">
            <div class="garage-header">
                <h1><i class="fas fa-warehouse"></i> My Garage</h1>
                <button class="create-car-btn" onclick="showCreateCarDialog()">
                    <i class="fas fa-plus"></i> New Car Build
                </button>
            </div>
            
            ${userCars.length === 0 ? `
                <div style="text-align: center; margin-top: 100px;">
                    <p style="font-size: 1.2rem; color: #d0d0d0; margin-bottom: 30px;">
                        No cars yet. Create your first custom build!
                    </p>
                    <button class="create-car-btn" onclick="showCreateCarDialog()">
                        <i class="fas fa-plus"></i> Create First Car
                    </button>
                </div>
            ` : `
                <div class="car-grid">
                    ${userCars.map(car => `
                        <div class="car-card">
                            <div class="car-card-image">
                                <i class="fas fa-car"></i>
                            </div>
                            <div class="car-card-content">
                                <div class="car-card-title">${car.name}</div>
                                <div class="car-card-info">
                                    <i class="fas fa-calendar-alt"></i> 
                                    ${new Date(car.createdAt).toLocaleDateString()}
                                </div>
                                <div class="car-card-info">
                                    <i class="fas fa-cog"></i> 
                                    ${Object.values(car.parts).flat().length} parts installed
                                </div>
                                <div class="car-card-actions">
                                    <button class="car-card-btn edit" onclick="editCar('${car.id}')">
                                        <i class="fas fa-edit"></i> Edit
                                    </button>
                                    <button class="car-card-btn delete" onclick="deleteCarConfirm('${car.id}')">
                                        <i class="fas fa-trash"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;
}

function renderCarBuilder() {
    const car = getCurrentCar();
    if (!car) return renderCarGarage();
    
    const selectedCategory = currentCategory || Object.keys(CAR_PARTS)[0];
    const categoryParts = CAR_PARTS[selectedCategory]?.parts || [];
    
    return `
        <div class="car-builder">
            <div class="builder-container">
                <div class="builder-header">
                    <h1><i class="fas fa-tools"></i> ${car.name}</h1>
                    <div class="builder-actions">
                        <button class="builder-btn back" onclick="backToGarage()">
                            <i class="fas fa-arrow-left"></i> Back to Garage
                        </button>
                        <button class="builder-btn save" onclick="saveCar()">
                            <i class="fas fa-save"></i> Save Car
                        </button>
                    </div>
                </div>
                
                <div class="builder-content">
                    <!-- Right side: Parts Grid & Categories -->
                    <div>
                        <div class="category-tabs">
                            <div class="tabs-container">
                                ${Object.keys(CAR_PARTS).map(category => `
                                    <button class="tab-btn ${selectedCategory === category ? 'active' : ''}" 
                                            onclick="selectCategory('${category}')">
                                        <i class="fas ${CAR_PARTS[category].icon}"></i> ${category}
                                    </button>
                                `).join('')}
                            </div>
                            
                            <div class="parts-grid">
                                ${categoryParts.map(part => `
                                    <div class="part-tile">
                                        <div class="part-tile-inner">
                                            <div class="part-front">
                                                <div class="part-icon">
                                                    <i class="fas ${part.icon}"></i>
                                                </div>
                                                <div class="part-name">${part.name}</div>
                                                <div class="part-category">${selectedCategory}</div>
                                            </div>
                                            <div class="part-back">
                                                <div class="part-description">${part.description}</div>
                                                <div class="part-significance"><strong>Significance:</strong> ${part.significance}</div>
                                                <button class="part-add-btn" onclick="addPartToCar('${part.id}', '${selectedCategory}')">
                                                    <i class="fas fa-plus"></i> Add Part
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Left side: Car Preview & Summary -->
                    <div class="car-preview-section">
                        <div class="preview-title">Your Build</div>
                        <div class="car-preview">
                            <i class="fas fa-car"></i>
                        </div>
                        
                        <div class="preview-parts-list">
                            <h4>Installed Parts (${Object.values(car.parts).flat().length})</h4>
                            ${Object.keys(car.parts).length === 0 ? `
                                <p style="color: #d0d0d0; font-size: 0.9rem;">Select parts from categories to add to your car</p>
                            ` : `
                                ${Object.entries(car.parts).map(([category, parts]) => `
                                    <div style="margin-bottom: 15px;">
                                        <h5 style="color: #6B8E23; font-size: 0.95rem; margin-bottom: 8px;">${category}</h5>
                                        ${parts.map((part, idx) => `
                                            <div class="preview-part-item">
                                                <span class="part-name">${part.name}</span>
                                                <button class="remove-btn" onclick="removePartFromCar(${idx}, '${category}')">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            `}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAuthSection() {
    if (!currentUser) {
        return `
            <div class="auth-section">
                <button class="auth-btn" onclick="simulateGmailLogin()">
                    <i class="fab fa-google"></i> Sign in with Gmail
                </button>
            </div>
        `;
    } else {
        return `
            <div class="auth-section user-menu">
                <button class="user-profile-btn" onclick="toggleUserMenu()">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </button>
                <div class="user-dropdown" id="userDropdown">
                    <div style="padding: 10px 20px; border-bottom: 1px solid rgba(107, 142, 35, 0.3); color: #d0d0d0;">
                        ${currentUser.email}
                    </div>
                    <button class="dropdown-item" onclick="changeRole()">
                        <i class="fas fa-exchange-alt"></i> Change Role
                    </button>
                    <button class="dropdown-item" onclick="logout()">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>
            </div>
        `;
    }
}

// Navigation & Control Functions
function proceedFromLanding() {
    if (!currentUser) {
        simulateGmailLogin();
        return;
    }
    
    if (!userRole) {
        showMessage('Please select a role first', 'warning');
        return;
    }
    
    if (userRole === 'beginner') {
        render('beginnerGuide');
    } else {
        render('enthusiastOnboarding');
    }
}

function goBackToLanding() {
    render('landing');
}

function showEnthusiastGuide() {
    render('enthusiastGuide');
}

function skipGuideAndBuild() {
    render('garage');
}

function startBuilding() {
    if (userCars.length === 0) {
        createNewCar('My First Build');
    }
    render('builder');
}

function showCreateCarDialog() {
    const name = prompt('Enter car name:', 'My Custom Build');
    if (name) {
        createNewCar(name);
        editCar(userCars[userCars.length - 1].id);
    }
}

function editCar(carId) {
    currentCarId = carId;
    currentCategory = null;
    render('builder');
}

function backToGarage() {
    currentCarId = null;
    currentCategory = null;
    render('garage');
}

function deleteCarConfirm(carId) {
    if (confirm('Are you sure you want to delete this car?')) {
        deleteCar(carId);
    }
}

function selectCategory(category) {
    currentCategory = category;
    render('builder');
}

function changeRole() {
    const newRole = userRole === 'beginner' ? 'enthusiast' : 'beginner';
    setUserRole(newRole);
    toggleUserMenu();
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Main Render Function
function render(page = null) {
    const root = document.getElementById('root');
    let content = '';
    
    // Determine which page to show
    if (!currentUser) {
        content = renderLandingPage();
    } else if (page === 'enthusiastOnboarding') {
        content = renderEnthusiastOnboarding();
    } else if (page === 'enthusiastGuide') {
        content = renderEnthusiastGuide();
    } else if (page === 'beginnerGuide') {
        content = renderBeginnerGuide();
    } else if (page === 'builder' || currentCarId) {
        content = renderCarBuilder();
    } else {
        content = renderCarGarage();
    }
    
    root.innerHTML = content + renderAuthSection();
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown && !e.target.closest('.user-menu')) {
            dropdown.classList.remove('show');
        }
    });
}

// Initialize App
function initApp() {
    initAuth();
    
    if (currentUser) {
        render('garage');
    } else {
        render('landing');
    }
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
