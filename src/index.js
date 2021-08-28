import css from './style.css';
import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadAboutPage } from './about';

const mainDiv = document.querySelector('#main');
const header = document.createElement('header');
const titleDiv = document.createElement('div');
titleDiv.id = 'title';
titleDiv.textContent = `Leo's Sushi`;
const ul = document.createElement('ul');
const home = document.createElement('li');
home.textContent = 'Home';
const menu = document.createElement('li');
menu.textContent = 'Menu';
const about = document.createElement('li');
about.textContent = 'About';

header.appendChild(titleDiv);
ul.appendChild(home);
home.id = 'home';
ul.appendChild(menu);
menu.id = 'menu';
ul.appendChild(about);
about.id = 'about';
header.appendChild(ul);
mainDiv.appendChild(header);

loadHomePage();

home.addEventListener('click', ()=>{
    const contentContainer = document.querySelector('#content-container');
    contentContainer.remove();
    loadHomePage();
    
});
menu.addEventListener('click', ()=>{
    const contentContainer = document.querySelector('#content-container');
    contentContainer.remove();
    loadMenuPage();
});
about.addEventListener('click', ()=>{
    const contentContainer = document.querySelector('#content-container');
    contentContainer.remove();
    loadAboutPage();
});
