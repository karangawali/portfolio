/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink =document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop:true,
    spaceBetween: 24,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView:2,
            spcaeBetween:-56,
        }}
});


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
/*const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()

    if(contactName.value === ""|| contactEmail.value===""|| contactProject.value===""){
        contactMessage.classList.remove("color-blue")
        contactMessage.classList.add("color-red")

        contactMessage.textContent="Write all the input fields📝"
    }else{
        emailjs.sendForm('service_zwrfwvi','template_945p9q4','#contact-form','1aC_R0N1JDIwV0GxQ')
            .then(() =>{
                contactMessage.classList.add('color-blue')
                contactMessage.textContent='Message sent✅'

                setTimeout(() => {
                    contactMessage.textContent=''
                },5000)
            },(error) =>{
                alert('OOPS! SOMETHING HAS FAILED...',error)
            })
        contactName.value=""
        contactEmail.value=""
        contactProject.value=""    
    }
}
contactForm.addEventListener('submit',sendEmail)*/


function Sendmail(){
    var params = {
        from_name: document.getElementById("contact-name").value,
        email_id: document.getElementById("contact-email").value,
        message: document.getElementById("contact-project").value
    }
    emailjs.send("Your service Id", "Your Template", params).then(function(res){
        alert("Success!" + res.status)
    })
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/*const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY=window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = current.querySelector('.nav__menu a[href*='+ sectionId +']')
        
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll',scrollActive)*/

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')                                               
}

window.addEventListener('scroll',scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme=()=> document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'ri-moon-line': 'ri-sun-line'

if (selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon==="ri-moon-line" ? 'add': 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon)
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById("header")
    this.scrollY>= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}

window.addEventListener('scroll',scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay:400,
})
sr.reveal(`.home__data, .projects__container,.footer__container`)
sr.reveal(`.home__info div`,{delay:600, origin:"bottom", interval:100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`,{origin:'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`,{origin:'right'})
sr.reveal(`.qualification__content, .services__card`,{interval:100})




