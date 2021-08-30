const loadAboutPage = () => {

    const mainDiv = document.querySelector('#main');

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