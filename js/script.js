const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

/*
function page10Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page10Animation()
*/
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
document.getElementById("menu-icon").addEventListener("click", function () {
    this.classList.toggle("active");
});
function menuAnimation() {

    var menu = document.getElementById("menu")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-200%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2000)
}

swiperAnimation()

menuAnimation()
loaderAnimation()



const centerDiv = document.querySelector('#center');
const page1 = document.querySelector('#page1');
page1.addEventListener('wheel', (event) => {
  console.log(`Scrolled! DeltaY: ${event.deltaY}`);
  
  // Example: Perform an action when scrolling up or down
  if (event.deltaY > 0) {
    console.log('Scrolling down');
  } else {
    console.log('Scrolling up');
  }
});


/*
const navBar = document.querySelector('.nav-bar');
const maxScroll = 300; // Maximum scroll range to complete width reduction

window.addEventListener('scroll', () => {
    const scrollY = Math.min(window.scrollY, maxScroll); // Cap scroll value at maxScroll
    const newWidth = 100 - (scrollY / maxScroll) * 30; // Calculate width (linear interpolation)
    navBar.style.width = `${Math.max(70, newWidth)}%`; // Ensure minimum width is 70%
});
*/


// Select the elements
const contactBtn = document.querySelector(".contact-event");
const arrowDiv = document.querySelector(".arrow-div2");
const contactText =document.querySelector(".contact-event a");

// Add event listeners for hover (mouse over and out)
contactBtn.addEventListener("mouseenter", () => {
    arrowDiv.style.display= "flex"; // Show the hover-div on mouseenter
    contactText.style.marginLeft="1vw";
});

contactBtn.addEventListener("mouseleave", () => {
    arrowDiv.style.display = "none"; // Hide the hover-div on mouseleave
});
contactBtn.addEventListener('click', function () {
    window.location.href = 'contact.html';
});



function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const startTime = Date.now();
  
    function updateNumber() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + progress * range);
  
      element.textContent = currentValue;
  
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
  
    updateNumber();
}
  
  // Animate from 0 to 50 in 1 second
  
const page2=document.getElementById("page2");
page2.addEventListener('mouseenter',()=>{
    animateNumber("event-num1", 0, 10, 1300);
    animateNumber("event-num2", 0, 50, 1300);
    animateNumber("event-num3", 0, 50, 1300);
    animateNumber("event-num4", 0, 20, 1300);
    animateNumber("event-num5", 0, 50, 1300);
    animateNumber("event-num6", 0, 100, 1300);
    animateNumber("event-num7", 0, 50, 1300);
});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
    sessionStorage.setItem('currentPage', window.location.pathname); // Store current page
});
  
window.addEventListener('load', () => {
    const savedPage = sessionStorage.getItem('currentPage');
    const savedPosition = sessionStorage.getItem('scrollPosition');
  
    if (savedPage === window.location.pathname && savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
});
  

var tl=gsap.timeline({
    repeat:-1
});

tl
.to(".image-container",{
    ease: Expo.easeInOut,
    width:"100%",
    stagger:2
},'a')

.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top:0
},'a')
.to(".text h1",{
    delay:2,
    ease: Expo.easeInOut,
    
    stagger:2,
    top:"-100%"
},'a')

