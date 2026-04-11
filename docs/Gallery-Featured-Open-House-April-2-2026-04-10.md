# Homepage gallery: featured slot 1 — Open house April 2 (2026-04-10)

## Change

The first **featured** image in the homepage Gallery (same folder as before: `public/images/sdah photos to use/gallery/`) now prefers files named for **Open house April 2**, instead of only `Open house.png`.

**Resolution order** (first file that exists on disk wins):

1. `Open house April 2.png` / `.jpg`
2. `open house april 2.png` / `.jpg`
3. `Open house april 2.png` / `.jpg`
4. `Open house.png` (fallback if none of the above are present)

**Caption / alt:** `Open house — April 2` when an April 2 file is used; **`Open house`** if the site only has the legacy **`Open house.png`** fallback.

## Operator note

Add your photo to **`gallery/`** using one of the filenames above (match spelling/case to one of the candidates, or rename the file accordingly).

## File

- `app/page.js` — `HOME_GALLERY_FEATURED_SLOTS[0]`
