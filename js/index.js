ScrollReveal({
    reset:false,
    distance:'50px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.about-elements .content,.hero-section .left-col, .header,.footer,.filterTabs', {origin:'top'});
ScrollReveal().reveal('.about-elements .about-me-img,.hero-section .right-col, .all, .blog, .personalProjectFilteredContainer, .volunteer, .skills-info,.jobs', {origin:'bottom'});


const multiplepositions= new Typed('.hero-subheadermultiplepositions',{
    strings:['Software Programmer', "XR Developer", "Systems Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

