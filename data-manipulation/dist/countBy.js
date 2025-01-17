export default function countBy(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] ?? 0) + 1;
        return acc;
    }, {});
}
//# sourceMappingURL=countBy.js.map