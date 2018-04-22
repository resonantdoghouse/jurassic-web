Tone.Transport.bpm.value = 60;

/**
 * Melody
 */
var mainMelody = new Tone.Synth({
  volume: -0.5,
  oscillator: {
    type: "amtriangle",
    harmonicity: 0.5,
    modulationType: "sine"
  },
  envelope: {
    attackCurve: "exponential",
    attack: 0.05,
    decay: 0.2,
    sustain: 0.2,
    release: 1.5
  },
  portamento: 0.01
}).toMaster();

var mainMelodyPart = new Tone.Sequence(
  function(time, note) {
    mainMelody.triggerAttackRelease(note, "16n", time);
  },
  [
    "Bb3",
    [[null, null], ["Bb3", "A3"]],
    "Bb3",
    [[null, null], ["Bb3", "A3"]],
    [["Bb3"], [null, "C4"]],
    [["C4"], [null, "Eb4"]],
    "Eb4",
    [null, ["D4", "Bb3"]], // beat 8
    [["C4"], [null, "A3"]],
    [["F3"], ["D4", "Bb3"]],
    "C4",
    [[null], ["F4", "Bb3"]],
    [["Eb4"], [null, "D4"]],
    [["D4"], [null, "C4"]],
    "C4",
    null, // beat 16
    "Bb3",
    [["A3"], ["Bb4", "A4"]], // beat 19
    "Bb4",
    [[null, null], ["Bb4", "A4"]],
    "Bb4", // beat 26
    [[null, null], ["Bb4", "A4"]],
    [["Bb4"], [null, "C5"]],
    [["C5"], [null, "Eb5"]],
    "Eb5",
    [null, ["D5", "Bb4"]],
    [["C5"], [null, "A4"]],
    [["F4"], ["D5", "Bb4"]],
    "C5",
    [[null], ["F5", "Bb4"]],
    [["Eb5"], [null, "D5"]],
    [["D5"], [null, "C5"]],
    "C5"
  ]
).start(0);

mainMelodyPart.probability = 0.9;
// mainMelodyPart.loopEnd = "4m";

/**
 * Bass Melody
 */
var bassMelody = new Tone.MonoSynth({
  volume: -15,
  oscillator: {
    type: "square8"
  },
  envelope: {
    attack: 0.05,
    decay: 0.3,
    sustain: 0.4,
    release: 0.8
  },
  filterEnvelope: {
    attack: 0.001,
    decay: 0.7,
    sustain: 0.1,
    release: 0.8,
    baseFrequency: 300,
    octaves: 4
  }
}).toMaster();

var bassMelodyPart = new Tone.Sequence(
  function(time, note) {
    bassMelody.triggerAttackRelease(note, "4n", time);
  },
  [
    "Bb2",
    null,
    "Eb2",
    null,
    "Bb2",
    null,
    "Bb2",
    ["Bb2", "Bb2"], // beat 8
    "F2",
    ["F2", "Bb2"],
    "F2",
    [null, "D2"],
    ["Eb2", [null, "F2"]],
    ["F2", [null, "F2"]],
    "F2",
    "F2", // beat 16
    [null, ["F2"]],
    [null, ["F2"]],
    "Bb2", // beat 19
    null,
    "Eb2",
    null,
    "Bb2",
    null,
    "Bb2",
    ["Bb2", "Bb2"], // beat 26
    "F2",
    ["F2", "Bb2"],
    "F2",
    [null, "D2"],
    ["Eb2", [null, "F2"]],
    ["F2", [null, "F2"]],
    "F2",
    "F2" // beat 16
  ]
).start(0);

bassMelodyPart.probability = 0.9;

/**
 * Play Controls
 */
document.querySelector(".dino").addEventListener("click", function(e) {
  Tone.Transport.start();
});

// Tone.Transport.start("+0.1");
