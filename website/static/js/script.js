const barsButton = document.querySelector('.fa-solid')
const dropDown = document.querySelector('.nav-dropdown')

if(screen.innerWidth > 952) {
    dropDown.style.display = 'none'
} 

barsButton.addEventListener('click', () => {
    if(dropDown.style.display === 'none') {
        dropDown.style.display = 'block'
        barsButton.classList.remove('barsButton')
        barsButton.classList.add('fa-x')
    } else {
        dropDown.style.display = 'none'
        barsButton.classList.remove('fa-x')
        barsButton.classList.add('barsButton')
    }
})

// scroll window animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// services redirect

const estateButton = document.querySelector('.estate')
const cftvButton = document.querySelector('.monitoring')
const personalButton = document.querySelector('.personal')
const eventButton = document.querySelector('.event')

function redirectAndScroll(button, targetId) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 

        window.location.href = './servicos.html' + targetId;

        setTimeout(() => {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    });
}

redirectAndScroll(estateButton, '#seguranca-patrimonial');
redirectAndScroll(cftvButton, '#monitoramento');
redirectAndScroll(personalButton, '#seguranca-pessoal');
redirectAndScroll(eventButton, '#eventos');



// logo animation

$('.clients-logo').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  });

//  ----------
