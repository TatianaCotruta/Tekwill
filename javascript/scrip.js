/*Homework - js - 1*/
// const country = "Republic of Moldova";
// const continent = "Europe";
// let population = 2.6;
// const unit_population = "millions";
// let is_Island = false;
// const description = `${country} is in ${continent}, and it has ${population} ${unit_population}`;


// console.log("country: ", country);
// console.log("continent: ", continent);
// console.log("population: ", population, unit_population);
// console.log("is island: ", is_Island);
// console.log(description);


/* Homework - js - 2*/
// console.log(false || (true && false));  //true or false = false
// console.log(true || (1 + 2));    //true or true = true
// console.log((1 + 2) || true);   //true or true = 3
// console.log(true && (1 + 2));   //true and true = 3
// console.log(false && (1 + 2));  //false and true = false
// console.log((1 + 2) && true);   //true and true = true
// console.log((32 * 4) >= 129);   //128 >= 129 =false
// console.log(false !== !true);   //false negare-egal(nu este egal) negare true(false) = false
// console.log(true === 4);    //true === false = false
// console.log(false === (847 === '847')); //false === false = true
// console.log(false === (847 == '847'));  //false ===true = false
// console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); //false or false or true or true = true 


/*Homework - js - 3*/
// const weightAna = 65;
// const heightAna = 1.75;

// const anaBMI = (weightAna / (heightAna ** 2)).toFixed(2);
// console.log(anaBMI);

// if (anaBMI < 18.5) {
//     console.log(`Ana is underweight`);
// } else if (anaBMI >= 18.5 && anaBMI <= 25) {
//     console.log(`Ana is normal weight`);}


// const weightBob = 93;
// const heightBob = 1.89;

// const bobBMI = (weightBob / (heightBob ** 2)).toFixed(2);
// console.log(bobBMI);

// if (bobBMI < 18.5 || bobBMI > 25) {
//     console.log(`Bob is underweight or overweight`);
// } else { 
//     console.log("Bob is normal weight");
// }


/*Homework - js- 4*/
// const calculateSupply = (vârsta, cantitateaZilnica) => {
//     const cantitateaTotala = cantitateaZilnica * vârsta; 
//     return (`You will need ${cantitateaTotala} to last you until the ripe old age of ${vârsta}`);
// }
//     console.log(calculateSupply(80, 3));


// const checkOddEven = (numar) => {
//     if (numar % 2 === 0) {
//         return (`Numarul este par`);
//     }
//     else if (numar % 2 === 1) {
//         return ("Numarul este impar");
//     }
// }


// const fizzBuzz = (numar) => {
//     if (numar % 3 == 0) {
//         return ("Fizz");
//     }
//     if (numar % 5 == 0) {
//         return ("Buzz");
//     }
//     if (numar % 3 == 0 && numar % 5 == 0) {
//         return ("FizzBuzz");
//     }
// }


/*Homework - js - 5*/
// const fruits = [];
// fruits.push(`apple`, `banana`, `orange`);
// console.log(fruits.length);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// const removedNumbers = numbers.pop();
// console.log(removedNumbers);

// const colors = [`red`, `blue`, `green`];
// const colorsIndex = colors.indexOf(`green`);
// console.log(colorsIndex);
// const includesOrange = colors.includes(`orange`);
// console.log(includesOrange);

// const names = ["John", "Jane", "Mike", 
// "Anna"];
// names.unshift("David");
// console.log(names);
// const namesIndex = names.indexOf("Mike");
// console.log(namesIndex);

// const numbers2 = [2, 4, 6, 8, 10];
// const includes = numbers2.includes(5);
// console.log(includes);
// numbers2.push(12);
// console.log(numbers2);

// const fruits2 = [`apple`, `banana`, `orange`];

// for (let i = 0; i < fruits2.length; i++) {
//     console.log(fruits2[i]);
// } 


/*Homework - js - 6*/
// const persoana = {
//     nume:'John',
//     prenume:'Doe',
//     varsta:'30',
//     ocupatie:'Programator'
// };

// console.log(Object.keys(persoana).length);



// function arraySum (number) {
//     let sum = 0;
//     let i = -1;

//     while (++i < number.length) {
//         sum += number[i];
//       }
//     return sum;
// }

// let number = [2, 4, 6, 8, 10];
// console.log(arraySum(number));


// function createArray (N) {
//     let newArr = [];
//     for (let i = 1; i <= N; i++) {
//         newArr.push(i);
//     }
//     return newArr;
// }

// let N = 5;
// console.log(createArray(N));


// function biggestElement(number) {
//     let theBiggetsNumbers = 0;
//     for (let i = 0; i < number.length; i++) {
//         if(arr[i] > theBiggetsNumbers) {
//             theBiggetsNumbers = arr[i];
//         }
//     }
//     return theBiggetsNumbers;
// }

// let arr = [5, 8, 2, 10, 3];
// let result = biggestElement (arr);
// console.log(result);


/*Calculul mediei:*/
// const studentMarks = { nota1: 8, nota2: 7, nota3: 9 };
// //console.log(Object.keys(studentMarks)); //[ 'nota1', 'nota2', 'nota3' ]
// //console.log(Object.values(studentMarks)); // [ 8, 7, 9 ]

// function calculateAverage(marks) {
//     let sum = 0;
//     const numbers = Object.values(marks);
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum/ numbers.length;
// }
// console.log(calculateAverage(studentMarks));


/*Enumararea obiectelor:*/
// const displayObj = (obj) => {
// let i = 0;
// const keys = Object.keys(obj); // [ 'name', 'age', 'city' ]
// //const values= Object.values(obj);
//     while(i < keys.length) {
//         const key = keys[i];
//         //const value = values[i];
//         const value = obj[key];
//         console.log(`${key}: ${value}`);
//         i++
//     }  
// }

// const person = {name: 'John', age: 30, city: 'New York'};
// //console.log(Object.keys(person));
// //console.log(Object.values(person));

// (displayObj(person));


/*Cautarea unei proprietati:*/
// const checkObj = (obj, key) => {
// let i = 0;
// const keys = Object.keys(obj);
//     while(i < keys.length) {
//         if (keys[i] === key) 
//             return true;
//         i++
//     }
// return false;
// }

// const person = {nume: 'John', virsta: 30, oras: 'New York'};
// console.log(checkObj(person, 'virsta'));


/*Concatenarea valorilor:*/
// const concatProperty = (obj) => {
// const values = Object.values(obj); //[ 'HELLO', 'WORLD', '!' ]
// let i = 0;
// let value = [];
//     while ( i < values.length) {
//         value += values[i];
//         i++;
//     }
// return value;
// }

// const property =  {prop1: 'HELLO', propo2: 'WORLD', PROP3: '!'};
// //console.log(Object.values(property));

// console.log(concatProperty(property));


/*Numarul de vocale:*/
// const vowelCount = (str) => {
// const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     let i = 0;
//     while (i < str.length) {
//         if (vowels.includes(str[i])) {
//         count++;
//         }
//     i++;
//     }
//     return count;
// }
// const text ='Salut, ma numesc Maria';
// console.log(vowelCount(text));


/*Clasificarea studentilor:*/
// const calculateAverage = (obj) => {
//     const studenti =Object.keys(obj);

//     for (let i = 0; i < studenti.length; i++) {
//         const student = studenti[i];

//         let sum = 0;
//         for (let j = 0; j < obj[student].length; j++) {
//             sum += obj[student][j];
//         }
//         const media = sum / obj[student].length;
//         obj[student] = `Media: ${media}`;
//     }
//     return obj;
// }

// const exInput = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };
// console.log(calculateAverage(e


// const calculateAverage2 = (obj) => {
//     const studentsName =Object.keys(obj);
//     const result = {};

//     for (let i = 0; i < studentsName.length; i++) {
//         const student = studentsName[i];
//         //console.log(obj[student]);
//         const sumaNote = obj[student].reduce((sum, nota)=> sum + nota);
//         //console.log(sumaNote);
//         const media = sumaNote/obj[student].length;
//         result[student] = `Media ${media}`
//     }
//     return result;
// }

// const exInput2 = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };
// console.log(calculateAverage2(exInput2));


// const calculateAverage3 = (obj) => {
//     const values = Object.values(obj);
//     const result = {};
//     values.forEach((element, index)=> {
//         const keys =Object.keys(obj);
//         const sumaNote = element.reduce((sum, nota)=> sum+nota);
//         const media = sumaNote/element.length;
//         const student = keys[index];
//         result[student] = `Media: ${media}`;
//     })
//     return result;
// }

// const exInput3 = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };
// console.log(calculateAverage3(exInput3));


/*Inversarea unui sir de caractere:*/
// const reversString = (str) => {
//     let i = str.length - 1;
//     let newStr = '';
//         while (i >= 0) {
//             newStr += str[i];
//             i--;
//         }
//         return newStr;
//     }
    
//     const text = 'Hello, World!';
//     //console.log(text);
//     console.log(reversString(text));


/*Calculul Factorialului:*/
// const factorial = (num) => {
//     let result = num;
//         while (num > 1) { 
//             if (num === 0 || num === 1) 
//             return 1; 
//             num--;
//             result *= num;
//             }
//         return result;
//     }
//     console.log(factorial(5));
  

/*Verificarea palindromului:*/
// const checkPalindrome = (str) => {
// let i = 0;
// let length = str.length;
//     while (i < length) {
//         if (str[i] !== str[length - 1 - i]) {
//             return false;
//         }
//     return true;
//     }
// }

// const text = "level";
// console.log(checkPalindrome(text));


/*Convertirea in binar:*/
// const convertBinar = (num) => {
// let i = 0;
//     while (i < num.length) {

//     i++;
//     }98*
// }

// const number = 42;
// convertBinar(number);


/*CALCULUL MEDIEI:*/
const studentGrades = [
    {nume:"Ana", nota: 9},
    {nume:"Bogdan", nota: 7},
    {nume:"Cristina", nota: 8},
    {nume:"Daniel", nota: 6},
    {nume:"Elena", nota: 10}
];

// console.log(studentGrades);
// console.log(Object.values(studentGrades));


const calculateAverage = studentGrades.reduce((accumulator, value) => {
     return accumulator + value.nota;
  })
console.log(calculateAverage)
/*PROBLEMA FILTRARII SI MAPARII*/
// const products = [
//     {nume:"Bluza", pret: 50, stoc: true},
//     {nume:"Pantaloni", pret: 80, stoc: false},
//     {nume:"Geaca", pret: 80, stoc: false},
//     {nume:"Camasa", pret: 60, stoc: true},
//     {nume:"Fusta", pret: 40, stoc: false},
// ]
//Output: ["Bluza", "Geaca", "Camasa"]

// const filteredProducts = (arr) => {

//     return arr.filter (element => element === "true");
//     //console.log(filteredProducts);
//     return arr.map (element => element.nume);
// }
