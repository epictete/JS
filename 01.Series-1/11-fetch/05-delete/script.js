// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {

        const heroID = Number(document.getElementById("hero-id").value);
        const removed = await fetch('http://localhost:3000/heroes' + `/${heroID}`)
        const removeHero = await fetch('http://localhost:3000/heroes' + `/${heroID}`, {
            method: 'delete'
        });
        const data = await removed.json();
        console.log(data);

    });

})();
