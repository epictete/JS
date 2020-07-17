// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here

    const attribute = document.getElementById("source").getAttribute("data-image");
    const image = document.createElement("img");

    image.setAttribute("src", attribute);
    document.getElementById("target").appendChild(image);
    document.querySelector(".material").removeChild(source);

})();
