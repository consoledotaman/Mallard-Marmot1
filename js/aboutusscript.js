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

aboutDiv1.addEventListener('click',()=>{
    
    aboutPara1.style.display = aboutPara1.style.display === 'block' ? 'none' : 'block';
    if (plusCross1.classList.contains('fa-plus')) {
        plusCross1.classList.remove('fa-plus');
        plusCross1.classList.add('fa-xmark');
        plusCrossDiv1.style.backgroundColor="#47f547";
    } else if (plusCross1.classList.contains('fa-xmark')) {
        plusCross1.classList.remove('fa-xmark');
        plusCross1.classList.add('fa-plus');
        plusCrossDiv1.style.backgroundColor="#fff";
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
        plusCrossDiv2.style.backgroundColor="#47f547";
    }
});
aboutDiv3.addEventListener('click',()=>{
    
    aboutPara3.style.display = aboutPara3.style.display === 'block' ? 'none' : 'block';
    if (plusCross3.classList.contains('fa-plus')) {
        plusCross3.classList.remove('fa-plus');
        plusCross3.classList.add('fa-xmark');
        plusCrossDiv3.style.backgroundColor="#47f547";
      } else if (plusCross3.classList.contains('fa-xmark')) {
        plusCross3.classList.remove('fa-xmark');
        plusCross3.classList.add('fa-plus');
        plusCrossDiv3.style.backgroundColor="#fff";
      }
});
    const hoverBoxes = document.querySelectorAll('.right-in');

    // Add the mousemove effect to each box
    hoverBoxes.forEach((box) => {
      box.addEventListener('mousemove', (event) => {
        // Get the dimensions and position of the element
        const rect = box.getBoundingClientRect();
        
        // Calculate the relative position of the mouse
        const offsetX = (event.clientX - rect.left) / rect.width - 0.5; // Range: -0.5 to 0.5
        const offsetY = (event.clientY - rect.top) / rect.height - 0.5; // Range: -0.5 to 0.5
        
        // Apply movement
        box.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
      });

      box.addEventListener('mouseleave', () => {
        // Reset position when the mouse leaves
        box.style.transform = 'translate(0, 0)';
      });
    });
