// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here

    const pass1 = document.getElementById("pass-one");
    const valid = document.getElementById("validity");
    const regex = /[0-9].*[0-9]/;

    pass1.addEventListener("input", () => {
        const check = regex.test(pass1.value);
        check && pass1.value.length >= 8 ? valid.innerText = `OK` : valid.innerText = `Not ok`;
    })

})();
//
// 