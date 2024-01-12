//Homework - js - 1


const country = "Republic of Moldova";
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
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); //false or false or true or true = true