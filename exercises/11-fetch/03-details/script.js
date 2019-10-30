/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let templ = document.querySelector("#tpl-hero").cloneNode(true);
    let clone = document.importNode(templ.content, true);

    document.getElementById("target").appendChild(clone);

    document.getElementById("run").addEventListener("click", ()=>{
        let i = (document.getElementById("hero-id").value-1); //index commence à 0 , premier id=1 donc value -1

        async function showInList(){
            try{
                let reponse = await fetch ("http://localhost:3000/heroes");
                let characters = await reponse.json();

                let name = document.querySelector(`.hero>.title>.name`);
                let alterEgo = document.querySelector(`.hero>.title>.alter-ego`);
                let powers = document.querySelector('.hero>.powers');

                name.innerHTML = characters[i].name;
                alterEgo.innerHTML = characters[i].alterEgo;
                powers.innerHTML = characters[i].abilities;
            }

            catch(e){
                console.log(e);

            }
        }

            showInList();

        })

    
})();
