let cProbar = document.querySelector(".circle-pro"),
    pValue = document.querySelector(".value");
let pStart = 0;
let pEnd = document.querySelector(".value").innerHTML;
let speed = 100;


let progress = setInterval(() => {
    pStart++;
    pValue.textContent = `${pStart}%`;

    cProbar.style.background = `conic-gradient(#ff3d4f ${pStart * 3.6}deg, #fff8f8 0deg)`
    if (pStart == pEnd) {
        clearInterval(progress);
    }
}, speed);
