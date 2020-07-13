// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here

    let pass1 = document.getElementById("pass-one");
    let valid = document.getElementById("validity");
    let twoDigits = new RegExp("[0-9].*[0-9]");
    let check = twoDigits.test.pass1;

    pass1.addEventListener("input", () => {

        if (check) {
            valid.innerText = "OK";
        } else {
            valid.innerText = "Not ok";
        }
    })

})();
// pass1.value.length >= 8 &&