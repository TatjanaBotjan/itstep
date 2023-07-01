const reduser = (state = {}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                ...state,
                posts: action.posts, 
                comments: action.comments,
                lastIdPost: action.lastIdPost,
                lastCommentId: action.lastCommentId
            }
        case "POST_ADD":
            let newId = ++state.lastIdPost;
            let newPost = {
                id: newId,
                title: action.post.title,
                text: action.post.text,
                image: action.post.image,
                date: new Date(),
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                lastIdPost: newId
            };
        case "POST_DELETE":
            return {
                ...state,
                posts: state.posts.filter((item) => item.id != action.postId)
            }
        case "LIKE_ADD":
            return {
                ...state,
                posts: state.posts.map((item) => {
                    if (item.id == action.id) {
                        item.like++;
                    }
                    return item;
                })
            }
        case "POST_EDIT":
            return {
                ...state,
                posts: state.posts.map((item) => {
                    if (item.id == action.id) {
                        item.title = action.post.title;
                        item.text = action.post.text;
                        item.image = action.post.image;
                    }
                    return item;
                })
            }
        case "COMMENT_ADD":
            let newCommentId = ++state.lastCommentId;
            let newComment = {
                id: newCommentId,
                postId: action.comment.postId,
                author: action.comment.author,
                text: action.comment.text
            };
            return {
                ...state,
                comments: [...state.comments, newComment],
                lastCommentId: newCommentId
            };
            break;
    }
    return state;
}

module.exports = reduser;