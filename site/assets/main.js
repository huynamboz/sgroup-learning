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


function animatedHeadPhone(){
    let headPhone = document.querySelectorAll(".slide--earphone--img");
    for(let i=0 ; i< headPhone.length ; i++){
        if(headPhone[i].classList.contains("animated-headphones"))
            headPhone[i].classList.remove("animated-headphones");
    }
    for(let i=0 ; i< headPhone.length ; i++){
            headPhone[i].classList.add("animated-headphones");
    }
}

let slideHeadPhone = new IntersectionObserver((entries, observer) => { 
    // entries : Danh sách các đối tượng chúng ta theo dỏi
    entries.forEach(entry => {
    // Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
    if(entry.isIntersecting){
        animatedHeadPhone();     
    }
    });
}, {rootMargin: "0px 0px -200px 0px"});

slideHeadPhone.observe(document.getElementById("slide--earphone"));


if(!!window.IntersectionObserver){
    let observer = new IntersectionObserver((entries, observer) => { 
        // entries : Danh sách các đối tượng chúng ta theo dỏi
        entries.forEach(entry => {
        // Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
        if(entry.isIntersecting){
            move();
        }
        });
    }, {rootMargin: "0px 0px -200px 0px"});
    observer.observe(document.getElementById("progressBar"));
}
else console.log("not support");