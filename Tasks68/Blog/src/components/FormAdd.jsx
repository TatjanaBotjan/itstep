const React = require("react");
const connect = require("react-redux").connect;
const {ADD_POST} = require("../actions/actions.jsx");

const FormAdd = (props) => {
    let [form, setForm] = React.useState({
        title: "",
        text: "",
        image: "no-image.png"
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onPostAdd(form);
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
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>
}

const mapStateToProps = state => {
    return{
    }
};

const mapDispatchToProps = dispatch => ({
    onPostAdd: (post) => {
        dispatch({
            type: ADD_POST, post
        })
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormAdd);

