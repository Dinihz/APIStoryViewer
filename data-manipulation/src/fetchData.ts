export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(
      "fetchData: ",
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}
