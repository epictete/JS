// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

    const target = document.getElementById("target");
    const string = target.textContent;
    let i = 0;
    let forward = true;

    setInterval(move, 50);

    function move() {
        if (forward === true) {
            if (i < string.length - 9) {
                wave();
                i++;
            } else {
                forward = false;
            }
        } else {
            if (i > 0) {
                wave();
                i--;
            } else {
                forward = true;
            }
        }
    }

    function wave() {
        const fontSize = `<span style="font-size: `;
        const fontWeight = `em; font-weight: bold">`;
        let newString = string.substring(0, i)
            + `${fontSize}1.3${fontWeight}` + string.substring(i, i + 1) + `</span>`
            + `${fontSize}1.6${fontWeight}` + string.substring(i + 1, i + 2) + `</span>`
            + `${fontSize}1.9${fontWeight}` + string.substring(i + 2, i + 3) + `</span>`
            + `${fontSize}2.2${fontWeight}` + string.substring(i + 3, i + 4) + `</span>`
            + `${fontSize}2.5${fontWeight}` + string.substring(i + 4, i + 5) + `</span>`
            + `${fontSize}2.2${fontWeight}` + string.substring(i + 5, i + 6) + `</span>`
            + `${fontSize}1.9${fontWeight}` + string.substring(i + 6, i + 7) + `</span>`
            + `${fontSize}1.6${fontWeight}` + string.substring(i + 7, i + 8) + `</span>`
            + `${fontSize}1.3${fontWeight}` + string.substring(i + 8, i + 9) + `</span>`
            + string.substring(i + 9);
        target.innerHTML = newString;
    }

})();
