const addPost = (post) =>{
    return {
        type: "POST_ADD",
        post
    }
}

const deletePost = (postId) => {
    return {
        type: "POST_DELETE",
        postId
    }
}

const editPost = (id, post) => {
    return {
        type: "POST_EDIT",
        id,
        post
    }
}

const addLike = (id) => {
    return {
        type: "LIKE_ADD",
        id
    }
}


module.exports = { addPost, deletePost, editPost, addLike }