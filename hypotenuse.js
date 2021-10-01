const sideA = document.querySelector("#side-input-a");
const sideB = document.querySelector("#side-input-b");
const calculateBtn = document.querySelector("#calc-hyp-btn");

function calcSumOfsq (a, b) {
    const sumOfsq = a*a + b*b;
    //console.log(sumOfsq)
    return sumOfsq;
} 

function calcHypotenuse() {
    //const sumOfsq = calcSumOfsq(Number(sideA), Number(sideB));
    console.log(Number(sideA.value));
} 





calculateBtn.addEventListener("click", calcHypotenuse)