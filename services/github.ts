import { profile } from "@/constants/portfolio";
import type { GitHubPayload, Repo } from "@/types/portfolio";

export async function getGitHubPayload(): Promise<GitHubPayload> {
  const [profileResponse, repoResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${profile.githubUser}`, {
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`, {
      next: { revalidate: 3600 },
    }),
  ]);

  if (!profileResponse.ok || !repoResponse.ok) {
    throw new Error("GitHub API unavailable");
  }

  const user = (await profileResponse.json()) as GitHubPayload["profile"];
  const repos = (await repoResponse.json()) as Repo[];

  return {
    profile: {
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
    },
    repos,
  };
}
