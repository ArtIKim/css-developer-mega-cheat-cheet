// variables and functin declarations are hoisted

// functin invocation
declaration(5, 5);
expression(5, 5);

// function declaration
function declaration(a, b) {
    console.log(a + b);
}

// function expression (must be declared before invocation)
const expression = (a, b) => {
    console.log(a + b);
};
