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
    var menu = document.getElementById("menu");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");

    var flag = 0; 

    menu.addEventListener("click", function () {
        if (flag === 0) {
            full.style.top = "0";
            navimg.style.opacity = "0";
            flag = 1;
        } else {
            full.style.top = "-200%";
            navimg.style.opacity = "1";
            flag = 0;
        }
    });

    
    full.addEventListener("click", function () {
        full.style.top = "-200%"; 
        navimg.style.opacity = "1";
        flag = 0;
    });
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
  
 
  if (event.deltaY > 0) {
    console.log('Scrolling down');
  } else {
    console.log('Scrolling up');
  }
});



const contactBtn = document.querySelector(".contact-event");
const arrowDiv = document.querySelector(".arrow-div2");
const contactText =document.querySelector(".contact-event a");


contactBtn.addEventListener("mouseenter", () => {
    arrowDiv.style.display= "flex"; 
    contactText.style.marginLeft="1vw";
});

contactBtn.addEventListener("mouseleave", () => {
    arrowDiv.style.display = "none"; 
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
    sessionStorage.setItem('currentPage', window.location.pathname); 
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




document.addEventListener('DOMContentLoaded', function() {
    const centerDiv = document.getElementById('center');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollProgress = Math.min(scrollTop / 500, 1); 
      
      
      let scale = 1 - (0.3 * scrollProgress);
      
      
      let opacity = 1 - scrollProgress;
      
      
      centerDiv.style.transform = `scale(${scale})`;
      centerDiv.style.opacity = opacity;
      
      lastScrollTop = scrollTop;
    });
  });


function ourWorkSwiper() {
    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper(".mySwiper", {
          
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          
          
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
          
          loop: true,                 
          autoplay: {
            delay: 1000,              
            disableOnInteraction: false, 
          },
          
          
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          },
          
          
          a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }
        });
      });
    
    
    

}

ourWorkSwiper();
