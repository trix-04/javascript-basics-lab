var studentName ="Jennifer";
var studentAge = 25;
var isEnrolled = true;

console.log("First name: " + studentName);
console.log("Age: " + studentAge);
console.log("Enrolled: " + isEnrolled);

let favColor = "Blue";
console.log("My favorite color is " + favColor);

let motorcycle = 270.50;
console.log("My motorcycle's top speed is " + motorcycle + "km/h");

let booleanVariable = true;
console.log("Did Kendrick lose to Drake? " + booleanVariable);

let groceryList =["protein", "milk", "eggs", "oil", "chicken", "yogurt"];
console.log("Today's shopping list: " + groceryList);

let manufacturer = {
    model: "BMW",
    year: "2009",
    color:"grey"
  };
console.log("My first car was a " + manufacturer.color + " " + manufacturer.model);
console.log("It was a " + manufacturer.year + ".");

let population = 10000;
console.log("Population (original): " + population);
population = population * 1000;
console.log("Population in 2000 (x1000): " + population);
population = population + 100;
console.log("Population after tourism (+100): " + population);
population = population - 500;
console.log("Population after COVID (-500): " + population);
population = population / 2;
console.log("Population after stock market crash (/2): " + population);

let cold = -20; 
let hot = 34;
let answer = hot >= cold;
console.log("Is " + hot + " greater than or equal to " + cold + " : " + answer);
answer = hot === cold;
console.log("Is " + hot + " equal to " + cold + " : " + answer);
answer = hot != cold;
console.log("Is " + hot + " not equal to " + cold + " : " + answer);
answer = hot < cold;
console.log("Is " + hot + " less than " + cold + " : " + answer);


let food = true;
let exercise = false;
console.log("Is diet more important than exercising? " + (food || !exercise));
console.log("Should I eat more to lose weight? " + (food && exercise));

