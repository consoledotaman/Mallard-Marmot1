
// Get references to all service checkboxes
const webDesignCheckbox = document.getElementById('service-webdesign');
const webflowCheckbox = document.getElementById('service-webflow');
const seoCheckbox = document.getElementById('service-seo');
const migrationCheckbox = document.getElementById('service-migration');
const uiuxCheckbox = document.getElementById('service-uiux');
const appCheckbox = document.getElementById('service-app');


const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll('label');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    labels[index].style.backgroundColor = checkbox.checked ? '#8ccc3c' : 'white';

  });
  
});


// Add the mousemove effect to each box



document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Collect form data
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
  
    // Send email using EmailJS
    emailjs.init("lIwJksitBsxzz_zBt");
    emailjs
      .send("service_wa7mhkv", "template_0qy1737", data) // Replace with your Service ID and Template ID
      .then(() => {
        alert("Form submitted successfully! We'll get back to you soon.");
        document.getElementById("contactForm").reset(); // Reset form fields
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send the form. Please try again.");
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
}
menuAnimation();
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


// script.js
document.getElementById("menu-icon").addEventListener("click", function () {
  this.classList.toggle("active");
});
