const loadAboutPage = () => {

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
    ul.appendChild(menu);
    ul.appendChild(about);
    header.appendChild(ul);
    mainDiv.appendChild(header);
    
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    const content = document.createElement('div');
    content.id = 'content';
    content.textContent = 'Some cool text. This is an about page. There will be some thing about the fake restaurant here!';
    contentContainer.appendChild(content);
    
    mainDiv.appendChild(contentContainer);
    }
    
    export {
        loadAboutPage
    }