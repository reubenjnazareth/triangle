const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calc-hyp-btn");
const outputElement = document.querySelector("#outputHypotenuse");

function calcSumOfsq(a, b) {
    const sumOfsq = a*a + b*b;
    //console.log(sumOfsq)
    return sumOfsq;
} 

function calcHypotenuse() {
    const sumOfsq = calcSumOfsq(Number(sides[0].value), Number(sides[1].value));
    //console.log(sumOfsq);
    const hypotenuseLength = Math.sqrt(sumOfsq);
    //console.log(hypotenuseLength)
    outputElement.innerText = "Hypotenuse Length is " + hypotenuseLength;

} 





calculateBtn.addEventListener("click", calcHypotenuse)
//Number(sides[0].value), Number(sides[1].value)