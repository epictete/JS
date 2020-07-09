
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    // let year = now.getFullYear();
    // let month = now.getMonth();
    // let day = now.getDay();
    // let date = now.getDate();
    // let hour = now.getHours();
    // let min = now.getMinutes();
    document.getElementById("target").innerHTML = now.toLocaleDateString('en-US', options);;

})();
