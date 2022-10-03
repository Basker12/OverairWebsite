const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("showHidden"):e.target.classList.remove("showHidden")})}),hiddenElements=document.querySelectorAll(".hidden");hiddenElements.forEach(e=>observer.observe(e)),document.addEventListener("DOMContentLoaded",function(){let e=[].slice.call(document.querySelectorAll("img.lazy"));if(!("IntersectionObserver"in window))return null;{let t=new IntersectionObserver(function(e,n){e.forEach(function(e){if(e.isIntersecting){let n=e.target;n.src=n.dataset.src,n.srcset=n.dataset.srcset,n.classList.remove("lazy"),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}});const timelyBtn=document.querySelector("#openTimely"),timelyBox=document.querySelector("#box");timelyBtn.addEventListener("click",()=>{"none"===timelyBox.style.display&&screen.width>=781?timelyBox.style.display="block":"none"===timelyBox.style.display&&screen.width<=780&&window.open("https://bookings.gettimely.com/overair1/book")}),window.addEventListener("mouseup",function(e){e.target.id!==timelyBox&&(timelyBox.style.display="none")});let ohHi=`                                                               
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
                                                                   
 `;console.log(ohHi);