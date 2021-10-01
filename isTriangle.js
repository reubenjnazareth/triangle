const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calcSumOfAngles(angle1, angle2, angle3 ) {
    const sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;
}


function isTriangle() {
    const sumOfAngles = calcSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputElement.innerText = "Yess! It is a TRIANGLE!";
    } else {
        outputElement.innerText = "Oops! It is not a TRIANGLE!";
    }
}


isTriangleBtn.addEventListener("click", isTriangle)
