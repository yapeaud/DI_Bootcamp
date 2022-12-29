
const sentence = ("He is not a bad formula driver.")
const wordNot = sentence.indexOf("not"); 
console.log(wordNot);
const wordBad  = sentence.indexOf("bad");
console.log(wordBad);
if(wordBad > wordNot) {
    const slice = sentence.slice(wordNot, wordBad + 3)
    console.log(sentence.replace(slice,"good"))
}else{
    alert(sentence)

}