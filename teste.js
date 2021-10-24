


const navSlide = () => {
    const menu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.navigation');
    const navbar = document.querySelector('.navbar');
    const btn = document.querySelector('.mobile-menu');

    

    menu.addEventListener('click', () => {
        nav.classList.toggle('navigation__active');
        navbar.classList.toggle('scroll-active');
        btn.classList.toggle('mobile-menu__scroll');
        

    })
}

navSlide();


/*const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", changeColor() => {
    if(window.scrollY >= 150px){
        navbar.classList.add("scroll-active");
    }else if(window.scrollY <= 100px){
        navbar.classList.remove("scroll-active");
    }
})

changeColor(); */

const changeColor = () => {
    const navbar = document.querySelector('.navbar');
    const btn = document.querySelector('.mobile-menu');
    

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 150){
           
            navbar.classList.add('scroll-active');
            btn.classList.add('mobile-menu__scroll');

            

        }else if(window.scrollY <= 100){
            navbar.classList.remove('scroll-active');
            btn.classList.remove('mobile-menu__scroll');
        }
    })
}

changeColor();

const darkMode = () => {
    const dark = document.getElementById('dark');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const btn = document.querySelector('.mobile-menu');
    const cont_title = document.querySelector('.conteudo__title');
    const conteudo = document.querySelector('.conteudo');

    const plans_title = document.querySelector('.plans__title');
    const plans = document.querySelector('.conteudo__plans');

    const profits = document.querySelector('.profits__img');
    const invest = document.querySelector('.invest__img');
    const money = document.querySelector('.money__img');

    const profits_dark = document.querySelector('.profits__img--dark');
    const invest_dark = document.querySelector('.invest__img--dark');
    const money_dark = document.querySelector('.money__img--dark');

    const nav = document.querySelector('.navigation');

    dark.addEventListener('click', () => {


        body.classList.toggle('body__dark');
        cont_title.classList.toggle('conteudo__title--dark');
        conteudo.classList.toggle('conteudo__dark');
        plans_title.classList.toggle('plans__title--dark');
        plans.classList.toggle('conteudo__plans--dark');

        profits.classList.toggle('hidden');
        invest.classList.toggle('hidden');
        money.classList.toggle('hidden');
        profits_dark.classList.toggle('active');
        invest_dark.classList.toggle('active');
        money_dark.classList.toggle('active');

       
        navbar.classList.toggle('scroll-active--dark');
        btn.classList.toggle('mobile-menu__scroll--dark');

        nav.classList.toggle('navigation__active--dark');
        

    })
}

darkMode();

function calcular (x, y){
    return x * y
}

console.log(`O resultado da multipicação é: ${calcular(8,8)}`)

