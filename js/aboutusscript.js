const aboutPara1=document.getElementById('about-para1');
const aboutPara2=document.getElementById('about-para2');
const aboutPara3=document.getElementById('about-para3');
const aboutDiv1=document.getElementById('about1');
const aboutDiv2=document.getElementById('about2');
const aboutDiv3=document.getElementById('about3');
const plusCross1=document.getElementById('plus-cross1');
const plusCross2=document.getElementById('plus-cross2');
const plusCross3=document.getElementById('plus-cross3');
const plusCrossDiv1=document.getElementById('plus-crossdiv1');
const plusCrossDiv2=document.getElementById('plus-crossdiv2');
const plusCrossDiv3=document.getElementById('plus-crossdiv3');

/*
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
}); */

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

// Optional: Add smooth transition in CSS for better UX
// You can add this to your CSS file:
/*
.nav-bar {
  transition: all 0.3s ease;
}
*/



aboutDiv1.addEventListener('click',()=>{
    
    aboutPara1.style.display = aboutPara1.style.display === 'block' ? 'none' : 'block';
    if (plusCross1.classList.contains('fa-plus')) {
        plusCross1.classList.remove('fa-plus');
        plusCross1.classList.add('fa-xmark');
        plusCrossDiv1.style.backgroundColor="#FFF";
    } else if (plusCross1.classList.contains('fa-xmark')) {
        plusCross1.classList.remove('fa-xmark');
        plusCross1.classList.add('fa-plus');
        plusCrossDiv1.style.backgroundColor="#8ccc3c";
    }
    

      
});
aboutDiv2.addEventListener('click',()=>{
    
    aboutPara2.style.display = aboutPara2.style.display === 'block' ? 'none' : 'block';
    if (plusCross2.classList.contains('fa-plus')) {
        plusCross2.classList.remove('fa-plus');
        plusCross2.classList.add('fa-xmark');
        plusCrossDiv2.style.backgroundColor="#fff";
    } else if (plusCross2.classList.contains('fa-xmark')) {
        plusCross2.classList.remove('fa-xmark');
        plusCross2.classList.add('fa-plus');
        plusCrossDiv2.style.backgroundColor="#8ccc3c";
    }
});
aboutDiv3.addEventListener('click',()=>{
    
    aboutPara3.style.display = aboutPara3.style.display === 'block' ? 'none' : 'block';
    if (plusCross3.classList.contains('fa-plus')) {
        plusCross3.classList.remove('fa-plus');
        plusCross3.classList.add('fa-xmark');
        plusCrossDiv3.style.backgroundColor="#fff";
      } else if (plusCross3.classList.contains('fa-xmark')) {
        plusCross3.classList.remove('fa-xmark');
        plusCross3.classList.add('fa-plus');
        plusCrossDiv3.style.backgroundColor="#8ccc3c";
      }
});
    const hoverBoxes = document.querySelectorAll('.right-in');

    
    hoverBoxes.forEach((box) => {
      box.addEventListener('mousemove', (event) => {
        
        const rect = box.getBoundingClientRect();
        
        
        const offsetX = (event.clientX - rect.left) / rect.width - 0.5; 
        const offsetY = (event.clientY - rect.top) / rect.height - 0.5; 
        
        
        box.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
      });

      box.addEventListener('mouseleave', () => {
        
        box.style.transform = 'translate(0, 0)';
      });
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