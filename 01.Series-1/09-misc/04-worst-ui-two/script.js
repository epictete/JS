// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here

    let one = document.getElementById("part-one");
    let two = document.getElementById("part-two");
    let three = document.getElementById("part-three");
    let four = document.getElementById("part-four");
    let target = document.getElementById("target");

    one.addEventListener("click", updateUI);
    two.addEventListener("click", updateUI);
    three.addEventListener("click", updateUI);
    four.addEventListener("click", updateUI);

    function updateUI() {
        let current = event.currentTarget;
        let min = Number(current.getAttribute("data-min"));
        let max = Number(current.getAttribute("data-max"));
        let value = Number(current.innerHTML);

        value < max ? value = value + 1 : value = min;
        value < 10 ? value = "0" + value : value = value;

        current.innerHTML = value;
        target.innerHTML = "+" + one.innerHTML + two.innerHTML + three.innerHTML + four.innerHTML;
    }

})();
