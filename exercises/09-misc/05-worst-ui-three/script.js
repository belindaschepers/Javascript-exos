/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");

    // variables des différentes parties
    let partOne = document.getElementById("part-one");
    let counterMaxOne = partOne.getAttribute("data-max"); 
    let counterMinOne = partOne.getAttribute("data-min");
    
    let partTwo = document.getElementById ("part-two");
    let counterMaxTwo = partTwo.getAttribute ("data-max");
    let counterMinTwo = partTwo.getAttribute ("data-min");
    
    let partThree = document.getElementById ("part-three");
    let counterMaxThree = partThree.getAttribute ("data-max");
    let counterMinThree = partThree.getAttribute ("data-min");

    let partFour = document.getElementById ("part-four");
    let counterMaxFour = partFour.getAttribute ("data-max");
    let counterMinFour = partFour.getAttribute ("data-min");

    //intervals des animations
    let interval = window.setInterval(animationOne, 500);
    let interval2 = window.setInterval(animationTwo, 500);
    let interval3 = window.setInterval(animationThree, 500);
    let interval4 = window.setInterval(animationFour, 500);

    //animations et stops des randoms
    function animationOne () {
        let random = Math.round((counterMinOne)*100)/100;
            if (counterMinOne < counterMaxOne) counterMinOne++;
            partOne.value = random;  
        }
    
        document.getElementById("fix-part-one").onclick = function (){
            clearInterval(interval);
    
    
        document.getElementById("fix-part-one").onclick = function (){   
            
            setInterval(animationOne, 500);
    
        }
    
    }

    function animationTwo () {
        let random = Math.round((counterMinTwo)*100)/100;
            if (counterMinTwo < counterMaxTwo) counterMinTwo++;
            partTwo.value = random;  
        }
    
        document.getElementById("fix-part-two").onclick = function (){
            clearInterval(interval2);
    
    
        document.getElementById("fix-part-two").onclick = function (){   
            
            setInterval(animationTwo, 500);
    
        }
    
    }

    function animationThree () {
        let random = Math.round((counterMinThree)*100)/100;
            if (counterMinThree < counterMaxThree) counterMinThree++;
            partThree.value = random;  
        }
    
        document.getElementById("fix-part-three").onclick = function (){
            clearInterval(interval3);
    
    
        document.getElementById("fix-part-three").onclick = function (){   
            
            setInterval(animationThree, 500);
    
        }
    
    }

    function animationFour () {
        let random = Math.round((counterMinFour)*100)/100;
            if (counterMinFour < counterMaxFour) counterMinFour++;
            partFour.value = random;  
        }
    
        document.getElementById("fix-part-four").onclick = function (){
            clearInterval(interval4);
    
    
        document.getElementById("fix-part-four").onclick = function (){   
            
            setInterval(animationFour, 500);
    
        }
    
    }

    let style = document.createElement('style');
    style.innerHTML = `
    .material {
        color: white;
        font-size : 50px;
        border : 10px solid white;
        background-color : black;
    }

        #part-one {
        background-color : purple;
        color: white;
    }

        #part-two {
        background-color : yellow;
        color: black;
    }

        #part-three {
        background-color : red;
        color: black;
    }

        #part-four {
        background-color : silver;
        color: black;
    }
    
    `;

    document.head.appendChild(style);


})();
