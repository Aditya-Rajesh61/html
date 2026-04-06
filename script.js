// Full feature list
const allFeatures = [
    "Sunroof", "Turbocharged", "AWD / 4WD", "Touchscreen", 
    "Cruise Control", "360 Camera", "Ventilated Seats", 
    "ADAS", "Alloy Wheels", "Keyless Entry"
];

// Database of 25 cars
const carData = [
    // SUVs
    { id: 1, name: "Tata Nexon", category: "SUV", price: 10, fuel: "Petrol", transmission: "Manual", tags: ["Turbocharged", "Sunroof", "Touchscreen", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11571/1770888172165/front-left-side-47.jpg?tr=w-664", desc: "The Tata Nexon is a revolutionary compact SUV that brings together striking design, robust build quality, and class-leading safety. With a 5-star Global NCAP rating, it ensures peace of mind for you and your family on every journey.", features: { Engine: "1.2L Turbo Petrol", Power: "118 bhp", Seating: "5 Seater" }, variants: [{ name: "XE", price: "₹8.10 Lakh" }, { name: "XZA+ (Sunroof)", price: "₹12.50 Lakh" }], reviews: [] },
    { id: 2, name: "Mahindra Thar", category: "SUV", price: 15, fuel: "Diesel", transmission: "Manual", tags: ["Turbocharged", "AWD / 4WD", "Touchscreen", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/12264/1759841599514/front-left-side-47.jpg?tr=w-664", desc: "The Mahindra Thar is the ultimate lifestyle off-roader, designed to conquer the toughest terrains with ease. It features a commanding road presence, a washable interior, and exceptional 4x4 capabilities that enthusiasts crave.", features: { Engine: "2.2L mHawk Diesel", Power: "130 bhp", Seating: "4 Seater" }, variants: [{ name: "AX Optional", price: "₹13.50 Lakh" }, { name: "LX 4x4", price: "₹16.20 Lakh" }], reviews: [] },
    { id: 3, name: "Hyundai Creta", category: "SUV", price: 14, fuel: "Petrol", transmission: "Automatic", tags: ["Sunroof", "Touchscreen", "Cruise Control", "Ventilated Seats", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg?tr=w-664", desc: "India's favorite mid-size SUV continues to set benchmarks with its premium features, smooth drive, and futuristic styling. The cabin is incredibly silent and comfortable, featuring a massive panoramic sunroof.", features: { Engine: "1.5L MPi", Power: "113 bhp", Seating: "5 Seater" }, variants: [{ name: "EX", price: "₹11.87 Lakh" }, { name: "SX Opt IVT", price: "₹19.20 Lakh" }], reviews: [] },
    { id: 4, name: "Kia Seltos", category: "SUV", price: 13, fuel: "Diesel", transmission: "Automatic", tags: ["Turbocharged", "Sunroof", "Touchscreen", "360 Camera", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2026/12770/1766479168733/front-left-side-47.jpg?tr=w-664", desc: "The Kia Seltos combines bold, aggressive design language with state-of-the-art connected car technology. It offers a punchy diesel engine paired with a seamless automatic gearbox, providing excellent mileage and performance.", features: { Engine: "1.5L CRDi VGT", Power: "114 bhp", Seating: "5 Seater" }, variants: [{ name: "HTE", price: "₹10.90 Lakh" }, { name: "GTX+ Auto", price: "₹19.99 Lakh" }], reviews: [] },
    { id: 5, name: "Toyota Fortuner", category: "SUV", price: 35, fuel: "Diesel", transmission: "Automatic", tags: ["Turbocharged", "AWD / 4WD", "Touchscreen", "Cruise Control", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10904/1755846017683/front-left-side-47.jpg?tr=w-664", desc: "Often referred to as the king of Indian roads, the Toyota Fortuner offers legendary reliability and massive power. Its heavy-duty ladder-frame chassis and sophisticated 4WD system allow it to glide over broken roads effortlessly.", features: { Engine: "2.8L Diesel", Power: "201 bhp", Seating: "7 Seater" }, variants: [{ name: "4x2 AT", price: "₹34.50 Lakh" }, { name: "Legender 4x4 AT", price: "₹46.00 Lakh" }], reviews: [] },

    // Sedans
    { id: 6, name: "Honda City", category: "Sedan", price: 12, fuel: "Petrol", transmission: "Manual", tags: ["Sunroof", "Touchscreen", "Cruise Control", "ADAS", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City/12093/1755764990493/front-left-side-47.jpg?tr=w-664", desc: "The Honda City is the gold standard for executive sedans, offering a perfect blend of elegance, immense rear-seat space, and bulletproof reliability. The rev-happy i-VTEC engine is an absolute joy to push.", features: { Engine: "1.5L i-VTEC", Power: "119 bhp", Seating: "5 Seater" }, variants: [{ name: "SV MT", price: "₹11.50 Lakh" }, { name: "ZX MT", price: "₹15.00 Lakh" }], reviews: [] },
    { id: 7, name: "Hyundai Verna", category: "Sedan", price: 11, fuel: "Petrol", transmission: "Automatic", tags: ["Turbocharged", "Sunroof", "Touchscreen", "Ventilated Seats", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg?tr=w-664", desc: "Featuring a radical, futuristic design, the new Hyundai Verna redefines the sedan segment with segment-leading performance and tech. The potent turbocharged engine delivers lightning-fast gear shifts.", features: { Engine: "1.5L Turbo GDi", Power: "158 bhp", Seating: "5 Seater" }, variants: [{ name: "EX", price: "₹10.96 Lakh" }, { name: "SX Opt Turbo DCT", price: "₹17.38 Lakh" }], reviews: [] },
    { id: 8, name: "VW Virtus", category: "Sedan", price: 13, fuel: "Petrol", transmission: "Automatic", tags: ["Turbocharged", "Touchscreen", "Cruise Control", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Virtus/10617/1755846730435/front-left-side-47.jpg?tr=w-664", desc: "German engineering at its absolute finest. The Virtus is built like a tank and offers driving dynamics that prioritize high-speed stability and sharp handling. The TSI engine provides a strong surge of power.", features: { Engine: "1.0L TSI", Power: "113 bhp", Seating: "5 Seater" }, variants: [{ name: "Comfortline", price: "₹11.47 Lakh" }, { name: "Topline AT", price: "₹16.57 Lakh" }], reviews: [] },
    { id: 9, name: "Skoda Slavia", category: "Sedan", price: 12, fuel: "Petrol", transmission: "Manual", tags: ["Turbocharged", "Sunroof", "Touchscreen", "Ventilated Seats", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Slavia/11810/1762938173534/front-left-side-47.jpg?tr=w-664", desc: "The Skoda Slavia pairs beautiful, sharp crystalline aesthetics with a thrilling driving experience. It features high ground clearance, making it perfectly suited for tackling large speed breakers without scraping.", features: { Engine: "1.0L TSI", Power: "114 bhp", Seating: "5 Seater" }, variants: [{ name: "Active", price: "₹11.39 Lakh" }, { name: "Style", price: "₹15.99 Lakh" }], reviews: [] },
    { id: 10, name: "Maruti Dzire", category: "Sedan", price: 7, fuel: "Petrol", transmission: "Automatic", tags: ["Touchscreen", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg?tr=w-664", desc: "The Dzire is the ultimate practical family sedan, offering incredible fuel mileage, low maintenance costs, and superb resale value. The AMT gearbox takes the pain out of driving in congested traffic.", features: { Engine: "1.2L DualJet", Power: "88 bhp", Seating: "5 Seater" }, variants: [{ name: "LXi", price: "₹6.51 Lakh" }, { name: "ZXi+ AGS", price: "₹9.39 Lakh" }], reviews: [] },

    // Hatchbacks
    { id: 11, name: "Maruti Swift", category: "Hatchback", price: 6, fuel: "Petrol", transmission: "Manual", tags: ["Touchscreen", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-664", desc: "Sporty, peppy, and universally loved, the Swift remains a top choice for young buyers. Its lightweight chassis makes it incredibly nimble around corners, offering a genuinely fun driving experience.", features: { Engine: "1.2L K-Series", Power: "88 bhp", Seating: "5 Seater" }, variants: [{ name: "LXi", price: "₹5.99 Lakh" }, { name: "ZXi Plus", price: "₹9.03 Lakh" }], reviews: [] },
    { id: 12, name: "Tata Altroz", category: "Hatchback", price: 7, fuel: "Diesel", transmission: "Manual", tags: ["Turbocharged", "Touchscreen", "Cruise Control", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/12614/1770888054138/front-left-side-47.jpg?tr=w-664", desc: "The Tata Altroz sets the benchmark for safety in the premium hatchback segment. Its striking laser-cut design gives it a dynamic stance, and the diesel engine provides excellent low-end torque for the highway.", features: { Engine: "1.5L Revotorq", Power: "89 bhp", Seating: "5 Seater" }, variants: [{ name: "XE", price: "₹6.60 Lakh" }, { name: "XZ+ Diesel", price: "₹10.74 Lakh" }], reviews: [] },
    { id: 13, name: "Hyundai i20", category: "Hatchback", price: 8, fuel: "Petrol", transmission: "Automatic", tags: ["Sunroof", "Touchscreen", "Cruise Control", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20/11092/1755774177956/front-left-side-47.jpg?tr=w-664", desc: "A premium hatchback that feels like a segment above, loaded to the brim with tech. The aggressive styling is complemented by an incredibly smooth IVT automatic gearbox and a premium Bose sound system.", features: { Engine: "1.2L Kappa", Power: "82 bhp", Seating: "5 Seater" }, variants: [{ name: "Magna", price: "₹7.46 Lakh" }, { name: "Asta (O) IVT", price: "₹11.87 Lakh" }], reviews: [] },
    { id: 14, name: "Maruti Baleno", category: "Hatchback", price: 8, fuel: "Petrol", transmission: "Automatic", tags: ["Touchscreen", "360 Camera", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg?tr=w-664", desc: "The Baleno offers vast amounts of interior space, comfortably seating three adults in the rear. It comes equipped with premium features like a Heads-Up Display and a 360-degree camera.", features: { Engine: "1.2L VVT", Power: "88 bhp", Seating: "5 Seater" }, variants: [{ name: "Sigma", price: "₹6.61 Lakh" }, { name: "Alpha AGS", price: "₹9.88 Lakh" }], reviews: [] },
    { id: 15, name: "Toyota Glanza", category: "Hatchback", price: 8, fuel: "Petrol", transmission: "Manual", tags: ["Touchscreen", "360 Camera", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Glanza/10231/1767782580969/front-left-side-47.jpg?tr=w-664", desc: "Combining Toyota's legendary after-sales reliability with a stylish hatchback design. The Glanza provides a plush ride quality that absorbs city potholes with remarkable ease.", features: { Engine: "1.2L Petrol", Power: "89 bhp", Seating: "5 Seater" }, variants: [{ name: "E MT", price: "₹6.81 Lakh" }, { name: "V MT", price: "₹9.50 Lakh" }], reviews: [] },

    // EVs
    { id: 16, name: "Tata Nexon EV", category: "EV", price: 16, fuel: "Electric", transmission: "Automatic", tags: ["Sunroof", "Touchscreen", "Cruise Control", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon-EV/11024/1755845297648/front-left-side-47.jpg?tr=w-6640", desc: "India's highest-selling electric vehicle delivers instant torque and a silent, emission-free driving experience. It features regenerative braking with multiple modes for efficient one-pedal driving.", features: { Motor: "Permanent Magnet Sync", Range: "465 km", Battery: "40.5 kWh" }, variants: [{ name: "Creative+", price: "₹14.74 Lakh" }, { name: "Empowered+", price: "₹19.94 Lakh" }], reviews: [] },
    { id: 17, name: "MG ZS EV", category: "EV", price: 23, fuel: "Electric", transmission: "Automatic", tags: ["Sunroof", "Touchscreen", "360 Camera", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/ZS-EV/11503/1755845485024/front-left-side-47.jpg?tr=w-664", desc: "A highly refined, premium electric SUV that wraps you in a luxurious and tech-forward interior. Its powerful electric motor provides rapid acceleration, easily outpacing combustion engine vehicles.", features: { Motor: "Electric Motor", Range: "461 km", Battery: "50.3 kWh" }, variants: [{ name: "Excite", price: "₹22.88 Lakh" }, { name: "Exclusive", price: "₹25.00 Lakh" }], reviews: [] },
    { id: 18, name: "Hyundai Ioniq 5", category: "EV", price: 45, fuel: "Electric", transmission: "Automatic", tags: ["Touchscreen", "Cruise Control", "Ventilated Seats", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/IONIQ-5/8983/1762430808343/front-left-side-47.jpg?tr=w-664", desc: "A globally acclaimed EV featuring a stunning, retro-futuristic pixel design. Built on a dedicated electric skateboard platform, the interior space is massively maximized with a completely flat floor.", features: { Motor: "Rear Wheel Drive", Range: "631 km", Battery: "72.6 kWh" }, variants: [{ name: "RWD", price: "₹45.95 Lakh" }], reviews: [] },
    { id: 19, name: "Kia EV6", category: "EV", price: 60, fuel: "Electric", transmission: "Automatic", tags: ["AWD / 4WD", "Sunroof", "Touchscreen", "Ventilated Seats", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/EV6/11740/1760005604163/front-left-side-47.jpg?tr=w-664", desc: "A sleek, incredibly fast, and ultra-modern electric crossover. The dual-motor AWD system provides face-melting acceleration and incredible grip in all weather conditions.", features: { Motor: "Dual Motor AWD", Range: "708 km", Battery: "77.4 kWh" }, variants: [{ name: "GT Line RWD", price: "₹60.95 Lakh" }, { name: "GT Line AWD", price: "₹65.95 Lakh" }], reviews: [] },
    { id: 20, name: "Tata Tiago EV", category: "EV", price: 9, fuel: "Electric", transmission: "Automatic", tags: ["Touchscreen", "Cruise Control", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago-EV/6279/1770888490912/front-left-side-47.jpg?tr=w-664", desc: "The perfect city EV, making electric mobility highly accessible. Its compact footprint makes it incredibly easy to park and maneuver through tight, congested streets.", features: { Motor: "Electric Motor", Range: "315 km", Battery: "24 kWh" }, variants: [{ name: "XE Base", price: "₹8.69 Lakh" }, { name: "XZ+ Tech Lux", price: "₹12.04 Lakh" }], reviews: [] },

    // Luxury
    { id: 21, name: "BMW 3 Series", category: "Luxury", price: 70, fuel: "Petrol", transmission: "Automatic", tags: ["Turbocharged", "Sunroof", "Touchscreen", "360 Camera", "Alloy Wheels", "Keyless Entry"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/3-Series/10574/1761732994122/front-left-side-47.jpg?tr=w-664", desc: "The ultimate driving machine, renowned worldwide for its unmatched sedan dynamics and perfect 50:50 weight distribution. The TwinPower turbo engine delivers ferocious power.", features: { Engine: "2.0L TwinPower Turbo", Power: "258 bhp", Seating: "5 Seater" }, variants: [{ name: "Gran Limousine", price: "₹60.50 Lakh" }, { name: "M340i xDrive", price: "₹71.50 Lakh" }], reviews: [] },
    { id: 22, name: "Mercedes C-Class", category: "Luxury", price: 65, fuel: "Hybrid", transmission: "Automatic", tags: ["Turbocharged", "Sunroof", "Touchscreen", "Ventilated Seats", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/C-Class/10858/1774342866770/front-left-side-47.jpg?tr=w-664", desc: "Often referred to as the baby S-Class, the C-Class offers an interior that is an absolute masterpiece of design and luxury. The mild-hybrid powertrain ensures smooth, silent getaways.", features: { Engine: "1.5L Mild Hybrid", Power: "201 bhp", Seating: "5 Seater" }, variants: [{ name: "C 200", price: "₹60.00 Lakh" }, { name: "C 300d", price: "₹66.00 Lakh" }], reviews: [] },
    { id: 23, name: "Audi A6", category: "Luxury", price: 62, fuel: "Petrol", transmission: "Automatic", tags: ["Turbocharged", "Sunroof", "Touchscreen", "ADAS", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A6/10551/1757140056684/front-left-side-47.jpg?tr=w-664", desc: "The Audi A6 epitomizes understated elegance combined with brilliant, intuitive technology. Its ride quality is deeply refined, ironing out road imperfections to keep the cabin incredibly quiet.", features: { Engine: "2.0L TFSI", Power: "241 bhp", Seating: "5 Seater" }, variants: [{ name: "Premium Plus", price: "₹61.60 Lakh" }, { name: "Technology", price: "₹67.76 Lakh" }], reviews: [] },
    { id: 24, name: "Volvo XC90", category: "Luxury", price: 95, fuel: "Hybrid", transmission: "Automatic", tags: ["Turbocharged", "AWD / 4WD", "Sunroof", "Touchscreen", "360 Camera", "ADAS", "Ventilated Seats"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90/11977/1769065399236/front-left-side-47.jpg?tr=w-664", desc: "Consistently rated as one of the safest SUVs in the world, the XC90 is perfect for families who refuse to compromise. The interior features beautiful Scandinavian design and crystal glass elements.", features: { Engine: "2.0L Mild Hybrid", Power: "300 bhp", Seating: "7 Seater" }, variants: [{ name: "B6 Ultimate", price: "₹98.50 Lakh" }], reviews: [] },
    { id: 25, name: "Range Rover Velar", category: "Luxury", price: 89, fuel: "Diesel", transmission: "Automatic", tags: ["Turbocharged", "AWD / 4WD", "Sunroof", "Touchscreen", "Ventilated Seats", "Alloy Wheels"], image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover-Velar/12767/1767783260921/front-left-side-47.jpg?tr=w-664", desc: "The Velar is a masterclass in avant-garde design, featuring flush door handles and sleek lines. Underneath the beautiful exterior lies Land Rover's legendary off-road capability.", features: { Engine: "2.0L Turbo Diesel", Power: "201 bhp", Seating: "5 Seater" }, variants: [{ name: "Dynamic SE Petrol", price: "₹87.90 Lakh" }, { name: "Dynamic SE Diesel", price: "₹89.00 Lakh" }], reviews: [] }
];


const carGrid = document.getElementById('car-grid');
const priceSlider = document.getElementById('price-slider');
const priceVal = document.getElementById('price-val');
const categoryBtns = document.querySelectorAll('.cat-btn');

const fuelCheckboxes = document.querySelectorAll('.fuel-filter');
const transCheckboxes = document.querySelectorAll('.trans-filter');
const featureCheckboxes = document.querySelectorAll('.feature-filter');
const clearBtn = document.getElementById('clear-filters-btn');

const catalogView = document.getElementById('catalog-view');
const detailView = document.getElementById('detail-view');
const detailContent = document.getElementById('car-detail-content');


const compareView = document.getElementById('compare-view');
const compareContent = document.getElementById('compare-content');
const compareBar = document.getElementById('compare-bar');
const compareCount = document.getElementById('compare-count');
const compareBtn = document.getElementById('compare-btn');


const authView = document.getElementById('auth-view');
const loginContainer = document.getElementById('login-form-container');
const registerContainer = document.getElementById('register-form-container');
const navAuth = document.getElementById('nav-auth');
const navLogout = document.getElementById('nav-logout');


let currentCategory = 'All';
let maxPrice = 100;
let compareList = []; 
let currentViewedCarId = null;


let usersDB = []; 
let currentUser = null; 


function init() {
    renderCars(carData);
    
    priceSlider.addEventListener('input', (e) => {
        maxPrice = e.target.value;
        priceVal.innerText = maxPrice;
        filterCars();
    });

    const allCheckboxes = [...fuelCheckboxes, ...transCheckboxes, ...featureCheckboxes];
    allCheckboxes.forEach(cb => {
        cb.addEventListener('change', filterCars);
    });

    clearBtn.addEventListener('click', () => {
        allCheckboxes.forEach(cb => cb.checked = false);
        priceSlider.value = 100;
        maxPrice = 100;
        priceVal.innerText = 100;
        filterCars();
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            filterCars();
        });
    });
}


function renderCars(cars) {
    carGrid.innerHTML = '';
    
    if(cars.length === 0) {
        carGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #666;">No cars match your current filters.</p>';
        return;
    }

    cars.forEach(car => {
        let allTags = [car.fuel, car.transmission, ...car.tags].slice(0, 5);
        const tagHTML = allTags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const isChecked = compareList.includes(car.id) ? 'checked' : '';
        
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div onclick="showCarDetails(${car.id})">
                <img src="${car.image}" alt="${car.name}">
                <div class="car-info">
                    <h4>${car.name}</h4>
                    <div class="car-price">₹${car.price} Lakhs onwards</div>
                    <div class="car-tags">${tagHTML} <span class="tag" style="background:#ddd; color:#333;">+more</span></div>
                </div>
            </div>
            <div class="compare-action" onclick="event.stopPropagation()">
                <label>
                    <input type="checkbox" onchange="toggleCompare(${car.id}, this)" ${isChecked}> 
                    Add to Compare
                </label>
            </div>
        `;
        carGrid.appendChild(card);
    });
}

// Filtering 
function filterCars() {
    const activeFuels = Array.from(fuelCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    const activeTrans = Array.from(transCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    const activeFeatures = Array.from(featureCheckboxes).filter(cb => cb.checked).map(cb => cb.value);

    const filtered = carData.filter(car => {
        const matchCategory = currentCategory === 'All' || car.category === currentCategory;
        const matchPrice = car.price <= maxPrice;
        const matchFuel = activeFuels.length === 0 || activeFuels.includes(car.fuel);
        const matchTrans = activeTrans.length === 0 || activeTrans.includes(car.transmission);
        const matchFeatures = activeFeatures.length === 0 || activeFeatures.every(tag => car.tags.includes(tag));
        
        return matchCategory && matchPrice && matchFuel && matchTrans && matchFeatures;
    });
    
    renderCars(filtered);
}

// CompaRing table
function toggleCompare(id, checkbox) {
    if (checkbox.checked) {
        if (compareList.length >= 2) {
            alert("You can only compare 2 cars at a time.");
            checkbox.checked = false;
            return;
        }
        compareList.push(id);
    } else {
        compareList = compareList.filter(carId => carId !== id);
    }
    updateCompareBar();
}

function updateCompareBar() {
    compareCount.innerText = compareList.length;
    
    if (compareList.length > 0) {
        compareBar.classList.remove('hidden');
    } else {
        compareBar.classList.add('hidden');
    }

    compareBtn.disabled = compareList.length !== 2;
}

function showCompareView() {
    if (compareList.length !== 2) return;

    const car1 = carData.find(c => c.id === compareList[0]);
    const car2 = carData.find(c => c.id === compareList[1]);

    catalogView.classList.add('hidden');
    detailView.classList.add('hidden');
    authView.classList.add('hidden');
    compareView.classList.remove('hidden');
    compareBar.classList.add('hidden');
    window.scrollTo(0, 0);

    let featureRowsHTML = allFeatures.map(feature => `
        <tr>
            <td class="spec-label">${feature}</td>
            <td style="font-size: 1.2rem;">${car1.tags.includes(feature) ? '✅' : '❌'}</td>
            <td style="font-size: 1.2rem;">${car2.tags.includes(feature) ? '✅' : '❌'}</td>
        </tr>
    `).join('');

    compareContent.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th class="spec-label">Feature</th>
                    <th>
                        <img src="${car1.image}" alt="${car1.name}">
                        <h3>${car1.name}</h3>
                        <div style="color: #28a745; font-weight: bold;">₹${car1.price} Lakhs</div>
                    </th>
                    <th>
                        <img src="${car2.image}" alt="${car2.name}">
                        <h3>${car2.name}</h3>
                        <div style="color: #28a745; font-weight: bold;">₹${car2.price} Lakhs</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="spec-label">Category</td><td>${car1.category}</td><td>${car2.category}</td></tr>
                <tr><td class="spec-label">Fuel Type</td><td>${car1.fuel}</td><td>${car2.fuel}</td></tr>
                <tr><td class="spec-label">Transmission</td><td>${car1.transmission}</td><td>${car2.transmission}</td></tr>
                <tr><td class="spec-label">Engine / Motor</td><td>${car1.features.Engine || car1.features.Motor}</td><td>${car2.features.Engine || car2.features.Motor}</td></tr>
                <tr><td class="spec-label">Power / Range</td><td>${car1.features.Power || car1.features.Range}</td><td>${car2.features.Power || car2.features.Range}</td></tr>
                ${featureRowsHTML}
            </tbody>
        </table>
    `;
}

//  Detail & Review  
function showCarDetails(id) {
    currentViewedCarId = id;
    const car = carData.find(c => c.id === id);
    if(!car) return;

    catalogView.classList.add('hidden');
    compareView.classList.add('hidden');
    authView.classList.add('hidden');
    compareBar.classList.add('hidden'); 
    detailView.classList.remove('hidden');
    window.scrollTo(0, 0);

    let featuresHTML = '';
    for (const [key, value] of Object.entries(car.features)) {
        featuresHTML += `<div class="feature-item"><strong>${key}:</strong> ${value}</div>`;
    }

    let variantsHTML = car.variants.map(v => `
        <tr><td>${v.name}</td><td><strong>${v.price}</strong></td></tr>
    `).join('');

    let tagsDisplay = car.tags.map(t => `<span class="tag" style="background:var(--primary-blue); color:white;">✓ ${t}</span>`).join(' ');

    detailContent.innerHTML = `
        <div class="detail-header">
            <img src="${car.image}" alt="${car.name}">
        </div>
        <div class="detail-body">
            <h2>${car.name}</h2>
            <div class="detail-price">Starts at ₹${car.price} Lakhs</div>
            <p style="margin-bottom: 2rem; color: #555; line-height: 1.6; font-size: 1.1rem;">${car.desc}</p>
            
            <div class="detail-section">
                <h3>Key Specifications</h3>
                <div class="features-grid">${featuresHTML}</div>
                <div style="margin-top: 1rem;">${tagsDisplay}</div>
            </div>

            <div class="detail-section">
                <h3>Available Variants</h3>
                <table class="variants-table">
                    <thead><tr><th>Variant Name</th><th>Ex-Showroom Price</th></tr></thead>
                    <tbody>${variantsHTML}</tbody>
                </table>
            </div>

            <div id="review-container"></div>
        </div>
    `;

    renderReviewsUI(car);
}

// --- Review System Logic ---
function renderReviewsUI(car) {
    const container = document.getElementById('review-container');
    
    let reviewsListHTML = car.reviews.length === 0 ? '<p style="color:#777; font-style: italic;">No reviews yet. Be the first!</p>' : car.reviews.map(r => `
        <div class="review-card">
            <h5>${r.name} <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span></h5>
            <p style="color: #444; margin-top: 0.5rem; line-height: 1.4;">"${r.text}"</p>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="reviews-section">
            <h3>User Reviews (${car.reviews.length})</h3>
            
            <form class="review-form" id="new-review-form">
                <h4>Write your review</h4>
                <input type="text" id="rev-name" placeholder="Your Name" required>
                <select id="rev-rating">
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Average</option>
                    <option value="2">2 Stars - Poor</option>
                    <option value="1">1 Star - Terrible</option>
                </select>
                <textarea id="rev-text" rows="3" placeholder="Share your experience..." required></textarea>
                <button type="submit">Submit Review</button>
            </form>

            <div id="reviews-list">
                ${reviewsListHTML}
            </div>
        </div>
    `;

    document.getElementById('new-review-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitReview(car.id);
    });
}

function submitReview(carId) {
    const nameInput = document.getElementById('rev-name').value;
    const ratingInput = parseInt(document.getElementById('rev-rating').value);
    const textInput = document.getElementById('rev-text').value;

    const car = carData.find(c => c.id === carId);
    
    car.reviews.unshift({
        name: nameInput,
        rating: ratingInput,
        text: textInput
    });

    renderReviewsUI(car);
}

//  Authentication Logic 
function showAuthView() {
    catalogView.classList.add('hidden');
    detailView.classList.add('hidden');
    compareView.classList.add('hidden');
    compareBar.classList.add('hidden');
    authView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function toggleAuthMode() {
    loginContainer.classList.toggle('hidden');
    registerContainer.classList.toggle('hidden');
}

// Handle Registration
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const address = document.getElementById('reg-address').value;
    const password = document.getElementById('reg-password').value;

    const existingUser = usersDB.find(u => u.email === email);
    if (existingUser) {
        alert("This email is already registered!");
        return;
    }

    usersDB.push({ name, email, address, password });
    alert("Registration successful! You can now log in.");
    
    toggleAuthMode();
    this.reset();
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = usersDB.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        updateNav();
        alert(`Welcome back, ${user.name}!`);
        goHome(); 
        this.reset();
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

function logout() {
    currentUser = null;
    updateNav();
    alert("You have been successfully logged out.");
    goHome();
}

function updateNav() {
    if (currentUser) {
        navAuth.innerText = `Hi, ${currentUser.name.split(' ')[0]}`; 
        navAuth.onclick = null; 
        navAuth.style.cursor = 'default';
        navLogout.classList.remove('hidden');
    } else {
        navAuth.innerText = "Login / Register";
        navAuth.onclick = showAuthView;
        navAuth.style.cursor = 'pointer';
        navLogout.classList.add('hidden');
    }
}

//  Navigation 
function goHome() {
    detailView.classList.add('hidden');
    compareView.classList.add('hidden');
    authView.classList.add('hidden');
    catalogView.classList.remove('hidden');
    
    if (compareList.length > 0) {
        compareBar.classList.remove('hidden');
    }
}

// Start App
init();