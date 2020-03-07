function findElement(arr, func) {
    let num = 0;
    arr.forEach(function(num) {
        return num % 2 === 0;
    });
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

const array = ["asdf", "frd", "gre"];

const data = array.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(data);
