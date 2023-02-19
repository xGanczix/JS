function playSound(x) {
    const sound = document.querySelector(`audio[data-key="${x.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${x.keyCode}"]`);
    sound.currentTime = 0;
    sound.play();
}

window.addEventListener("keydown", playSound);

const recordedSound = {
    "10": null,
    "11": null,
    "12": null,
    "13": null
}

function recordSound(channel) {
    const record = (x) => {
        const sound = document.querySelector(`audio[data-key="${x.keyCode}"]`);
        recordedSound[channel] = sound;
    };

    window.addEventListener("keydown", record);

    setTimeout(() => {
        window.removeEventListener("keydown", record);
    }, 1000);
}

function playRecordedSound(channel) {
    if (recordedSound[channel] === null) {
        window.alert("Nie ma żadnego nagrania");
        return;
    }
    recordedSound[channel].play();
    recordedSound[channel].currentTime = 0;
}

document.querySelector("#channel10-record").addEventListener("click", () => { recordSound(10); });
document.querySelector("#channel11-record").addEventListener("click", () => { recordSound(11); });
document.querySelector("#channel12-record").addEventListener("click", () => { recordSound(12); });
document.querySelector("#channel13-record").addEventListener("click", () => { recordSound(13); });

document.querySelector("#channel10-play").addEventListener("click", () => { playRecordedSound(10); });
document.querySelector("#channel11-play").addEventListener("click", () => { playRecordedSound(11); });
document.querySelector("#channel12-play").addEventListener("click", () => { playRecordedSound(12); });
document.querySelector("#channel13-play").addEventListener("click", () => { playRecordedSound(13); });

document.querySelector("#play-all").addEventListener("click", () => { playRecordedSound(10); playRecordedSound(11); playRecordedSound(12); playRecordedSound(13); });