/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        function validation(field) {
            if (document.getElementById("pass-one").value == '' || document.getElementById("pass-two").value == '') {
              alert('Tous les champs ne sont pas remplis');
              }
            else if (document.getElementById("pass-one").value != document.getElementById("pass-two").value) {
              alert('Les mots de passe ne sont pas identiques!');
    
              }
            else if (document.getElementById("pass-one").value == document.getElementById("pass-two").value) {
                alert("Merci! Votre mot de passe a été enregistré")
              }
            else {
    
              return false;
              }
            }
            validation();
        });
})();
