// Absence of value
// Primitive types: undefined -> "undefined"    null -> "object"
// undefined == null -> true
// undefined === null -> false

// Undefined examples

// Declared variable without assingned value
let i;
console.log(i);

// A property that dosn't exist in an object
const obj = {};
console.log(obj.name);

// A return from function without a value
const fn = () => {
    return;
};
console.log(fn());

// Function parameters that are not provided with an argument
const fn2 = (num) => {
    console.log(num);
};
fn2();
