const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVXWYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "";

    options.forEach(option => {
        if(option.checked) {
            staticPassword += characters[option.id];
        }
    });

    console.log(staticPassword);
}

const updateSlider = () => {
    document.querySelector('.pass-length span').innerText = lengthSlider.value;
}
updateSlider();

lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click', generatePassword);
