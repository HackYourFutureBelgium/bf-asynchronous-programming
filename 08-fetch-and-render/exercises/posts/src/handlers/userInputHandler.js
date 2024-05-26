import { apiService } from '../api-calls/apiService.js';
import { state } from '../data/state.js';

export const userInputHandler = async (event) => {
    const postId = event.target.form.postId.value;
    console.log(postId);

    try {
        const postPromise = apiService('posts', postId);
        const commentsPromise = apiService('posts', postId, 'comments');

        const [post, comments] = await Promise.all([
            postPromise,
            commentsPromise,
        ]);

        state.post = post;
        state.comments = comments;
        console.log(state);

        // const postElement = renderAlbum(album, photos);

        // root.appendChild(albumElement);
    } catch (err) {
        console.error(err);
    }
};
