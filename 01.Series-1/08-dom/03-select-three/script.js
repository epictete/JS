// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here

    const target = document.querySelectorAll(".target");
    for (x of target) {
        x.innerHTML = "owned";
    }

})();
