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

// active page

const activePage = window.location.pathname
console.log('Página ativa: ' + activePage)

const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active-page')
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


// logo animation

// $('.clients-logo').slick({
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

  $('.clients-logo').slick({
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

//  ----------

// events number

const counters = document.querySelectorAll('.data-num')

counters.forEach(counter => {
  
  const finalCount = counter.dataset.count
  let initialCount = 0
  

  const counting = setInterval(updateCounting, 1) 

  function updateCounting() {

    if(initialCount <= 1000) {
      initialCount+=1
      counter.innerText = initialCount

    } else if(initialCount >= 1000) {
      initialCount += 2
      counter.innerText = (initialCount / 1000).toFixed(1) + 'K+'
    } 

    if(initialCount >= finalCount) {
      clearInterval(counting)
    }
  }
})

