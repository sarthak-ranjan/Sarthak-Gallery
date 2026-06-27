let allImages = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", cat: "nature",       label: "Mountain Peak" },
  { src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80", cat: "nature",       label: "Forest Light" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", cat: "nature",       label: "Coastal View" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", cat: "nature",       label: "Golden Hour" },
  { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80", cat: "nature",       label: "Purple Bloom" },
  { src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80", cat: "nature",       label: "Misty Valley" },
  { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80", cat: "architecture", label: "Modern Lines" },
  { src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80", cat: "architecture", label: "Glass Tower" },
  { src: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80", cat: "architecture", label: "Bridge at Dusk" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", cat: "architecture", label: "City Grid" },
  { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", cat: "architecture", label: "Downtown Glow" },
  { src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80", cat: "abstract",     label: "Color Flow" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", cat: "abstract",     label: "Neon Blur" },
  { src: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&q=80", cat: "abstract",     label: "Paint Splash" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", cat: "travel",       label: "City Streets" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", cat: "travel",       label: "Lakeside Morning" },
  { src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80", cat: "travel",       label: "Street Market" },
  { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80", cat: "travel",       label: "Tropical Path" },
  { src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80", cat: "travel",       label: "Golden Temple" },
  { src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80", cat: "ocean",        label: "Ocean Waves" },
  { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80", cat: "ocean",        label: "Underwater Blue" },
  { src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80", cat: "ocean",        label: "Sunset Shore" },
];

let starred = new Set(), activeFilter = "all", searchQ = "", visibleImages = [], curIdx = 0, isLight = false;
let zoomImages = [], zoomIdx = 0;

const page        = document.getElementById("page");
const grid        = document.getElementById("grid");
const lbBg        = document.getElementById("lbBg");
const galleryArea = document.getElementById("galleryArea");
const lbImg       = document.getElementById("lbImg");
const lbName      = document.getElementById("lbName");
const lbCat       = document.getElementById("lbCat");
const lbCtr       = document.getElementById("lbCtr");
const lbDots      = document.getElementById("lbDots");
const lbStar      = document.getElementById("lbStar");
const noRes       = document.getElementById("noRes");
const zoomOverlay = document.getElementById("zoomOverlay");
const zoomImg     = document.getElementById("zoomImg");
const zoomInfo    = document.getElementById("zoomInfo");
const siEl        = document.getElementById("si");
const clearBtn    = document.getElementById("clearBtn");
const favGrid     = document.getElementById("favGrid");
const favEmpty    = document.getElementById("favEmpty");

function getVisible() {
  return allImages.filter(i => {
    const catOk = activeFilter === "all" || i.cat === activeFilter;
    const sqOk  = !searchQ || i.label.toLowerCase().includes(searchQ) || i.cat.toLowerCase().includes(searchQ);
    return catOk && sqOk;
  });
}

function updateStats() {
  document.getElementById("totalStat").textContent = allImages.length;
  document.getElementById("starStat").textContent  = starred.size;
  document.getElementById("vcnt").textContent       = getVisible().length;
  document.getElementById("favBadge").textContent   = starred.size;
  document.getElementById("favCnt").textContent     = starred.size;
}

function renderGrid() {
  grid.innerHTML = "";
  const vis = getVisible();
  updateStats();
  if (vis.length === 0) { noRes.style.display = "flex"; return; }
  noRes.style.display = "none";
  vis.forEach((img, idx) => {
    const isS = starred.has(img.src);
    const d = document.createElement("div");
    d.className = "gi";
    d.innerHTML = `
      <div class="iw"><img src="${img.src}" alt="${img.label}" loading="lazy"></div>
      <div class="cat-pill">${img.cat}</div>
      <button class="del-x" title="Remove"><i class="fa-solid fa-xmark"></i></button>
      <button class="star-x ${isS ? "starred" : ""}" title="Star"><i class="fa-solid fa-star"></i></button>
      <div class="ov">
        <div class="ov-row">
          <span class="ov-label">${img.label}</span>
          <span class="ov-icons">
            <span class="oi preview-oi" title="Preview"><i class="fa-solid fa-eye"></i></span>
            <span class="oi zoom-oi" title="Zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
            <span class="oi star-oi ${isS ? "starred" : ""}" title="Star"><i class="fa-solid fa-star"></i></span>
          </span>
        </div>
      </div>`;
    d.querySelector(".iw").addEventListener("click", () => openLb(vis, idx));
    d.querySelector(".preview-oi").addEventListener("click", e => { e.stopPropagation(); openLb(vis, idx); });
    d.querySelector(".zoom-oi").addEventListener("click", e => { e.stopPropagation(); openZoom(vis, idx); });
    d.querySelector(".del-x").addEventListener("click", e => {
      e.stopPropagation();
      allImages = allImages.filter(x => x.src !== img.src);
      starred.delete(img.src);
      renderGrid(); renderFav();
    });
    d.querySelectorAll(".star-x, .star-oi").forEach(btn => btn.addEventListener("click", e => {
      e.stopPropagation();
      if (starred.has(img.src)) starred.delete(img.src); else starred.add(img.src);
      renderGrid(); renderFav();
    }));
    grid.appendChild(d);
  });
}

function renderFav() {
  updateStats();
  const favImgs = allImages.filter(i => starred.has(i.src));
  if (favImgs.length === 0) { favEmpty.style.display = "block"; favGrid.innerHTML = ""; return; }
  favEmpty.style.display = "none";
  favGrid.innerHTML = "";
  favImgs.forEach((img, idx) => {
    const d = document.createElement("div");
    d.className = "fav-item";
    d.innerHTML = `
      <div class="iw"><img src="${img.src}" alt="${img.label}" loading="lazy"></div>
      <div class="fav-star-badge"><i class="fa-solid fa-star"></i></div>
      <button class="fav-unstar" title="Remove from favourites"><i class="fa-solid fa-star-half-stroke"></i></button>
      <div class="ov"><span class="fav-label">${img.label}</span></div>`;
    d.querySelector(".iw").addEventListener("click", () => openZoom(favImgs, idx));
    d.querySelector(".ov").addEventListener("click", () => openZoom(favImgs, idx));
    d.querySelector(".fav-unstar").addEventListener("click", e => {
      e.stopPropagation();
      starred.delete(img.src);
      renderFav(); renderGrid();
    });
    favGrid.appendChild(d);
  });
}

/* Lightbox */
function renderDots() {
  lbDots.innerHTML = "";
  const max = Math.min(visibleImages.length, 16);
  for (let i = 0; i < max; i++) {
    const dot = document.createElement("div");
    dot.className = "lb-dot" + (i === curIdx ? " active" : "");
    const ii = i;
    dot.addEventListener("click", () => { curIdx = ii; updateLb(); });
    lbDots.appendChild(dot);
  }
}

function updateLb() {
  const img = visibleImages[curIdx];
  lbImg.classList.add("fade");
  setTimeout(() => { lbImg.src = img.src; lbImg.alt = img.label; lbImg.classList.remove("fade"); }, 160);
  lbName.textContent = img.label;
  lbCat.textContent  = img.cat + " · " + (curIdx + 1) + " of " + visibleImages.length;
  lbCtr.textContent  = (curIdx + 1) + " / " + visibleImages.length;
  const isS = starred.has(img.src);
  lbStar.className   = "lb-btn star-lb" + (isS ? " starred" : "");
  lbStar.style.color = isS ? "#fbbf24" : "";
  document.querySelectorAll(".lb-dot").forEach((d, i) => d.classList.toggle("active", i === curIdx));
}

function openLb(vis, idx) {
  visibleImages = vis; curIdx = idx;
  galleryArea.style.display = "none";
  lbBg.classList.add("open");
  renderDots(); updateLb();
}

function closeLb() {
  lbBg.classList.remove("open");
  galleryArea.style.display = "";
}

/* Zoom */
function openZoom(imgs, idx) {
  zoomImages = imgs; zoomIdx = idx;
  const img = zoomImages[zoomIdx];
  zoomImg.src = img.src; zoomImg.alt = img.label;
  zoomInfo.textContent = img.label + " — " + img.cat;
  zoomOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeZoom() {
  zoomOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

function updateZoom() {
  const img = zoomImages[zoomIdx];
  zoomImg.classList.add("fade");
  setTimeout(() => { zoomImg.src = img.src; zoomImg.alt = img.label; zoomImg.classList.remove("fade"); }, 150);
  zoomInfo.textContent = img.label + " — " + img.cat;
}

document.getElementById("zoomClose").addEventListener("click", e => { e.stopPropagation(); closeZoom(); });
zoomOverlay.addEventListener("click", e => { if (e.target === zoomOverlay) closeZoom(); });
document.getElementById("zoomPrev").addEventListener("click", e => { e.stopPropagation(); zoomIdx = (zoomIdx - 1 + zoomImages.length) % zoomImages.length; updateZoom(); });
document.getElementById("zoomNext").addEventListener("click", e => { e.stopPropagation(); zoomIdx = (zoomIdx + 1) % zoomImages.length; updateZoom(); });

/* Lightbox events */
document.getElementById("lbBackdrop").addEventListener("click", closeLb);
document.getElementById("lbClose").addEventListener("click", e => { e.stopPropagation(); closeLb(); });
document.getElementById("lbPrev").addEventListener("click", e => { e.stopPropagation(); curIdx = (curIdx - 1 + visibleImages.length) % visibleImages.length; updateLb(); });
document.getElementById("lbNext").addEventListener("click", e => { e.stopPropagation(); curIdx = (curIdx + 1) % visibleImages.length; updateLb(); });
document.getElementById("lbImgBox").addEventListener("click", e => { e.stopPropagation(); openZoom(visibleImages, curIdx); });
document.getElementById("lbZoom").addEventListener("click", e => { e.stopPropagation(); openZoom(visibleImages, curIdx); });

lbStar.addEventListener("click", e => {
  e.stopPropagation();
  const img = visibleImages[curIdx];
  if (starred.has(img.src)) starred.delete(img.src); else starred.add(img.src);
  updateLb(); updateStats(); renderFav();
});

document.getElementById("lbDel").addEventListener("click", e => {
  e.stopPropagation();
  const img = visibleImages[curIdx];
  allImages     = allImages.filter(x => x.src !== img.src);
  starred.delete(img.src);
  visibleImages = visibleImages.filter(x => x.src !== img.src);
  if (visibleImages.length === 0) { closeLb(); renderGrid(); renderFav(); return; }
  if (curIdx >= visibleImages.length) curIdx = visibleImages.length - 1;
  renderDots(); updateLb(); updateStats(); renderFav();
});

document.getElementById("lbShare").addEventListener("click", e => {
  e.stopPropagation();
  const img = visibleImages[curIdx];
  if (navigator.share) navigator.share({ title: img.label, url: img.src }).catch(() => {});
  else if (navigator.clipboard) navigator.clipboard.writeText(img.src);
});

/* Search + clear */
siEl.addEventListener("input", e => {
  searchQ = e.target.value.toLowerCase().trim();
  clearBtn.classList.toggle("show", searchQ.length > 0);
  renderGrid();
});
clearBtn.addEventListener("click", () => {
  siEl.value = ""; searchQ = "";
  clearBtn.classList.remove("show");
  renderGrid(); siEl.focus();
});

/* Filters */
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".fb");
  if (!btn) return;
  document.querySelectorAll(".fb").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.cat;
  renderGrid();
});

/* View toggle */
document.getElementById("gvBtn").addEventListener("click", () => {
  grid.classList.remove("list-view");
  document.getElementById("gvBtn").classList.add("active");
  document.getElementById("lvBtn").classList.remove("active");
});
document.getElementById("lvBtn").addEventListener("click", () => {
  grid.classList.add("list-view");
  document.getElementById("lvBtn").classList.add("active");
  document.getElementById("gvBtn").classList.remove("active");
});

/* Tabs */
document.getElementById("tabGallery").addEventListener("click", () => {
  document.getElementById("tabGallery").classList.add("active");
  document.getElementById("tabFav").classList.remove("active");
  document.getElementById("panelGallery").classList.add("active");
  document.getElementById("panelFav").classList.remove("active");
  document.getElementById("controls").style.display = "";
});
document.getElementById("tabFav").addEventListener("click", () => {
  document.getElementById("tabFav").classList.add("active");
  document.getElementById("tabGallery").classList.remove("active");
  document.getElementById("panelFav").classList.add("active");
  document.getElementById("panelGallery").classList.remove("active");
  document.getElementById("controls").style.display = "none";
  renderFav();
});

/* Theme */
document.getElementById("themeBtn").addEventListener("click", () => {
  isLight = !isLight;
  page.classList.toggle("light", isLight);
  document.getElementById("themeIco").className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  document.getElementById("themeLbl").textContent = isLight ? "Dark Mode" : "Light Mode";
});

/* Keyboard */
document.addEventListener("keydown", e => {
  if (zoomOverlay.classList.contains("open")) {
    if (e.key === "Escape") closeZoom();
    if (e.key === "ArrowLeft")  { zoomIdx = (zoomIdx - 1 + zoomImages.length) % zoomImages.length; updateZoom(); }
    if (e.key === "ArrowRight") { zoomIdx = (zoomIdx + 1) % zoomImages.length; updateZoom(); }
    return;
  }
  if (lbBg.classList.contains("open")) {
    if (e.key === "Escape")     closeLb();
    if (e.key === "ArrowLeft")  { curIdx = (curIdx - 1 + visibleImages.length) % visibleImages.length; updateLb(); }
    if (e.key === "ArrowRight") { curIdx = (curIdx + 1) % visibleImages.length; updateLb(); }
  }
});

renderGrid();