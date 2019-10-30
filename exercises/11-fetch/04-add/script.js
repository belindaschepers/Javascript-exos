/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const insertCharacter = async function(data){
        let response = await fetch ('http://localhost:3000/heroes', 
        {
            method : 'POST', //methode pour mettre en ligne
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data) //convertir les données en json

        })

        let character = await response.json();
        console.log(character);
     }
     
        let newCharacter = {};

        document.getElementById("run").addEventListener("click", ()=>{
            newCharacter.name = document.getElementById("hero-name").value;
            newCharacter.alterEgo = document.getElementById("hero-alter-ego").value;
            newCharacter.abilities = document.getElementById("hero-powers").value.split(',');

        if(newCharacter.name == ""|| newCharacter.alterEgo == ""|| newCharacter.abilities[0]==""){
            alert("Vous n'avez pas rempli tous les champs");
        }
        else{
            insertCharacter(newCharacter);
            alert(`Name: ${newCharacter.name}\n Alter Ego: ${newCharacter.alterEgo}\n Powers: ${newCharacter.abilities}`);
        }

    })

})();
