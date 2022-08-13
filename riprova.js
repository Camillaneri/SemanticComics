console.log('buonsalve');
 
 var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		console.log('Element is fully visible in screen');
        document.getElementById("hiding").classList.toggle("none")
}, { threshold: [1] });

observer.observe(document.querySelector("#orizontal"));  



gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000"
    }
  }); 