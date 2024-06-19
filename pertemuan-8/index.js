//javascript EcmaScript (ES)6

//1. let & const

// penggunaan let dan const pada array dan object
// const number = [1, 2, 3, 4, 5];
// number[2] = 10
// console.log(number);

// const john = {
//     name = "john doe",
//     age = 30,
//     isActive = true,
// };
// john,age = 31;
// console.log(john);

//2. string literal
// const john = {
//     name = "john doe",
//     age = 30,
//     isActive = true,
// };
// //
// let string5 =
//     "Hi, nama saya " + john,name + ", umur saya " + john,age

//3. Arrow function
//cara baru dalam penulisan fungsi

function greetings5() {
    return 'Hello World';
}

//deklarasi arrow function
const greetings6 = () => {
    return 'Hello World';
};

//implicit return value
const greetings6 = (name) => 'Hello ${name}';


//penggunaan arrow function pada callback function
let numbers = [1, 2, 3, 4, 5];
let output = numbers.map((item) => item * 5);