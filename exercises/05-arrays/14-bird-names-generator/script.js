/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = [  //new set enlevé
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ];

    document.getElementById("run").addEventListener("click", () => {
        let randomBirds = birds[Math.floor(Math.random()*birds.length)];
        let random = adjectives[Math.floor(Math.random()*adjectives.length)];
        if (randomBirds.hasOwnProperty('fem')){
            document.getElementById("target").innerHTML = (randomBirds.name+" "+random+"e") 
        }
        else { document.getElementById("target").innerHTML = (randomBirds.name+" "+ random)
        }

//(randomBirds.hasOwnProperty('fem')) ? console.log(randomBirds.name+" "+random+"e") : console.log(randomBirds.name+" "+ random);

  })();
})();
