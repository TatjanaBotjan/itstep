const React = require("react");
const { connect } = require("react-redux");
const { ADD_COMMENT } = require("../actions/actions.jsx");
const CommentForm = (props) => {
    const routeParams = props;
    
    function handleFormSubmit(event) {
        event.preventDefault();
        props.onCommentAdd(form);
        setForm({
            author: "",
            text: "",
            postId: props.id
        });
    }


    let [form, setForm] = React.useState({
        author: "",
        text: "",
        postId: props.id
    })

    function handleAuthorChange(event) {
        setForm({ ...form, author: event.target.value });
    }

    function handleTextChange(event) {
        setForm({ ...form, text: event.target.value });
    }

    return <>
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
    </>
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        
    }
};

const mapDispatchToProps = dispatch => ({
    
    onCommentAdd: (comment) => {
        dispatch({
            type: ADD_COMMENT, comment
        })
    }
})



module.exports = connect(mapStateToProps, mapDispatchToProps)(CommentForm);
