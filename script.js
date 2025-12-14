const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", async (e) => {
    e.preventDefault(); // ✅ VERY IMPORTANT (prevents reload)

    const message = textInput.value;
    const delay = Number(delayInput.value);

    output.textContent = ""; // must stay empty initially

    await wait(delay);

    output.textContent = message;
});

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
