const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
];

const testimonials = [
  {
    name: "Elena R.",
    role: "Family office principal",
    quote: "They turned a complicated acquisition into a quiet, disciplined process. Every recommendation had substance behind it.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85"
  },
  {
    name: "Marcus L.",
    role: "Technology founder",
    quote: "The marketing was beautiful, but the real value was their control of timing, buyer quality, and negotiation pressure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85"
  },
  {
    name: "Nadia S.",
    role: "International investor",
    quote: "Their market brief gave us the confidence to move quickly without feeling rushed. That combination is rare.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85"
  }
];

// =======================================
// IMAGE GALLERY CAROUSEL
// Rotates showcase imagery
// =======================================
export const initCarousel = () => {
  const image = document.querySelector("[data-carousel-image]");
  let index = 0;
  const show = () => {
    if (!image) return;
    image.src = galleryImages[index];
  };

  document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    index = (index - 1 + galleryImages.length) % galleryImages.length;
    show();
  });

  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    index = (index + 1) % galleryImages.length;
    show();
  });
};

// =======================================
// TESTIMONIAL CAROUSEL
// Updates client quote content
// =======================================
export const initTestimonials = () => {
  const card = document.querySelector("[data-testimonial-card]");
  let index = 0;
  const render = () => {
    if (!card) return;
    const item = testimonials[index];
    card.innerHTML = `
      <img src="${item.image}" alt="Portrait of ${item.name}" loading="lazy">
      <div>
        <p aria-label="Rating 5 out of 5">★★★★★</p>
        <blockquote>“${item.quote}”</blockquote>
        <p><strong>${item.name}</strong><br>${item.role}</p>
      </div>
    `;
  };

  document.querySelector("[data-testimonial-prev]")?.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    render();
  });

  document.querySelector("[data-testimonial-next]")?.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    render();
  });

  render();
};
