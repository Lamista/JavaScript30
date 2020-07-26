const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("click", playMouseSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener("keydown", playSound);

function playMouseSound(event) {
    const info = event;
    const value = findValue(info);
    finalPlay(value);
}

function playSound(event) {
    const value = event.keyCode;
    finalPlay(value);
};

function findValue(info) {
    const inner = info.path[1];
    return inner.getAttribute("data-key");
}

function finalPlay(value) {
    const audio = document.querySelector(`audio[data-key="${value}"]`);
    const key = document.querySelector(`div[data-key="${value}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(event) {
    console.log(event);
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

