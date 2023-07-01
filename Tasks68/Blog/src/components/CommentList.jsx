const React = require("react");
const { connect } = require("react-redux");

const CommentList = (props) => {

    const postComments = props.comments.filter((comment) => props.id == comment.postId);

    return <>
        <div>
            <h4>Комментарии:</h4>
            {postComments.map((item) => {
                return <div key={item.id}>
                            <h5>{item.author}</h5>
                            <p>{item.text}</p>
                        </div>
                })}
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        comments: state.post.comments
    }
};


module.exports = connect(mapStateToProps, {})(CommentList);
