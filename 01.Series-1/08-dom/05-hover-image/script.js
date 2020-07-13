// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here

    var image = document.querySelector(".material img");
    var source = image.getAttribute("data-hover");

    image.addEventListener("mouseover", () => {
        image.setAttribute("src", source);
    })

})();
