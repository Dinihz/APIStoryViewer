import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
import Statistics from "./Statistics.js";
import { CountList } from "./countBy.js";

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?",
  );
  if (!data) return;
  const transactions = data.map(normalizeTransaction);
  fillTable(transactions);
  fillStatistics(transactions);
}

function fillList(list: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(list).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
    });
  }
}

function fillStatistics(transactions: Transaction[]): void {
  const data = new Statistics(transactions);

  fillList(data.payment, "payment");
  fillList(data.status, "status");

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    const total = Number(data.total);
    if (!isNaN(total)) {
      totalElement.innerHTML = total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      console.error("Total is not a number:", data.total);
    }
  }

  const dayElement = document.querySelector<HTMLElement>("#dia span");
  if (dayElement) {
    dayElement.innerHTML = data.bestDay[0];
  }
}

function fillTable(transactions: Transaction[]): void {
  const table = document.querySelector("#transacoes tbody");
  if (!table) return;
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
