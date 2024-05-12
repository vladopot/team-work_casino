let isFunctionExecuted = false;

function change(id) {
    if (isFunctionExecuted) {
        return;
    }

    const betInput = document.getElementById('bet');  
    const betValue = parseInt(betInput.value, 10);    

    
    if (betValue >= 1 && betValue <= 100) {
        const element = document.getElementById(id);
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("bet.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;

        isFunctionExecuted = true;
    }

    if (betValue >= 101 && betValue <= 999) {
        const element = document.getElementById(id);
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("bet_white.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;

        isFunctionExecuted = true;
    }

    if (betValue >= 1000 && betValue <= 4999) {
        const element = document.getElementById(id);
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("bet_blue.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;

        isFunctionExecuted = true;
    }

    if (betValue >= 5000 && betValue <= 9999) {
        const element = document.getElementById(id);
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("bet_yellow.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;

        isFunctionExecuted = true;
    }

    if (betValue >= 10000 && betValue <= 100000000000000000000000000000000000) {
        const element = document.getElementById(id);
        const xPosition = Math.floor(Math.random() * 101);
        const yPosition = Math.floor(Math.random() * 101);

        element.style.backgroundImage = 'url("bet_red.png")';
        element.style.backgroundSize = '30px 30px';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = `${xPosition}% ${yPosition}%`;

        isFunctionExecuted = true;
    }
}




