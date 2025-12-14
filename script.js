//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
    const message = textInput.value;
    const delay = Number(delayInput.value);

    output.textContent = ""; // clear previous output

    await wait(delay);
    output.textContent = message;
});

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms*1000);
    });
}
