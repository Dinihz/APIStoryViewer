import coinToNumber from "./coinToNumber.js";
import stringToDate from "./stringToDate.js";
function normalizeStatus(status) {
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
export default function normalizeTransaction(transaction) {
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
//# sourceMappingURL=normalizeTransaction.js.map