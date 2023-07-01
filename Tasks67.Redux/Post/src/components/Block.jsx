const React = require("react");

const Block = (props) => {

    function handlePostDelete(event) {
        props.onPostDelete(+event.currentTarget.dataset.id);
    }

    function handleLikeClick(event){
        props.onLikeAdd(+event.currentTarget.dataset.id);
    }


     return <>
        <div className="blog_posts">
            {
                props.posts.map((post) =>
                    <div className="card mb-3" key={post.id} >
                        <img src={`/img/${post.image}`} className="card-img-top" alt={post.title} />
                        <div className="card-body">
                            <h5 className="card-title">#{post.id} {post.title}</h5>
                            <p className="card-text">{post.text} </p>
                            <p className="card-text"><small className="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <button className="button_unfavorite" data-id={post.id} onClick={handleLikeClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>
                        </div>
                        <span>{post.like}</span>

                        <div className="card-footer text-body-secondary">
                            <button type="button" className="btn btn-danger" data-id={post.id} onClick={handlePostDelete}>Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>
         
    </>
}
module.exports = Block;