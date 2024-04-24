// TODO: axios here

export function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export async function post(url: string, body: any) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
}
