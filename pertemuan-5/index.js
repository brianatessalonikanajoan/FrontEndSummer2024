//for loop
// for (let i = 1; i <= 10; i--) {
//     console.log(i);
//   }
  

// let arr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 


    const students =[
    {
        id : 1,
        name : "john",
        isActive: true,
        grade : 85
    },
    {
        id : 2,
        name : "jack",
        isActive : true,
        grade : 90
    },
    {
        id :3,
        name : "bob",
        isActive : false,
        grade : 95
    },
];
//menampilkan element array semuanya sekaligus
// console.log(students);

// //menampilkan element array item by item
// for(let i=0; i<students.length; i++) {
//     console.log(students[i]);
// }

//array built-in method
//1. forEach (tidak bisa return)
// students.forEach(function(item){
//     console.log(item);
// });

//2. map() (bisa return)
// let output = students.map(function(item){
//     item.grade += 5;
//     return item;
// });
// console.log(students);
// console.log(output);

const array1 = [1, 4, 9, 26];
const map1 = array1.map(function (item){
    return item*2;
});
console.log(map1);

//filter()
let filteredStudents = students.filter(function(item){
    return item.isActive === true;
});

console.log(filterStudents);

let findStudents = students.find(function(item){
    return item.isActive === true;
});

console.log(findStudents);