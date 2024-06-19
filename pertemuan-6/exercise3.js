//ARRAY

// let people = ["Greg", "Mary", "Devon", "James"];
//     for (let i = 0; i < people.length; i++) {
//      console.log(people[i]); 
// };

// people.forEach(function(item){
//         console.log(item);
// });

// people.shift();
// console.log(people);

// people.pop();
// console.log(people);

// people.unshift("Matt");
// console.log(people);

// people.push("Briana");
// console.log(people);


// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//         break; 
//     }
// };

// let people2 = people.slice(2,4);
// console.log(people2);

// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// let withBob = ["Bob"];
// let people3 = people.concat(withBob);
// console.log(people3);


//OBJECT

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
console.log(programming);

programming['difficulty']= 7;
console.log(programming);

delete programming.jokes;
console.log(programming);

programming.isFun = true
console.log(programming);


let updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);

updatedLanguages.forEach(updatedLanguage => console.log(updatedLanguage));
