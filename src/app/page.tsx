const GITHUB_URL = "https://github.com/rocm-rangers/rocm-migration-copilot";

const STAGES = [
  { n: "01", t: "Analyze", d: "AST parsing builds a kernel inventory and dependency graph; flags the long tail that hipify-perl misses." },
  { n: "02", t: "Port", d: "LLM agent translates CUDA APIs, kernels, and memory management to HIP with repo-wide context." },
  { n: "03", t: "Build & Test", d: "Automated compile and test loop on real AMD GPUs; every failure feeds back to the agent." },
  { n: "04", t: "Tune", d: "Performance advisor driven by Omniperf and Omnitrace profiles of the migrated code." },
  { n: "05", t: "Report", d: "Every change logged with a confidence score and a human-review checklist." },
];

const ARCH_FEATURES = [
  { icon: "brain", t: "Agent core", d: "LLM with tool calling and RAG over official ROCm documentation." },
  { icon: "scan", t: "AST precision", d: "LibClang and Tree-sitter parse CUDA for surgical, structure-aware edits." },
  { icon: "refresh", t: "Self-healing loop", d: "Compiler and test output drive the next fix — no human in the loop." },
  { icon: "workflow", t: "Orchestration", d: "Python + LangGraph, running on ROCm-enabled MI300X cloud instances." },
];

const STACK = [
  { k: "STACK / 01", t: "ROCm", d: "The open GPU software stack. Every layer inspectable, every commit public." },
  { k: "STACK / 02", t: "HIP", d: "Portable runtime and kernel language — CUDA's structure, AMD's openness." },
  { k: "STACK / 03", t: "AMD Developer Cloud", d: "MI300X instances through the challenge's $100 developer credits. No hardware required." },
  { k: "STACK / 04", t: "Omniperf + Omnitrace", d: "First-class profiling feeds the tuning stage with real kernel-level data." },
];

const ROADMAP = [
  { m: "SEP", t: "Core pipeline", d: "Analysis + HIP porting stages live; public repo open with weekly builds." },
  { m: "OCT", t: "Hardware-in-the-loop", d: "Build–test–tune loop running on MI300X; first end-to-end port demo." },
  { m: "NOV", t: "Hardening", d: "Bigger real-world repos, benchmark suite, migration report 2.0." },
  { m: "DEC", t: "1.0 release", d: "Docs, public video demo, launch post, final challenge submission.", hot: true },
];

const XP = [
  { v: "+250", l: "Built on AMD technology" },
  { v: "+200", l: "Complete working project" },
  { v: "+200", l: "Open source from day one" },
  { v: "3×100", l: "Monthly milestone drops" },
  { v: "+150", l: "Public demo + docs" },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#a82727]">
      <span className="inline-block w-[22px] h-[2px] bg-[#a82727]" />
      {children}
    </div>
  );
}

function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-md bg-[#a82727] text-white font-mono font-bold select-none"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden
    >
      R
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#16161A] scroll-smooth">
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-50 border-b border-[#e6e4e0] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5" aria-label="Main">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark />
            <span className="font-semibold tracking-tight text-[15px]">
              ROCm Migration <span className="text-[#a82727]">Copilot</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[13px] text-[#5c5c66]">
            <a href="#problem" className="hover:text-[#16161A] transition-colors">Problem</a>
            <a href="#pipeline" className="hover:text-[#16161A] transition-colors">Pipeline</a>
            <a href="#stack" className="hover:text-[#16161A] transition-colors">AMD Stack</a>
            <a href="#roadmap" className="hover:text-[#16161A] transition-colors">Roadmap</a>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#16161A] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#a82727]"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            GitHub
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ============ HERO ============ */}
        <section
          className="relative overflow-hidden border-b border-[#e6e4e0]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(22,22,26,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,22,26,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#a82727]" aria-hidden />
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Kicker>AMD AI Academy Challenge · Sept 1 → Dec 1 2026</Kicker>
            <h1 className="mt-6 max-w-4xl text-[42px] leading-[1.04] md:text-[72px] font-bold tracking-tight">
              Free your GPU code
              <br />
              from <span className="text-[#a82727]">CUDA lock-in.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5c5c66]">
              ROCm Migration Copilot is an AI agent that ports CUDA codebases to AMD HIP/ROCm
              automatically — analyzing, translating, building, testing, and tuning GPU code on
              real MI300X hardware. One command in; a verified, documented HIP codebase out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#a82727] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#7c1d1d]"
              >
                View on GitHub
              </a>
              <a
                href="#pipeline"
                className="rounded-md border border-[#16161A] px-6 py-3 text-[14px] font-semibold transition-colors hover:bg-[#16161A] hover:text-white"
              >
                See how it works
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-2.5 font-mono text-[11px]">
              {[
                ["01", "Analyze"], ["02", "Port"], ["03", "Build & Test"], ["04", "Tune"], ["05", "Report"],
              ].map(([n, t], i) => (
                <span key={n} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-[#a82727] font-semibold">→</span>}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e4e0] bg-white px-3.5 py-1.5 text-[#5c5c66]">
                    <b className="text-[#a82727] font-semibold">{n}</b> {t}
                  </span>
                </span>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[#9b9ba4]">
              <span>Team ROCm Rangers</span>
              <span>Open source · day one</span>
              <span>AMD Developer Cloud · MI300X</span>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM ============ */}
        <section id="problem" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Kicker>The problem</Kicker>
          <h2 className="mt-5 text-3xl md:text-[40px] font-bold tracking-tight max-w-2xl">
            GPU code is trapped behind CUDA.
          </h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-[#5c5c66]">
            Millions of lines of production GPU code — from HPC simulations to AI inference
            servers — compile against one vendor&apos;s proprietary stack. Moving them to AMD&apos;s
            open ROCm ecosystem means weeks of manual rewriting by engineers who know both
            platforms. Almost nobody does. Syntax-only converters can&apos;t reason about kernels,
            memory models, or build systems — and nothing verifies the result on real hardware.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { v: "2–6 weeks", l: "typical manual port of a mid-size CUDA repository" },
              { v: "1 vendor", l: "that every line of production GPU code answers to today" },
              { v: "0 verification", l: "in today's syntax-only conversion tools — no build, no test" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-[#e6e4e0] bg-[#f7f6f4] p-6">
                <div className="font-mono text-[34px] font-bold leading-none text-[#a82727]">{s.v}</div>
                <div className="mt-3 text-[13px] leading-relaxed text-[#5c5c66]">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ PIPELINE ============ */}
        <section id="pipeline" className="border-y border-[#e6e4e0] bg-[#f7f6f4]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <Kicker>How it works</Kicker>
            <h2 className="mt-5 text-3xl md:text-[40px] font-bold tracking-tight">
              A five-stage agentic pipeline.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {STAGES.map((s) => (
                <div key={s.n} className="rounded-xl border border-[#e6e4e0] bg-white p-5 transition-shadow hover:shadow-md">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-[#a82727] font-mono text-[13px] font-semibold text-[#a82727]">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#5c5c66]">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-mono text-[11px] tracking-[0.14em] uppercase text-[#9b9ba4]">
              The build–test–fix loop runs autonomously until the port compiles and passes tests.
            </p>
          </div>
        </section>

        {/* ============ ARCHITECTURE ============ */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-xl border border-[#e6e4e0] bg-white p-4 shadow-sm">
              <img
                src="/architecture_diagram.png"
                alt="ROCm Migration Copilot architecture: CUDA repository in, iterative build-fix loop with migration agent, ROCm sandbox, numerical verifier, benchmark suite and migration report out"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <Kicker>Architecture</Kicker>
              <h2 className="mt-5 text-3xl font-bold tracking-tight">Under the hood.</h2>
              <div className="mt-7 flex flex-col gap-6">
                {ARCH_FEATURES.map((f) => (
                  <div key={f.t} className="flex gap-4">
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-md border border-[#a82727] text-[#a82727]">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-semibold tracking-tight">{f.t}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#5c5c66]">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ AMD STACK ============ */}
        <section id="stack" className="border-y border-[#e6e4e0] bg-[#f7f6f4]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <Kicker>Technology</Kicker>
            <h2 className="mt-5 text-3xl md:text-[40px] font-bold tracking-tight">AMD, end to end.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STACK.map((s) => (
                <div key={s.k} className="rounded-xl border border-[#e6e4e0] bg-white p-6">
                  <div className="font-mono text-[10px] tracking-[0.16em] text-[#9b9ba4]">{s.k}</div>
                  <h3 className="mt-3 text-[17px] font-semibold tracking-tight text-[#a82727]">{s.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5c5c66]">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-[#16161A] p-8 text-center">
              <p className="mx-auto max-w-3xl text-[19px] md:text-[21px] font-semibold leading-snug text-white">
                Runtime, cloud, profilers, docs — every layer of this project is AMD technology.{" "}
                <span className="text-[#e46060]">That is the point.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ============ ROADMAP ============ */}
        <section id="roadmap" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Kicker>Execution plan</Kicker>
          <h2 className="mt-5 text-3xl md:text-[40px] font-bold tracking-tight">
            September → December 2026.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((r) => (
              <div
                key={r.m}
                className={`relative rounded-xl border p-6 ${
                  r.hot ? "border-[#a82727] bg-[#fbf1f0]" : "border-[#e6e4e0] bg-white"
                }`}
              >
                <div className="font-mono text-[12px] font-semibold tracking-[0.18em] text-[#a82727]">
                  {r.m}
                </div>
                <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{r.t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5c5c66]">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ XP ============ */}
        <section className="border-y border-[#e6e4e0] bg-[#f7f6f4]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <Kicker>Scoring</Kicker>
            <h2 className="mt-5 text-3xl md:text-[40px] font-bold tracking-tight">
              Playing the scoreboard on purpose.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5c5c66]">
              The AI Academy Challenge awards XP per category — this project is shaped to hit the
              highest-weight ones head-on.
            </p>
            <div className="mt-10 grid gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {XP.map((x) => (
                  <div key={x.l} className="rounded-xl border border-[#e6e4e0] bg-white p-5 text-center">
                    <div className="font-mono text-[26px] font-bold text-[#a82727]">{x.v}</div>
                    <div className="mt-2 text-[11.5px] leading-snug text-[#5c5c66]">{x.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center rounded-xl bg-[#16161A] p-7 text-center">
                <div className="font-mono text-[44px] font-bold leading-none text-white">~2,475</div>
                <div className="mt-2 font-mono text-[10.5px] tracking-[0.16em] text-[#9b9ba4] uppercase">
                  XP planned through December
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-[#c9c9cf]">
                  Individual scoring — one builder, full accountability, zero coordination tax.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative overflow-hidden bg-[#16161A]">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 text-center">
            <div className="mx-auto mb-8 h-[3px] w-24 bg-[#a82727]" aria-hidden />
            <h2 className="mx-auto max-w-3xl text-3xl md:text-[52px] font-bold leading-[1.08] tracking-tight text-white">
              Give every CUDA codebase an escape hatch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#9b9ba4]">
              ROCm Migration Copilot — open source from day one, verified on MI300X. Built by Team
              ROCm Rangers for the lablab × AMD AI Academy Challenge.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#a82727] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#e46060]"
              >
                View on GitHub
              </a>
              <a
                href="#top"
                className="rounded-md border border-[#5c5c66] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white"
              >
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mt-auto border-t border-[#2a2a30] bg-[#16161A]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 font-mono text-[10.5px] tracking-[0.14em] uppercase text-[#9b9ba4] md:flex-row">
          <span className="flex items-center gap-2.5">
            <LogoMark size={22} /> Team ROCm Rangers
          </span>
          <span>lablab.ai × AMD · AI Academy Challenge</span>
          <span>Sept 1 → Dec 1 2026</span>
        </div>
      </footer>
    </div>
  );
}
