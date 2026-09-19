/* ==========================================
   MYOFORGE - MAIN APPLICATION
   =========================================== */

// Car Parts Database
const PART_IMAGE_POOLS = {
    engine: [
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85'
    ],
    chassis: [
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=700&q=85'
    ],
    exterior: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=85'
    ],
    interior: [
        'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=85'
    ],
    electrical: [
        'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=700&q=85'
    ]
};

function makePart(id, name, icon, imageGroup, purpose, significance, index) {
    return {
        id,
        name,
        icon,
        image: PART_IMAGE_POOLS[imageGroup][index % PART_IMAGE_POOLS[imageGroup].length],
        description: `${name} ${purpose}.`,
        significance: `${significance}.`
    };
}

function makeCategory(icon, imageGroup, purpose, significance, parts) {
    return {
        icon,
        parts: parts.map((part, index) => makePart(part[0], part[1], part[2], imageGroup, purpose, significance, index))
    };
}

const CAR_PARTS = {
    'Engine Core': makeCategory('fa-engine', 'engine', 'forms the heart of the power unit', 'sets the car\'s power character, response, and service needs', [
        ['engine-inline-four', 'Inline-Four Engine', 'fa-cog'], ['engine-v6', 'V6 Engine', 'fa-cog'], ['engine-v8', 'V8 Engine', 'fa-cog'], ['engine-v10', 'V10 Engine', 'fa-cog'], ['engine-boxer', 'Flat-Six Boxer Engine', 'fa-cog'], ['engine-diesel', 'Turbo Diesel Engine', 'fa-cog'], ['engine-hybrid', 'Hybrid Power Unit', 'fa-bolt'], ['engine-rotary', 'Rotary Engine', 'fa-sync'], ['engine-crate', 'Built Crate Engine', 'fa-cogs'], ['engine-long-block', 'Long-Block Assembly', 'fa-cogs']
    ]),
    'Forced Induction & Intake': makeCategory('fa-wind', 'engine', 'manages the air entering the engine', 'changes how quickly the engine makes power and how it responds to the throttle', [
        ['turbo-single', 'Single Turbocharger', 'fa-wind'], ['turbo-twin', 'Twin-Turbo System', 'fa-wind'], ['turbo-variable', 'Variable Geometry Turbo', 'fa-wind'], ['supercharger-roots', 'Roots Supercharger', 'fa-sync'], ['supercharger-centrifugal', 'Centrifugal Supercharger', 'fa-sync'], ['intake-cold-air', 'Cold-Air Intake', 'fa-snowflake'], ['intake-ram', 'Ram-Air Intake', 'fa-wind'], ['throttle-body', 'Larger Throttle Body', 'fa-circle'], ['intake-manifold', 'Performance Intake Manifold', 'fa-layer-group'], ['air-filter', 'High-Flow Air Filter', 'fa-filter']
    ]),
    'Fuel & Ignition': makeCategory('fa-gas-pump', 'engine', 'meters fuel and creates combustion', 'influences reliability, economy, tuning range, and clean power delivery', [
        ['fuel-pump', 'High-Flow Fuel Pump', 'fa-tint'], ['fuel-injectors', 'Performance Fuel Injectors', 'fa-tint'], ['fuel-rail', 'Billet Fuel Rail', 'fa-bars'], ['fuel-pressure-regulator', 'Adjustable Fuel Pressure Regulator', 'fa-sliders-h'], ['ethanol-kit', 'Flex-Fuel Conversion', 'fa-leaf'], ['ignition-coils', 'High-Output Ignition Coils', 'fa-bolt'], ['spark-plugs', 'Colder Spark Plugs', 'fa-fire'], ['ecu-tune', 'Custom ECU Calibration', 'fa-microchip'], ['standalone-ecu', 'Standalone ECU', 'fa-microchip'], ['oxygen-sensor', 'Wideband Oxygen Sensor', 'fa-tachometer-alt']
    ]),
    'Transmission & Driveline': makeCategory('fa-gears', 'engine', 'transfers engine torque to the driven wheels', 'defines acceleration feel, traction behavior, and long-term drivetrain durability', [
        ['transmission-manual', 'Six-Speed Manual', 'fa-gears'], ['transmission-dct', 'Dual-Clutch Transmission', 'fa-gears'], ['transmission-auto', 'Eight-Speed Automatic', 'fa-cogs'], ['transmission-cvt', 'Continuously Variable Transmission', 'fa-cogs'], ['transmission-sequential', 'Sequential Gearbox', 'fa-gears'], ['clutch-twin-disc', 'Twin-Disc Clutch', 'fa-circle-notch'], ['flywheel-lightweight', 'Lightweight Flywheel', 'fa-circle-notch'], ['driveshaft-carbon', 'Carbon-Fiber Driveshaft', 'fa-minus'], ['differential-lsd', 'Limited-Slip Differential', 'fa-circle'], ['transfer-case', 'Performance Transfer Case', 'fa-cubes']
    ]),
    'Cooling & HVAC': makeCategory('fa-temperature-low', 'engine', 'keeps mechanical and cabin temperatures under control', 'protects the powertrain while preserving comfort during demanding use', [
        ['radiator-aluminum', 'Aluminum Radiator', 'fa-temperature-low'], ['radiator-dual-pass', 'Dual-Pass Radiator', 'fa-temperature-low'], ['oil-cooler', 'Engine Oil Cooler', 'fa-tint'], ['transmission-cooler', 'Transmission Cooler', 'fa-snowflake'], ['intercooler-front-mount', 'Front-Mount Intercooler', 'fa-wind'], ['coolant-expansion', 'Coolant Expansion Tank', 'fa-flask'], ['electric-fan', 'Electric Cooling Fan', 'fa-fan'], ['thermostat', 'Low-Temperature Thermostat', 'fa-temperature-low'], ['ac-compressor', 'Performance AC Compressor', 'fa-snowflake'], ['cabin-filter', 'Activated Carbon Cabin Filter', 'fa-filter']
    ]),
    'Suspension Geometry': makeCategory('fa-arrows-alt-v', 'chassis', 'controls how the chassis moves and holds its alignment', 'changes grip, comfort, steering confidence, and tire wear', [
        ['coilovers', 'Adjustable Coilovers', 'fa-arrows-alt-v'], ['air-suspension', 'Air Suspension', 'fa-cloud'], ['adaptive-dampers', 'Adaptive Dampers', 'fa-sliders-h'], ['springs-linear', 'Linear-Rate Springs', 'fa-compress'], ['springs-progressive', 'Progressive Springs', 'fa-compress'], ['sway-bar-front', 'Front Sway Bar', 'fa-minus'], ['sway-bar-rear', 'Rear Sway Bar', 'fa-minus'], ['control-arms', 'Adjustable Control Arms', 'fa-code-branch'], ['subframe-brace', 'Subframe Brace', 'fa-grip-lines'], ['bushings-poly', 'Polyurethane Bushings', 'fa-circle']
    ]),
    'Wheels & Tires': makeCategory('fa-circle-notch', 'chassis', 'creates the contact patch between the car and road', 'is one of the largest changes to traction, braking, ride, and visual stance', [
        ['wheels-forged', 'Forged Alloy Wheels', 'fa-circle-notch'], ['wheels-flow-formed', 'Flow-Formed Wheels', 'fa-circle-notch'], ['wheels-steel', 'Steel Rally Wheels', 'fa-circle-notch'], ['tires-summer', 'Ultra-High-Performance Summer Tires', 'fa-road'], ['tires-winter', 'Dedicated Winter Tires', 'fa-snowflake'], ['tires-all-terrain', 'All-Terrain Tires', 'fa-mountain'], ['tires-slicks', 'Track Slicks', 'fa-circle-notch'], ['tire-pressure', 'Tire Pressure Sensors', 'fa-gauge-high'], ['wheel-spacers', 'Hub-Centric Spacers', 'fa-expand'], ['center-locks', 'Center-Lock Hubs', 'fa-lock']
    ]),
    'Braking Hardware': makeCategory('fa-stop-circle', 'chassis', 'converts speed into controlled heat and stopping force', 'determines braking confidence, fade resistance, and pedal feel', [
        ['brakes-carbon-ceramic', 'Carbon-Ceramic Rotors', 'fa-stop-circle'], ['brakes-two-piece', 'Two-Piece Rotors', 'fa-stop-circle'], ['brakes-big-kit', 'Big Brake Kit', 'fa-stop'], ['pads-track', 'Track Brake Pads', 'fa-square'], ['pads-street', 'Low-Dust Street Pads', 'fa-square'], ['brake-lines', 'Stainless Brake Lines', 'fa-grip-lines'], ['brake-fluid', 'High-Temperature Brake Fluid', 'fa-tint'], ['master-cylinder', 'Upgraded Master Cylinder', 'fa-circle'], ['brake-bias', 'Adjustable Brake Bias Valve', 'fa-sliders-h'], ['handbrake-hydraulic', 'Hydraulic Handbrake', 'fa-hand-paper']
    ]),
    'Steering & Chassis': makeCategory('fa-compass', 'chassis', 'connects driver inputs to the front axle and chassis', 'sets precision, feedback, and how the car communicates at the limit', [
        ['steering-rack', 'Quick-Ratio Steering Rack', 'fa-compass'], ['power-steering-electric', 'Electric Power Steering', 'fa-bolt'], ['power-steering-hydraulic', 'Hydraulic Power Steering', 'fa-tint'], ['steering-column', 'Collapsible Steering Column', 'fa-arrows-alt-h'], ['tie-rods', 'Adjustable Tie Rods', 'fa-minus'], ['ball-joints', 'High-Angle Ball Joints', 'fa-circle'], ['chassis-brace', 'Front Strut Brace', 'fa-grip-lines'], ['roll-cage', 'Weld-In Roll Cage', 'fa-border-style'], ['seam-welds', 'Chassis Seam Welding', 'fa-fire'], ['underbody-brace', 'Underbody Chassis Brace', 'fa-minus']
    ]),
    'Body Panels': makeCategory('fa-car-side', 'exterior', 'defines the car\'s structure and silhouette', 'changes mass, rigidity, repairability, and the visual identity of the build', [
        ['hood-carbon', 'Carbon-Fiber Hood', 'fa-layer-group'], ['hood-vented', 'Vented Aluminum Hood', 'fa-layer-group'], ['fenders-widebody', 'Widebody Fenders', 'fa-expand-alt'], ['fenders-carbon', 'Carbon Front Fenders', 'fa-square'], ['bumper-front', 'Front Bumper Cover', 'fa-shield-alt'], ['bumper-rear', 'Rear Bumper Diffuser', 'fa-shield-alt'], ['doors-carbon', 'Carbon-Fiber Door Shells', 'fa-door-open'], ['quarter-panels', 'Bolt-On Quarter Panels', 'fa-square'], ['rocker-panels', 'Reinforced Rocker Panels', 'fa-minus'], ['trunk-lid', 'Lightweight Trunk Lid', 'fa-box']
    ]),
    'Aerodynamics': makeCategory('fa-wind', 'exterior', 'manages airflow around and beneath the body', 'balances high-speed stability, cooling, drag, and usable downforce', [
        ['splitter-front', 'Front Splitter', 'fa-minus'], ['canards', 'Front Canards', 'fa-angle-double-right'], ['side-skirts-aero', 'Aero Side Skirts', 'fa-minus'], ['diffuser-rear', 'Rear Diffuser', 'fa-grip-lines'], ['spoiler-lip', 'Trunk Lip Spoiler', 'fa-arrow-up'], ['wing-adjustable', 'Adjustable Rear Wing', 'fa-arrows-alt-h'], ['ducktail', 'Ducktail Spoiler', 'fa-angle-up'], ['undertray', 'Flat Underbody Tray', 'fa-minus'], ['brake-ducts', 'Brake Cooling Ducts', 'fa-wind'], ['active-aero', 'Active Aero Flaps', 'fa-cogs']
    ]),
    'Glass, Roof & Access': makeCategory('fa-window-maximize', 'exterior', 'controls visibility, weather sealing, and access points', 'affects cabin light, weight, security, and everyday usability', [
        ['windshield-acoustic', 'Acoustic Windshield', 'fa-window-maximize'], ['windshield-heated', 'Heated Windshield', 'fa-sun'], ['side-glass-tint', 'Factory-Style Privacy Glass', 'fa-window-maximize'], ['polycarbonate-windows', 'Polycarbonate Side Windows', 'fa-window-maximize'], ['sunroof-glass', 'Panoramic Glass Roof', 'fa-sun'], ['sunroof-carbon', 'Carbon Roof Panel', 'fa-layer-group'], ['roof-rack', 'Low-Profile Roof Rack', 'fa-bars'], ['door-handles-flush', 'Flush Door Handles', 'fa-hand-pointer'], ['soft-close', 'Soft-Close Door Hardware', 'fa-door-closed'], ['keyless-entry', 'Keyless Entry Module', 'fa-key']
    ]),
    'Exterior Details': makeCategory('fa-gem', 'exterior', 'adds the small exterior surfaces people touch and notice', 'finishes the design while improving protection, usability, or visibility', [
        ['mirrors-carbon', 'Carbon Mirror Caps', 'fa-car-side'], ['mirrors-camera', 'Digital Mirror Cameras', 'fa-video'], ['grille-mesh', 'Mesh Grille', 'fa-th'], ['grille-active', 'Active Shutter Grille', 'fa-bars'], ['emblems-custom', 'Custom Emblem Set', 'fa-certificate'], ['badges-blackout', 'Blackout Badges', 'fa-tag'], ['mud-flaps', 'Rally Mud Flaps', 'fa-shield-alt'], ['tow-hook', 'Front Tow Hook', 'fa-link'], ['license-bracket', 'Offset Plate Bracket', 'fa-id-card'], ['rock-guards', 'Paint Protection Film', 'fa-shield-alt']
    ]),
    'Seats & Restraints': makeCategory('fa-chair', 'interior', 'supports occupants and keeps them positioned in the cabin', 'changes comfort, safety, posture, and driver confidence', [
        ['seat-bucket', 'Fixed-Back Bucket Seats', 'fa-chair'], ['seat-recaro', 'Sport Recaro Seats', 'fa-chair'], ['seat-heated', 'Heated Comfort Seats', 'fa-temperature-high'], ['seat-ventilated', 'Ventilated Seats', 'fa-wind'], ['seat-memory', 'Memory Seat Frames', 'fa-save'], ['harness-six-point', 'Six-Point Harnesses', 'fa-grip-lines'], ['harness-bar', 'Harness Bar', 'fa-minus'], ['seat-sliders', 'Low Seat Sliders', 'fa-arrows-alt-v'], ['headrests', 'Embroidered Headrests', 'fa-chair'], ['child-seat-mounts', 'ISOFIX Mounts', 'fa-child']
    ]),
    'Interior Trim & Comfort': makeCategory('fa-couch', 'interior', 'shapes the surfaces and comfort of the passenger cell', 'sets the tactile character, durability, acoustics, and visual mood of the cabin', [
        ['leather-interior', 'Full Leather Upholstery', 'fa-couch'], ['alcantara-headliner', 'Alcantara Headliner', 'fa-layer-group'], ['carbon-dashboard', 'Carbon-Fiber Dashboard', 'fa-th-large'], ['wood-trim', 'Open-Pore Wood Trim', 'fa-tree'], ['aluminum-trim', 'Brushed Aluminum Trim', 'fa-bars'], ['floor-mats', 'Tailored Floor Mats', 'fa-square'], ['sound-deadening', 'Cabin Sound Deadening', 'fa-volume-down'], ['ambient-lighting', 'Ambient Lighting Rails', 'fa-lightbulb'], ['rear-console', 'Rear Center Console', 'fa-couch'], ['fridge-console', 'Refrigerated Console', 'fa-snowflake']
    ]),
    'Controls & Instruments': makeCategory('fa-sliders-h', 'interior', 'gives the driver information and physical control', 'changes ergonomics, feedback, visibility, and how quickly the car can be understood', [
        ['steering-wheel', 'Flat-Bottom Steering Wheel', 'fa-circle-notch'], ['wheel-quick-release', 'Quick-Release Wheel Hub', 'fa-link'], ['paddle-shifters', 'Extended Paddle Shifters', 'fa-hand-pointer'], ['pedal-box', 'Adjustable Pedal Box', 'fa-sliders-h'], ['pedals-aluminum', 'Aluminum Pedal Set', 'fa-grip-lines'], ['gauge-cluster', 'Digital Gauge Cluster', 'fa-tachometer-alt'], ['gauge-boost', 'Dedicated Boost Gauge', 'fa-gauge-high'], ['head-up-display', 'Head-Up Display', 'fa-eye'], ['switch-panel', 'Custom Switch Panel', 'fa-toggle-on'], ['drive-mode', 'Drive Mode Controller', 'fa-sliders-h']
    ]),
    'Infotainment & Audio': makeCategory('fa-volume-up', 'interior', 'handles sound, navigation, and connected media', 'makes the cabin more useful and personal on every drive', [
        ['sound-system', 'Premium Sound System', 'fa-volume-up'], ['amplifier', 'Multi-Channel Amplifier', 'fa-volume-up'], ['subwoofer', 'Underfloor Subwoofer', 'fa-volume-down'], ['speakers-component', 'Component Speaker Set', 'fa-volume-up'], ['head-unit', 'Touchscreen Head Unit', 'fa-desktop'], ['wireless-carplay', 'Wireless CarPlay Module', 'fa-mobile-alt'], ['rear-screens', 'Rear Entertainment Screens', 'fa-tv'], ['dash-camera', 'Integrated Dash Camera', 'fa-video'], ['antenna', 'Shark-Fin Antenna', 'fa-wifi'], ['usb-hub', 'High-Speed USB Hub', 'fa-usb']
    ]),
    'Exterior Lighting': makeCategory('fa-lightbulb', 'electrical', 'controls what the car shows and sees in low light', 'improves visibility, safety, recognition, and nighttime character', [
        ['headlights-led', 'Matrix LED Headlights', 'fa-sun'], ['headlights-laser', 'Laser High-Beams', 'fa-sun'], ['headlights-adaptive', 'Adaptive Cornering Lamps', 'fa-compass'], ['fog-lights', 'LED Fog Lamps', 'fa-cloud'], ['taillights-led', 'LED Tail Lamps', 'fa-lightbulb'], ['taillights-smoked', 'Smoked Tail Lamp Lenses', 'fa-lightbulb'], ['underglow', 'Programmable Underglow', 'fa-palette'], ['turn-signals-sequential', 'Sequential Turn Signals', 'fa-exchange-alt'], ['puddle-lamps', 'Mirror Puddle Lamps', 'fa-lightbulb'], ['brake-light-high', 'High-Mount Brake Light', 'fa-stop']
    ]),
    'Electrical & Battery': makeCategory('fa-battery-full', 'electrical', 'distributes and stores electrical energy', 'supports reliable starting, accessories, control modules, and future upgrades', [
        ['battery-lithium', 'Lithium Starter Battery', 'fa-battery-full'], ['battery-agm', 'AGM Battery', 'fa-battery-full'], ['alternator-high-output', 'High-Output Alternator', 'fa-bolt'], ['starter-motor', 'High-Torque Starter Motor', 'fa-power-off'], ['fuse-box', 'Motorsport Fuse Panel', 'fa-th-large'], ['wiring-harness', 'Motorsport Wiring Harness', 'fa-project-diagram'], ['grounding-kit', 'Chassis Grounding Kit', 'fa-link'], ['kill-switch', 'Battery Kill Switch', 'fa-power-off'], ['voltage-regulator', 'Smart Voltage Regulator', 'fa-microchip'], ['telemetry-module', 'Vehicle Telemetry Module', 'fa-satellite-dish']
    ]),
    'Safety Systems': makeCategory('fa-shield-alt', 'electrical', 'protects occupants before, during, and after an impact', 'is foundational to using performance hardware responsibly', [
        ['airbags', 'Multi-Stage Airbags', 'fa-shield-alt'], ['rollover-sensors', 'Rollover Sensors', 'fa-exclamation-triangle'], ['abs-module', 'Motorsport ABS Module', 'fa-stop-circle'], ['traction-control', 'Adjustable Traction Control', 'fa-sliders-h'], ['stability-control', 'Stability Control Module', 'fa-shield-alt'], ['fire-suppression', 'Fire Suppression System', 'fa-fire-extinguisher'], ['first-aid', 'Track First-Aid Kit', 'fa-medkit'], ['reflective-triangle', 'Emergency Triangle Kit', 'fa-exclamation-triangle'], ['tire-repair', 'Tire Repair Compressor', 'fa-compress'], ['blind-spot', 'Blind-Spot Monitoring', 'fa-eye']
    ]),
    'EV Battery & Drive': makeCategory('fa-charging-station', 'electrical', 'stores and delivers high-voltage electric drive energy', 'defines electric range, response, thermal behavior, and charging flexibility', [
        ['ev-motor-front', 'Front Electric Motor', 'fa-bolt'], ['ev-motor-rear', 'Rear Electric Motor', 'fa-bolt'], ['ev-dual-motor', 'Dual-Motor Drive Unit', 'fa-bolt'], ['ev-battery-pack', 'High-Density Battery Pack', 'fa-battery-full'], ['ev-inverter', 'Performance Inverter', 'fa-microchip'], ['ev-bms', 'Battery Management System', 'fa-microchip'], ['ev-fast-charge', 'DC Fast-Charge Module', 'fa-charging-station'], ['ev-home-charge', 'AC Home Charger', 'fa-plug'], ['ev-cooling', 'Battery Cooling Plate', 'fa-snowflake'], ['ev-reduction-gear', 'Single-Speed Reduction Gear', 'fa-gears']
    ]),
    'Exhaust & Emissions': makeCategory('fa-smog', 'engine', 'routes exhaust gases and manages emissions', 'changes sound, flow, heat control, legality, and engine efficiency', [
        ['headers', 'Equal-Length Headers', 'fa-project-diagram'], ['downpipe', 'High-Flow Downpipe', 'fa-pipe'], ['catalytic-sport', 'Sports Catalytic Converter', 'fa-filter'], ['catback', 'Cat-Back Exhaust', 'fa-pipe'], ['muffler', 'Valved Performance Muffler', 'fa-volume-up'], ['resonator', 'Helmholtz Resonator', 'fa-wave-square'], ['exhaust-tips', 'Titanium Exhaust Tips', 'fa-circle'], ['heat-shield', 'Ceramic Heat Shields', 'fa-shield-alt'], ['exhaust-hangers', 'Polyurethane Exhaust Hangers', 'fa-link'], ['evap-system', 'Evaporative Emissions System', 'fa-leaf']
    ]),
    'Paint, Wrap & Finish': makeCategory('fa-paint-brush', 'exterior', 'sets the color, texture, and surface protection of the body', 'is the strongest visual expression of the build and protects the underlying panels', [
        ['paint-matte-black', 'Matte Black Paint', 'fa-square'], ['paint-pearl-white', 'Pearl White Paint', 'fa-square'], ['paint-metallic-red', 'Metallic Red Paint', 'fa-square'], ['paint-chameleon', 'Chameleon Paint', 'fa-palette'], ['paint-satin-green', 'Satin Olive Paint', 'fa-square'], ['wrap-carbon', 'Carbon-Fiber Wrap', 'fa-layer-group'], ['wrap-printed', 'Printed Graphic Wrap', 'fa-image'], ['ceramic-coating', 'Ceramic Coating', 'fa-shield-alt'], ['paint-protection', 'Clear Paint Protection Film', 'fa-shield-alt'], ['chrome-delete', 'Chrome Delete Package', 'fa-minus']
    ]),
    'Cargo & Utility': makeCategory('fa-box-open', 'exterior', 'adds storage and practical carrying capability', 'makes the build useful beyond the show or track while preserving its purpose', [
        ['trunk-organizer', 'Trunk Organizer', 'fa-box-open'], ['cargo-divider', 'Cargo Divider', 'fa-grip-lines'], ['tow-hitch', 'Hidden Tow Hitch', 'fa-link'], ['roof-box', 'Aerodynamic Roof Box', 'fa-box'], ['bike-rack', 'Hitch Bike Rack', 'fa-bicycle'], ['ski-rack', 'Locking Ski Rack', 'fa-snowflake'], ['recovery-board', 'Recovery Boards', 'fa-road'], ['winch', 'Compact Recovery Winch', 'fa-cog'], ['spare-wheel', 'Full-Size Spare Wheel', 'fa-circle-notch'], ['jack-kit', 'Low-Profile Jack Kit', 'fa-wrench']
    ]),
    'Service & Maintenance': makeCategory('fa-wrench', 'engine', 'keeps every installed system serviceable and measurable', 'turns a dramatic build into a dependable car that can be maintained over time', [
        ['service-access', 'Quick-Service Panels', 'fa-wrench'], ['drain-plugs', 'Magnetic Drain Plugs', 'fa-tint'], ['catch-can', 'Oil Catch Can', 'fa-flask'], ['oil-filter', 'Remote Oil Filter Mount', 'fa-filter'], ['fluid-reservoirs', 'Billet Fluid Reservoirs', 'fa-flask'], ['belt-tensioner', 'Adjustable Belt Tensioner', 'fa-sliders-h'], ['engine-mounts', 'Performance Engine Mounts', 'fa-cog'], ['trans-mount', 'Transmission Mount', 'fa-cog'], ['diagnostic-port', 'Accessible Diagnostic Port', 'fa-plug'], ['firewall-seal', 'Firewall Pass-Through Seals', 'fa-shield-alt']
    ]),
    'Track & Competition': makeCategory('fa-flag-checkered', 'chassis', 'prepares the car for repeatable high-load driving', 'prioritizes consistency, feedback, cooling, and driver protection over convenience', [
        ['lap-timer', 'GPS Lap Timer', 'fa-stopwatch'], ['data-logger', 'Performance Data Logger', 'fa-chart-line'], ['transponder', 'Race Transponder Mount', 'fa-satellite-dish'], ['tow-straps', 'Competition Tow Straps', 'fa-link'], ['window-net', 'Driver Window Net', 'fa-border-style'], ['fire-bottle', 'Motorsport Fire Bottle', 'fa-fire-extinguisher'], ['pit-radio', 'Pit Radio System', 'fa-headset'], ['rain-light', 'Rain Light', 'fa-lightbulb'], ['number-panels', 'Magnetic Number Panels', 'fa-hashtag'], ['track-alignment', 'Track Alignment Package', 'fa-ruler-combined']
    ])
};

/* Legacy builds keep their saved category names; new builds use the expanded catalog above. */
const LEGACY_CATEGORY_ALIASES = {
    'Engine & Drivetrain': 'Engine Core',
    'Suspension & Wheels': 'Wheels & Tires',
    'Body & Exterior': 'Body Panels',
    'Interior': 'Interior Trim & Comfort',
    'Lighting': 'Exterior Lighting',
    'Performance Systems': 'Braking Hardware',
    'Exhaust System': 'Exhaust & Emissions',
    'Paint & Wrap': 'Paint, Wrap & Finish'
};
/*
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

*/

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
            <nav class="site-nav">
                <a class="brand" href="#">myo<span>forge</span></a>
                <div class="nav-meta">vehicle composition studio / 01</div>
            </nav>

            <main class="landing-main">
                <section class="landing-copy">
                    <div class="eyebrow">The anti-stock configurator</div>
                    <h1>Build beyond <em>stock.</em></h1>
                    <p class="lede">A tactile studio for making the car that exists in your head. Choose the systems, surfaces, and details that make it yours.</p>
                    <div class="landing-notes">
                        <div><strong>260</strong> component types</div>
                        <div><strong>∞</strong> build directions</div>
                        <div><strong>local</strong> private garage</div>
                    </div>
                </section>

                <section class="hero-machine">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85" alt="A customized sports car ready for configuration">
                    <div class="machine-caption">your next obsession / ready</div>
                </section>

                <section class="entry-panel">
                    <div class="section-kicker">Start a private build</div>
                    <h2>How do you want to enter?</h2>
                    <p>Pick a pace. You can change this preference from your profile whenever your confidence catches up with your curiosity.</p>

                    <div class="role-toggle-container">
                        <button class="role-btn ${!userRole || userRole === 'beginner' ? 'active' : ''}" onclick="setUserRole('beginner')"><i class="fas fa-compass"></i> Beginner</button>
                        <button class="role-btn ${userRole === 'enthusiast' ? 'active' : ''}" onclick="setUserRole('enthusiast')"><i class="fas fa-bolt"></i> Enthusiast</button>
                    </div>
                    <div class="role-info"><i class="fas fa-sliders-h"></i> Your role is a starting point, never a lock-in.</div>
                    <button class="get-started-btn" onclick="proceedFromLanding()">Sign in with Gmail <i class="fab fa-google"></i></button>
                </section>
            </div>
        </div>
    `;
}

function renderBeginnerGuide() {
    const categoryCount = Object.keys(CAR_PARTS).length;
    const partCount = Object.values(CAR_PARTS).reduce((total, category) => total + category.parts.length, 0);
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
                        <p>Browse ${categoryCount} logical systems covering the engine, chassis, body, cabin, electronics, safety, EV hardware, utility, and competition equipment. There are ${partCount} components to explore.</p>
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
                ${renderRoleControl()}
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
    const partCount = Object.values(CAR_PARTS).reduce((total, category) => total + category.parts.length, 0);
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
                        <p>Explore ${partCount} components across the complete vehicle: power, structure, cabin, electronics, safety, utility, and competition systems.</p>
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
                ${renderRoleControl()}
            </div>
        </div>
    `;
}

function renderCarGarage() {
    return `
        <div class="car-garage">
            <div class="garage-header">
                <h1><i class="fas fa-warehouse"></i> My Garage</h1>
                <div class="garage-actions">
                    ${renderRoleControl()}
                    <button class="create-car-btn" onclick="showCreateCarDialog()">
                        <i class="fas fa-plus"></i> New Car Build
                    </button>
                </div>
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
                        ${renderRoleControl()}
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
                                            <div class="part-front" style="background-image: url('${getPartImage(selectedCategory, part)}');">
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

function getPartImage(category, part = null) {
    if (part?.image) return part.image;
    const images = {
        'Engine & Drivetrain': PART_IMAGE_POOLS.engine[0],
        'Suspension & Wheels': PART_IMAGE_POOLS.chassis[0],
        'Body & Exterior': PART_IMAGE_POOLS.exterior[0],
        'Interior': PART_IMAGE_POOLS.interior[0],
        'Lighting': PART_IMAGE_POOLS.electrical[0],
        'Performance Systems': PART_IMAGE_POOLS.chassis[1],
        'Exhaust System': PART_IMAGE_POOLS.engine[1],
        'Paint & Wrap': PART_IMAGE_POOLS.exterior[1]
    };
    return images[category] || images['Body & Exterior'];
}

function renderRoleControl() {
    return `
        <div class="mode-control" aria-label="Experience mode">
            <span>mode</span>
            <button class="mode-btn ${userRole === 'beginner' ? 'active' : ''}" onclick="switchRole('beginner')">Beginner</button>
            <button class="mode-btn ${userRole === 'enthusiast' ? 'active' : ''}" onclick="switchRole('enthusiast')">Enthusiast</button>
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
                    <div class="dropdown-role-control">${renderRoleControl()}</div>
                    <button class="dropdown-item" onclick="replayGuide()">
                        <i class="fas fa-compass"></i> Replay Guide
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
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <form class="create-car-modal" onsubmit="confirmCreateCar(event)">
            <div class="section-kicker">New configuration</div>
            <h2>Name your build</h2>
            <p>Give this direction a name. You can keep as many versions in your garage as you like.</p>
            <label for="car-name">Build name</label>
            <input id="car-name" name="carName" value="My Custom Build" maxlength="40" autofocus>
            <div class="modal-actions">
                <button type="button" class="builder-btn" onclick="closeCreateCarDialog()">Cancel</button>
                <button type="submit" class="builder-btn save">Create build</button>
            </div>
        </form>
    `;
    document.body.appendChild(modal);
    modal.querySelector('input').select();
}

function confirmCreateCar(event) {
    event.preventDefault();
    const name = event.target.carName.value.trim() || 'My Custom Build';
    createNewCar(name);
    closeCreateCarDialog();
    editCar(userCars[userCars.length - 1].id);
}

function closeCreateCarDialog() {
    document.querySelector('.modal-backdrop')?.remove();
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
    switchRole(newRole);
    toggleUserMenu();
}

function switchRole(role) {
    const guideIsOpen = Boolean(document.querySelector('.onboarding-guide'));
    setUserRole(role);
    if (guideIsOpen) {
        render(role === 'beginner' ? 'beginnerGuide' : 'enthusiastOnboarding');
    }
}

function replayGuide() {
    toggleUserMenu();
    render(userRole === 'beginner' ? 'beginnerGuide' : 'enthusiastGuide');
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
    
    root.innerHTML = content + (currentUser ? renderAuthSection() : '');

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
