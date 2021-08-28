
const loadHomePage = () => {

 const mainDiv = document.querySelector('#main');

const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';
const content = document.createElement('div');
content.id = 'content';
content.textContent = 'Some cool text. This is a home page btw!';
contentContainer.appendChild(content);

mainDiv.appendChild(contentContainer);
}

export {
    loadHomePage
}