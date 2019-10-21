var numberBtn = document.getElementsByClassName("number");
var display = document.getElementById("display");
var operatorBtn = document.getElementsByClassName("operator");

var displayValue = 0;

const updateDisplayValue = (clickObj) => {
    const btnText = clickObj.target.innerHTML;
    console.log(btnText);
}


for (var i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener("click", updateDisplayValue, false);
};

for (var i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener("click", performOperation, false);
};