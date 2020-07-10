// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        function rand100() {
            return Math.floor(Math.random() * 100 + 1);
        }

        const arr = [];
        let sum = 0;

        for (i = 1; i <= 10; i++) {
            num = rand100();
            document.getElementById("n-" + i).innerHTML = num;
            arr.push(num);
            sum += num;
        }

        document.getElementById("min").innerHTML = Math.min(...arr);
        document.getElementById("max").innerHTML = Math.max(...arr);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / arr.length;

        console.log(arr);

    })

})();
