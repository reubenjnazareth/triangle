const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calc-hyp-btn");
const output = document.querySelector("#outputHypotenuse");

function calcSumOfsq(a, b) {
    const sumOfsq = a*a + b*b;
    //console.log(sumOfsq)
    return sumOfsq;
} 

function calcHypotenuse() {
    const sumOfsq = calcSumOfsq(Number(sides[0].value), Number(sides[1].value));
    //console.log(sumOfsq);
    
} 





calculateBtn.addEventListener("click", calcHypotenuse)
//Number(sides[0].value), Number(sides[1].value)