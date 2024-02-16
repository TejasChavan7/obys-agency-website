function loadingAnimation(){
    

var t1= gsap.timeline()
t1.from(".line h1",{

    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
t1.from("#line-p1",{
 opacity:0,
 onStart:function(){
    var h5timer = document.querySelector("#line-p1 h5")
    var grow=0;
    setInterval(function(){
        if(grow < 100){
           h5timer.innerHTML = grow++;
        }
        else{
            h5timer.innerHTML = grow
    
        }
    },33)
    
 },

});
t1.to(".line h2",{
  animationName:"anime",
  opacity:1

})

t1.to("#loader",{

    opacity:0,
    duration:0.2,
    delay:4
});

t1.from("#page1", {
    y: 1600,
    opacity: 0,
    duration:0.6,
    ease: "power4.inOut",
    delay: 0
});

t1.to("#loader", {
    display: "none"
});
t1.from("#nav",{
   opacity:0
})
t1.from("#hero1 h1 ,#hero2 h1 ,#hero3 h2 ,#hero4 h1",{
    y:120,
    stagger:0.2
})



}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        });
    });
    Shery.makeMagnet("#nav-part2 h4");
    
}
loadingAnimation()
cursorAnimation()

