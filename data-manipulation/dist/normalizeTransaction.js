import coinToNumber from "./coinToNumber.js";
import stringToDate from "./stringToDate.js";
function normalizeStatus(status) {
    const validStatuses = [
        "Paga",
        "Recusada pela operadora de cartão",
        "Aguardando pagamento",
        "Estornada",
    ];
    if (validStatuses.includes(status)) {
        return status;
    }
    throw new Error(`Status inválido: ${status}`);
}
export default function normalizeTransaction(transaction) {
    const normalizedTransaction = {
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
    console.log("Normalized Transaction:", normalizedTransaction);
    return normalizedTransaction;
}
//# sourceMappingURL=normalizeTransaction.js.map