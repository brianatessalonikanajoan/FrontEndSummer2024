//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi), berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 input yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function menghitungBMI(berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    return BMI;
}

let berat = 55
let tinggi = 1.61

let BMI = menghitungBMI(berat, tinggi);
console.log("BMI", BMI);