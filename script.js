// -------------------------------------------------------------
// Aura Gallery - Dynamic Scripting
// -------------------------------------------------------------

// Image Database
const galleryData = [
    {
        id: 1,
        title: "Misty Mountain Forest",
        category: "nature",
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        description: "A beautiful scenery of misty mountains covered in lush green pines under a soft overcast sky.",
        tags: ["nature", "mountain", "forest", "mist", "fog", "green", "trees"],
        camera: "Sony α7R III", aperture: "f/8.0", shutter: "1/125s", iso: "ISO 100"
    },
    {
        id: 2,
        title: "Sunbeams in the Woods",
        category: "nature",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
        description: "Golden sunlight piercing through the tall forest trees during an early summer morning.",
        tags: ["nature", "sun", "sunbeam", "woods", "forest", "trees", "light"],
        camera: "Canon EOS R5", aperture: "f/4.0", shutter: "1/60s", iso: "ISO 200"
    },
    {
        id: 3,
        title: "Autumn Cascade Bridge",
        category: "nature",
        url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
        description: "A rustic wooden suspension bridge hanging in the middle of a dense green forest landscape.",
        tags: ["nature", "bridge", "wood", "forest", "foliage", "stream", "park"],
        camera: "Fujifilm X-T4", aperture: "f/5.6", shutter: "1/100s", iso: "ISO 400"
    },
    {
        id: 4,
        title: "Glass Skyscraper",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        description: "Stunning low-angle view of a modern glass skyscraper reflecting the clear blue sky and clouds.",
        tags: ["architecture", "building", "skyscraper", "city", "modern", "glass", "urban"],
        camera: "Nikon Z6 II", aperture: "f/11", shutter: "1/250s", iso: "ISO 64"
    },
    {
        id: 5,
        title: "Minimalist Portal",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        description: "A clean architectural composition featuring a minimal doorway in warm afternoon shadow casting structural lines.",
        tags: ["architecture", "minimal", "door", "portal", "shadow", "modern", "abstract"],
        camera: "Leica Q2", aperture: "f/2.8", shutter: "1/400s", iso: "ISO 100"
    },
    {
        id: 6,
        title: "Classical Pillars",
        category: "architecture",
        url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
        description: "Historic white marble columns reflecting ancient Roman structural design and classical proportion.",
        tags: ["architecture", "pillars", "columns", "ancient", "history", "rome", "classic"],
        camera: "Sony α7R IV", aperture: "f/8.0", shutter: "1/160s", iso: "ISO 100"
    },
    {
        id: 7,
        title: "Sunset Paradise Beach",
        category: "travel",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "A tranquil sandy beach with gentle waves under a vibrant orange and pink sunset, framed by tropical vibes.",
        tags: ["travel", "beach", "sunset", "ocean", "sea", "sand", "paradise", "island"],
        camera: "Canon EOS R6", aperture: "f/5.6", shutter: "1/80s", iso: "ISO 200"
    },
    {
        id: 8,
        title: "Canyon Highway",
        category: "travel",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        description: "A winding black asphalt road stretching across a vast, red-rock desert canyon under a warm sun.",
        tags: ["travel", "road", "highway", "canyon", "desert", "trip", "explore", "route"],
        camera: "Nikon Z7 II", aperture: "f/8.0", shutter: "1/320s", iso: "ISO 100"
    },
    {
        id: 9,
        title: "Alpine Mirror Lake",
        category: "travel",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        description: "A wooden boat resting on crystal clear water reflecting towering snowcapped mountains and autumn woods.",
        tags: ["travel", "lake", "mountains", "boat", "reflection", "nature", "alpine"],
        camera: "Sony α7 III", aperture: "f/8.0", shutter: "1/200s", iso: "ISO 100"
    },
    {
        id: 10,
        title: "Prideland Monarch",
        category: "animals",
        url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
        description: "A close-up portrait of a majestic adult male lion basking in the golden hour light of the savanna.",
        tags: ["animals", "lion", "wildlife", "predator", "big cat", "safari", "nature"],
        camera: "Canon EOS-1D X", aperture: "f/2.8", shutter: "1/1000s", iso: "ISO 400"
    },
    {
        id: 11,
        title: "Winter Stag",
        category: "animals",
        url: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
        description: "A magnificent wild deer standing gracefully in a snow-covered pine forest during a winter flurry.",
        tags: ["animals", "deer", "stag", "winter", "snow", "forest", "wildlife"],
        camera: "Sony α9 II", aperture: "f/4.0", shutter: "1/500s", iso: "ISO 800"
    },
    {
        id: 12,
        title: "Cool Cat",
        category: "animals",
        url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
        description: "An adorable ginger tabby cat relaxing while wearing a pair of cool black sunglasses on a summer day.",
        tags: ["animals", "cat", "pet", "sunglasses", "cool", "funny", "tabby"],
        camera: "Canon EOS R10", aperture: "f/2.0", shutter: "1/250s", iso: "ISO 160"
    }
];

// DOM Elements
const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const filterBg = document.getElementById("filter-bg");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const themeToggleBtn = document.getElementById("theme-toggle");
const itemsCountSpan = document.getElementById("items-count");
const emptyState = document.getElementById("empty-state");

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxLoader = document.getElementById("lightbox-loader");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxBadge = document.getElementById("lightbox-badge");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxCounter = document.getElementById("lightbox-counter");

// State Variables
let activeCategory = "all";
let searchQuery = "";
let filteredImages = [...galleryData];
let currentLightboxIndex = 0;
let favorites = JSON.parse(localStorage.getItem("gallery-favorites")) || [];
let slideshowInterval = null;
let isSlideshowActive = false;

// Initialize Web App
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderGallery();
    setupFilters();
    setupSearch();
    setupLightbox();
    
    // Adjust filter active background on window resize
    window.addEventListener("resize", updateFilterSlider);
});

// -------------------------------------------------------------
// Gallery Rendering & Filtering
// -------------------------------------------------------------

// Render all gallery cards
function renderGallery() {
    galleryGrid.innerHTML = "";
    
    galleryData.forEach(item => {
        const card = document.createElement("div");
        card.className = "gallery-item";
        card.setAttribute("data-id", item.id);
        card.setAttribute("data-category", item.category);
        
        const isFav = favorites.includes(item.id);
        card.innerHTML = `
            <div class="gallery-img-wrapper image-loading">
                <img src="${item.url}" alt="${item.title}" class="gallery-img" loading="lazy">
                <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Favorite Image">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <div class="gallery-overlay">
                    <div class="gallery-overlay-header">
                        <span class="badge">${item.category}</span>
                        <div class="zoom-btn" aria-label="Zoom Image">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </div>
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-desc">${item.description}</p>
                </div>
            </div>
        `;
        
        // Remove shimmer loading state once image actually loads
        const img = card.querySelector(".gallery-img");
        const wrapper = card.querySelector(".gallery-img-wrapper");
        img.addEventListener("load", () => {
            wrapper.classList.remove("image-loading");
        });
        
        // Handle favorite toggle click on card
        const favBtn = card.querySelector(".card-fav-btn");
        favBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Don't open lightbox
            toggleFavorite(item.id, favBtn);
        });
        
        // Handle lightbox click triggers (anywhere on card EXCEPT the heart button)
        card.addEventListener("click", (e) => {
            if (e.target.closest(".card-fav-btn")) return;
            const index = filteredImages.findIndex(imgObj => imgObj.id === item.id);
            if (index !== -1) {
                openLightbox(index);
            }
        });
        
        galleryGrid.appendChild(card);
    });
    
    applyFilters();
}

// Favorite Toggle Logic
function toggleFavorite(id, btnElement) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        if (btnElement) {
            btnElement.classList.add("active");
            btnElement.querySelector("i").className = "fa-solid fa-heart";
        }
    } else {
        favorites.splice(index, 1);
        if (btnElement) {
            btnElement.classList.remove("active");
            btnElement.querySelector("i").className = "fa-regular fa-heart";
        }
    }
    localStorage.setItem("gallery-favorites", JSON.stringify(favorites));
    
    // If viewing favorites filter, re-apply filters immediately to animate out
    if (activeCategory === "favorites") {
        applyFilters();
    }
}

// Setup Event Listeners for Filters
function setupFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-filter");
            
            updateFilterSlider();
            applyFilters();
        });
    });
    
    // Initial active background placement
    setTimeout(updateFilterSlider, 100);
}

// Animating the filter button background slider
function updateFilterSlider() {
    const activeBtn = document.querySelector(".filter-btn.active");
    if (activeBtn && filterBg) {
        filterBg.style.width = `${activeBtn.offsetWidth}px`;
        filterBg.style.left = `${activeBtn.offsetLeft}px`;
    }
}

// Setup Search Functionality
function setupSearch() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.add("visible");
        } else {
            clearSearchBtn.classList.remove("visible");
        }
        
        applyFilters();
    });
    
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.remove("visible");
        applyFilters();
        searchInput.focus();
    });
}

// Master Filter & Search Application Function
function applyFilters() {
    filteredImages = galleryData.filter(item => {
        const matchesCategory = activeCategory === "all" || 
            (activeCategory === "favorites" ? favorites.includes(item.id) : item.category === activeCategory);
        const matchesSearch = searchQuery === "" || 
            item.title.toLowerCase().includes(searchQuery) || 
            item.description.toLowerCase().includes(searchQuery) ||
            item.tags.some(tag => tag.includes(searchQuery));
            
        return matchesCategory && matchesSearch;
    });
    
    // Toggle DOM visibility for items
    const cards = galleryGrid.querySelectorAll(".gallery-item");
    cards.forEach(card => {
        const id = parseInt(card.getAttribute("data-id"));
        const shouldShow = filteredImages.some(img => img.id === id);
        
        if (shouldShow) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
    
    // Update stats count
    itemsCountSpan.textContent = `${filteredImages.length} ${filteredImages.length === 1 ? 'item' : 'items'}`;
    
    // Toggle empty state
    if (filteredImages.length === 0) {
        emptyState.style.display = "flex";
    } else {
        emptyState.style.display = "none";
    }
}

// -------------------------------------------------------------
// Lightbox System
// -------------------------------------------------------------

function setupLightbox() {
    // Close button
    lightboxClose.addEventListener("click", closeLightbox);
    
    // Click outside lightbox content to close
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Nav buttons
    lightboxPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        pauseSlideshow();
        navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener("click", (e) => {
        e.stopPropagation();
        pauseSlideshow();
        navigateLightbox(1);
    });
    
    // Slideshow Auto-Play Toggle
    const slideshowBtn = document.getElementById("lightbox-slideshow");
    slideshowBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSlideshow();
    });
    
    // Lightbox Favorite Toggle
    const favToggleBtn = document.getElementById("lightbox-fav-toggle");
    favToggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const item = filteredImages[currentLightboxIndex];
        if (item) {
            // Toggle favorite
            toggleFavorite(item.id);
            // Sync lightbox heart button UI
            const isFav = favorites.includes(item.id);
            if (isFav) {
                favToggleBtn.classList.add("active");
                favToggleBtn.querySelector("i").className = "fa-solid fa-heart";
            } else {
                favToggleBtn.classList.remove("active");
                favToggleBtn.querySelector("i").className = "fa-regular fa-heart";
            }
            // Sync corresponding grid item heart button UI
            const gridFavBtn = document.querySelector(`.gallery-item[data-id="${item.id}"] .card-fav-btn`);
            if (gridFavBtn) {
                if (isFav) {
                    gridFavBtn.classList.add("active");
                    gridFavBtn.querySelector("i").className = "fa-solid fa-heart";
                } else {
                    gridFavBtn.classList.remove("active");
                    gridFavBtn.querySelector("i").className = "fa-regular fa-heart";
                }
            }
            
            // If we are currently in favorites filter and just unfavorited the item, handle dynamic transition
            if (activeCategory === "favorites" && !isFav) {
                if (filteredImages.length <= 1) {
                    closeLightbox();
                } else {
                    navigateLightbox(1);
                }
            }
        }
    });
    
    // Keyboard controls
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowLeft") {
            pauseSlideshow();
            navigateLightbox(-1);
        } else if (e.key === "ArrowRight") {
            pauseSlideshow();
            navigateLightbox(1);
        } else if (e.key === " ") { // Spacebar plays/pauses slideshow
            e.preventDefault();
            toggleSlideshow();
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
    updateLightboxContent();
}

function closeLightbox() {
    stopSlideshow();
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
    setTimeout(() => {
        lightboxImg.src = "";
        lightboxImg.classList.remove("loaded");
    }, 300); // Wait for transition out before clearing src
}

// Lightbox Auto-play Slideshow Functions
function toggleSlideshow() {
    const btn = document.getElementById("lightbox-slideshow");
    if (isSlideshowActive) {
        stopSlideshow();
    } else {
        isSlideshowActive = true;
        btn.classList.add("active");
        btn.querySelector("i").className = "fa-solid fa-pause";
        slideshowInterval = setInterval(() => {
            navigateLightbox(1);
        }, 3000);
    }
}

function stopSlideshow() {
    isSlideshowActive = false;
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    const btn = document.getElementById("lightbox-slideshow");
    if (btn) {
        btn.classList.remove("active");
        btn.querySelector("i").className = "fa-solid fa-play";
    }
}

function pauseSlideshow() {
    if (isSlideshowActive) {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(() => {
            navigateLightbox(1);
        }, 3000);
    }
}

function navigateLightbox(direction) {
    if (filteredImages.length <= 1) return;
    
    // Add slide out effect or loader trigger
    lightboxImg.classList.remove("loaded");
    
    currentLightboxIndex = (currentLightboxIndex + direction + filteredImages.length) % filteredImages.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = filteredImages[currentLightboxIndex];
    if (!item) return;
    
    lightboxLoader.classList.add("active");
    
    // Preload image in JS
    const tempImg = new Image();
    tempImg.src = item.url;
    
    tempImg.onload = () => {
        lightboxImg.src = item.url;
        lightboxImg.alt = item.title;
        lightboxImg.classList.add("loaded");
        lightboxLoader.classList.remove("active");
    };
    
    // Update texts
    lightboxBadge.textContent = item.category;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;
    
    // Update camera metadata
    document.getElementById("meta-camera").textContent = item.camera || "--";
    document.getElementById("meta-aperture").textContent = item.aperture || "--";
    document.getElementById("meta-shutter").textContent = item.shutter || "--";
    document.getElementById("meta-iso").textContent = item.iso || "--";
    
    // Sync Lightbox heart toggle button
    const favToggleBtn = document.getElementById("lightbox-fav-toggle");
    const isFav = favorites.includes(item.id);
    if (isFav) {
        favToggleBtn.classList.add("active");
        favToggleBtn.querySelector("i").className = "fa-solid fa-heart";
    } else {
        favToggleBtn.classList.remove("active");
        favToggleBtn.querySelector("i").className = "fa-regular fa-heart";
    }
    
    // Update counter
    lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${filteredImages.length}`;
}

// -------------------------------------------------------------
// Dark / Light Theme Controller
// -------------------------------------------------------------

function initTheme() {
    const savedTheme = localStorage.getItem("gallery-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("gallery-theme", newTheme);
    });
}
