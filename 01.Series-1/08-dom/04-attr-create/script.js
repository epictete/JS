// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    var source = document.getElementById("source")
    var attribute = source.getAttribute("data-image");
    var image = document.createElement("img");
    image.setAttribute("src", attribute);
    var target = document.getElementById("target");
    target.appendChild(image);
    document.querySelector(".material").removeChild(source);

})();
