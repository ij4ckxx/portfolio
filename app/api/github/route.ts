import { getGitHubPayload } from "@/services/github";

export async function GET() {
  try {
    return Response.json(await getGitHubPayload());
  } catch {
    return Response.json({
      profile: { followers: 0, following: 0, public_repos: 0 },
      repos: [],
    });
  }
}
