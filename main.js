const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicarm em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* MUDAR O HEADER DA PÁGINA QUANDO DER O SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changerHeaderWhenScroll(){

  if (window.scrollY >= navHeight) {
    //SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else {
    // MENOR QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
}  
  

/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mouserwheel: true,
  keyboard: true,
  breakpoints: {
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social

  `,
  { interval: 100 }
)

/*Botão para voltar ao topo */
function backToTop(){
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }

}

/*Menu ativo confome a seção visivel na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections){

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
     document
     .querySelector('nav ul li a[href*=' + sectionId + ']')
     .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }

}


/*When Scrool */

window.addEventListener('scroll', function () {
   changerHeaderWhenScroll()
   backToTop()
   activateMenuAtCurrentSection()
})