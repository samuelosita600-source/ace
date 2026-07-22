"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Binary,
  Bot,
  Cable,
  Command,
  FileCode2,
  GitBranch,
  Layers3,
  Play,
  Radar,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { traeAgentWiki } from "@/lib/trae-agent-wiki";

const sectionIcons = {
  overview: Radar,
  architecture: Layers3,
  modules: FileCode2,
  classes: Binary,
  functions: Command,
  dependencies: Cable,
  "runtime-flow": GitBranch,
  runbook: Play,
  testing: Sparkles,
  caveats: Bot,
} as const;

function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function TraeAgentWikiShell() {
  const [message, setMessage] = useState(
    "Summarize how BaseAgent, TraeAgent, and the tool system work together.",
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const metrics = useMemo(
    () => [
      { label: "Packages", value: "7+" },
      { label: "Key Layers", value: "6" },
      { label: "Built-in Tools", value: "6+" },
      { label: "Primary Entry", value: "trae-cli" },
    ],
    [],
  );

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          userId: "wiki-operator",
        }),
      });

      const data = await res.json();
      setResponse(data.response ?? data.message ?? "No response returned.");
    } catch (error) {
      console.error(error);
      setResponse("ACE could not answer right now. Check provider setup and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(73,104,196,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(73,104,196,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />
      <div className="pointer-events-none absolute left-1/2 top-[-14rem] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] gap-6 px-4 py-4 lg:px-6">
        <aside className="hidden w-[290px] shrink-0 lg:block">
          <Panel className="sticky top-4 flex h-[calc(100vh-2rem)] flex-col p-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.28)]">
                <Bot className="size-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                  Code Wiki
                </p>
                <h1 className="text-lg font-semibold text-white">Trae Agent</h1>
              </div>
            </div>

            <div className="space-y-2">
              {traeAgentWiki.nav.map((item) => {
                const Icon =
                  sectionIcons[item.id as keyof typeof sectionIcons] ?? FileCode2;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:bg-cyan-400/[0.08] hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 text-cyan-200/80" />
                      {item.label}
                    </span>
                    <ArrowRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>

            <div className="mt-auto rounded-3xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Source
              </p>
              <a
                className="mt-3 block text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                href={traeAgentWiki.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                github.com/bytedance/trae-agent
              </a>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Built as a styled documentation cockpit inside the ACE workspace.
              </p>
            </div>
          </Panel>
        </aside>

        <section className="min-w-0 flex-1">
          <Panel className="overflow-hidden">
            <div className="grid gap-6 border-b border-white/10 px-5 py-5 lg:grid-cols-[1.35fr_0.85fr] lg:px-8 lg:py-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
                    Repository Intelligence
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    Python CLI Agent
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    Docs + UI Refresh
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white lg:text-6xl">
                    {traeAgentWiki.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-slate-300 lg:text-lg">
                    {traeAgentWiki.subtitle}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {traeAgentWiki.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-black/25 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-cyan-300/20 bg-[#07101f] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_0_50px_rgba(34,211,238,0.14)]">
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundImage: `linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px), url(${traeAgentWiki.heroImage})`,
                    backgroundSize: "34px 34px, 34px 34px, cover",
                    backgroundPosition: "center, center, center",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,8,22,0.66)_72%,rgba(5,8,22,0.95)_100%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                        Visual Layer
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                        Inspired by your dark assistant references, but pushed into
                        a richer neon-and-glass documentation workspace.
                      </p>
                    </div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                      Styled UI
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-black/35 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.16)]">
                      <span className="inline-block size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                      Architectural Control Surface
                    </div>
                    <p className="max-w-sm text-2xl font-semibold text-white">
                      A documentation cockpit that feels more premium, cinematic,
                      and system-driven.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 px-5 py-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-8">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Dependency Spine
                </p>
                <div className="mt-4 space-y-3">
                  {traeAgentWiki.dependencyLanes.map((lane) => (
                    <div
                      key={lane}
                      className="rounded-2xl border border-cyan-300/10 bg-cyan-400/[0.05] px-4 py-3 text-sm leading-6 text-slate-200"
                    >
                      {lane}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {traeAgentWiki.sections.map((section) => {
                const Icon =
                  sectionIcons[section.id as keyof typeof sectionIcons] ?? FileCode2;

                return (
                  <Panel key={section.id} className="scroll-mt-6 p-6 lg:p-8" id={section.id}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
                            <Icon className="size-5 text-cyan-200" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                              Section
                            </p>
                            <h3 className="text-2xl font-semibold text-white">
                              {section.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                          {section.summary}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4">
                      {section.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-3xl border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-slate-200"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>

                    {section.codeRefs?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {section.codeRefs.map((ref) => (
                          <span
                            key={ref}
                            className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] px-3 py-1 text-xs text-cyan-100"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </Panel>
                );
              })}
            </div>

            <div className="space-y-6">
              <Panel className="sticky top-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
                    <Command className="size-5 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Run Guide
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      Quick Start Commands
                    </h3>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-[#020617]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="size-2 rounded-full bg-rose-400" />
                    <span className="size-2 rounded-full bg-amber-300" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                      bootstrap.sh
                    </span>
                  </div>
                  <div className="space-y-2 px-4 py-4 font-mono text-sm text-slate-200">
                    {traeAgentWiki.runCommands.map((command) => (
                      <div key={command} className="rounded-2xl bg-white/[0.03] px-3 py-2">
                        <span className="mr-3 text-cyan-300">$</span>
                        {command}
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>

              <Panel className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
                    <Bot className="size-5 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Ask ACE
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      Live Assistant Panel
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  This stays wired to the existing `/api/chat` route, so the new UI
                  remains functional instead of becoming a static mock.
                </p>

                <textarea
                  className="mt-5 min-h-32 w-full rounded-[24px] border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/35 focus:ring-2 focus:ring-cyan-300/20"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Ask about the repository architecture, tool flow, or setup..."
                />

                <div className="mt-4 flex items-center gap-3">
                  <Button
                    size="lg"
                    className="rounded-2xl bg-cyan-300 px-5 text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.28)] hover:bg-cyan-200"
                    onClick={sendMessage}
                    disabled={loading}
                  >
                    {loading ? "Analyzing..." : "Send To ACE"}
                  </Button>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Provider-backed response
                  </p>
                </div>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Response
                  </p>
                  <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-200">
                    {response || "ACE is ready for repository questions."}
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
