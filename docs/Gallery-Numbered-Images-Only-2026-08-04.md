# Homepage gallery — numbered images only (2026-08-04)

## Change

Homepage Gallery section shows **only** numbered files `1`–`5` (in that order) from:

`public/images/sdah photos to use/gallery/`

1. `1 - saltaire sold.png` — Saltaire sold  
2. `2 - sold 1.png` — Recently sold San Diego home  
3. `3 - sold 3.2.png` — Recently sold San Diego home  
4. `4 - sold coronado.png` — Sold in Coronado  
5. `5 - sold 5.png` — Recently sold San Diego home  

Other files in that folder (and `not using atm/`) are **not** included.

## File

- `app/page.js` — `HOME_GALLERY_SLOTS` + `getHomeGalleryImages()` (numbered slots only; no folder sweep).

## Note

Local until commit/push to `main` for Vercel production.
