window.addEventListener('scroll', menuSwitching); // переключение меню

function menuSwitching(){

    setTimeout(()=>{
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
    }, 100);
    
};

const slideLeftChev = document.querySelector('#slider-left-chev'); //листает слайдер влево
slideLeftChev.addEventListener('click', slideLeft);

function slideLeft(event){
    let allImg = document.querySelector('.main__slider>.layout-3-column').querySelectorAll('div');

    for(let key in allImg){
       if (key == 0 || key == allImg.length-1) continue
       if (!allImg[key].classList.contains('main__hiden')){
            allImg[key].classList.add('main__hiden');
            if(key == 1){
                allImg[allImg.length-2].classList.remove('main__hiden');
            }
            else{
                allImg[Number(key)-1].classList.remove('main__hiden');
            };

            if(document.querySelector('.main__hiden').classList.contains('main__phone-one')) {
                document.querySelector('.main__slider').style.backgroundColor = '#648BF0';
                document.querySelector('.main__slider-bottom').style.backgroundColor = '#648BF0';
            }
            else if (document.querySelector('.main__hiden').classList.contains('main__phone-two')){
                document.querySelector('.main__slider').style.backgroundColor = '#ea676b';
                document.querySelector('.main__slider-bottom').style.backgroundColor = '#ea676b';
            };
            break;
       };
    };
};

const slideRightChev = document.querySelector('#slider-right-chev'); //листает слайдер вправо
slideRightChev.addEventListener('click', slideRight);

function slideRight(event){
   let allImg = document.querySelector('.main__slider>.layout-3-column').querySelectorAll('div');

   for(let key in allImg){
       if (key == 0 || key == allImg.length-1) continue
       if (!allImg[key].classList.contains('main__hiden')){
            allImg[key].classList.add('main__hiden');
            if(key == allImg.length-2){
                allImg[1].classList.remove('main__hiden');
            }
            else{
                allImg[Number(key)+1].classList.remove('main__hiden');
            };

            if(document.querySelector('.main__hiden').classList.contains('main__phone-one')) {
                document.querySelector('.main__slider').style.backgroundColor = '#648BF0';
                document.querySelector('.main__slider-bottom').style.backgroundColor = '#648BF0';
            }
            else if (document.querySelector('.main__hiden').classList.contains('main__phone-two')){
                document.querySelector('.main__slider').style.backgroundColor = '#ea676b';
                document.querySelector('.main__slider-bottom').style.backgroundColor = '#ea676b';
            };
            break;
       };
   };
};

const verticalPhone = document.querySelector('#iphone-vertical-first-offline'); //выключение вертикального телефона
verticalPhone.addEventListener('click', (event) => event.target.classList.toggle('main__hiden-screen'));

const horizontalPhone = document.querySelector('#iphone-horizontal-first-offline'); //выключение горизонтального телефона
horizontalPhone.addEventListener('click', (event) => event.target.classList.toggle('main__hiden-screen'));

const portfolioFirstButton = document.querySelector('#portfolio-first-button');
portfolioFirstButton.addEventListener('click', changePositionImgPortfolio)

const portfolioSecondButton = document.querySelector('#portfolio-second-button');
portfolioSecondButton.addEventListener('click', changePositionImgPortfolio)

const portfolioThirdButton = document.querySelector('#portfolio-third-button');
portfolioThirdButton.addEventListener('click', changePositionImgPortfolio)

const portfolioFourthButton = document.querySelector('#portfolio-fourth-button');
portfolioFourthButton.addEventListener('click', changePositionImgPortfolio)

function changePositionImgPortfolio(event){ //сортировка картинок портфолиа
    let imgPortfolio = [];
    let sortElement;
    document.querySelector('#container-with-portfolio').querySelectorAll('img').forEach(el => imgPortfolio.push(el));
    sortElement = imgPortfolio.shift();
    imgPortfolio.push(sortElement);
    imgPortfolio.forEach(el => document.querySelector('#container-with-portfolio').append(el));
}

const containerPortfolio = document.querySelector('#container-with-portfolio'); //выделение картинок портфолио при клике
containerPortfolio.addEventListener('click', (event) => {
    containerPortfolio.querySelectorAll('img').forEach(el => el.classList.remove('img_outline'));
    event.target.classList.add('img_outline');
})