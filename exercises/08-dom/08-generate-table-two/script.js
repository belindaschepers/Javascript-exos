/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let Tableau = document.getElementsByTagName("div")[2];
     

    let table = document.createElement("table");
    let tableT = document.createElement("tbody");
   

    for (let i = 0; i < 10; i++) {

      let row = document.createElement("tr");
   
      for (let j = 0; j < 10; j++) {

        let cell = document.createElement("td");
        let cellText = document.createTextNode((i+1)*(j+1));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   

      tableT.appendChild(row);
    }
   

    table.appendChild(tableT);

    Tableau.appendChild(table);
})();
