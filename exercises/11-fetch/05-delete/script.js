/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let showCharacter = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id);
        let character = await response.json();

        console.log(character);
    
    }

     let delCharacter = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id,
        
        {
            method:'DELETE' 
        });

        let deletedCharacter = await response.json();
        console.log(deletedCharacter);

     }

     document.getElementById("run").addEventListener("click", ()=>{
         let deleteId = document.getElementById("hero-id").value;
         
         showCharacter(deleteId);
         delCharacter(deleteId);

     })

})();
