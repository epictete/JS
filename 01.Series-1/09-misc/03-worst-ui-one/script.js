// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here

    let slider = document.getElementById("slider");
    let target = document.getElementById("target");

    slider.oninput = function () {
        myFunction();
    };

    function myFunction() {
        let val = slider.value;
        target.innerHTML = "0" + val;
    }

})();
