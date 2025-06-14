const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('.input');
const guess_btn = document.querySelector('.guess_btn');
const wrong = document.querySelector('.wrong');
const playagain_btn = document.querySelector('.playagain_btn');
const success_2 = document.querySelector('.success_2');
const success = document.querySelector('.success');
const error_text = document.querySelector('.error_text');
const error = document.querySelector('.error');
const try_btn = document.querySelector('.try_btn');
const info = document.querySelector('.info');

const min = 1;
const max = 10;
let max_attempt = 5;
let attempt = 0



const resetGame = ()=>{
    if(max_attempt === 0){
        wrapper.style.display='none';
        error.style.display = 'flex'
    }else{
        return true
    }
}

const playAgain = ()=>{
    const guess = Math.floor(Math.random() * max) + min;
    wrapper.style.display = 'block';
    success.style.display = 'none';
    error.style.display = 'none';
    max_attempt = 5
    info.textContent = `you have ${max_attempt} attempt remaining`
    attempt = 0;
    input.value = '';
    wrong.textContent = ''
    wrong.style.backgroundColor = '';

}

try_btn.addEventListener('click', playAgain);

playagain_btn.addEventListener('click', playAgain)

guess_btn.addEventListener('click', ()=>{
    const guess = Math.floor(Math.random() * max) + min;
    const value = input.value;
    const toNumber = Number(value);
    attempt++
    if(toNumber == guess){
      success.style.display = 'flex';
      success_2.textContent = `you get it in ${attempt} guesses`;
      wrapper.style.display = 'none';

    }else if(toNumber < guess){
        wrong.textContent = 'too low 😩try again'
        wrong.style.backgroundColor = '#FFCDD2';
        input.value = '';
        max_attempt--
        info.textContent = `You have ${max_attempt} attempts remaining`
    } else if(toNumber > guess){
       wrong.textContent = 'too high 😩try again'
        wrong.style.backgroundColor = '#FFCDD2';
        input.value = '';
        max_attempt--
        info.textContent = `You have ${max_attempt} attempts remaining`
    }

    resetGame();
})

