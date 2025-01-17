import countBy from "./countBy.js";
function filterValue(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    week;
    bestDay;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
    }
    setTotal() {
        const filted = this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.value;
        }, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
    setWeek() {
        const week = {
            ["Domingo"]: 0,
            ["Segunda"]: 0,
            ["Terça"]: 0,
            ["Quarta"]: 0,
            ["Quinta"]: 0,
            ["Sexta"]: 0,
            ["Sabado"]: 0,
        };
        for (let i = 0; i < this.transactions.length; i++) {
            const day = this.transactions[i].date.getDay();
            if (day === 0)
                week["Domingo"] += 1;
            if (day === 1)
                week["Segunda"] += 1;
            if (day === 2)
                week["Terça"] += 1;
            if (day === 3)
                week["Quarta"] += 1;
            if (day === 4)
                week["Quinta"] += 1;
            if (day === 5)
                week["Sexta"] += 1;
            if (day === 6)
                week["Sabado"] += 1;
        }
        return week;
    }
    setBestDay() {
        return Object.entries(this.week).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=Statistics.js.map