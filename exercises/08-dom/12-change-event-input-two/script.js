/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let pass = document.getElementById('pass-one');
    counter = document.getElementById('validity');
 
     document.getElementById("pass-one").addEventListener("input", () => {
         if (pass.lenght > 8 ) {
         counter.innerHTML = "pas ok";
         console.log(counter);
        }

        else {
            counter.innerHTML = "ok";
            console.log(counter);
        }
 
 
     });
})();
