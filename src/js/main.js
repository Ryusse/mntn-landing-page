import '../css/base.css'
import '../css/style.css'
import '../css/normalize.css'

const header = document.querySelector('.header')
const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

console.log(toggle)
window.onscroll = () => {
  if (window.scrollY > 200) {
    header.classList.add('scroll-active')
  } else {
    header.classList.remove('scroll-active')
  }
}

//Primero guardo el elemento html en una constante
//un observador
//Dentro del obserbador hacer una condicional
//Si el scroll es mas de 200 px se pone una clase de "scroll-active"
//Si no remuevo la clase

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open')
  menu.classList.toggle('open')
})
