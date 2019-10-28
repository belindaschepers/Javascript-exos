/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let tab = document.getElementsByTagName("div");
    let table = document.createElement("table");
    let tabBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("Line"+(i+1));
        let row = document.createElement("tr");

        cell.appendChild(cellText);
        row.appendChild(cell);
        
        tabBody.appendChild(row);

        table.appendChild(tab);

        tab.appendChild(table);
    }


})();
