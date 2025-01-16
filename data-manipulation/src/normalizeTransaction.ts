import coinToNumber from "./coinToNumber.js";
import stringToDate from "./stringToDate.js";

declare global {
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

  interface Transaction {
    name: string;
    id: number;
    date: Date;
    status: StatusTransaction;
    email: string;
    coin: string;
    value: number | null;
    payment: PaymentTransaction;
    new: boolean;
  }
}

function normalizeStatus(status: string): StatusTransaction {
  switch (status) {
    case "Paga":
    case "Recusada pela operadora de cartão":
    case "Aguardando pagamento":
    case "Estornada":
      return status;
    default:
      throw new Error(`Status inválido: ${status}`);
  }
}

export default function normalizeTransaction(
  transaction: TransactionAPI,
): Transaction {
  return {
    name: transaction.Nome,
    id: transaction.ID,
    date: stringToDate(transaction.Data),
    status: normalizeStatus(transaction.Status),
    email: transaction.Email,
    coin: transaction["Valor (R$)"],
    value: coinToNumber(transaction["Valor (R$)"]),
    payment: transaction["Forma de Pagamento"],
    new: Boolean(transaction["Cliente Novo"]),
  };
}
