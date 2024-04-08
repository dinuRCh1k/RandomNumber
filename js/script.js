const input = document.querySelector('.input');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
const randomNumberFunction = () => Math.trunc(Math.random() * 20) + 1;
const Count = document.querySelector('.count');
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const hui = document.querySelector('.hui');
const pohui = document.querySelector('.pohui ');
const huiZnaet = document.querySelector('.hui-znaet');
let count = 20;
btn.addEventListener('click', function() {
    const numberInput = Number(input.value);
    if (!numberInput) {
        hui.textContent = 'введи число';
    }
    else if(numberInput > 20) {
        hui.textContent = 'ПОШЕЛ НАХУЙ';
    }
    else if (numberInput === randomNumber) {
        body.style.background = '#BDDA13';
        hui.textContent = 'Угадал пидорас!';
        huiZnaet.style.width = '18rem';
        huiZnaet.textContent = `${randomNumber}`;
    } else if(count > 1) {
        count--;
        Count.textContent = `Счет: ${count}`;
        hui.textContent = numberInput > randomNumber ? 'число меньше!' : 'число больше';
    } else {
        hui.textContent = 'Проиграл АХАХАХАХАХ';
        Count.textContent = 'Счет: 0';
    }
});
pohui.addEventListener('click', function() {
    count = 20;
    body.style = '';
    Count.textContent = `Счет: ${count}`;
    huiZnaet.textContent = '?';
    hui.textContent = 'Угадай число заново выблядок';
    randomNumber = randomNumberFunction();
});