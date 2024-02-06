const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMouse(){
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
circleMouse();