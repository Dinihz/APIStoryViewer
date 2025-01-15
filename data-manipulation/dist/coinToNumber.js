export default function coinToNumber(coin) {
    const number = Number(coin.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=coinToNumber.js.map