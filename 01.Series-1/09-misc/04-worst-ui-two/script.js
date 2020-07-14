// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here

    let target = document.getElementById("target");
    let string = target.innerText;

    // One

    let one = document.getElementById("part-one");
    let oneMin = one.getAttribute("data-min");
    let oneMax = one.getAttribute("data-max");

    one.addEventListener("click", () => {
        let newOne = "0" + (oneMin + 1);
        target.innerHTML.substring(0, 4) = newOne;
    })

    // Two

    let two = document.getElementById("part-two");
    let three = document.getElementById("part-three");
    let four = document.getElementById("part-four");

})();
