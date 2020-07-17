// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here

    const image = document.querySelector(".material img");
    const source = image.getAttribute("data-hover");

    image.addEventListener("mouseover", () => {
        image.setAttribute("src", source);
    })

})();
