//tips callback function

//review exercise1
// function menghitungBMI(berat, tinggi) {
//     let BMI = berat / (tinggi * tinggi);
//     let classification;
//     return BMI;
// }

// let berat = 55
// let tinggi = 1.61

// let BMI = menghitungBMI(berat, tinggi);
// console.log("BMI", BMI);

//sir
function menghitungBMI(berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    let classification;
    if (BMI < 18.5) {
        classification = 'underwight'
    } else if(BMI >= 18.5 && BMI < 24.9) {
        classification = 'normal range'
    } else if(BMI >= 25 && BMI < 29.9) {
        classification = 'pre obese'
    } else {
        classification = 'obese'
    }
    return classification
}

let output = menghitungBMI(55, 1.61)
console.log("BMI anda adalah" + output)

//tipe immideatly invoked function expression
(function (){
    console.log("Hello IFFE")
})()

//callback function
function greetings(){
    console.log('Hello')
}

function sayHello(callback){
    callback()
}

sayHello(greetings()) //1