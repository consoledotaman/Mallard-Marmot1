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

/*
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
*/

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
    full.addEventListener("click", function () {
        full.style.top = "-200%"; 
        navimg.style.opacity = "1";
        flag = 0;
    });
}
menuAnimation();
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

document.getElementById("menu-icon").addEventListener("click", function () {
    this.classList.toggle("active");
});




document.addEventListener("DOMContentLoaded", () => {
    const flexes = document.querySelectorAll(".flex-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 300); 
            }
        });
    }, { threshold: 0.3 });

    flexes.forEach(flex => observer.observe(flex));
});