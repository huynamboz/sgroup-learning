let i = 0;
function move() {
    if (i == 0) {
        i = 1;
        let elem1 = document.getElementById("progress-info");
        let elem2 = document.getElementById("progress-app");
        let elem3 = document.getElementById("progress-user");
        let text1 = document.getElementById("info");
        let text2 = document.getElementById("app");
        let text3 = document.getElementById("user");
        let width1 = 1,width2 =1, width3 = 1;
        let id1 = setInterval(frame1, 25);
        let id2 = setInterval(frame2, 25);
        let id3 = setInterval(frame3, 25);
        function frame1() {
            if (width1 >= 52) {
                clearInterval(id1);
                i = 0;
            } else {
                width1++;
                text1.innerHTML = `${width1 + "%"}`;
                elem1.style.width = width1 + "%";
            }
        }
        function frame2() {
            if (width2 >= 97) {
                clearInterval(id2);
                i = 0;
            } else {
                width2++;
                text2.innerHTML = `${width2 + "%"}`;
                elem2.style.width = width2 + "%";
            }
        }
        function frame3() {
            if (width3 >= 92) {
                clearInterval(id3);
                i = 0;
            } else {
                width3++;
                text3.innerHTML = `${width3 + "%"}`;
                elem3.style.width = width3 + "%";
            }
        }
    }
}
move();