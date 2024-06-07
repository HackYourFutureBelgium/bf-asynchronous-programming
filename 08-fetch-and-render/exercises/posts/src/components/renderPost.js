import {state} from '../data/state.js';

export const renderPost = () => {
    const root = document.getElementById('root');
    root.innerHTML = "";

    const postDiv = document.createElement('div');
    postDiv.id =`post-${state.post.id};`

    const codeEl = document.createElement('code')
    codeEl.innerHTML = `posted by user: ${state.post.id}`;

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = `${state.post.title}`;

    const textEl = document.createElement('p');
    textEl.innerHTML = `${state.post.body}`

    const commentContainer = document.createElement ('div');
    commentContainer.id = 'comments';

    state.commentsArray.map((comment) => {
        const cDiv = document.createElement('div');
        cDiv.id = `comment-${state.commentsArray.id}`;
        cDiv.classList = `comment`;

        const cCode = document.createElement('code');
        cCode.innerHTML = `comment by: ${state.commentsArray.email}`;

        const cTitle = document.createElement ('h2');
        cTitle.innerHTML = `${state.commentsArray.name}`

        const cText = document.createElement ('p');
        cText.innerHTML = `${state.commentsArray.body}`

        cDiv.appendChild(cTitle);
        cDiv.appendChild(cCode);
        cDiv.appendChild(cText);
        commentContainer.appendChild(cDiv);
       
    });
    postDiv.appendChild(titleEl);
    postDiv.appendChild(codeEl);
    postDiv.appendChild(textEl);
    postDiv.appendChild(commentContainer)
    root.appendChild(postDiv);
    
};