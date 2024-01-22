// scope
var a = "Tolu";


//global variable

// let
// let keyword declares a variable within the block scope
var myName = "Tolu";
{
    let myName = "Tola";
}
    console.log(myName);

// const
// const keyword declares a variable with a constant value
const newName = "Tola";
let myNewName = "Tolu"

var aNewName = "Tolu";
{
    const aNewName = "Tola";
}

// arrow functions
// arrow functions enable us use a short syntax to write
// functions without the function or return keywords
let num1 = 20;
let num2 = 25;
function sum(num1, num2) {
    return num1 + num2;
}

// array
const myArray = [ 1, 2, 3, 4 ];

// array(map)
const mapArray = [ 1, 2, 3, 4 ];

// array(filter)
const filterArray = [ 1, 2, 3, 4, 5, 7, 8, 9, 10]

// array(reduce)
const reduceNumber = [1, 2, 3, 4];

// array(foreach)
let sum = 0;
const forEachNumber = [1, 2, 3, 4];


// objects
let student = {
    name: "Tolu",
    class: 1,
    age: 20,
    course:"frontend"
}
