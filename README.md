# James Lennan Estates Brazil Real Estate Website

A production-style static luxury real estate website built with HTML5, CSS3, and vanilla ES modules.

## Folder Structure

- `index.html` - semantic page structure, SEO metadata, accessibility labels, and all website sections.
- `css/style.css` - design tokens, layout, navigation, hero, and page sections.
- `css/components.css` - buttons, forms, cards, filters, modal, toast, carousel, and floating controls.
- `css/animations.css` - reveal animations, loader motion, and reduced-motion support.
- `css/responsive.css` - mobile and tablet breakpoints.
- `js/app.js` - application bootstrap, navigation, reveal, counters, FAQ, and floating controls.
- `js/filters.js` - property data, filtering, search, and save buttons.
- `js/modal.js` - accessible dialog behavior.
- `js/carousel.js` - showcase and testimonial carousels.
- `js/theme.js` - dark/light mode with local storage.
- `js/forms.js` - contact/newsletter validation and notifications.
- `js/chatbot.js` - fast local AI-style concierge for listings, Rio rentals, Brazil tips, and tourist planning.
- `assets/` - reserved for local images, icons, and video assets.

## SEO Strategy

Use descriptive title and meta descriptions, Open Graph content, semantic headings, crawlable property content, descriptive image alt text, and location-rich copy. For production, add JSON-LD for `RealEstateAgent`, `Residence`, and `Offer` entities.

## Accessibility Audit

The page uses semantic landmarks, visible focus styles, labeled forms, accessible buttons, dialog semantics, keyboard-friendly FAQ controls, `aria-live` notifications, reduced-motion support, and descriptive image alt text. Before launch, test with VoiceOver/NVDA and verify color contrast against final photography.

## Brazil and James Lennan AI

The Brazil collection adds Rio de Janeiro rental guidance, tourist itinerary support, and Brazil investment prompts. The AI concierge is a fast front-end assistant simulation that uses local keyword responses, supports English, Portuguese, and Spanish, and works without API keys. For production, connect `js/chatbot.js` to a secure server-side AI endpoint and CRM handoff.

## Performance Checklist

Images are remotely optimized with responsive crop parameters and lazy loading where appropriate. CSS and JavaScript are split by concern. For production, self-host compressed WebP/AVIF images, preload the hero image or video poster, minify assets, add cache headers, and inline critical above-the-fold CSS if needed.

## Deployment Guide

Serve the folder from any static host such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or an Nginx/S3 static site. Because JavaScript uses ES modules, run it through a local or hosted HTTP server instead of opening `index.html` directly.

## Production Best Practices

Replace placeholder listings with CMS-backed property data, add real brokerage compliance copy, wire forms to a CRM, add spam protection, connect analytics consent controls, test map privacy requirements, and provide a fallback poster/video pipeline for the hero media.

## Portfolio Presentation Tips

Present the site as a luxury advisory product: lead with the hero, search workflow, filtering behavior, property modal, market insights, and form validation. Emphasize design restraint, accessibility, modular vanilla JavaScript, and production readiness.
