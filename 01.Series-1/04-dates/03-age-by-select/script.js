
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let dob = new Date(year, month, day);
        let diff = Date.now() - dob.getTime();
        let age = new Date(diff);
        alert(Math.abs(age.getUTCFullYear() - 1970));
    })

})();
