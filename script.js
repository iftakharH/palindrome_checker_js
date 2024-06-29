document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("text-input");
    const checkButton = document.getElementById("check-btn");
    const resultElement = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const inputValue = inputElement.value.trim(); 

        if (inputValue === "") {
            alert("Please input a value.");
            return;
        }

        const cleanedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversedValue = cleanedValue.split("").reverse().join("");

        if (cleanedValue === reversedValue) {
            resultElement.textContent = `${inputValue} is a palindrome.`;
        } else {
            resultElement.textContent = `${inputValue} is not a palindrome.`;
        }
    });
});
