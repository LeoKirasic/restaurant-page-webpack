
const loadHomePage = () => {

 const mainDiv = document.querySelector('#main');

const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';
const content = document.createElement('div');
content.id = 'content';
content.textContent = `Welcome to Leo's sushi. At this restaurant we value high quality and warm customer service. `;
contentContainer.appendChild(content);

mainDiv.appendChild(contentContainer);
}

export {
    loadHomePage
}