//array&objek
//deklarasi array
//cara 1. array literal
// let numbers = [1, 2, 3, 4, 5];
// //cara 2. kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 19);

//tipe data dalam array
let numbers = [1, 2, 3, 4, 5]; // numbers
let students = ["john", "jane", "bob"]; //strings
let john = ['john', 30, true [4, 70, 100]]; //boolean

// console.log(numbers);
// console.log(students);
// console.log(john);

//mengakses statement dalam array melalui index
// console.log (numbers[2]);
// console.log (students[0]);
// console.log (john[1]);
// console.log (john[2][0]);

// numbers[3] = 100;
// console.log(numbers);

// //array length
// // console.log(numbers.length);
// // console.log(students.length);

// //megakses element terakhir
// console.log(numbers[numbers.length = 1]);

// //array method
// let array = [1, 2, 3, "halo", false, true];
// console.log(array);
// //mengubah element array menjadi string degna toString()
// console.log(array.toString());
// console.log(array.join("."));

// //mengubah dan mengeluarkan element array dengan pop()
// array.pop();
// console.log(array);
// array.push("selamat pagi");
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("selamat pagi")
// console.log(array)
// //splice
// array.splice(4, 0, 4, 5);
// console.log(array);

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);

// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

//javascript object
//deklrasi objek
//cara1. objek literal
let john = {
    firstName: 'john',
    umur : 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function() {
        console.log("hello my name is "+ this.firstName);
    }
    // address: {
    //     street: "jl. arnold mononutu",
    //     city: "minahasa utara",
    //     province: "sulawesi utara",
        
    // }

};
console.log(john);
//cara2. kata kunci new
// let orang = new Object();

// orang.nama = 'john';
// orang.umur = 24;
// orang.pekerjaan = 'programmer';

//2 cara mengakses properti dalam object
//1. dot notation
console.log(john.firstName);
john.job = "Teacher"//tambah properti baru
console.log(john);
//2. bracket notation
console.log(john["firstName"]);