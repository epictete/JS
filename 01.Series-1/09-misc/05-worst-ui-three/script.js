// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here

    let buttonArray = Array.from(document.querySelectorAll("button"));
    buttonArray.forEach(elem => elem.addEventListener("click", () => updateUI(elem.id)));

    function updateUI(id) {
        let input = document.getElementById(id.slice(4));
        let min = Number(input.getAttribute("data-min"));
        let max = Number(input.getAttribute("data-max"));

        input.value = rand(min, max);
        result();
    }

    function result() {
        let one = document.getElementById("part-one").value;
        let two = document.getElementById("part-two").value;
        let three = document.getElementById("part-three").value;
        let four = document.getElementById("part-four").value;

        let target = document.getElementById("target");
        target.innerHTML = `+${one}${two}${three}${four}`;
    }

    function rand(min, max) {
        let rand = Math.floor(Math.random() * (max - min) + 1) + min;
        return rand < 10 ? `0${rand}` : rand;
    }

})();
