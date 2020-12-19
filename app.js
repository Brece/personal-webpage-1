gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

// animations bind by a timeline, executed in a sequence
tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});
tl.from(
  ".stagger1",
  { opacity: 0, y: -50, stagger: 0.3, duration: 2, ease: Power4.easeOut },
  "-=1.5"
);
tl.from(
  ".hero-design",
  { opacity: 0, y: 50, duration: 1, ease: Power4.easeOut },
  "-=2"
);

// animations independent from timelines
gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.from(".transition2", { scrollTrigger: {
  trigger: ".transition2",
  start: "top bottom"
},
y: 50,
opacity: 0,
duration: 1.5,
stagger: .3});

gsap.from(".transition3", { scrollTrigger: {
  trigger: ".transition3",
  start: "top center"
},
y: 50,
opacity: 0,
duration: 1.5,
stagger: .6});
