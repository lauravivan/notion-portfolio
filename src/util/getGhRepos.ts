export async function getGithubRepos(): Promise<GhRepo[]> {
  const res = await fetch("https://api.github.com/users/lauravivan/repos");

  if (res.ok) {
    return await res.json();
  }

  throw Error("Ocorreu um erro ao tentar buscar os repositórios");
}
