//Homework - js - 1


/*const country = "Republic of Moldova";
const continent = "Europe";
let population = 2.6;
const unit_population = "millions";
let is_Island = false;
const description = `${country} is in ${continent}, and it has ${population} ${unit_population}`;


console.log("country: ", country);
console.log("continent: ", continent);
console.log("population: ", population, unit_population);
console.log("is island: ", is_Island);
console.log(description);


//Homework - js - 2

console.log(false || (true && false));  //true or false = false
console.log(true || (1 + 2));    //true or true = true
console.log((1 + 2) || true);   //true or true = 3
console.log(true && (1 + 2));   //true and true = 3
console.log(false && (1 + 2));  //false and true = false
console.log((1 + 2) && true);   //true and true = true
console.log((32 * 4) >= 129);   //128 >= 129 =false
console.log(false !== !true);   //false negare-egal(nu este egal) negare true(false) = false
console.log(true === 4);    //true === false = false
console.log(false === (847 === '847')); //false === false = true
console.log(false === (847 == '847'));  //false ===true = false
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); //false or false or true or true = true */


//Homework - js - 3

/*const weightAna = 65;
const heightAna = 1.75;

const anaBMI = (weightAna / (heightAna ** 2)).toFixed(2);
console.log(anaBMI);

if (anaBMI < 18.5) {
    console.log(`Ana is underweight`);
} else if (anaBMI >= 18.5 && anaBMI <= 25) {
    console.log(`Ana is normal weight`);}


const weightBob = 93;
const heightBob = 1.89;

const bobBMI = (weightBob / (heightBob ** 2)).toFixed(2);
console.log(bobBMI);

if (bobBMI < 18.5 || bobBMI > 25) {
    console.log(`Bob is underweight or overweight`);
} else { 
    console.log("Bob is normal weight");
}*/


//Homework - js- 4
const calculateSupply = (vârsta, cantitateaZilnica) => {
    const cantitateaTotala = cantitateaZilnica * vârsta; 
    return (`You will need ${cantitateaTotala} to last you until the ripe old age of ${vârsta}`);
}
    console.log(calculateSupply(80, 3));


const checkOddEven = (numar) => {
    if (numar % 2 === 0) {
        return (`Numarul este par`);
    }
    else if (numar % 2 === 1) {
        return ("Numarul este impar");
    }
}


const fizzBuzz = (numar) => {
    if (numar % 3 == 0) {
        return ("Fizz");
    }
    if (numar % 5 == 0) {
        return ("Buzz");
    }
    if (numar % 3 == 0 && numar % 5 == 0) {
        return ("FizzBuzz");
    }
}

  


/*Homework - js - 5

const fruits = [];
fruits.push(`apple`, `banana`, `orange`);
console.log(fruits.length);
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
const removedNumbers = numbers.pop();
console.log(removedNumbers);

const colors = [`red`, `blue`, `green`];
const colorsIndex = colors.indexOf(`green`);
console.log(colorsIndex);
const includesOrange = colors.includes(`orange`);
console.log(includesOrange);

const names = ["John", "Jane", "Mike", 
"Anna"];
names.unshift("David");
console.log(names);
const namesIndex = names.indexOf("Mike");
console.log(namesIndex);

const numbers2 = [2, 4, 6, 8, 10];
const includes = numbers2.includes(5);
console.log(includes);
numbers2.push(12);
console.log(numbers2);

const fruits2 = [`apple`, `banana`, `orange`];

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
} */





 




