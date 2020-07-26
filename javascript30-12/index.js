const keysPressed = [];
const secretCode = "secret";

window.addEventListener("keyup", (event) => {
    keysPressed.push(event.key);
    keysPressed.splice(-secretCode.length - 1, keysPressed.length - secretCode.length);
    if (keysPressed.join("").includes(secretCode)) {
        cornify_add();
    }
});