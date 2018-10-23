// Everyting Notes, building them and placing them. Values taken from the beatmap file

// Define basics of the note and values to build from
class NoteBuilder {
    // Properties of the note, take in a noteLane and noteLength
    constructor(noteLane, noteTime, mapSpeed) {
        // Define properties
        this.noteTVal = noteTime;
        this.r = 85;
        this.ySpeed = mapSpeed;
        this.y = 0 - this.r * 2;
        this.lane = noteLane;
        // Set X position of note based on noteLane (with 5 pixel border around note)
        if (noteLane == 1) {
            this.x = 13;
        } else if (noteLane == 2) {
            this.x = 118;
        } else if (noteLane == 3) {
            this.x = 223;
        } else {
            this.x = 328;
        }
        
    }
    // Behaviours of the notes

    // Draw the note on the screen from defined values
    show() {
        fill(255);
        ellipseMode(CORNER)
        ellipse(this.x, this.y, this.r);
    }
}