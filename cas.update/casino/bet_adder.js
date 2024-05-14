let isFunctionExecuted = false;
let el = null;
let input_field = document.querySelector('#bet');
const new_game_btn = document.querySelector('.new_game');
const num = document.querySelector('.countion_count');
const circle = document.querySelector('#img');
new_game_btn.addEventListener('click', () => {
    newGame();
});

function change(id) {
    if (isFunctionExecuted) {
        return;
    }
    const betInput = document.getElementById('bet');
    const betValue = parseInt(betInput.value, 10);    
    
    if (betValue >= 1 && betValue <= 100) {
        const element = document.getElementById(id);
        el = element;
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("assets/bet.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
        element.classList.add('bet');

        isFunctionExecuted = true;
    }

    if (betValue >= 101 && betValue <= 999) {
        const element = document.getElementById(id);
        el = element;
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("assets/bet_white.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
        element.classList.add('bet');

        isFunctionExecuted = true;
    }

    if (betValue >= 1000 && betValue <= 4999) {
        const element = document.getElementById(id);
        el = element;
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("assets/bet_blue.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
        element.classList.add('bet');

        isFunctionExecuted = true;
    }

    if (betValue >= 5000 && betValue <= 9999) {
        const element = document.getElementById(id);
        el = element;
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("assets/bet_yellow.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
        element.classList.add('bet');

        isFunctionExecuted = true;
    }

    if (betValue >= 10000 && betValue <= 100000000000000000000000000000000000) {
        const element = document.getElementById(id);
        el = element;
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("assets/bet_red.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
        element.classList.add('bet');

        isFunctionExecuted = true;
    }
}

function newGame() {
    isFunctionExecuted = !isFunctionExecuted;
    el.classList.remove('bet');
    el.classList.backgroundImage = '';
    el.style.backgroundSize = '';
    el.style.backgroundRepeat = '';
    el.style.backgroundPosition = ``;
    input_field.value = '';
    countion_count.innerHTML = '';
    circle.classList.remove('to_spin');
}


