# Mumtaz Motors (K) Ltd — Style Guide
> The circular badge, retired. Its geometry — ring, red band, dot pattern — becomes a modern editorial mark: black voids, a single Rosso Mumtaz signal, and wide-tracked uppercase type.

**Theme:** light (white canvas), with one dark cinematic hero and one dark band for rhythm.

Mumtaz Motors' existing site is a generic WordPress car-listing template. This redesign borrows the *structural discipline* of Ferrari.com — restrained colour, uppercase tracked type, zero radius, hairline dividers, no shadows, full-bleed conviction — and rebuilds it in the client's own palette: white and Rosso Mumtaz (`#F54047`). The result should feel like a serious, trustworthy importer, not a stock car-dealer template.

---

## Why this direction (grounding in the subject)

The original badge logo already contains the whole brand system, just undeveloped: a **circular seal**, a **diagonal red band**, an **arched wordmark**, and a **dot-pattern texture** in the background. Rather than inventing a new visual language, this redesign extracts those four shapes and turns them into the site's actual design tokens:

- The **ring** → the faint circular motif in the hero background, and the logo mark in the header.
- The **diagonal red band** → the single red line crossing the hero, and the left-edge accent on active states.
- The **dot pattern** → the `dotGrid` SVG pattern used once, low-opacity, in the hero corner.
- The **arched, all-caps wordmark** → the uppercase, wide-tracked type system used for every label, nav item, and button in the site.

This is the one deliberate "risk" in the design: instead of a stock-photo hero, the hero is typographic and geometric, built entirely from the client's own mark. It reads as considered rather than templated, and it means the site works before a single new photograph exists.

---

## Deviations from the Ferrari reference, and why

The brief asked for Ferrari.com's structure but explicitly said *"we keep the colours white and RGB 245, 64, 71."* Ferrari's own system is black-dominant with red used only as a hover accent. Applying that literally would have ignored the client's instruction, so the following changes were made deliberately:

| Ferrari reference | This site | Why |
|---|---|---|
| Black/`#181818` is the dominant canvas everywhere | White is the dominant canvas; black is used only for the hero, one mid-page band, and the footer | The client explicitly asked to keep white as a core colour most of the site had to be light |
| Red used only on hover/focus, never as a fill | Red (`#F54047`) is the primary **filled** CTA colour | This is a lead-generation dealership site, not an editorial teaser — buttons need to read as clickable at a glance |
| Headlines set small (16px, weight 500) — a typographic "whisper" | Hero headline is large and fluid (`clamp(2.5rem, 6vw+1rem, 5.5rem)`) | A growing local dealership needs the hero to command attention immediately; the whisper scale suits an already-famous marque, not a new site trying to convert visitors |
| Body copy set at 11–13px, often uppercase | Body copy set at 16px, mixed case | FAQ answers, financing terms and testimonials need to be comfortably readable — legibility outranks editorial restraint here |
| Odd, extracted spacing scale (4, 5, 6, 10, 15…) | Clean 8px-based scale (4, 8, 12, 16, 24, 32…) | The odd scale was a by-product of automated token extraction from a live site, not a deliberate choice worth repeating in a new build |
| 1440px max width, no page chrome | 1240px max width | Tighter measure suits a content-and-conversion site better than a full-viewport photography showcase |

Everything else — zero border-radius (except the one pill exception), uppercase/tracked interface type, hairline 1px dividers, no shadows, no decorative gradients, flat cards on tonal surfaces — is carried straight from the reference, because none of it conflicted with the brief.

---

## Tokens — Colours

| Name | Value | Token | Role |
|---|---|---|---|
| Rosso Mumtaz | `#f54047` | `--color-rosso` | The brand's signal colour — primary buttons, links on hover, active states, eyebrow labels |
| Rosso Scuro | `#c22029` | `--color-rosso-scuro` | Hover/active state for anything already filled with Rosso Mumtaz |
| Rosso Tint | `#fdeceb` | `--color-rosso-tint` | Reserved for a faint red wash behind badges/pills on white (used sparingly) |
| Bianco | `#ffffff` | `--color-bianco` | The dominant canvas — the "white" the brief asked to keep |
| Nero | `#0a0a0a` | `--color-nero` | Hero, footer, and the mid-page "Purchase Terms" band — the cinematic void |
| Notte | `#161616` | `--color-notte` | Cards and form panels that sit on top of the Nero void |
| Grafite | `#2a2a2a` | `--color-grafite` | Hairlines and dividers on dark surfaces |
| Fumo | `#6b6b6b` | `--color-fumo` | Muted body copy on white |
| Piombo | `#9a9a9a` | `--color-piombo` | Quiet captions, placeholder labels |
| Argento | `#e2e0dd` | `--color-argento` | Hairlines and dividers on light surfaces |
| Velo | `#f7f6f4` | `--color-velo` | Faint tonal wash, used inside the inventory placeholder pattern |
| Cemento | `#f1efec` | `--color-cemento` | Alternate section background — the "Brands" and "FAQ" sections |

**Rule of thumb:** white and Rosso Mumtaz are the only two *brand* colours, matching the brief. Black and the greys are structural neutrals only — exactly the role black/grey play in the Ferrari reference, just rebalanced so white leads instead of black.

## Tokens — Typography

**Typeface:** Inter (400/500/600/700/800), loaded from Google Fonts. The Ferrari reference itself lists *"Inter, Helvetica Neue, Arial Narrow"* as the substitute stack for its custom FerrariSans — so Inter is not a compromise here, it's the reference's own recommended fallback, used directly.

Tracking widens as size shrinks, the same inverted relationship as the source system:

| Role | Size | Tracking | Case |
|---|---|---|---|
| Hero headline | `clamp(2.5rem, 6vw+1rem, 5.5rem)` | `-0.02em` | Uppercase |
| Section title | 32px | `-0.02em` | Uppercase |
| Card heading | 24px | `-0.02em` | Uppercase |
| Body / paragraph | 16px | normal | Mixed case |
| Nav / buttons | 13px | `0.12em` | Uppercase |
| Eyebrow / caption | 11px | `0.18em` | Uppercase |

## Tokens — Spacing & Shape

**Density:** comfortable. Spacing runs on a clean 8px rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

**Border radius:** `0px` everywhere — buttons, cards, form fields, panels — except:
- `9999px` (full pill) for the circular logo mark, carousel dots, and the round footer badge.

This mirrors the reference exactly: sharp geometry everywhere, one deliberate round exception.

## Components

**Ghost header nav** — Transparent over the hero, white uppercase 13px links with 0.12em tracking. On scroll past the hero, the header solidifies to white with a hairline bottom border and the nav text switches to Nero. No background pill, no border — colour shift is the only affordance, same as the reference's "Ghost Navigation Link."

**Hero panel** — Full-viewport `#0a0a0a` void. No photography; instead, an inline SVG carries the brand's own ring/band/dot motif at low opacity behind a large uppercase headline. This is the site's one cinematic dark panel, directly quoting the reference's "Dark Cinematic Hero Panel" pattern.

**Why-us / Brand / Inventory cards** — Flat rectangles, 0px radius, no shadow, separated by 1px hairlines rather than gutters. Hover states shift colour (brand tiles invert to Nero with a red wordmark) rather than lifting with a shadow.

**Purchase Terms band** — A dark `#0a0a0a` strip breaking the white rhythm, five flat cards on `#161616`, no photography — this is the site's second and last dark panel, giving the page the alternating rhythm the reference layout describes ("massive image-driven panels" here become "one photography-free void panel, one text panel").

**Stat strip** — Four numbers separated by hairline verticals, red numerals, grey uppercase labels underneath. No icons, no cards — pure geometry, matching the reference's "Carousel Indicator Dot"-style restraint.

**Testimonial carousel** — Single active quote, centred, auto-rotating every 6s, pausing on hover/focus, advanced by 8–10px dots (inactive grey, active red) exactly per the reference's "Carousel Indicator Dot" spec. Disabled automatically when `prefers-reduced-motion` is set.

**FAQ accordion** — Flat rows separated by hairlines, a plus/cross icon rotating on open, one item open at a time, height animated via `grid-template-rows` rather than `max-height` (avoids the usual accordion jank).

**CTA band + contact form** — Dark panel pairing the real contact details (phone, email, Moi Avenue map link) with a front-end contact form. **The form does not send anywhere yet** — see "Before you launch" below.

**Footer** — `#161616`, four columns, hairline top border, the original circular badge logo reproduced in greyscale as a small heritage mark next to the brand blurb — a deliberate nod back to the badge this whole system was extracted from.

## Do's and Don'ts

**Do**
- Keep red for actions and signals only: buttons, links on hover/active, numerals, eyebrows.
- Keep every card and panel flush and flat — no shadows, no elevation.
- Keep interface copy (nav, buttons, labels) uppercase and tracked; let body paragraphs stay mixed-case and readable.
- Use the dark panels (hero, purchase terms, footer) sparingly — they're the rhythm break, not the default.

**Don't**
- Don't add a second accent colour. If something needs emphasis beyond red, use scale or weight, not a new hue.
- Don't round corners anywhere except the logo mark, carousel dots, and pill tags.
- Don't stack more than two dark panels in a row — the whole point is that white dominates.
- Don't invent vehicle listings, prices, or stats that aren't in this document — see below.

---

## Content notes — what's real, what's a placeholder

Everything in this build was sourced from the client's existing site (mumtazmotors.co.ke) or the uploaded badge logo: the phone numbers, email, Moi Avenue address, the five purchase-term descriptions, the "Why choose us" copy, the eight FAQ answers, and all five customer testimonials are copied from the live site's actual content.

Two things were **deliberately left as placeholders** rather than invented:

1. **Inventory.** The live site's listings are empty (every brand shows "0 Listings"), so this build ships three *category* cards (Sedans & Hatchbacks, SUVs & Crossovers, Pickups & Commercial) instead of fabricated individual vehicles with made-up prices or mileage. Replace the `.inventory-media` placeholder blocks with real photography as stock arrives, and consider wiring this section to whatever listings system powers the "Add Listing" panel on the current site.
2. **Stats.** Only claims that are already verifiable from the client's own content made it into the stat strip (6 brands, 5 purchase methods, "100% inspected" — a direct quote of their own About page copy, and 1 showroom location). Figures like "years in business" or "cars sold" were on the old site as unfilled `0` counters — add real numbers when the client provides them, rather than guessing.

## Before you launch

- **Contact form** (`#contactForm`) is front-end only — it validates and shows a confirmation message but does not send an email. Wire it to a form service (e.g. Formspree, Web3Forms) or the client's own backend before go-live.
- **Favicon** currently reuses the uploaded badge JPEG directly — generate a proper multi-size favicon set from it for production.
- **Social links** in the footer point to `#` — no real Facebook/Instagram/X URLs were available; add them when known.
- **Business hours** were not listed on the source site and were intentionally omitted rather than guessed — add them to the footer/contact section once confirmed.

---

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colours */
  --color-rosso: #f54047;
  --color-rosso-scuro: #c22029;
  --color-rosso-tint: #fdeceb;
  --color-bianco: #ffffff;
  --color-nero: #0a0a0a;
  --color-notte: #161616;
  --color-grafite: #2a2a2a;
  --color-fumo: #6b6b6b;
  --color-piombo: #9a9a9a;
  --color-argento: #e2e0dd;
  --color-velo: #f7f6f4;
  --color-cemento: #f1efec;

  /* Typography */
  --font-body: 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --text-xs: 0.6875rem;
  --text-sm: 0.8125rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.5rem;
  --text-xl: 2rem;
  --text-2xl: 2.75rem;
  --text-hero: clamp(2.5rem, 6vw + 1rem, 5.5rem);

  --track-tight: -0.02em;
  --track-wide: 0.06em;
  --track-wider: 0.12em;
  --track-widest: 0.18em;

  /* Spacing */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.5rem;  --space-6: 2rem;
  --space-7: 3rem;     --space-8: 4rem;    --space-9: 6rem; --space-10: 8rem;

  /* Radius */
  --radius-flat: 0px;
  --radius-full: 9999px;

  /* Layout */
  --container-w: 1240px;
}
```

## File map

```
index.html      — markup, all real copy sourced from the client's live site
style.css       — full token system + components + responsive rules
script.js       — sticky header, mobile nav, scroll-reveal, testimonial
                   carousel, FAQ accordion, contact-form confirmation state
assets/
  badge-logo.jpg — the client's original circular badge, reused (greyscale)
                    in the footer as a heritage mark and as the favicon
```
