// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    let target = document.getElementById("target");
    let string = target.textContent;

    for (let i = 0; i < string.length; i++) {
        task(i);
    }

    function task(i) {
        setTimeout(function () {
            let newString = string.substring(0, i)
                + '<span style="font-size: 1.3em">' + string.substring(i, i + 1) + '</span>'
                + '<span style="font-size: 1.6em">' + string.substring(i + 1, i + 2) + '</span>'
                + '<span style="font-size: 1.9em">' + string.substring(i + 2, i + 3) + '</span>'
                + '<span style="font-size: 2.2em">' + string.substring(i + 3, i + 4) + '</span>'
                + '<span style="font-size: 2.5em">' + string.substring(i + 4, i + 5) + '</span>'
                + '<span style="font-size: 2.2em">' + string.substring(i + 5, i + 6) + '</span>'
                + '<span style="font-size: 1.9em">' + string.substring(i + 6, i + 7) + '</span>'
                + '<span style="font-size: 1.6em">' + string.substring(i + 7, i + 8) + '</span>'
                + '<span style="font-size: 1.3em">' + string.substring(i + 8, i + 9) + '</span>'
                + string.substring(i + 10, string.length);
            target.innerHTML = newString;
        }, 100 * i);
    }

})();
