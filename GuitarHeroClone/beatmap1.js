let notes = [];
let noteSpeed = 25;
let score = 0;
let scoreCounted = false;

class Beatmap {
    constructor() {
        notes[0] = new NoteBuilder(1, 120, noteSpeed);
        notes[1] = new NoteBuilder(2, 125, noteSpeed);
        notes[2] = new NoteBuilder(3, 130, noteSpeed);
        notes[3] = new NoteBuilder(4, 135, noteSpeed);
        notes[4] = new NoteBuilder(3, 140, noteSpeed);
        notes[5] = new NoteBuilder(2, 145, noteSpeed);
        notes[6] = new NoteBuilder(1, 150, noteSpeed);
        notes[7] = new NoteBuilder(2, 155, noteSpeed);
        notes[8] = new NoteBuilder(3, 160, noteSpeed);
        notes[9] = new NoteBuilder(4, 165, noteSpeed);
        notes[10] = new NoteBuilder(3, 170, noteSpeed);
        notes[11] = new NoteBuilder(2, 175, noteSpeed);
        notes[12] = new NoteBuilder(1, 180, noteSpeed);
        notes[13] = new NoteBuilder(2, 185, noteSpeed);
        notes[14] = new NoteBuilder(3, 190, noteSpeed);
        notes[15] = new NoteBuilder(4, 195, noteSpeed);


    }

    show() {
        for (let i = 0; i < notes.length; i++) {
            notes[i].show();

            if (notes[i].noteTVal < frameCount) {
                notes[i].y += notes[i].ySpeed;
            }
            // notes[i].y = 0 + notes[i].r;

            if (scoreCounted == false && keyCode == 65 && notes[i].y + notes[i].r > height - 70 && notes[i].y < height && notes[i].lane == 1) {
                score = score + 300;
                scoreCounted = true;
               
            } else if (scoreCounted == false && keyCode == 83 && notes[i].y + notes[i].r > height - 70 && notes[i].y < height && notes[i].lane == 2) {
                score = score + 300;
                scoreCounted = true;
                
            } else if (scoreCounted == false && keyCode == 75 && notes[i].y + notes[i].r > height - 70 && notes[i].y < height && notes[i].lane == 3) {
                score = score + 300;
                scoreCounted = true;
                
            } else if (scoreCounted == false && keyCode == 76 && notes[i].y + notes[i].r > height - 70 && notes[i].y < height && notes[i].lane == 4) {
                score = score + 300;
                scoreCounted = true;
                
            }
            if (notes[i].y > height) {
                scoreCounted = false;
            }
        }
        console.log(score);
    }
}