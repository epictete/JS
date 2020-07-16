

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {

        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();

        const target = document.getElementById("target");
        const template = document.getElementById("tpl-hero");

        data.forEach(elem => {
            let clone = document.importNode(template.content, true);
            clone.querySelector(".name").textContent = elem.name;
            clone.querySelector(".alter-ego").textContent = elem.alterEgo;
            clone.querySelector(".powers").textContent = elem.abilities;
            target.appendChild(clone);
        })

    });

})();
