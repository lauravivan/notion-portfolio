export async function getRepoLanguages(
  languages_url: string
): Promise<ResponseOK | ResponseFail> {
  if (languages_url) {
    try {
      const res = await fetch(languages_url);

      if (res.ok) {
        const resJson = await res.json();
        return resJson;
      }

      return {
        ok: res.ok,
        error: "Não foi possível buscar linguagens do repositório",
      };
    } catch {}
  }

  return {
    ok: false,
    error: "Não foi possível buscar linguagens do repositório",
  };
}
