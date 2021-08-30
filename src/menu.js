const loadMenuPage = () => {

    const mainDiv = document.querySelector('#main');
    
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    const content = document.createElement('div');
    content.id = 'content';
    content.textContent = 'Some cool text. This is a menu page, there will also be some cool sushi images here!';
    contentContainer.appendChild(content);
    mainDiv.appendChild(contentContainer);
    }
    
    export {
        loadMenuPage
    }