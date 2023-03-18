let numRandomOne = Math.floor(Math.random() * 50);
let numRandomTwo = Math.floor(Math.random() * 50);

const arrayLove = ['❤', '❤', '❤', '❤'];


let titleLoves = document.querySelector('.loveIntentos');
titleLoves.innerHTML = `Intentos: ${arrayLove.join(' ')}`

let resultadoReal = numRandomOne + numRandomTwo;

document.querySelector('.num1').textContent = numRandomOne;
document.querySelector('.num2').textContent = numRandomTwo;


let resultado;

let formulario = document.querySelector('form');
let inputSubmit = document.querySelector('.input-number')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    resultado = parseInt(inputSubmit.value);
    inputSubmit.value = ''
    
    if(resultadoReal === resultado) {
        alert(`Suma correcta: ${numRandomOne} + ${numRandomTwo} = ${resultadoReal}`)
        location.reload()
    } else if(arrayLove.length === 1) {
        titleLoves.classList.add('fallidos')
        titleLoves.innerHTML = 'Intentos fallidos...';
        setInterval(() => {
            location.reload()
        }, 3000)
    } 
    else {
        localStorage.setItem('arrayLoves', arrayLove.length)
        titleLoves.innerHTML = `Intentos: ${arrayLove.slice(0, arrayLove.length --).join(' ')}`;
    }
})