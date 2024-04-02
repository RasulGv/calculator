document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const value = this.textContent;

            if (value === '=') {
                display.value = eval(display.value);
            } else if (value === 'C') {
                display.value = '';
            } else {
                display.value += value;
            }
        });
    }
});