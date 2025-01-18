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
        const total = this.transactions
            .filter((transaction) => transaction.value != null)
            .reduce((acc, item) => acc + (item.value || 0), 0);
        console.log("Total calculated:", total);
        return total;
    }
    setPayment() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
    setWeek() {
        const weekDays = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
        ];
        const week = weekDays.reduce((acc, day) => ({ ...acc, [day]: 0 }), {});
        this.transactions.forEach(({ date }) => {
            const day = weekDays[date.getDay()];
            week[day] += 1;
        });
        return week;
    }
    setBestDay() {
        return Object.entries(this.week).sort((a, b) => b[1] - a[1])[0];
    }
}
//# sourceMappingURL=Statistics.js.map