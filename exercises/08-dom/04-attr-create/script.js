/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let object = document.getElementsByTagName("span")[1]; 
    ref= object.getAttribute("data-image");

    let figure = document.getElementsByTagName('figure')[0];

    let image = document.createElement('img');
        image.innerHTML = figure.innerHTML;

        figure.parentNode.insertBefore(image, figure);
        figure.parentNode.removeChild(figure);
    
    let object2 = document.querySelector("img"); 
    ref2= object2.setAttribute("src", ref);

    obj.parentNode.removeChild(object);
    
    console.log(ref);
})();
