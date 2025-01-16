import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    console.log(transactions);
    fillTable(transactions);
}
function fillTable(transactions) {
    const table = document.querySelector("#transactions tbody");
    if (!table)
        return;
    transactions.forEach((transaction) => {
        table.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>${transaction.coin}</td>
        <td>${transaction.payment}</td>
        <td>${transaction.status}</td>
      </tr>
      `;
    });
}
handleData();
//# sourceMappingURL=script.js.map