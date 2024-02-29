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

