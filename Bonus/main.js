'use strict'
const container = document.querySelector('.container');
const btnPlay = document.querySelector('button#play');
let difficultyLevel;
function createBox() {
    const divBox = document.createElement('div');

    return divBox
}

// bottone per far comparire la griglia
btnPlay.addEventListener('click', function () {
    container.innerHTML = '';
    container.classList.remove('hidden');
    difficultyLevel = document.querySelector('#difficulty-level').value;
    if (difficultyLevel === 'easy') {
        for (let i = 0; i < 100; i++) {
            // crea l'elemento div
            let boxNumerato = createBox();
            // lo numera
            boxNumerato.innerHTML = `${i + 1}`;
            // aggiunge la classe box
            boxNumerato.classList.add('box');
            boxNumerato.classList.add('easy');

            // bottone che cambia il colore
            boxNumerato.addEventListener('click', function () {
                this.classList.toggle('clicked')
                console.log(`Hai selzionato la casella ${i + 1}`);
            })
            container.appendChild(boxNumerato)
        };
    } else if (difficultyLevel === 'medium') {
        for (let i = 0; i < 81; i++) {
            // crea l'elemento div
            let boxNumerato = createBox();
            // lo numera
            boxNumerato.innerHTML = `${i + 1}`;
            // aggiunge la classe box
            boxNumerato.classList.add('box');
            boxNumerato.classList.add('medium');

            // bottone che cambia il colore
            boxNumerato.addEventListener('click', function () {
                this.classList.toggle('clicked')
                console.log(`Hai selzionato la casella ${i + 1}`);
            })
            container.appendChild(boxNumerato)
        };
    } else if (difficultyLevel === 'hard') {
        for (let i = 0; i < 49; i++) {
            // crea l'elemento div
            let boxNumerato = createBox();
            // lo numera
            boxNumerato.innerHTML = `${i + 1}`;
            // aggiunge la classe box
            boxNumerato.classList.add('box');
            boxNumerato.classList.add('hard');

            // bottone che cambia il colore
            boxNumerato.addEventListener('click', function () {
                this.classList.toggle('clicked')
                console.log(`Hai selzionato la casella ${i + 1}`);
            })
            container.appendChild(boxNumerato)
        };
    };


});