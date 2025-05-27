

const webDesignCheckbox = document.getElementById('service-webdesign');
const webflowCheckbox = document.getElementById('service-webflow');
const seoCheckbox = document.getElementById('service-seo');
const migrationCheckbox = document.getElementById('service-migration');
const uiuxCheckbox = document.getElementById('service-uiux');
const appCheckbox = document.getElementById('service-app');




const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll('label');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    labels[index].style.backgroundColor = checkbox.checked ? '#8ccc3c' : 'white';

  });
  
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

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Optional: Add smooth transition in CSS for better UX
// You can add this to your CSS file:
/*
.nav-bar {
  transition: all 0.3s ease;
}
*/


const popupOverlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');
const popupMessage = document.getElementById('popupMessage');

function showPopup(message, isSuccess) {
  popupMessage.textContent = message;
  popupBox.classList.remove("success", "error");
  popupBox.classList.add(isSuccess ? "success" : "error");
  popupOverlay.style.display = "flex";
}

function closePopup() {
  popupOverlay.style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const formData = new FormData(this);
  const selectedServices = [];
  document.querySelectorAll('input[name="service"]:checked').forEach((label1) => {
    selectedServices.push(label1.value);
  });

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    contact: formData.get("contact"),
    message: formData.get("message"),
    service: selectedServices.join(", "), // Combine checked services into a comma-separated string
  };

  
  emailjs.init("lIwJksitBsxzz_zBt");
  emailjs
    .send("service_wa7mhkv", "template_0qy1737", data)
    .then(() => {
      showPopup("Form submitted successfully! We'll get back to you soon.", true);
      document.getElementById("contactForm").reset(); // 
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      showPopup("Failed to send the form. Please try again.", false);
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
