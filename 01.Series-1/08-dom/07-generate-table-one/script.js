// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here

    const target = document.getElementById("target");
    const newTable = document.createElement("table");
    target.appendChild(newTable);
    for (let i = 0; i < 10; i++) {
        newTable.insertRow(0).insertCell(0);
    }

})();
