// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here

    let target = document.getElementById("target");

    document.getElementById("increment").addEventListener("click", () => {

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }

        target.innerHTML = localStorage.clickcount;
    })

})();
