const input = document.querySelectorAll(".side-input");
const outputElement = document.querySelector("#outputArea");
const calcAreaBtn = document.querySelector("#calc-area-btn");

function Area() {
    var a = Number(input[0].value);
    var b = Number(input[1].value);
    if (a < 0 || b < 0) {
        outputElement.innerText = "Invalid entry. Enter values greater than 0 only"
    } else {
    var triangleArea = (a * b / 2);

    // console.log(triangleArea);
    // console.log(Number(input[0].value) * Number(input[1].value) / 2);
    outputElement.innerText = "Area of Triangle: " + triangleArea + " units sq.";
}
}


calcAreaBtn.addEventListener("click", Area)