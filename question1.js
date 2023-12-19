const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const obj = {};
for (const c of array) {
    obj[c] = (obj[c] || 0) + 1;
}
console.log(obj)
const keys = Object.keys(obj).toSorted((a, b) => a - b);
console.log(keys)
const frequency = keys.map((key) => {
    return obj[key] > 1 ? Array(obj[key]).fill(key) : key;
});
console.log(frequency)