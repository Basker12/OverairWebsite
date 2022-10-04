const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {

  if (entry.isIntersecting) {
   entry.target.classList.add('showHidden');
  } else {
   entry.target.classList.remove('showHidden');
  }
 });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function() {
 let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

 if ("IntersectionObserver" in window) {
  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
   entries.forEach(function(entry) {
    if (entry.isIntersecting) {
     let lazyImage = entry.target;
     lazyImage.src = lazyImage.dataset.src;
     lazyImage.srcset = lazyImage.dataset.srcset;
     lazyImage.classList.remove("lazy");
     lazyImageObserver.unobserve(lazyImage);
    }
   });
  });

  lazyImages.forEach(function(lazyImage) {
   lazyImageObserver.observe(lazyImage);
  });
 } else {
  return null;
 }
});

const timelyBtn = document.querySelectorAll('.openTimely');
const timelyBox = document.querySelector('#box');

timelyBtn.forEach(function (i) {
 i.addEventListener('click', () => {
  if (timelyBox.style.display === 'none' && screen.width >= 781) {
   timelyBox.style.display = 'block';
 } else if (timelyBox.style.display === 'none' && screen.width <= 780) {
   window.open('https://bookings.gettimely.com/overair1/book');
  }
 })
});

window.addEventListener('mouseup', function (event) {
 if (event.target.id !== timelyBox) {
  timelyBox.style.display = 'none';
 }
});

let ohHi = `                                                               
                                                  ,--,            
   ,---.                       __  ,-.           ,--.'|    __  ,-. 
  '   ,'\\      .---.         ,' ,'/ /|           |  |,   ,' ,'/ /| 
 /   /   |   /.  ./|  ,---.  '  | |' | ,--.--.   \`--'_   '  | |' | 
.   ; ,. : .-' . ' | /     \\ |  |   ,'/       \\  ,' ,'|  |  |   ,' 
'   | |: :/___/ \\: |/    /  |'  :  / .--.  .-. | '  | |  '  :  /   
'   | .; :.   \\  ' .    ' / ||  | '   \\__\\/: . . |  | :  |  | '    
|   :    | \\   \\   '   ;   /|;  : |   ," .--.; | '  : |__;  : |    
 \\   \\  /   \\   \\  '   |  / ||  , ;  /  /  ,.  | |  | '.'|  , ;    
  \`----'     \\   \\ |   :    | ---'  ;  :   .'   \\;  :    ;---'     
              '---" \\   \\  /        |  ,     .-./|  ,   /          
                     \`----'          \`--\`---'     ---\`-'           
                                                                   
 `;
console.log(ohHi);