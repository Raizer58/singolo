window.addEventListener('scroll', menuSwitching);

function menuSwitching(){
    let currentPosition = window.scrollY;

    document.querySelector('#menu-block-link').querySelectorAll('a').forEach(el=> el.classList.remove('active-menu-link'));

    if (currentPosition >= document.querySelector('#home-mark').getBoundingClientRect().top + currentPosition && 
        currentPosition <= document.querySelector('#our-services-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight){
        document.querySelector('#link-home-mark').classList.add('active-menu-link')
    };

    if (currentPosition >= document.querySelector('#our-services-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight &&
        currentPosition <= document.querySelector('#portfolio-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight){
        document.querySelector('#link-our-services-mark').classList.add('active-menu-link')
    };

    if (currentPosition >= document.querySelector('#portfolio-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight &&
        currentPosition <= document.querySelector('#about-as-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight){
        document.querySelector('#link-portfolio-mark').classList.add('active-menu-link')
    };

    if (currentPosition >= document.querySelector('#about-as-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight &&
        currentPosition <= document.querySelector('#get-a-quote-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight){
        document.querySelector('#link-about-as-mark').classList.add('active-menu-link')
    };

    if (currentPosition >= document.querySelector('#get-a-quote-mark').getBoundingClientRect().top + currentPosition - document.querySelector('header').offsetHeight){
        document.querySelector('#link-get-a-quote-mark').classList.add('active-menu-link')
    };

    setTimeout(()=>{},1000);
}