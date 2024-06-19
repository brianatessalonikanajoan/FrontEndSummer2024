//IFFE

(function() {
function menghitungBMI(berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    let classification;
    if (BMI < 18.5) {
        classification = 'underweght'
    } else if(BMI >= 18.5 && BMI < 24.9) {
        classification = 'normal range'
    } else if(BMI >= 25 && BMI < 29.9) {
        classification = 'pre obese'
    } else{
        classification = 'obese'
    }
    return classification
}

let berat = 55
let tinggi = 1.61

let BMI = menghitungBMI(berat, tinggi);
console.log("BMI", BMI);
}())

//CALLBACK


function menghitungBMI(berat, tinggi, callback) {
    let BMI = berat / (tinggi * tinggi);
    let classification;
    if (BMI < 18.5) {
        classification = 'underweight';
    } else if (BMI >= 18.5 && BMI < 24.9) {
        classification = 'normal range';
    } else if (BMI >= 25 && BMI < 29.9) {
        classification = 'pre obese';
    } else {
        classification = 'obese';
    }
    callback(classification);
}

let berat = 55;
let tinggi = 1.61;

menghitungBMI(berat, tinggi, function(BMI) {
    console.log("BMI Classification:", BMI);
});
