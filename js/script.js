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



function ourWorkSwiper() {
    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });
         
    
    
    

}

ourWorkSwiper();
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



/*
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2000)
}
*/



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

// Get the navbar element
const navBar = document.querySelector('.nav-bar');

// Define scroll range (adjust this value to control how much scroll is needed)
const scrollRange = 200; // pixels to complete the transition

// Function to handle scroll events
function handleScroll() {
  const scrollY = window.scrollY;
  
  // Calculate progress (0 to 1) based on scroll position
  let progress = Math.min(scrollY / scrollRange, 1);
  
  // Interpolate values based on progress
  const width = 90 + (10 * progress); // 90% to 100%
  const height = 12 - (3 * progress); // 12vmin to 9vmin
  const marginTop = 2 - (2 * progress); // 2vw to 0vw
  const borderRadius = 20 - (20 * progress); // 20px to 0px
  
  // Apply interpolated styles
  navBar.style.width = width + '%';
  navBar.style.height = height + 'vmin';
  navBar.style.marginTop = marginTop + 'vw';
  navBar.style.borderRadius = borderRadius + 'px';
}

if (window.innerWidth > 650) {
  console.log("Adding scroll event listener");
  window.addEventListener('scroll', handleScroll);
}









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
    animateNumber("event-num1", 0, 20, 1300);
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
  
function slideShow(){
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

}



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



         
    
class ImageCarousel {
            constructor() {
                this.track = document.getElementById('carouselTrack');
                this.slides = document.querySelectorAll('.carousel-slide');
                this.indicators = document.querySelectorAll('.indicator');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                
                this.currentSlide = 0;
                this.totalSlides = this.slides.length;
                this.isAnimating = false;
                this.autoPlayInterval = null;
                this.slidesPerView = this.getSlidesPerView();
                this.maxSlide = this.totalSlides - this.slidesPerView;
                
                this.init();
                this.handleResize();
            }
            
            getSlidesPerView() {
                return window.innerWidth <= 768 ? 1 : 2;
            }
            
            handleResize() {
                window.addEventListener('resize', () => {
                    const newSlidesPerView = this.getSlidesPerView();
                    if (newSlidesPerView !== this.slidesPerView) {
                        this.slidesPerView = newSlidesPerView;
                        this.maxSlide = this.totalSlides - this.slidesPerView;
                        
                        // Adjust current slide if needed
                        if (this.currentSlide > this.maxSlide) {
                            this.currentSlide = this.maxSlide;
                        }
                        
                        this.updateCarousel();
                    }
                });
            }
            
            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => this.goToSlide(index));
                });
                
                // Touch/swipe support
                this.addSwipeSupport();
                
                // Auto-play
                this.startAutoPlay();
                
                // Pause auto-play on hover
                this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
                this.track.addEventListener('mouseleave', () => this.startAutoPlay());
            }
            
            nextSlide() {
                if (this.isAnimating) return;
                this.currentSlide = this.currentSlide >= this.maxSlide ? 0 : this.currentSlide + 1;
                this.updateCarousel();
            }
            
            prevSlide() {
                if (this.isAnimating) return;
                this.currentSlide = this.currentSlide <= 0 ? this.maxSlide : this.currentSlide - 1;
                this.updateCarousel();
            }
            
            goToSlide(index) {
                if (this.isAnimating || index === this.currentSlide) return;
                if (index > this.maxSlide) index = this.maxSlide;
                this.currentSlide = index;
                this.updateCarousel();
            }
            
            updateCarousel() {
                this.isAnimating = true;
                
                const slideWidth = this.slidesPerView === 1 ? 100 : 50;
                const offset = -this.currentSlide * slideWidth;
                this.track.style.transform = `translateX(${offset}%)`;
                
                // Update indicators - highlight based on visible slides
                this.indicators.forEach((indicator, index) => {
                    const isVisible = index >= this.currentSlide && index < this.currentSlide + this.slidesPerView;
                    indicator.classList.toggle('active', isVisible);
                });
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, 600);
            }
            
            addSwipeSupport() {
                let startX = 0;
                let endX = 0;
                
                this.track.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });
                
                this.track.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    const diffX = startX - endX;
                    
                    if (Math.abs(diffX) > 50) {
                        if (diffX > 0) {
                            this.nextSlide();
                        } else {
                            this.prevSlide();
                        }
                    }
                });
            }
            
            startAutoPlay() {
                this.stopAutoPlay();
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 3000);
            }
            
            stopAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }
        }
        
        // Initialize carousel when DOM is loaded





class GridCarousel {
            constructor() {
                this.track = document.getElementById('carousel-govtTrack');
                this.slides = document.querySelectorAll('.carousel-govt-slide');
                
                this.prevBtn = document.getElementById('prevBtn-govt');
                this.nextBtn = document.getElementById('nextBtn-govt');
                
                this.currentSlide = 0;
                this.totalSlides = this.slides.length;
                this.isAnimating = false;
                this.autoPlayInterval = null;
                
                this.init();
            }
            
            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                
                
                // Touch/swipe support
                this.addSwipeSupport();
                
                // Auto-play
                this.startAutoPlay();
                
                // Pause auto-play on hover
                this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
                this.track.addEventListener('mouseleave', () => this.startAutoPlay());
            }
            
            nextSlide() {
                if (this.isAnimating) return;
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateCarousel();
            }
            
            prevSlide() {
                if (this.isAnimating) return;
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateCarousel();
            }
            
            goToSlide(index) {
                if (this.isAnimating || index === this.currentSlide) return;
                this.currentSlide = index;
                this.updateCarousel();
            }
            
            updateCarousel() {
                this.isAnimating = true;
                
                const offset = -this.currentSlide * 100;
                this.track.style.transform = `translateX(${offset}%)`;
                
                // Update indicators
                
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, 600);
            }
            
            addSwipeSupport() {
                let startX = 0;
                let endX = 0;
                
                this.track.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });
                
                this.track.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    const diffX = startX - endX;
                    
                    if (Math.abs(diffX) > 50) {
                        if (diffX > 0) {
                            this.nextSlide();
                        } else {
                            this.prevSlide();
                        }
                    }
                });
            }
            
            startAutoPlay() {
                this.stopAutoPlay();
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 3000);
            }
            
            stopAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }
      }
        
        // Initialize carousel when DOM is lo
document.addEventListener('DOMContentLoaded', () => {
    new ImageCarousel();
    swiperAnimation()

    menuAnimation()
   // loaderAnimation()
    slideShow()
    new GridCarousel();
});        
