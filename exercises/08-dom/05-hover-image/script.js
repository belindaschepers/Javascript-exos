/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let img = document.getElementsByTagName("img")[0]; 
    let imgOne = img.getAttribute ("src");
    console.log (imgOne);

    img.onmouseover = function change () {
    
    let imgTwo = img.getAttribute ("data-over");
    console.log (imgTwo);

    img.setAttribute ("src" , imgTwo);
    
    };
})();
