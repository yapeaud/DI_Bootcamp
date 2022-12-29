const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users);

if (users.length == 0) {
console.log("no one is online");
} if (users.length == 1) {
console.log(users[0]+" is online"); 
}else if(users.length == 2){
console.log(users[0]+" and "+ users[1]+" are online");
 }else if ((users.length !== 2)) {
    console.log(users[0]+", "+ users[1]+" and 3 more are online"); 
}
