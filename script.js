// Mapping the codes
const codes = {
    "FAVEWAVE": "task7.html",     // First code to 7task.html
    "DATE": "task5.html",     // Second code to 5task.html
    "BIRTHDAY": "task6.html",   // Third code to 6task.html
    "GAME": "task4.html",  // Fourth code to 4task.html
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const userInput = codeInput.value.trim();

    if (codes[userInput]) {
        message.textContent = "Congrats! Let's Go!";
        setTimeout(() => {
            window.location.href = codes[userInput];
        }, 2000);
    } else {
        message.textContent = "Try again...";
    }
});