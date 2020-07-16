// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {
        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();
        console.log(data);
    })

})();
