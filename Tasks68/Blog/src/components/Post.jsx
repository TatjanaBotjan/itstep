const React = require("react");
const { DELETE_POST, ADD_LIKE, ADD_COMMENT } = require("../actions/actions.jsx");
const { connect } = require("react-redux");
const CommentList = require("./CommentList.jsx");
const CommentForm = require("./CommentForm.jsx");

const Post = (props) => {

    function handlePostDelete(event) {
        props.onPostDelete(+event.currentTarget.dataset.id);
    }

    function handleLikeClick(event) {
        props.onLikeAdd(+event.currentTarget.dataset.id);
    }

    const routeParams = props.match.params;
    const item = props.posts.find((post) => post.id == routeParams.id);

    const postComments = props.comments.filter((comment) => item.id == comment.postId);

   
    /*function handleAuthorChange(event) {
        setForm({ ...form, author: event.target.value });
    }

    function handleTextChange(event) {
        setForm({ ...form, text: event.target.value });
    }*/

    return <>
        <div className="blog_posts">
            {
                <div className="card mb-3" key={item.id} >
                    <img src={`/img/${item.image}`} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">#{item.id} {item.title}</h5>
                        <p className="card-text">{item.text} </p>
                        <p className="card-text"><small className="text-body-secondary">{item.date.toLocaleDateString()}</small></p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button className="button_unfavorite" data-id={item.id} onClick={handleLikeClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </button>
                    </div>
                    <span>{item.like}</span>
                    <div className="card-footer text-body-secondary">
                        <button type="button" className="btn btn-danger" data-id={item.id} onClick={handlePostDelete}>Удалить</button>
                    </div>
                    <CommentList id={item.id} />
                    <CommentForm id={item.id} />
                </div>
            }
        </div>

    </>
}
const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        comments: state.post.comments
    }
};

const mapDispatchToProps = dispatch => ({
    onPostDelete: (postId) => {
        dispatch({
            type: DELETE_POST, postId
        })
    },
    onLikeAdd: (id) => {
        dispatch({
            type: ADD_LIKE, id
        })
    },
    onCommentAdd: (comment) => {
        dispatch({
            type: ADD_COMMENT, comment
        })
    }
})
module.exports = connect(mapStateToProps, mapDispatchToProps)(Post);




// posts: state.post.posts - post из reducer index.jsx (6 стр)


/* <CommentList id={item.id} /> - это <div>
<h4>Комментарии:</h4>
{
    postComments.map((item) => {
        return <div key={item.id}>
            <h5>{item.author}</h5>
            <p>{item.text}</p>
        </div>
    })
}
    </div > 
    
    <CommentForm id={item.id} /> 
    function handleFormSubmit(event) {
        event.preventDefault();
        props.onCommentAdd(form);
        setForm({
            author: "",
            text: "",
            postId: item.id
        });
    }


    let [form, setForm] = React.useState({
        author: "",
        text: "",
        postId: item.id
    })

    let [form, setForm] = React.useState({
        author: "",
        text: "",
        postId: item.id
    })

    function handleAuthorChange(event) {
        setForm({ ...form, author: event.target.value });
    }

    function handleTextChange(event) {
        setForm({ ...form, text: event.target.value });
    }
    
    <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Автор</label>
                <input type="text" className="form-control" id="author" value={form.author} onChange={handleAuthorChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" value={form.text} onChange={handleTextChange} />
            </div>
            <div className="mb-3">
                <input type="hidden" id="id" value="" />
                <button type="submit" className="btn btn-primary">Добавить</button>
                </div>
        </form>
    */