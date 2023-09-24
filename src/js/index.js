gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline()

tl.to('.header__marco',{
    y: '100vh',
    scale: .8,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: '.main',
        start: 'top 80%',
        end: 'top 20%',
        markers: {
            startColor: '#0aeafa00',
            endColor: '#0aeafa00'
        },
        scrub: true
    }
})

tl.to('.hoja-back',{
    y: '-100%',
    ease: "power1.out",
    scrollTrigger: {
        trigger: '.main',
        start: 'top 50%',
        end: 'top 10%',
        // markers: true,
        scrub: 1
    }
})

gsap.fromTo('.hoja_0',{y:300,x:-500},{
    y:0,
    x:0,
    duration:1,
    delay: 0.5
})
gsap.fromTo('.hoja_1',{y:500,x:100},{
    y:0,
    x:0,
    duration:1,
    delay: 0.1
})
gsap.fromTo('.hoja_2',{y:500,x:-300},{
    y:0,
    x:0,
    duration:1,
    delay: 0.3
})
gsap.fromTo('.hoja_3',{y:600,x:-100},{
    y:0,
    x:0,
    duration:1,
    delay: 0.7
})

gsap.fromTo('.hoja_4',{y:300,x:-500},{
    y:0,
    x:0,
    duration:1,
    delay: 0.6
})
gsap.fromTo('.hoja_5',{y:500,x:100},{
    y:0,
    x:0,
    duration:1,
    delay: 0.2
})
gsap.fromTo('.hoja_6',{y:500,x:-300},{
    y:0,
    x:0,
    duration:1,
    delay: 0.5
})
gsap.fromTo('.hoja_7',{y:600,x:-100},{
    y:0,
    x:0,
    duration:1,
    delay: 0.4
})




lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });