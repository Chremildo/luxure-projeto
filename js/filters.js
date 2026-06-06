const properties = [
  {
    title: "Pacific Glass Estate",
    location: "Malibu, California",
    price: 42000,
    label: "R$42K/mo",
    beds: 7,
    baths: 9,
    sqft: "12,400",
    status: "Reference",
    category: ["buy", "luxury", "waterfront"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Madison Sky Penthouse",
    location: "New York, New York",
    price: 36000,
    label: "R$36K/mo",
    beds: 5,
    baths: 6,
    sqft: "7,850",
    status: "Reference",
    category: ["buy", "luxury", "investment"],
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Biscayne Marina Villa",
    location: "Miami Beach, Florida",
    price: 28000,
    label: "R$28K/mo",
    beds: 6,
    baths: 8,
    sqft: "9,120",
    status: "Lease",
    category: ["rent", "luxury", "waterfront"],
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Moema Garden Apartment",
    location: "Moema, São Paulo",
    price: 14200,
    label: "R$14.2K/mo",
    beds: 4,
    baths: 3,
    sqft: "1,840",
    status: "São Paulo",
    category: ["rent", "investment", "brazil"],
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1000&q=85",
    guests: 6,
    nightly: "R$470/night",
    highlight: "Residential street, close to Ibirapuera, practical family layout"
  },
  {
    title: "Paulista Compact Studio",
    location: "Bela Vista, São Paulo",
    price: 7200,
    label: "R$7.2K/mo",
    beds: 0,
    baths: 1,
    sqft: "430",
    status: "City Stay",
    category: ["rent", "investment", "brazil"],
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1000&q=85",
    guests: 2,
    nightly: "R$260/night",
    highlight: "Simple furnished studio for work trips near Avenida Paulista"
  },
  {
    title: "Botafogo Local Apartment",
    location: "Botafogo, Rio de Janeiro",
    price: 9800,
    label: "R$9.8K/mo",
    beds: 2,
    baths: 2,
    sqft: "860",
    status: "Rio Stay",
    category: ["rent", "brazil"],
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=85",
    guests: 4,
    nightly: "R$360/night",
    highlight: "Good base for tourists, metro access, Sugarloaf route nearby"
  },
  {
    title: "Ipanema Horizon Apartment",
    location: "Ipanema, Rio de Janeiro",
    price: 42000,
    label: "R$42K/mo",
    beds: 3,
    baths: 4,
    sqft: "2,850",
    status: "Rio Rental",
    category: ["rent", "luxury", "waterfront", "brazil"],
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1000&q=85",
    guests: 6,
    nightly: "R$1,100/night",
    highlight: "Beach block, concierge arrival, ocean-view balcony"
  },
  {
    title: "Leblon Private Garden Residence",
    location: "Leblon, Rio de Janeiro",
    price: 12800000,
    label: "R$12.8M",
    beds: 4,
    baths: 5,
    sqft: "4,200",
    status: "Brazil",
    category: ["buy", "luxury", "investment", "brazil"],
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1000&q=85",
    guests: 8,
    nightly: "R$1,850/night",
    highlight: "Private garden, family layout, premium rental potential"
  },
  {
    title: "Barra Ocean Service Flat",
    location: "Barra da Tijuca, Rio de Janeiro",
    price: 18500,
    label: "R$18.5K/mo",
    beds: 2,
    baths: 2,
    sqft: "1,480",
    status: "Tourist Stay",
    category: ["rent", "investment", "brazil"],
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1000&q=85",
    guests: 4,
    nightly: "R$640/night",
    highlight: "Service flat, pool, parking, long-stay friendly"
  },
  {
    title: "Jardins Executive Loft",
    location: "Jardins, São Paulo",
    price: 24500,
    label: "R$24.5K/mo",
    beds: 1,
    baths: 2,
    sqft: "980",
    status: "São Paulo Stay",
    category: ["rent", "luxury", "brazil"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85",
    guests: 2,
    nightly: "R$780/night",
    highlight: "Walkable Jardins address, workspace, weekly cleaning"
  },
  {
    title: "Vila Mariana Family Flat",
    location: "Vila Mariana, São Paulo",
    price: 16800,
    label: "R$16.8K/mo",
    beds: 2,
    baths: 2,
    sqft: "1,260",
    status: "Family Stay",
    category: ["rent", "brazil", "investment"],
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85",
    guests: 5,
    nightly: "R$520/night",
    highlight: "Parking, metro access, family-ready neighborhood"
  },
  {
    title: "Pinheiros Creative House",
    location: "Pinheiros, São Paulo",
    price: 32000,
    label: "R$32K/mo",
    beds: 3,
    baths: 3,
    sqft: "2,140",
    status: "Design Stay",
    category: ["rent", "luxury", "brazil"],
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1000&q=85",
    guests: 6,
    nightly: "R$980/night",
    highlight: "Dining scene, private patio, creator-friendly studio room"
  },
  {
    title: "Copacabana Classic Sea View",
    location: "Copacabana, Rio de Janeiro",
    price: 22000,
    label: "R$22K/mo",
    beds: 2,
    baths: 2,
    sqft: "1,350",
    status: "Beach Stay",
    category: ["rent", "waterfront", "brazil"],
    image: "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1000&q=85",
    guests: 4,
    nightly: "R$690/night",
    highlight: "Sea view, tourist route support, flexible check-in"
  },
  {
    title: "Penha Practical Apartment",
    location: "Penha, Rio de Janeiro",
    price: 4200,
    label: "R$4.2K/mo",
    beds: 2,
    baths: 1,
    sqft: "720",
    status: "Local Value",
    category: ["rent", "brazil"],
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85",
    guests: 4,
    nightly: "R$180/night",
    highlight: "Simple local stay near Zona Norte routes, shops, and family services"
  },
  {
    title: "Campo Grande Family House",
    location: "Campo Grande, Rio de Janeiro",
    price: 6800,
    label: "R$6.8K/mo",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    status: "Family Rental",
    category: ["rent", "brazil", "investment"],
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1000&q=85",
    guests: 6,
    nightly: "R$260/night",
    highlight: "More space, car-friendly routine, good for families and longer stays"
  }
];

const fallbackGallery = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1400&q=85"
];

const galleryFor = (property) => [
  property.image,
  ...(property.gallery || fallbackGallery.filter((image) => image !== property.image).slice(0, 3))
];

// =======================================
// PROPERTY FILTER SYSTEM
// Handles dynamic filtering and search
// =======================================
export const initFilters = () => {
  const grid = document.querySelector("[data-property-grid]");
  const filterBar = document.querySelector(".filter-bar");
  const searchForm = document.querySelector("[data-search-form]");
  if (!grid) return;

  const render = (items) => {
    grid.innerHTML = items.map((property) => `
      <article class="property-card reveal is-visible" data-categories="${property.category.join(" ")}" data-property-title="${property.title}">
        <div class="property-card__image">
          <img src="${property.image}" alt="${property.title} in ${property.location}" loading="lazy">
        </div>
        <span class="badge">${property.status}</span>
        <button class="save-button" type="button" aria-label="Save ${property.title}" data-save-property>♡</button>
        <div class="property-card__body">
          <div class="property-card__price">${property.label}</div>
          <h3>${property.title}</h3>
          <p>${property.location}</p>
          ${property.highlight ? `<p class="property-card__highlight">${property.highlight}</p>` : ""}
          <div class="property-card__meta">
            <span>${property.beds || "Studio"} bd</span>
            <span>${property.baths} ba</span>
            <span>${property.sqft} sq ft</span>
            ${property.guests ? `<span>${property.guests} guests</span>` : ""}
            ${property.nightly ? `<span>${property.nightly}</span>` : ""}
            ${property.category.includes("brazil") ? "<span>Brazil Desk</span>" : ""}
          </div>
          <div class="property-card__actions">
            <button class="button button--outline" type="button" data-view-gallery="${property.title}">View gallery</button>
            <a class="button button--gold" href="https://wa.me/5544998843639?text=${encodeURIComponent(`Hi James, I want payment and booking options for ${property.title} in ${property.location}.`)}" target="_blank" rel="noopener">Request payment</a>
          </div>
        </div>
      </article>
    `).join("");
  };

  const filterByCategory = (category) => {
    const filtered = category === "all" ? properties : properties.filter((property) => property.category.includes(category));
    render(filtered);
  };

  filterBar?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-filter]");
    if (!chip) return;
    filterBar.querySelectorAll(".filter-chip").forEach((button) => button.classList.remove("is-active"));
    chip.classList.add("is-active");
    filterByCategory(chip.dataset.filter);
  });

  document.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-filter-jump]")?.dataset.filterJump;
    if (!filter) return;
    const chip = filterBar?.querySelector(`[data-filter="${filter}"]`);
    filterBar?.querySelectorAll(".filter-chip").forEach((button) => button.classList.remove("is-active"));
    chip?.classList.add("is-active");
    filterByCategory(filter);
    document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
  });

  grid.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-property]");
    const galleryButton = event.target.closest("[data-view-gallery]");

    if (saveButton) {
      saveButton.classList.toggle("is-saved");
      saveButton.textContent = saveButton.classList.contains("is-saved") ? "♥" : "♡";
      return;
    }

    if (galleryButton) {
      const property = properties.find((item) => item.title === galleryButton.dataset.viewGallery);
      const dialog = document.querySelector("#property-gallery-modal");
      const title = dialog?.querySelector("[data-gallery-title]");
      const meta = dialog?.querySelector("[data-gallery-meta]");
      const gallery = dialog?.querySelector("[data-gallery-images]");
      if (!property || !dialog || !title || !meta || !gallery) return;

      title.textContent = property.title;
      meta.textContent = `${property.location} · ${property.label} · ${property.beds || "Studio"} bd · ${property.baths} ba`;
      gallery.innerHTML = galleryFor(property).map((image, index) => `
        <img src="${image}" alt="${property.title} gallery photo ${index + 1}" loading="lazy">
      `).join("");
      dialog.showModal();
    }
  });

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const location = String(formData.get("location") || "").toLowerCase();
    const budget = Number(formData.get("budget") || 0);
    const category = String(formData.get("category") || "all");
    const results = properties.filter((property) => {
      const locationMatch = !location || property.location.toLowerCase().includes(location) || property.title.toLowerCase().includes(location);
      const budgetMatch = !budget || property.price >= budget;
      const categoryMatch = category === "all" || property.category.includes(category);
      return locationMatch && budgetMatch && categoryMatch;
    });
    render(results);
    document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
  });

  render(properties);
};

// =======================================
// SEARCH FOCUS HELPER
// Moves attention into the hero search form
// =======================================
export const focusSearch = () => {
  document.querySelector("[data-search-form] input")?.focus();
  document.querySelector("[data-search-form]")?.scrollIntoView({ behavior: "smooth", block: "center" });
};
