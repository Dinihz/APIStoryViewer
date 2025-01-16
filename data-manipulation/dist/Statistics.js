function filterValue(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        const filted = this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
        return filted;
    }
}
//# sourceMappingURL=Statistics.js.map