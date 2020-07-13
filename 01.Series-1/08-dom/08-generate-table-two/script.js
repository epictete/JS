// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here

    const target = document.getElementById("target");
    const newTable = document.createElement("table");
    target.appendChild(newTable);
    for (let i = 0; i < 10; i++) {
        let newRow = newTable.insertRow(i)
        for (let j = 0; j < 10; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerHTML = (i + 1) * (j + 1);
        }
    }

})();
