
    'C4'; 261.63,
    'D4'; 293.66,
    'E4'; 329.63,
    'F4'; 349.23,
    'G4'; 392.00,
    'A4'; 440.00,
    'B4'; 493.88,
    'C5'; 523.25

// Define the song as an array of notes and their durations
const SONG = [
    ['G4', 200], ['A4', 200], ['B4', 200], ['C5', 200], ['B4', 200], ['A4', 200], ['G4', 200],
    ['E4', 200], ['E4', 200], ['F4', 200], ['G4', 200], ['G4', 200], ['F4', 200], ['E4', 200],
    ['D4', 200], ['C4', 200], ['C4', 200], ['D4', 200], ['E4', 200], ['E4', 200], ['D4', 200],
    ['D4', 200], ['E4', 200], ['F4', 200], ['F4', 200], ['E4', 200], ['D4', 200], ['D4', 200], ['C4', 200]
];

function playNote(note, duration) {
    const frequency = NOTES[note];
    if (frequency) {
        music.pitch(frequency, duration);
    } else {
        // If the note is not defined, just wait for the duration
        basic.pause(duration);
    }
}

function playSong() {
    for (let i = 0; i < SONG.length; i++) {
        const [note, duration] = SONG[i];
        playNote(note, duration);
        basic.pause(50); // Pause between notes
    }
}
