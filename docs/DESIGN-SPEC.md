# Where Time Softens — Design Spec

Splendessa demo #6. One-page landing, EN, US/UK target. Anti-aging clinic.

## Emotion
Time doesn't stop here — it softens. Everything must *breathe slowly*. Warm,
champagne, unhurried, editorial. The opposite of Bare Beauty (clinical white,
fast). Squint test: must not resemble any other demo.

## Palette
- `#F4F0E8` — background, palest champagne
- `#E7DCC8` — warm champagne (cards, accents)
- `#A89F94` — warm grey (lines, muted detail)
- `#5A5149` — text, warm grey-brown (never pure black)

## Type (Google Fonts)
- **Cormorant Garamond** 300/400 — display (headings). Airy, timeless serif.
- **Mulish** 300/400 — body. Calm humanist sans.
- Chosen to differ from Bare Beauty (Fraunces + Inter).

## Signature — the light of a single slow day (differentiates from Bare Beauty)
The PRIMARY signature is **the page warms as you scroll**: section backgrounds
step through a day — palest dawn → mid-morning → warm noon → golden hour →
settled dusk (footer). Scrolling = time passing gently. On-theme, unique.
Supporting devices:
1. **Hero title settles out of a soft blur** on load ("softening", literal).
2. **Sheer linen drifts slowly** across the hero (CSS, ~26s). Reduced-motion off.
3. **Long-ease scroll reveals** with a gentle un-blur, page-wide.
4. **Film-grain overlay** (fixed, ~6%) — analog warmth, unlike Bare Beauty's clean surfaces.
5. **Hero timestamp** "Santa Fe · 7:14 a.m." — a single quiet morning minute.

## Structure (mandatory order) + architecture chosen to pass the squint test
1. **Hero** — full-bleed `hero.jpg` (serene minimalist room, sheer linen), blur-settle
   title + timestamp. Copy: "Time doesn't stop here. It softens."
2. **Manifesto** — new centered italic line at palest dawn (Bare Beauty has none).
3. **Treatments** — NOT hairline rows (that was Bare Beauty). **Cards led by
   DURATION** — time is the structural device (an unhurried clinic sells time):
   - Collagen Renewal — 90 min — $290
   - Slow Resurfacing — 75 min — $220
   - Redensifying Facial — 90 min — $260
   - Neck & Décolleté Restoration — 60 min — $340
   - LED Light Therapy — 45 min — $150
   - Longevity Consultation — 60 min — $120
4. **Experience** — NOT a 2×2 grid. A **filmstrip**: 3 staggered frames with
   captions (analog/time metaphor). Images `experience-1/2/3.jpg`.
5. **The slow room** — golden-hour concept band over `slow-room.jpg`.
6. **Booking CTA** — single button → https://splendessa.com
7. **Footer** — fictional US address (real city, invented street), (555) phone,
   hello@wheretimesoftens.com (visual only).

## Fictional data
- City: Santa Fe, NM (fits warm, timeless, unhurried).
- Address: invented street.
- Phone: (555) format. Email: hello@wheretimesoftens.com.
- No real Splendessa contact data in content. Only link = Book button.

## Technical
- Vanilla HTML/CSS/JS, static (Vercel-friendly). No frameworks.
- Images: free-license (Pexels), distinct from Bare Beauty. IDs: hero 35979769,
  exp 11846962 / 763147 / 5482202, slow-room 36810651.
- Responsive, mobile-perfect. Favicon (inline SVG) + OG image.
- Copy in EN, poetic, long flowing sentences, max ~150 visible words/section.
- Verified with Playwright (desktop + mobile) before delivery.
