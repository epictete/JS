// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    const target = document.getElementById("target");
    const string = target.textContent;
    let i = 0;
    let forward = true;

    setInterval(move, 100);

    function move() {
        if (forward === true) {
            if (i <= string.length) {
                wave();
                i++;
            } else {
                forward = false;
            }
        } else {
            if (i > -10) {
                wave();
                i--;
            } else {
                forward = true;
            }
        }
    }

    function wave() {
        let newString = string.substring(0, i)
            + '<span style="font-size: 1.3em; font-weight: bold">' + string.substring(i, i + 1) + '</span>'
            + '<span style="font-size: 1.6em; font-weight: bold">' + string.substring(i + 1, i + 2) + '</span>'
            + '<span style="font-size: 1.9em; font-weight: bold">' + string.substring(i + 2, i + 3) + '</span>'
            + '<span style="font-size: 2.2em; font-weight: bold">' + string.substring(i + 3, i + 4) + '</span>'
            + '<span style="font-size: 2.5em; font-weight: bold">' + string.substring(i + 4, i + 5) + '</span>'
            + '<span style="font-size: 2.2em; font-weight: bold">' + string.substring(i + 5, i + 6) + '</span>'
            + '<span style="font-size: 1.9em; font-weight: bold">' + string.substring(i + 6, i + 7) + '</span>'
            + '<span style="font-size: 1.6em; font-weight: bold">' + string.substring(i + 7, i + 8) + '</span>'
            + '<span style="font-size: 1.3em; font-weight: bold">' + string.substring(i + 8, i + 9) + '</span>'
            + string.substring(i + 9);
        target.innerHTML = newString;
    }

})();
