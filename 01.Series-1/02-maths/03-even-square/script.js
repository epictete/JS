
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let squares = [];

        for (let i = 1; i <= 21; i++) {
            squares.push(Math.pow(i, 2));
        }

        alert(squares);

    });

})();
