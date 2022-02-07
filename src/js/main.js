import '../css/base.css'
import '../css/style.css'
import '../css/normalize.css'

const header = document.querySelector('header')

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add('scroll-active')
  } else {
    header.classList.remove('scroll-active')
  }
}
