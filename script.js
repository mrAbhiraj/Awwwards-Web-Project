
let circle = document.querySelector("#circle");
var tl = gsap.timeline() ;

window.addEventListener('mousemove' , function(details){
  let xvalue = details.clientX ;
  let yvalue = details.clientY ;

  this.setTimeout(function(){
   circle.style.top = `${yvalue}px`
   circle.style.left = `${xvalue}px`
  }, 100)
});
// gsap.from(" #logo " , {
//    x: -10,
//    opacity: 0,
//    duration: 1,
//    delay: .1,
 

// })
// gsap.from("#c-nav ul li " , {
//    y: 10,
//    opacity: 0,
//    duration: 1,
//    delay: .1,
//    stagger: .3,
//    ease: Expo.easeInOut

// })
// gsap.from("#r-nav ul li " , {
//    x: 10,
//    opacity: 0,
//    duration: 1,
//    delay: .1,
//    stagger: .3,
//    ease: Expo.easeInOut

// })
tl.from("#center-txt h1" , {
   y: 3,
   opacity: 0,
   duration: 1,
   delay: .5,
   stagger: .3,
   ease: Expo.easeInOut


})
tl.from("#b-txt1" , {
   y: 10,
   opacity: 0,
   duration: 1.3,
   // delay: 1

})
tl.from("#b-txt2" , {
   y: -10,
   opacity: 0,
   duration: 1,
   // delay: 1

}, '-=1')
tl.from("#center-txt h5" , {
   scale: 1.2,
   opacity: 0,
   duration: 2,
   // delay:1

}, '-=1')
tl.from("#l-txt" , {
   x: -10 ,
   opacity: 0,
   duration: 1,
   // delay: 1

})
tl.from("#r-app" , {
   x: 10 ,
   opacity: 0,
   duration: 1,
   // delay: .5

}, '-=1')
