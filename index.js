const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('.input');
const guess_btn = document.querySelector('.guess_btn');
const wrong = document.querySelector('.wrong');
const playagain_btn = document.querySelector('.playagain_btn');
const success_1 = document.querySelector('.success_1');
const success_2 = document.querySelector('.success_2');
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

guess_btn.addEventListener('click', ()=>{
    const guess = Math.floor(Math.random() * max) + min;
    const value = input.value;
    const toNumber = Number(value);
    attempt++
    if(toNumber == guess){
       console.log('yayy you get it');
       console.log(`you get the number in ${attempt}`)
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