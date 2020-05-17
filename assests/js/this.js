// if called in the form Obj.fn()
// "this" === obj
// else
// "this" === global

// function declaration

// ES5
function myFn() {
    console.log(this === window); // true
}

myFn();

// objects
var myObject = {
    myFn2: function () {
        console.log(this === myObject); // true
    },
};

myObject.myFn2();

var myFn2 = myObject.myFn2;
myFn2(); // false

var myObject2 = {
    myFn3: function () {
        console.log(this === myObject2); // true
        setTimeout(function () {
            console.log(this === myObject2); // false
            console.log(this === window); // true
        }, 0);
    },
};

myObject2.myFn3();

// Binding "this" to other objects
// .call()
var myObject3 = {
    myFn4: function (a, b) {
        console.log(a + " " + b);
        console.log(this === myObject3); // false
        console.log(this === myOtherObject); // false
    },
};

var myOtherObject = {};
myObject3.myFn4.call(myOtherObject, "a", "b");

// .apply()
var myObject4 = {
    myFn5: function (a, b) {
        console.log(a + " " + b);
        console.log(this === myObject4); // false
        console.log(this === myOtherObject2); // false
    },
};

var myOtherObject2 = {};
myObject4.myFn5.call(myOtherObject2, ["a", "b"]);

// .bind()
var myObject5 = {
    myFn6: function (a, b) {
        console.log(a + " " + b);
        console.log(this === myObject5); // false
        console.log(this === myOtherObject3); // false
    },
};

var myOtherObject3 = {};
var myFn6 = myObject5.myFn6.bind(myOtherObject3);
myFn6("a", "b");

// ES6
var myObject6 = {
    myFn7() {
        console.log(this === myObject6); // true
        setTimeout(() => {
            console.log(this === myObject6); // true
            console.log(this === window); // false
        }, 0);
    },
};

myObject6.myFn7();
