gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

// gsap.fromTo('.hero-section', { opacity: 1 }, {
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: '.hero-section',
// 		start: 'center',
// 		end: '820',
// 		scrub: true
// 	}
// })

let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

itemsR.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-750",
        end: "top",
        scrub: true,
      },
    }
  );
});

gsap.registerPlugin(Flip);

const blocks = gsap.utils.toArray(".main-title");

const state = Flip.getState(blocks);

Flip.to(state, {
  opacity: 0,
  duration: 0.9,
  delay: 0.1,
  ease: "power2.inOut",
  //   stagger: 0.1,
});
