# ROCm Migration Copilot

**The AI agent that frees GPU code from CUDA lock-in.**

An agentic porting tool that converts CUDA codebases to AMD HIP/ROCm automatically —
analyzing, translating, building, testing, and tuning GPU code on real MI300X hardware.

Built by **Team ROCm Rangers** for the [lablab × AMD AI Academy Challenge](https://lablab.ai/ai-hackathons/amd-lablab-ai-academy-challenge)
(Sept 1 → Dec 1, 2026).

## The five-stage pipeline

| Stage | What happens |
|---|---|
| 01 Analyze | AST parsing builds a kernel inventory + dependency graph; flags what `hipify-perl` misses |
| 02 Port | LLM agent translates CUDA APIs, kernels, and memory management to HIP with repo-wide context |
| 03 Build & Test | Automated compile + test loop on real AMD GPUs; failures feed back to the agent |
| 04 Tune | Performance advisor driven by Omniperf / Omnitrace profiles |
| 05 Report | Every change logged with a confidence score and human-review checklist |

## Media

**Landing page**

<p align="center">
  <img src="media/screenshots/landing_hero.png" alt="Landing page — hero" width="640">
</p>
<p align="center">
  <img src="media/screenshots/landing_pipeline.png" alt="Landing page — pipeline" width="640">
</p>
<p align="center">
  <img src="media/screenshots/landing_footer.png" alt="Landing page — footer" width="640">
</p>

**Pitch deck** — cover frame below; one still per slide in [`media/deck_frames/`](media/deck_frames/).

<p align="center">
  <img src="media/deck_frames/slide_01.png" alt="Deck — cover slide" width="640">
</p>

## Tech stack

ROCm · HIP · AMD Developer Cloud (MI300X) · Python · LangGraph · PyTorch ·
vLLM · RAG over ROCm docs · LibClang / Tree-sitter · Next.js (this landing page)

## Repository layout

```
├── src/            # Next.js 16 landing page (App Router + Tailwind 4)
├── public/         # static assets (architecture diagram)
├── media/          # visual kit (screenshots + deck stills)
│   ├── screenshots/    # landing page captures — hero / pipeline / footer
│   └── deck_frames/    # slide_01–10 stills rendered from the pitch deck
├── prisma/         # ORM scaffolding (unused by the landing page)
└── submission/     # hackathon submission kit
    ├── ROCm_Migration_Copilot_Cover_16x9.png     # 2560×1440 cover image
    ├── ROCm_Migration_Copilot_Video.mp4          # 2:42 narrated pitch video (1080p)
    ├── ROCm_Migration_Copilot_Pitch_Deck.pdf     # 10-slide deck (PDF)
    ├── ROCm_Migration_Copilot_Pitch_Deck.pptx    # 10-slide deck (editable PPTX)
    ├── ROCm_Migration_Copilot_Project_Concept.pdf# 8-page concept document
    ├── team_description.txt                      # 992-char team page description
    └── submission_form_fields.txt                # form copy-paste kit
```

## Run locally

```bash
bun install        # or npm install
bun run dev        # http://localhost:3000
```

## Deploy

See [DEPLOY.md](DEPLOY.md) for GitHub push + Vercel deployment in under 5 minutes.

---

Team ROCm Rangers · Open source from day one · Find us on the lablab Discord
