
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        let num1 = parseInt(document.getElementById("op-one").value, 10);
        let num2 = parseInt(document.getElementById("op-two").value, 10);

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
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
