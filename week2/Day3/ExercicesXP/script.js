/*  Exercise 1 : List Of People */

// Part I - Review About Arrays

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push("Yapeaud");
console.log(people);
console.log(people.indexOf("Mary"));
console.log(people.slice(1,3));
console.log(people.indexOf("Foo"));//Il renvoie -1 car l'élément "Foo" n'est (existe) pas dans le tableau
const last =(people[3]);
console.log(last);
//L'index du tableau n'est pas la taille du tableau.
//L'index du tableau commence par 0 et se termine par n-1 alors la taille du tableau debute par 1 et ce termine par n


// Part II - Loops
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
}
const item = 'Jason';
switch (item) {
  case 'Mary':
    console.log('Mary');
    break;
    case 'Devon':
    console.log('Devon');
    break;
    case 'Jason':
    console.log('Jason');
    break;
    case 'Yapeaud':
    console.log('Yapeaud');
    break;
  default:
    console.log(`Sorry, we are out of ${item}.`);
}

//Exercise 2 : Your Favorite Colors
const colors = ["Blue","White","Blacks","Green","Orange"];
const suffixes = ["st", "nd",  "rd", "th", "th"];
for (let index = 0; index < colors.length; index++) {
    console.log("My " + [index+1] + suffixes[index] +" choice is"+" "+ colors[index]);
}
 
//Exercise 3 : Repeat The Question
let nbre = null;
while (nbre != 10) {
  const reply = prompt("Please enter a number."); 
  nbre = Number(reply);
}
console.log(typeof nbre);

//  Exercise 4 : Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor+" , "+ building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("The tenant Mr. "+building.nameOfTenants[1]+" has "+building.numberOfRoomsAndRent.dan[0]+" rooms in his apartment.");

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
  console.log(`So we increase Dan's rent by 200. This gives : ${building.numberOfRoomsAndRent.dan[1]+200}`);
}

//  Exercise 5 : Family
// Create an object called family with a few key value pairs.
const family = { 
  father: "Boniface",
  mother: "Saï"
}
// Using a for in loop, console.log the keys of the object.
for (const key in family){
  console.log(key);
}
// Using a for in loop, console.log the values of the object.
for (const key in family){
  console.log(family[key]);
}

//Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let buildSentence = "";
for(const key in details){
   buildSentence = buildSentence +" "+ key +" "+ details[key];
}
console.log(buildSentence);

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let theNameOfTheirSecretSociety = " ";
const nameClassified = names.sort();
for(start of nameClassified){
  console.log(start);
  theNameOfTheirSecretSociety = theNameOfTheirSecretSociety + start[0];
}
console.log("the name of their secret society is:"+theNameOfTheirSecretSociety);