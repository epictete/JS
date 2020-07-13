// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here

    document.getElementById("run").addEventListener("compositionupdate", () => {
        let pass1 = document.getElementById("pass-one");
        let counter = document.getElementById("counter");
        counter.innerHTML = `${event.data}/10`;
    })

})();
