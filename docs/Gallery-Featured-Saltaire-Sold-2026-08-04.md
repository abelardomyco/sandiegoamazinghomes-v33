# Homepage gallery: featured slot 1 — Saltaire sold (2026-08-04)

## Change

The first **featured** image in the homepage Gallery (`public/images/sdah photos to use/gallery/`) now prefers **Saltaire sold** instead of **Open house April 2**.

| | Path |
|---|---|
| **Old (featured #1)** | `/images/sdah%20photos%20to%20use/gallery/open%20house%20april%202.png` (`open house april 2.png`) |
| **New (featured #1)** | `/images/sdah%20photos%20to%20use/gallery/saltaire%20sold.png` (`saltaire sold.png`) |

**Caption / alt:** `Saltaire sold`

The image file was already in the gallery folder; no copy/move was required. Other featured slots (sold 1, sold coronado, sold 4, sold 3) are unchanged. The former Open House April 2 file remains on disk and may still appear later in the non-featured (A–Z) portion of the carousel.

## Resolution order (slot 1)

First file that exists on disk wins:

1. `saltaire sold.png` / `.jpg`
2. `Saltaire sold.png` / `.jpg`
3. `Saltaire Sold.png` / `.jpg`

## File

- `app/page.js` — `HOME_GALLERY_FEATURED_SLOTS[0]`
