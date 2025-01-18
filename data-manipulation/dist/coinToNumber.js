export default function coinToNumber(coin) {
    const number = Number(coin.replaceAll(".", "").replace(",", "."));
    console.log(`Converting coin: ${coin} to number: ${number}`);
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=coinToNumber.js.map