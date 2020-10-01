
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    // key.addEventListener('click', () => playNote(key));
     key.addEventListener('click', () => playNote());
});

function playNote() {
    console.log('Test');
}

// function playNote(key) {
//     const noteAudio = document.getElementById(key.dataset.note);
//     noteAudio.play();
// }