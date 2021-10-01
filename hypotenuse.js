const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calc-hyp-btn");
const outputElement = document.querySelector("#outputHypotenuse");



function calcSumOfsq(a, b) {
    const sumOfsq = a * a + b * b;
    //console.log(sumOfsq)
    return sumOfsq;
}

function calcHypotenuse() {
    var a = Number(sides[0].value);
    var b = Number(sides[1].value);
    if (a < 0 || b < 0) {
        outputElement.innerText = "Invalid entry. Enter values greater than 0 only"
    } else {
        const sumOfsq = calcSumOfsq(a, b);
        //console.log(sumOfsq);
        const hypotenuseLength = Math.sqrt(sumOfsq);
        //console.log(hypotenuseLength)
        outputElement.innerText = "Hypotenuse Length is " + hypotenuseLength + " units";
    }
}

calculateBtn.addEventListener("click", calcHypotenuse)
//Number(sides[0].value), Number(sides[1].value)





calculateBtn.addEventListener("click", calcHypotenuse)