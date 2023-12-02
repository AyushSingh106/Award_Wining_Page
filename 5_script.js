
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim()
{
    var t1=gsap.timeline();
    t1.from("#nav",{
   y:'-10',
   opacity:0,
   duration:1.5,
   ease:Expo.easeInOut
    })
    t1.to(".boundingelem",{
        y:0,
        duration:1.2,
        ease:Expo.easeInOut,
        stagger:.2,
        delay:-1 
         })
         t1.from("#herofooter",{
            y:'-10',
            opacity:0,
            duration:1.5,
            delay:-1,
            ease:Expo.easeInOut
             })
}


function circleMouseFollwer()
{
    window.addEventListener("mousemove",function(dets)
{
document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    }) 


} 

circleMouseFollwer();
  firstPageAnim();
  
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mouseleave",function(dets)
    {
        gsap.to(elem.querySelector("img"),
        { opacity:0,
            duration:.5,
          ease:Power2,
        }); 
        gsap.to(elem.querySelector("h1"),
        { opacity:1,
            duration:.5,
          ease:Power2,
          x:0,
        });    
    });
    elem.addEventListener("mousemove", function (dets) {
   var diff=dets.clientY-elem.getBoundingClientRect().top;
   diffrot=dets.clientX-rotate;
   rotate=dets.clientX;    
   gsap.to(elem.querySelector("img"),
    { opacity:1,
      ease:Power2,
      top:diff,
      left:dets.clientX,
      rotate:gsap.utils.clamp(-20,20,diffrot*.3),  
    }) ;
    gsap.to(elem.querySelector("h1"),
    { opacity:.6,
        duration:.5,
      ease:Power2,
      x:40,
    });    
    });
  });