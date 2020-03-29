const burgerIcon = document.querySelector('#burger-icon');



const menuBlock = document.querySelector('#menu-block-link');

window.addEventListener('scroll', menuSwitching); // переключение меню
window.addEventListener('load', menuSwitching);

function menuSwitching(){

    setTimeout(()=>{
        menuBlock.querySelectorAll('a').forEach(el=> el.classList.remove('active-menu-link'));

        //переделать через querySelectorAll('a').forEach
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
            Math.ceil(window.pageYOffset + document.documentElement.clientHeight) < document.documentElement.offsetHeight && 
            document.querySelector('#get-a-quote-mark').getBoundingClientRect().top - 10 >= 0){
            document.querySelector('#link-about-as-mark').classList.add('active-menu-link')
        };

        if (Math.ceil(window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.offsetHeight ||
            document.querySelector('#get-a-quote-mark').getBoundingClientRect().top - 10 <= 0){
            document.querySelector('#link-get-a-quote-mark').classList.add('active-menu-link')
        };
    }, 100);
    
};

const container = document.querySelector('.main__slider .main__slide-container-image'); //защита от повторного клика по слайдеру во время анимации
let sliderAnimationPermission = true;

const slideLeftChev = document.querySelector('#slider-left-chev'); //листает слайдер влево
slideLeftChev.addEventListener('click', slideLeft);

function slideLeft(event){
    if(!sliderAnimationPermission) return true;

    let allImg = document.querySelectorAll('.main__slider .main__slide-container-image>div');

    container.classList.add('slide-container-image_transition');
    container.style.transform = 'translateX(' + (-100/allImg.length) + '%)';

    sliderAnimationPermission = false;

    setTimeout(()=>{
        container.classList.remove('slide-container-image_transition');
        container.style.transform = '';
        container.append(allImg[0]);
        sliderAnimationPermission = true
    },1000)
};

const slideRightChev = document.querySelector('#slider-right-chev'); //листает слайдер вправо
slideRightChev.addEventListener('click', slideRight);

function slideRight(event){
    if(!sliderAnimationPermission) return true;

    let allImg = document.querySelectorAll('.main__slider .main__slide-container-image>div');
    const container = document.querySelector('.main__slider .main__slide-container-image');

    container.prepend(allImg[allImg.length-1]);
    allImg[0].style.transform = 'translateX(-100vw)';
    allImg[allImg.length-1].style.transform = 'translateX(-100vw)';
    container.classList.add('slide-container-image_transition');
    container.style.transform = 'translateX(' + 100/allImg.length + '%)';

    sliderAnimationPermission = false;

    setTimeout(()=>{
        container.classList.remove('slide-container-image_transition');
        container.style.transform = '';
        allImg[0].style.transform = '';
        allImg[allImg.length-1].style.transform = '';
        sliderAnimationPermission = true
    },1000)
};

const verticalPhone = document.querySelector('#iphone-vertical-first-without-shadow'); //выключение вертикального телефона
verticalPhone.addEventListener('click', event => document.querySelector('#iphone-vertical-first-offline').classList.toggle('main__hiden-screen'));

const horizontalPhone = document.querySelector('#iphone-horizontal-first-without-shadow'); //выключение горизонтального телефона
horizontalPhone.addEventListener('click', event => document.querySelector('#iphone-horizontal-first-offline').classList.toggle('main__hiden-screen'));

const portfolioButton = document.querySelector('#portfolio-block-link');
portfolioButton.addEventListener('click', changePositionImgPortfolio)
portfolioButton.addEventListener('click', changePositionActiveButton)

function changePositionImgPortfolio(event){ //сортировка картинок портфолио
    if(event.target.tagName == "BUTTON"){
        let firstElement = document.querySelector('#container-with-portfolio').querySelector('img');
        document.querySelector('#container-with-portfolio').append(firstElement);
    }
}

function changePositionActiveButton(event){ //изменение активной кнопки портфолио
    if(event.target.tagName == "BUTTON"){
        portfolioButton.querySelectorAll('button').forEach(el=>el.classList.remove('portfolio_button-whit-focus'));
        event.target.classList.add('portfolio_button-whit-focus')
    }
}

const containerPortfolio = document.querySelector('#container-with-portfolio'); //выделение картинок портфолио при клике
containerPortfolio.addEventListener('click', event => {
    if(event.target.classList.contains('img_outline')) {
        event.target.classList.remove('img_outline');
        return true;
    };

    containerPortfolio.querySelectorAll('img').forEach(el => el.classList.remove('img_outline'));
    event.target.classList.add('img_outline');
})


const mainForm = document.querySelector('#a-quote-mark') 
mainForm.addEventListener('submit', sendMainForm)
const submiteSendMainForm =  document.querySelector('#form-message>button')  //подтверждение отправки формы
submiteSendMainForm.addEventListener('click', event => {
    document.querySelector('#form-message-block').classList.add('main__hiden');
    document.querySelector('#form-message>p:nth-child(2)').innerHTML = "Subject: no subject";
    document.querySelector('#form-message>p:nth-child(3)').innerHTML = "Description: no description";
})

function sendMainForm (event) { //отправка формы
    
    if (mainForm.querySelector('input:first-child').checkValidity() && mainForm.querySelector('input:nth-child(2)').checkValidity()){

        if(mainForm.querySelector('input:nth-child(3)').value.length > 0){
            let messageSubject = document.querySelector('#form-message>p:nth-child(2)').innerText.slice(0,9) + mainForm.querySelector('input:nth-child(3)').value;
            document.querySelector('#form-message>p:nth-child(2)').innerHTML = messageSubject
        };
        if(mainForm.querySelector('textarea').value.length > 0){
            let messageDescribe = document.querySelector('#form-message>p:nth-child(3)').innerText.slice(0,13) + mainForm.querySelector('textarea').value;
            document.querySelector('#form-message>p:nth-child(3)').innerHTML = messageDescribe
        };
        event.preventDefault();
        document.querySelector('#form-message-block').classList.remove('main__hiden')
        mainForm.querySelectorAll('*').forEach(el => el.value ="")
    }
}
