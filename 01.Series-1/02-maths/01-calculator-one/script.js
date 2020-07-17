
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let one = document.getElementById("op-one");
    let two = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function () {
        let num1 = Number(one.value);
        let num2 = Number(two.value);
        alert(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        let num1 = Number(one.value);
        let num2 = Number(two.value);
        alert(num1 - num2);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        let num1 = Number(one.value);
        let num2 = Number(two.value);
        alert(num1 * num2);
    });

    document.getElementById("division").addEventListener("click", function () {
        let num1 = Number(one.value);
        let num2 = Number(two.value);
        alert(num1 / num2);
    });
})();
