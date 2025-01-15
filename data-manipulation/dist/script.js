import fetchData from "./fetchData.js";
async function hadleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    console.log(data);
    if (data) {
        data.forEach((item) => {
            console.log(item["Forma de Pagamento"]);
        });
    }
    console.log("codigo continuou");
}
hadleData();
//# sourceMappingURL=script.js.map