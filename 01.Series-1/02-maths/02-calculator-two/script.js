
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function calc(operation) {

        let num1 = Number(document.getElementById("op-one").value);
        let num2 = Number(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                alert(num1 + num2);
                break;
            case "substraction":
                alert(num1 - num2);
                break;
            case "multiplication":
                alert(num1 * num2);
                break;
            case "division":
                alert(num1 / num2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click", () => (calc($btn.id))
        )
    );
})();
