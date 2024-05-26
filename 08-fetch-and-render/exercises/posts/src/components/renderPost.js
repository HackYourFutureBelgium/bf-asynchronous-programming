export const renderPost = (postObject, commentsArray) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const postDiv = document.createElement('div');
    postDiv.id = `post-${postObject.id}`;

    const codeEl = document.createElement('code');
    codeEl.innerHTML = `posted by user: ${postObject.id}`;

    const commentContainer = document.createElement('div');
    commentContainer.id = 'comments';

    commentsArray.map((comment) => {
        const cDiv = document.createElement('div');
        cDiv.id = `comment-${comment.id}`;
        cDiv.classList = `comment`;

        const cCode = document.createElement('code');
        cCode.innerHTML = `comment by: ${comment.email}`;

        cDiv.appendChild(cCode);
        commentContainer.appendChild(cDiv);
    });

    postDiv.appendChild(codeEl);
    postDiv.appendChild(commentContainer);
    root.appendChild(postDiv);
};
