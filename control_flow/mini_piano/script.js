let audioContext;
const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

const btn = document.querySelector("#btn");

const bbtn = document.querySelector("#bbtn");

bbtn.addEventListener("click", () => {
  if (bbtn.innerText === "Begin") {
    bbtn.innerText = "Reload";
    audioContext = new AudioContext();
  } else {
    location.reload();
  }
});

btn.addEventListener("click", () => {
  if (btn.innerText === "Start") {
    btn.innerText = "Stop";
  } else {
    btn.innerText = "Start";
    audioContext.close();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = getNoteDetail(e);
  if (!key) return;
  key.active = true;
  playMusic();
});

document.addEventListener("keyup", (e) => {
  const key = getNoteDetail(e);
  if (!key) return;
  key.active = false;
  playMusic();
});

// Function

// Return Note Details
function getNoteDetail(e) {
  return NOTE_DETAILS.find((n) => n.key === e.key);
}

function playMusic() {
  // Animation
  NOTE_DETAILS.forEach((n) => {
    const keyElement = document.querySelector(`[data-note="${n.note}"]`);
    keyElement.classList.toggle("active", n.active);
    if (n.oscillator != null) {
      n.oscillator.stop();
      n.oscillator.disconnect();
    }
  });

  const activeNotes = NOTE_DETAILS.filter((n) => n.active);
  const gain = 1 / activeNotes.length;
  activeNotes.forEach((n) => {
    startNote(n, gain);
  });
}

function startNote(noteDetails, gain) {
  audioContext.resume();
  noteDetails.autoplay = true;
  const gainNode = audioContext.createGain();
  gainNode.gain.value = gain;
  const oscillator = audioContext.createOscillator();
  oscillator.frequency = noteDetails.frequency;
  oscillator.type = "sine";
  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start();
  noteDetails.oscillator = oscillator;
}
