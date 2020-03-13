window.addEventListener('scroll', menuSwitching);

function menuSwitching(){

    document.querySelector('#menu-block-link').querySelectorAll('a').forEach(el=> el.classList.remove('active-menu-link'));

    if (document.querySelector('#home-mark').getBoundingClientRect().top <= 0 && 
        document.querySelector('#our-services-mark').getBoundingClientRect().top - 10>= 0){
        document.querySelector('#link-home-mark').classList.add('active-menu-link')
    };

    if (document.querySelector('#our-services-mark').getBoundingClientRect().top - 10 <= 0 &&
        document.querySelector('#portfolio-mark').getBoundingClientRect().top - 10 >= 0){
        document.querySelector('#link-our-services-mark').classList.add('active-menu-link')
    };

    if (document.querySelector('#portfolio-mark').getBoundingClientRect().top - 10<= 0 &&
        document.querySelector('#about-as-mark').getBoundingClientRect().top - 10 >= 0){
        document.querySelector('#link-portfolio-mark').classList.add('active-menu-link')
    };

    if (document.querySelector('#about-as-mark').getBoundingClientRect().top - 10 <= 0 &&
        document.querySelector('#get-a-quote-mark').getBoundingClientRect().top - 10 >= 0){
        document.querySelector('#link-about-as-mark').classList.add('active-menu-link')
    };

    if (document.querySelector('#get-a-quote-mark').getBoundingClientRect().top - 10 <= 0){
        document.querySelector('#link-get-a-quote-mark').classList.add('active-menu-link')
    };

    setTimeout(()=>{},1000);
}