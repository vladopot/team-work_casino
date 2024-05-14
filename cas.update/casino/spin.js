const spin_btn = document.querySelector('.spin');
const countion_count = document.querySelector('.countion_count');
const circ = document.querySelector('#img');
const time = 3000;

function randomizer() {
    const random_number = Math.floor(Math.random() * 36);
    return random_number;
}

function spin() {
    const bet_cell = document.querySelector('.bet');
    if (bet_cell === null) {
        return;
    }
    const interval = setInterval(() => {
        const num = randomizer();
        countion_count.innerHTML = num;
        circ.classList.add('to_spin');
    }, 10);

    setTimeout(() => {
        clearInterval(interval);
        check();
    }, time);
}

function check() {
    const target_num = countion_count.innerHTML;
    const bet_cell = document.querySelector('.bet');
    const bet_cell_value = bet_cell.innerHTML;
    if (bet_cell_value === target_num) {
        alert('You won');
    }
}

spin_btn.addEventListener("click", () => {
    spin();
});
