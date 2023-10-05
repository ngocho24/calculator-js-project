(function () {
    let screen = document.querySelector("input[name='screen']");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equals = document.querySelector(".btn-equals");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const value = event.target.dataset.num;
            screen.value += value;
        });
    });

    equals.addEventListener("click", function (event) {
        if (screen.value === "") {
            screen.value = "Please enter: ";
        } else {
            
                let answer = eval(screen.value);
                screen.value = answer;
            
        }
    });

    clear.addEventListener("click", function (event) {
        screen.value = "";
    });
})();
