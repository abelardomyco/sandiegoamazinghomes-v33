# Admin UI (WordPress-style) + username login — SDAH (2026-04-10)

## What exists

- **URLs:** `/admin/login` (sign in), `/admin` → `/admin/dashboard` (overview).
- **Protection:** `middleware.js` requires a valid signed **httpOnly** cookie for all `/admin/*` except `/admin/login`.
- **Session:** `lib/admin-session.js` — HMAC-signed payload with expiry (7 days). No password stored in the cookie.

## Establish username and password

Add to **`.env.local`** (never commit):

```env
ADMIN_DASHBOARD_PASSWORD=your-strong-secret-password
ADMIN_SESSION_SECRET=long-random-string-at-least-32-chars
# Optional — when set, login requires this exact username:
ADMIN_USERNAME=your-login-name
```

Generate a secret, e.g. `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.

### Behavior

| `ADMIN_USERNAME` | Login |
|------------------|--------|
| **Unset or empty** | Username field is ignored; only **password** must match `ADMIN_DASHBOARD_PASSWORD`. |
| **Set** | **Username** must match exactly (trimmed) **and** password must match. |

Failed attempts return a generic **“Invalid username or password.”** (no distinction which field failed).

If password or session secret is missing, the API returns **503** with a configuration message (for operators, not end users).

## UI changes

- **Login:** Centered card on light gray background (similar to WordPress admin login).
- **Dashboard:** Dark left sidebar (`#1d2327`), branding, **Dashboard** + **View site** links, **Sign out** in footer of sidebar. Main content unchanged (contacts, blog inventory, neighborhoods, etc.).

## Files touched

- `app/admin/login/page.js` — username + password form, styling.
- `app/admin/layout.js` — full-height shell background.
- `app/admin/dashboard/layout.js` — wraps dashboard in `AdminShell`.
- `app/admin/dashboard/page.js` — removed duplicate header/logout (now in shell).
- `app/api/admin/session/route.js` — optional `ADMIN_USERNAME` check.
- `components/admin/AdminShell.js` — new sidebar chrome.
- `components/admin/AdminLogoutButton.js` — optional `className` for sidebar styling.
- `lib/admin-session.js` — comment update.
- `.env.example` — `ADMIN_USERNAME` documented.

## Production notes

- Use **HTTPS** so `secure` cookies apply (`NODE_ENV=production`).
- Prefer a **long random password**; this is shared single-operator auth, not a user database.
- For **multiple admins** or **role-based** access later, consider Supabase Auth or another IdP instead of env-only credentials.
