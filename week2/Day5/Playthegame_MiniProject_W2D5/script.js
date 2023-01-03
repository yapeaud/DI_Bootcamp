
function playTheGame(){
    const ReactionDeUtisateur = confirm("Voulez vous joué le jeu?");

    if (!ReactionDeUtisateur) {
        return alert("Pas de problème, au revoir")
        
    } 

    const computerNumber = generateRandomNumber();

    let message = prompt("Entrez un numéro");
    let numberOfTries = 0
    const userNumber=Number(message);

    while ( userNumber != computerNumber) {
    numberOfTries = numberOfTries + 1
    if (numberOfTries === 3) {
        return alert("sorry too many tries.you lose " + computerNumber)
    
    }
    if (!Chiffres(userNumber)) {
        return alert('Désolé ce n"est pas un nunéro,Aurevoir')
    
    }
    console.log(userNumber,computerNumber) 
     let biggerOrSmaller=(Number(message)> computerNumber)? "grand" : " petit"
    if (userNumber > computerNumber) {
        return alert('votre nombre est '+ biggerOrSmaller+' que celui de l"ordinateur, devinez encore')
    
    }
    
    if (userNumber < computerNumber) {
        alert("votre nombre est "+ biggerOrSmaller+ " que celui de l'ordinateur, devinez encore")
    }
    message = prompt("Entrez un autre numéro")

    }
 const finalMessage=`WINNER !,the number was indeed ${computerNumber}.You find in ${numberOfTries+1} tries.`
    alert(finalMessage);
}

function Chiffres(str){
    const regex = new RegExp(/^[0-9]*$/);
return regex.test(str);
}

function intervalDeZeroADix(number) {
    return number >= 0 && number <= 10
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11)
    
}

function compareNumber(userNumber,computerNumber) {
    if (userNumber === computerNumber) {
       alert('GAGNANT') 
    return
    }
    
}
function canGameContinue() {
    
}