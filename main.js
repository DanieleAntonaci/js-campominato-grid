'use strict'
const container = document.querySelector('.container');
const btnPlay = document.querySelector('button#play')

for (let i = 0; i < 100; i++) {
    // crea l'elemento div
    let boxNumerato = createBox();
    // lo numera
    boxNumerato.innerHTML = `${i + 1}`;
    // aggiunge la classe box
    boxNumerato.classList.add('box');
    // bottone che cambia il colore
    boxNumerato.addEventListener('click', function () {
        this.classList.toggle('clicked')
        console.log(`Hai selzionato la casella ${i + 1}`);
    })
    container.appendChild(boxNumerato)
};

function createBox() {
    const divBox = document.createElement('div');

    return divBox
}

// bottone per far comparire la griglia
btnPlay.addEventListener('click', function () {
    container.classList.remove('hidden');
})