export async function getRepoLanguages(
  languages_url: string
): Promise<{ [x: string]: number }> {
  if (languages_url) {
    const res = await fetch(languages_url);

    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    }

    throw Error("Não foi possível buscar linguagens do repositório");
  }

  return {};
}
