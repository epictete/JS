// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

    let target = document.getElementById("target");
    let string = target.innerText;
    target.innerHTML = "";
    let i = 0;
    typeWriter();

    function typeWriter() {
        let delay = Math.floor(Math.random() * 500 + 1);
        if (i < string.length) {
            target.innerHTML += string.charAt(i);
            i++;
            setTimeout(typeWriter, delay);
        }
    }

})();
