const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const output = [];

let index;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= target) {
        index = i;
        break;
    }
}

if (index) {
    array.splice(index, array.length - index);
}

array.forEach((n1, i1) => {
    array.forEach((n2, i2) => {
        if (i1 !== i2 && n1 + n2 === target) {
            if (output.indexOf(n1) === -1) {
                output.push(n1);
            }
            if (output.indexOf(n2) === -1) {
                output.push(n2);
            }
        }
    });
});

console.log(output);
