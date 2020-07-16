// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {

        const heroID = Number(document.getElementById("hero-id").value);
        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();

        const target = document.getElementById("target");
        const template = document.getElementById("tpl-hero");

        let elem = data[heroID];
        let clone = document.importNode(template.content, true);
        clone.querySelector(".name").textContent = elem.name;
        clone.querySelector(".alter-ego").textContent = elem.alterEgo;
        clone.querySelector(".powers").textContent = elem.abilities;

        while (target.firstChild) {
            target.removeChild(target.firstChild);
        } target.appendChild(clone);

    });

})();
