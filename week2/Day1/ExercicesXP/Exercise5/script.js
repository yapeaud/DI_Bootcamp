typeof(15)
// Prediction: C'est un nombre
// Actual:number

typeof(5.5)
// Prediction:
// Actual: number

typeof(NaN)
// Prediction:
// Actual:number

typeof("hello")
// Prediction:C'est une chaine de caractère
// Actual:string

typeof(true)
// Prediction:
// Actual:'boolean'

typeof(1 != 2)
// Prediction:Nous faisons une comparaison
// Actual:'boolean'

"hamburger" + "s"
// Prediction: Nous avons faire une concatenation
// Actual:"hamburgers"

"hamburgers" - "s"
// Prediction:On ne peut pas calculer(soustraire) un string et  un string
// Actual:NaN

"1" + "3"
// Prediction:Nous avons faire une concatenation
// Actual:13

"1" - "3"
// Prediction:On ne peut pas calculer(soustraire) un nombre et un string
// Actual:NaN

"johnny" + 5
// Prediction:
// Actual:johnny5

"johnny" - 5
// Prediction: On ne peut pas calculer(soustraire) un nombre et un string
// Actual:NaN

99 * "hello"
// Prediction:On ne peut pas calculer(multiplier) un nombre et un string
// Actual:NaN

1 != 1
// Prediction: Nous comparons les valeurs
// Actual: false

1 == "1"
// Prediction: Nous comparons les valeurs
// Actual:true

1 === "1"
// Prediction: Nous comparons les valeurs et les types 
// Actual: false 

5 + "34"
// Prediction:additionne 
// Actual:534

5 - "4"
// Prediction:
// Actual:NaN

10 % 5
// Prediction:modulo
// Actual:0.5

5 % 10
// Prediction:modulo
// Actual:0.5

"Java" + "Script"
// Prediction: additionne les deux strings
// Actual: JavaScrip

" " + " "
// Prediction:additionne 
// Actual:un espace

" " + 0
// Prediction: un espace et le chiffre 0
// Actual: 0

true + true
// Prediction: en booleen true equivaut à 1 et fasle à 0
// Actual:1

true + false
// Prediction: en booleen true equivaut à 1 et fasle à 0
// Actual:1

false + true
// Prediction:en booleen true equivaut à 1 et fasle à 0
// Actual: 1

false - true
// Prediction:en booleen true equivaut à 1 et fasle à 0
// Actual: -1

!true
// Prediction:en booleen true equivaut à 1 et fasle à 0
// Actual:0

3 - 4
// Prediction: addition
// Actual:-1

"Bob" - "bill"
// Prediction:L'on ne peut pas soustraire des strings
// Actual:NaN
