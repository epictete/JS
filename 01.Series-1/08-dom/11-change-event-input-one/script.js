// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here

    const pass1 = document.getElementById("pass-one");
    const counter = document.getElementById("counter");

    pass1.addEventListener("input", () => {
        pass1.setAttribute("maxlength", 10);
        counter.innerText = `${pass1.value.length}/10`;
    })

})();
