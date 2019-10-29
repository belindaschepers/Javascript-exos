/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    window.onload = window.localStorage.clear();

    function activeCounter() {
        let nbr = localStorage.getItem('on_click');
 
        if (nbr === null) {
            nbr = 0;
        }
         
        nbr++;
         
        localStorage.setItem("on_click", nbr);
         
        document.getElementById('target').innerHTML = nbr;
    }
     
    document.getElementById('increment').addEventListener('click', activeCounter);


})();
