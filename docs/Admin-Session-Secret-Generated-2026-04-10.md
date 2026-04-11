# Admin `ADMIN_SESSION_SECRET` (2026-04-10)

## What it’s for

`ADMIN_SESSION_SECRET` signs the **httpOnly** admin session cookie (`lib/admin-session.js`). It must be **long, random, and private**.

## Generate a new one anytime

From the project root:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Paste the output into `.env.local` as `ADMIN_SESSION_SECRET=...` (no quotes). Restart `npm run dev` after changes.

## This session

A **48-byte (96 hex chars)** value was generated and written to **`.env.local`** (file is gitignored — do not commit).

If this doc was created after you rotated the secret, treat the on-disk `.env.local` as source of truth.
