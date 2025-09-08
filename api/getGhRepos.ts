export async function getGithubRepos(): Promise<ResponseOK | ResponseFail> {
  try {
    const res = await fetch("https://api.github.com/users/lauravivan/repos", {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (res.ok) {
      const resJSON = await res.json();

      return {
        ok: res.ok,
        res: resJSON,
      };
    }

    return {
      ok: res.ok,
      error: "Erro ao buscar repositórios do github",
    };
  } catch {}

  return {
    ok: false,
    error: "Erro ao buscar repositórios do github",
  };
}
