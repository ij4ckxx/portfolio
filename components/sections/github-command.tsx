"use client";

import { GitFork, Star } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { GitHubPayload } from "@/types/portfolio";

const githubAccounts = [
  {
    userName: "jegannathan-mp",
    url: "https://github.com/jegannathan-mp",
  },
  {
    userName: "ij4ckxx",
    url: "https://github.com/ij4ckxx",
  },
];

export function GitHubCommand() {
  return (
    <section id="github" className="px-4 py-14" aria-labelledby="github-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">GitHub Command Center</p>
        <h2 id="github-title" className="section-title">
          Live repository signal with simulated commit telemetry.
        </h2>
        <div className="mt-8 grid gap-6">
          {githubAccounts.map((account) => (
            <GitHubAccountPanel key={account.userName} {...account} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubAccountPanel({ userName, url }: { userName: string; url: string }) {
  const [data, setData] = useState<GitHubPayload | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch(`/api/github?user=${encodeURIComponent(userName)}`)
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
  }, [userName]);

  const repos = data?.repos.length ? data.repos : getFallbackRepos(userName, url);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass-mobile-card terminal-card">
        <p className="font-mono text-cyber-cyan">$ github.fetch --user {userName}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-mono text-xs font-black uppercase tracking-[0.16em] text-cyber-cyan transition hover:text-cyber-green"
        >
          {url}
        </a>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <Metric label="Followers" value={data?.profile.followers ?? "..."} />
          <Metric label="Repos" value={data?.profile.public_repos ?? "..."} />
          <Metric label="Following" value={data?.profile.following ?? "..."} />
        </div>
        <GitHubSignal userName={userName} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.slice(0, 6).map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="glass-mobile-card repo-card">
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
  );
}

function GitHubSignal({ userName }: { userName: string }) {
  return (
    <div className="github-signal mt-8" aria-label={`${userName} animated GitHub activity signal`}>
      <div className="github-signal-core">
        <span>{userName.slice(0, 2).toUpperCase()}</span>
      </div>
      <span className="github-orbit github-orbit-one" />
      <span className="github-orbit github-orbit-two" />
      <span className="github-orbit github-orbit-three" />
      <div className="github-pulse-lines" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 90}ms`, height: `${28 + (index % 5) * 10}%` }}
          />
        ))}
      </div>
      <div className="github-signal-particles" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                "--particle-angle": `${index * 36}deg`,
                "--particle-delay": `${index * 140}ms`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
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

function getFallbackRepos(userName: string, url: string) {
  return [
    {
      id: userName,
      name: `${userName} signal loading`,
      html_url: url,
      description: "GitHub data will populate here when the API responds.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
    },
  ];
}
