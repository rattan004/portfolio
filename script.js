var typed= new Typed(".multi-text",{
    strings: ["Frontend Developer","Data Analyst","Gamer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar a');

window.addEventListener('scroll',()=>{
    let current ='';
    
    section.forEach( section => {
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(scrollY > (sectionTop-sectionHeight/3)){
            current=section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})

/*let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height= sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}*/
