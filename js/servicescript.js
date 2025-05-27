
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

// Add scroll event listener
window.addEventListener('scroll', handleScroll);


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
    const flexes = document.querySelectorAll(".flex1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 300); 
            }
        });
    }, { threshold: 0.1 });

    flexes.forEach(flex => observer.observe(flex));
});
