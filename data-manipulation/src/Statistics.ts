import countBy, { CountList } from "./count-by.js";
import { Transaction, TransactionAPI } from "./normalize-transaction.js";

type TransactionValue = Transaction & { value: number };

function filterValue(
  transaction: Transaction,
): transaction is TransactionValue {
  return transaction.value !== null;
}

export default class Statistics {
  private transactions: Transaction[];
  total: number;
  payment: CountList;
  status: CountList;
  week: CountList;
  bestDay: [string, number];

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
    this.week = this.setWeek();
    this.bestDay = this.setBestDay();
  }

  private setTotal(): number {
    const total = this.transactions
      .filter((transaction) => transaction.value != null)
      .reduce((acc, item) => acc + (item.value || 0), 0);
    console.log("Total calculated:", total);
    return total;
  }

  private setPayment(): CountList {
    return countBy(this.transactions.map(({ payment }) => payment));
  }

  private setStatus(): CountList {
    return countBy(this.transactions.map(({ status }) => status));
  }

  private setWeek(): CountList {
    const weekDays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const week: CountList = weekDays.reduce(
      (acc, day) => ({ ...acc, [day]: 0 }),
      {},
    );

    this.transactions.forEach(({ date }) => {
      const day = weekDays[date.getDay()];
      week[day] += 1;
    });

    return week;
  }

  private setBestDay(): [string, number] {
    return Object.entries(this.week).sort((a, b) => b[1] - a[1])[0];
  }
}
