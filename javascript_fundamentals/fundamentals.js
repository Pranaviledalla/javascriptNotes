
/* How does Javascript works in the backed?
    First will create a calls stack => Global execution context => function invocation (Memory unit and code unit will e created).
*/
//Scope: accessibility of variables within a specific context. It determines where a variable can be used or refferenced within a program
//Lexical Scope: Determines the visibility of variables based on their position in te source code.
//In below example c function has the lexical environment a where c can access to.

function a() {
    var b = 10;
    c();
    function c(){

    }
}
var b=10;
a();

//Temporal Dead Zone: 

//Let and Const:


//Hoistion: It is a phinominon in JavaScript where we can be able to access variabes and functions before initialized it without any error.
getName();
console.log(x);
console.log(getName);

var x = 7;

function getName(){
    console.log("JavaScript");
}

//Function ststement and function decelaration
function a() {
    console.log("Hello a");
}

// Function  Expression
var b = function () {
    console.log("Hello b")
}

// Named function expression
// As xyz is licaly decleared we can not diectly call xyz()
var b = function xyz() {
    console.log("Hello b")
}

// Anonymous function : Does not have any identity, they are used where functions are used as values by assigning to a variable.
// function () {

// }

// What are first class function? : The ability to use functions as values and assugn it to a variable and can be passed to another functions or can be retrived values from another functions is known as first class functions
var b = function(parm1){
    return function xyz(){
        
    }
}
console.log(b());

//Arrow function (Introduced in ES6)
let add = (num1, num2) => Math.abs(num1)+Math.abs(num2);
console.log(add(1, -6));