"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GitFork, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { GitHubPayload } from "@/types/portfolio";

export function GitHubCommand() {
  const [data, setData] = useState<GitHubPayload | null>(null);
  const graph = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/github")
      .then((response) => response.json())
      .then((payload: GitHubPayload) => {
        if (mounted) setData(payload);
      })
      .catch(() => {
        if (mounted) setData(null);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useGSAP(
    () => {
      gsap.from(".commit-node", {
        opacity: 0,
        scale: 0,
        stagger: 0.01,
        duration: 0.35,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: graph.current,
          start: "top 80%",
        },
      });
    },
    { scope: graph, dependencies: [data] },
  );

  const repos = data?.repos.length ? data.repos : [];

  return (
    <section id="github" className="px-4 py-24" aria-labelledby="github-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">GitHub Command Center</p>
        <h2 id="github-title" className="section-title">
          Live repository signal with simulated commit telemetry.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="terminal-card">
            <p className="font-mono text-cyber-green">$ github.fetch --user jegannathan-mp</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Metric label="Followers" value={data?.profile.followers ?? "..."} />
              <Metric label="Repos" value={data?.profile.public_repos ?? "..."} />
              <Metric label="Following" value={data?.profile.following ?? "..."} />
            </div>
            <div ref={graph} className="mt-8 grid grid-cols-12 gap-1">
              {Array.from({ length: 96 }).map((_, index) => (
                <span
                  key={index}
                  className="commit-node aspect-square bg-cyber-green/20"
                  style={{
                    opacity: index % 5 === 0 ? 1 : index % 3 === 0 ? 0.72 : 0.35,
                    boxShadow: index % 11 === 0 ? "0 0 18px rgba(57,255,20,.65)" : "none",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(repos.length ? repos : fallbackRepos).slice(0, 6).map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
                <h3 className="font-mono text-lg font-black uppercase text-white">{repo.name}</h3>
                <p className="mt-4 min-h-16 text-sm leading-6 text-white/60">
                  {repo.description ?? "Public repository signal from the GitHub API."}
                </p>
                <div className="mt-5 flex items-center gap-4 font-mono text-xs text-white/60">
                  <span className="text-cyber-cyan">{repo.language ?? "Code"}</span>
                  <span className="inline-flex items-center gap-1">
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-cyber-cyan/20 bg-white/[0.03] p-4">
      <p className="font-mono text-3xl font-black text-white">{value}</p>
      <p className="mt-1 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-cyber-cyan">
        {label}
      </p>
    </div>
  );
}

const fallbackRepos = [
  {
    id: 1,
    name: "Signal loading",
    html_url: "https://github.com/jegannathan-mp",
    description: "GitHub data will populate here when the API responds.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
];
