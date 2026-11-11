const button = document.querySelectorAll('.color-btn');
const body = document.querySelector('body');
const colorCode = document.querySelector('.colorCode');
const resetBtn = document.querySelector('#resetColor');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let selectColor = button[i].dataset.color;
        body.style.backgroundColor = selectColor;
        colorCode.textContent = selectColor;
    });
}

resetBtn.addEventListener("click", function() {

    body.style.backgroundColor = "#FFFFFF";

    colorCode.textContent = "#FFFFFF";

});