//Exercise 1 : Information

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
    console.log("I am Yapeaud Beda, I am 31 years old and I love reading, volunteering and associative life, video games."); 
}
infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log(`You name is ${personName}, you are ${personAge } years old, your favorite color is ${personFavoriteColor}`)
}
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips

// Create a function named calculateTip() that takes no parameter. 
function calculatetip() {
    // Inside the function, use prompt to ask John for the amount of the bill.
    const amountOfTheBill = Number(prompt("how much is the bull?")) 
    let tipPercent
    // Here are the rules
    if (amountOfTheBill < 50) tipPercent = 0.2
    if (amountOfTheBill > 50 && amountOfTheBill < 200) tipPercent = 0.15
    if ( amountOfTheBill> 200) tipPercent = 0.1

    //Console.log the tip amountOfTheBill and the final bill (bill + tip).
    const TotalBil = amountOfTheBill * (1 +  tipPercent)
    console.log("bill:",amountOfTheBill)
    console.log("Total bill including  :",TotalBil)

}
//Call the calculateTip() function.
calculatetip();

// Exercise 3 : Find The Numbers Divisible By 23
//Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor) {
    // In the function, loop through numbers 0 to 500.
    let sum=0;
    for (let i=0;i<500;i++)
    {
        
        if(i%divisor === 0) 
        {
         console.log(i);
        sum=sum+i;
        }

    }
    // Console.log all the numbers divisible by 23.
    console.log("the sum of numbers divisible by 23 is :",sum)
}   
//At the end, console.log the sum of all numbers that are divisible by 23.
isDivisible(23);

// Exercise 4 : Shopping List

// Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
//  It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana","orange","apple"];
// Create a function called myBill() that takes no parameters.
function myBill(){
    // const element = shoppingList[0]; 
    for( const element of shoppingList){
        const availableQuantity = stock[element];

        if ( availableQuantity > 0) {
            const price = prices[element];
            console.log(`The price of ${element} is ${price}`);
            console.log(`and we have this many in ${stock[element]}`)
            stock[element] = stock[element] - 1;
            console.log(`The new quatity of this element ${stock[element]}`);
        }else{
            console.log(`There is no ${element} in stok`)
        }
    }
}
    
myBill();

function changeEnough(itemPrice, amountOfChange) {
    console.log("the item price is", itemPrice)

   const sum = calculateSum(amountOfChange);
   return (sum > itemPrice) 
    
}
// Exercise 5 : What’s In My Wallet ?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function calculateSum(arr) {
    let sum = 0;

    for (let i = 0;i < arr.length;i++){
       let coinValue;

       const numberOfcoins = arr[i];

       if(i === 0) {coinValue = 0.25};
       if(i === 1) {coinValue = 0.10}; 
       if(i === 2) {coinValue = 0.05};
       if(i === 3) {coinValue = 0.01};
       console.log("we have", numberOfcoins,"coins that a value of", coinValue);
       
       sum = sum + numberOfcoins * coinValue
    }
    console.log("the total sum is",sum)
    return sum;
}
changeEnough(4.25, [25, 20, 5, 0]);

//  Exercise 6 : Vacations Costs
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(numberOfNights) {
  
    const costPerNight = 140;
    const totalPrice = Number(numberOfNights) * costPerNight
    return totalPrice;
}

function isOnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/);
    return regex.test(str);
}

function includesNumbers(str){
    const regex = new RegExp(/\d/);
    return regex.test(str);
}
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$


function planeRideCost(destination){
    if(destination === "London") return 183
    if(destination === "PAris") return 220
    return 300
}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(carAnswer){
  
    const dailyPrice = 40;
    const numberOfDays = Number(carAnswer);
    
    let discount = 0;
    if (numberOfDays >= 10) discount = 0.05;
    
    const totalPrice = dailyPrice * numberOfDays * (1-discount); 
    return totalPrice;
} 

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    let hotelAnswer;
    let carAnswer;
    let destination = "";
    

    while (!isOnlyNumbers(hotelAnswer)) {
        hotelAnswer  = prompt("How many nights would you like to stay?");
    }  
    while (!isOnlyNumbers(carAnswer)) {
         carAnswer = prompt("How many days would you like to rent the car?")
    }
    while (destination == "" || includesNumbers(destination)) {
        destination = prompt("where are you going ?");
    }

    const carPrice = rentalCarCost(carAnswer);
    const hotelPrice = hotelCost(hotelAnswer);
    const planePrice = planeRideCost(destination);

    console.log('hotelPrice:', hotelPrice);
    console.log('carPrice:', carPrice);
    console.log('planePrice:', planePrice);

    const totalPrice = carPrice + hotelPrice + planePrice
    console.log(`total Price: ${totalPrice}`)
}
totalVacationCost();