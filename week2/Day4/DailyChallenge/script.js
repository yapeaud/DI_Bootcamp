// Daily Challenge: Words In The Stars

// Prompt the user for several words (separated by commas).
let input = prompt("Entrez votre liste de mots avec des virgules comme separateur");

// Put the words into an array.
let wordInTheArray = input.split(",");

// Console.log the words one per line, in a rectangular frame as seen below.
let maxLength = 0;

let wordStar = '';

wordInTheArray.forEach((items)=>{

    if(maxLength < items.length)
    {
        maxLength = items.length
    }
});

maxStartLength = maxLength + 4;
wordStar +=   "*".repeat(maxStartLength);
wordStar += "\n";
let space = '';

 for(let index=0; index < wordInTheArray.length; index++)
{
    let spaceNumber = maxStartLength - wordInTheArray[index].length - 3 ;
    space = ' '.repeat(spaceNumber)

    wordStar +=  "* " + wordInTheArray[index] + space + "* \n";
}

wordStar = wordStar + "*".repeat(maxStartLength);

 console.log(wordStar);