
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav_close.svg";
    } else {
        navBtnImg.src = './img/icons/nav_open.svg';
    }
}
AOS.init(
    //    once:true
);

const headerNav = document.querySelector('.header-nav');
const headerHeight = headerNav.offsetHeight;

let lastScrollTop = 0;

window.addEventListener('scroll',() => {
    let scrollDistance = window.scrollY;

    if(scrollDistance > lastScrollTop){
        headerNav.classList.remove('header-nav--fixed');
    }
    else{
        headerNav.classList.add('header-nav--fixed');
    }
    if(scrollDistance===0){
          headerNav.classList.remove('header-nav--fixed');
    }
    lastScrollTop = scrollDistance;
});
