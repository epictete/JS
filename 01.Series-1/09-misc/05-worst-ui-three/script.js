// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (updateUI($btn.id), false),
        ),
    );

    function updateUI(id) {
        const input = document.getElementById(id.slice(4));
        const min = Number(input.getAttribute("data-min"));
        const max = Number(input.getAttribute("data-max"));

        input.value = rand(min, max);
        result();
    }

    function result() {
        const one = document.getElementById("part-one").value;
        const two = document.getElementById("part-two").value;
        const three = document.getElementById("part-three").value;
        const four = document.getElementById("part-four").value;
        const target = document.getElementById("target");

        target.innerHTML = `+${one}${two}${three}${four}`;
    }

    function rand(min, max) {
        const rand = Math.floor(Math.random() * (max - min) + 1) + min;
        return rand < 10 ? `0${rand}` : rand;
    }

})();
