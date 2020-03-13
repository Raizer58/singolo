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
    }, 100)
    
}

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
            }
            break;
       }
   }
}

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
            }
            break;
       }
   }
}

const verticalPhone = document.querySelector('#iphone-vertical-first-offline') //выключение вертикального телефона
verticalPhone.addEventListener('click', offlineVerticalPhone)

function offlineVerticalPhone(event){
   event.target.classList.toggle('main__hiden-screen');
}

const horizontalPhone = document.querySelector('#iphone-horizontal-first-offline') //выключение горизонтального телефона
horizontalPhone.addEventListener('click', offlineHorizontalPhone)

function offlineHorizontalPhone(event){
   event.target.classList.toggle('main__hiden-screen');
}