import fetchData from "./fetchData.js";

type PaymentTransaction = "Boleto" | "Cartão de Crédito";
type StatusTransaction =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

interface TransactionAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: string;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: PaymentTransaction;
  ["Cliente Novo"]: number;
}

async function hadleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  console.log(data);
  if (data) {
    data.forEach((item) => {
      console.log(item["Forma de Pagamento"]);
    });
  }
  console.log("codigo continuou");
}

hadleData();
