ScrollReveal({
    reset:false,
    distance:'30px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.about-elements .content,.hero-section .left-col, .header,.filterTabs', {origin:'top'});
ScrollReveal().reveal('.hero-section .right-col, .all, .blog, .personalProjectFilteredContainer, .skills-info,.jobs', {origin:'bottom'});


const multiplepositions= new Typed('.hero-typejs',{
    strings:['work together', "code together", "make each other better"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop:true
});

