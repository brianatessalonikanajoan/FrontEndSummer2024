//rest parameter & spread operator

//rest parameter
// const foo = (...params) => {
//     console.log(params);
// };

// foo("A", "B", "C");

// const foo = (param1, param2, param3, ...params) => {
//     console.log(params);
// };

// foo("A", "B", "C", "D", "E", "F");


//spread operator
// let arrayBilangan = [1, 2, 3, 4, 5];

// //tanpa spread operator
// // console.log(arrayBilangan);

// //pakai spread operator
// console.log(...arrayBilangan);

//spread operator
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);
// //1.
// const number2 = [...numbers];
// console.log(number2);

// //2.menggabungkan array
// let array1 = ["foo", "bar"];
// let array2 = ["fizz", "buzz"];

// letcombinedArray5 = array1.concat(array);
// letcombinedArray6 = [...array1, ...array2];


//pada objek
// const john = {
//     nama1: "john",
//     age: 38,
// };

// john.job = "Teacher";

// john = {...john, address: "Teacher"};
// console.log(john);


//destrukturisasi Array & Objek

let numbers = [1, 2, 3, 4, 5]

//tidak efektif
// number1 = numbers[0]
// number2 = numbers[1]
// number3 = numbers[2]
// number4 = numbers[3]
// number5 = numbers[4]

let [a, b, c, d, e] = numbers;
console.log(c);