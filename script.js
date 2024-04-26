let tl = gsap.timeline();
tl.from("h1",{
          opacity: 0,
          duration:1,
          delay:1,
          y:-40
       
       
       })
tl.from("#b1", {
  opacity: 0,
  x: -100,
  duration: 1,
});

tl.from("#b2", {
  opacity: 0,
  x: 100,
  duration:1,
});

tl.from("#b3", {
  opacity: 0,
  x: -200,
  duration:1,
  delay: 1,
});

tl.from("#b4", {
  opacity: 0,
  x: 200,
  duration:1,
});

