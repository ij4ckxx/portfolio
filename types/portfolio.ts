export type Project = {
  name: string;
  system: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type Mission = {
  id: string;
  title: string;
  detail: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  detail: string;
  href?: string;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export type GitHubPayload = {
  profile: {
    followers: number;
    following: number;
    public_repos: number;
  };
  repos: Repo[];
};
