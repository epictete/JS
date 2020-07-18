// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here

    const slider = document.getElementById("slider");
    const target = document.getElementById("target");

    slider.oninput = () => {
        const val = slider.value;
        target.innerHTML = `0${val}`;
    };

})();
