const React = require("react");
const connect = require("react-redux").connect;
const { EDIT_POST } = require("../actions/actions.jsx");

const FormEdit = (props) => {

    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const post = props.posts.find((post) => post.id == routeParams.id);

    let [form, setForm] = React.useState({
        title: post.title,
        text: post.text,
        image: post.image
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onPostEdit(post.id, form);
        setForm({
            title: "",
            text: "",
            image: "no-image.png"
        });
        props.history.push("/post");
    }

    function handleTitleChange(event) {
        setForm({ ...form, title: event.target.value });
    }

    function handleTextChange(event) {
        setForm({ ...form, text: event.target.value });
    }

    function handleImageChange(event) {
        setForm({ ...form, image: event.target.value });
    }

    return <>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Название</label>
                <input type="text" className="form-control" id="title" value={form.title} onChange={handleTitleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" value={form.text} onChange={handleTextChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                <input type="text" className="form-control" id="image" value={form.image} onChange={handleImageChange} />
            </div>
            <div className="mb-3">
                <input type="hidden" id="id" value="" />
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="submit" className="btn btn-secondary" onClick={() => { props.history.push("/post") }}>Отмена</button>
            </div>
        </form>
    </>
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts // product название из редакса
    }
};

const mapDispatchToProps = dispatch => ({
    onPostEdit: (id, post) => {
        dispatch({
            type: ADD_POST, id, post
        })
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormEdit);

