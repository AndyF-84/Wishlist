import { createElement } from "./helper.js";


const nav = document.querySelector('.nav');
//const burger = createburgerMenu(nav);

export const renderNavigation = () => {
    nav.textContent = '';

    // <button class="nav__btn btn">Зарегистрироваться</button>
    // <button class="nav__btn btn">Войти</button>

    const buttonSignUp = createElement('button', {
        className: 'nav__btn btn',
        textContent:'Зарегистрироваться'
    });

    buttonSignUp.addEventListener('click', () => {
        console.log('Зарегистрироваться')
    })
    

    const buttonLogin = createElement('button', {
        className: 'nav__btn btn',
        textContent:'Войти'
    });

    buttonLogin.addEventListener('click', () => {
        console.log('Войти')
    })

    nav.append(buttonSignUp, buttonLogin)
}