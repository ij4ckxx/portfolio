import { getGitHubPayload } from "@/services/github";

export async function GET(request: Request) {
  const userName = new URL(request.url).searchParams.get("user") ?? undefined;
  const safeUserName = userName?.match(/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i)?.[0];

  try {
    return Response.json(await getGitHubPayload(safeUserName));
  } catch {
    return Response.json({
      profile: { followers: 0, following: 0, public_repos: 0 },
      repos: [],
    });
  }
}
