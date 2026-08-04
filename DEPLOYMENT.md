# Deploying VBIS INN to Vercel via GitHub

## 1. Push the code to GitHub

In Lovable: **+ (plus menu) → GitHub → Connect project → Create Repository**.
This creates a repo and keeps a two-way sync with Lovable.

## 2. Import the repo on Vercel

1. Go to https://vercel.com/new and import the GitHub repository.
2. Framework preset: **Other** (settings come from `vercel.json`).
3. Build command: `NITRO_PRESET=vercel npm run build`
4. Output directory: `.vercel/output`
5. Install command: `npm install`
6. Node version: 20 or later.

Deploy. Every push to the default branch triggers a production deploy;
pull requests get preview deployments automatically.

## 3. Custom domain

Vercel → Project → Settings → Domains → add e.g. `vbisinn.com`, then point the
registrar's DNS records at Vercel as shown there.

## Notes

- `vercel.json` sets the Nitro `vercel` preset so the TanStack Start server
  build emits the Vercel Build Output API format in `.vercel/output`.
- No environment variables are required — the site is fully static content
  with no backend.
