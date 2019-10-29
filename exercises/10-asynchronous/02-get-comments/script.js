/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let erreur = "Erreur de script";

    document.getElementById("run").onclick = function (){

        window.lib.getPosts((erreur, articles) => {
            console.log (articles);

            const ids = [];
            for (const article of articles){
            ids.push (article.id);
            for (const id of ids) {
                lib.getComments(id, (error, commentaire) => {
                    article.comments = commentaire;

                });
            }
        }

    });
    }
})();
