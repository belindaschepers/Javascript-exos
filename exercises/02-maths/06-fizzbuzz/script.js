/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    function FizzBuzz(){
        var number = parseInt(prompt("Votre chiffre"));
        if (number >=1 && number <=100){
            if (number != 0 && ( number % 3 == 0 )) {
                if (number != 0 && ( number % 5 == 0 )){
                    console.log ("FizzBuzz");
                }
                else{
                    consol.log ("Fizz");
                    }
            }
        }
    }

})();
