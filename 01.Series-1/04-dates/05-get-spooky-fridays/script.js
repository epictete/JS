
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        const year = document.getElementById("year").value;
        let counter = [];

        for (let month = 0; month < 12; month++) {
            let date = new Date(year, month, 13);
            let monthName = date.toLocaleString("en-US", { month: "long" })
            if (date.getDay() == 5) {
                counter.push(monthName);
            }
        }
        alert(counter);
    })

})();
