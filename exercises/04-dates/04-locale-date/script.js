/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let date = new Date();
    let dayOfWeek = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();

    if (dayOfWeek == 0) {
        dayOfWeek = "Dimanche";
    }
    else if (dayOfWeek == 1) {
        dayOfWeek = "Lundi";
    }
    else if (dayOfWeek==2) {
        dayOfWeek = "Mardi";
    }
    else if (dayOfWeek==3) {
        dayOfWeek = "Mercredi";
    }
    else if (dayOfWeek==4) {
        dayOfWeek = "Jeudi";
    }
    else if (dayOfWeek==5) {
        dayOfWeek = "Vendredi";
    }
    else if (dayOfWeek==6) {
        dayOfWeek = "Samedi";
    }
    else {
        close;
    }

    document.getElementById("target").innerHTML = "Nous sommes le " +dayOfWeek+ " " +day+ "/"+month+"/"+year+", "+hour+ ":"+min+" !";
})();
