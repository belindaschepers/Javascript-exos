/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async ()=>{

        try{
            let response = await fetch("http://localhost:3000/heroes");
            let xmen = await response.json();
            console.log(xmen);

            let template = document.querySelector("#tpl-hero").cloneNode(true);

            for(let i=0; i<xmen.length; i++){
                let clone = document.importNode(template.content , true);
                document.getElementById("target").appendChild(clone);
                let name = document.querySelector(`.hero:nth-child(${i+1})>.title>.name`);
                let alterEgo = document.querySelector(`.hero:nth-child(${i+1})>.title>.alter-ego`);
                let powers = document.querySelector(`.hero:nth-child(${i+1})>.powers`);

                name.innerHTML = xmen[i].name + ' (id: ' + xmen[i].id + ')';
                alterEgo.innerHTML = xmen[i].alterEgo;
                powers.innerHTML = xmen[i].abilities;
            }
        }

            catch(e){
                console.log(e);
            }

        
        })

        


    
})();
