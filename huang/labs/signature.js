// compute length
var LENGTH_LIMIT = 140;
function validateTextArea() {
    // get the length of string entered
    var inputStr = document.myForm.input.value;
    var length = inputStr.length;
    var delta = LENGTH_LIMIT - length;

    var node = document.getElementsByTagName("h2")[0];
    if (delta > 0) {
        node.innerText = delta + " Characters.";
    } else {
        node.innerText = delta + " Character. Stop Now!"
    }

    var char = inputStr.charCodeAt(length - 1);
    node = document.getElementsByTagName("h3")[0];
    node.innerText = "Last Key in ASCII Code: " + char;
}

var numOfChar = 0;
function init() {
    numOfChar = 0;
    document.getElementsByTagName("h2")[0].innerText = LENGTH_LIMIT + " Characters.";

    document.myForm.input.addEventListener("keyup", function () {
        validateTextArea();
    });
}