import * as Tone from "tone";

class TonePlayerClass {
    static synth = new Tone.Synth().toDestination();
    static poly_synth = new Tone.PolySynth().toDestination();

    constructor() {
        this.two_octave_notes_range = [
            "Cb4", "C4", "C#4",
            "Db4", "D4", "D#4",
            "Eb4", "E4",
            "F4", "F#4",
            "Gb4", "G4", "G#4",
            "Ab4", "A4", "A#4",
            "Bb4", "B4",
            "Cb5", "C5", "C#5",
            "Db5", "D5", "D#5",
            "Eb5", "E5",
            "F5", "F#5",
            "Gb5", "G5", "G#5",
            "Ab5", "A5", "A#5",
            "Bb5", "B5",
            "Cb6", "C6"
        ];
    }

    play_chord(notes) {
        const now = Tone.now();
        this.play_note_by_note(notes, now);
        TonePlayerClass.poly_synth.triggerAttackRelease(
            this.check_alteration_font_and_add_octaves(notes), 1, now + 2
        );
    }

    play_note_by_note(notes, time) {
        const now = time ? time : Tone.now();
        this.check_alteration_font_and_add_octaves(notes).forEach((note, index) => {
            TonePlayerClass.synth.triggerAttackRelease(note, "8n", now + (index / 2), 0.6);
        });
    }

    check_alteration_font_and_add_octaves(notes) {
        notes = notes.map(note => note.replace("♯", "#").replace("♭", "b"));

        // add octave to all notes
        const notes_with_octave = [];
        const index = this.two_octave_notes_range.findIndex(note => note.slice(0, -1) === notes[0]);

        const array_splice = this.two_octave_notes_range.slice(index, this.two_octave_notes_range.length);

        notes.forEach(note => {
            const note_with_octave = array_splice.find(range_note => range_note.slice(0, -1) === note);
            if (note_with_octave) {
                notes_with_octave.push(note_with_octave);
            }
        });

        return notes_with_octave;
    }
}

export default TonePlayerClass;