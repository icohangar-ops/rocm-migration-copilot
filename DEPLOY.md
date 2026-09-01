# Deploy: GitHub + Vercel in 5 minutes

This folder is a git-ready repository. Two paths below — pick one.

---

## Step 1 — Push to GitHub

```bash
cd rocm-migration-copilot

# create a new empty repo on github.com first (no README/gitignore), then:
git init
git add .
git commit -m "ROCm Migration Copilot — landing page + submission kit"

git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/rocm-migration-copilot.git
git push -u origin main
```

> Tip: this repo is the project's open-source deliverable — it maps directly to the
> challenge's "+200 Open source" XP category. Keep the `submission/` folder in it.

---

## Step 2 — Deploy to Vercel

### Option A — Dashboard (recommended, zero CLI)

1. Go to https://vercel.com/new
2. **Import** the `rocm-migration-copilot` repo you just pushed
3. Framework preset: **Next.js** (auto-detected) — leave build settings untouched
4. Click **Deploy**
5. Done — you get `https://rocm-migration-copilot.vercel.app`
   (set this as the "Live Demo" link on the lablab submission form)

### Option B — CLI

```bash
npm i -g vercel
cd rocm-migration-copilot
vercel login
vercel --prod
```

---

## After deploying

1. **Update the GitHub button** — in `src/app/page.tsx`, edit the `GITHUB_URL` constant
   (line 1) to your real repo URL, commit, push — Vercel redeploys automatically.
2. **Paste links into the lablab form**:
   - Live Demo / Website: your `*.vercel.app` URL
   - Repository: your GitHub URL
3. Optional: add a custom domain in Vercel → Settings → Domains.

## Notes

- The landing page is fully static — no environment variables required.
- Prisma scaffolding is included but unused; `postinstall` runs `prisma generate`
  so the build never breaks.
- Node 18+ recommended for local dev; Vercel handles the runtime automatically.
