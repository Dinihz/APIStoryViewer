export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.error("fetchData: ", error instanceof Error ? error.message : error);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map