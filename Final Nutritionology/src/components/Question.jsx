const React = require("react");
const connect = require("react-redux").connect;
const { ADD_QUESTION } = require("../actions/action.jsx");

const Question = (props) => {
    let [form, setForm] = React.useState({
        name: "",
        tel: "",
        email: "",
        comment: ""
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onQuestionAdd(form);
        setForm({
            name: "",
            tel: "",
            email: "",
            comment: ""
        });
        props.history.push("/post");
    }


    function handleNameChange(event) {
        setForm({ ...form, name: event.target.value });
    }

    function handleTelChange(event) {
        setForm({ ...form, tel: event.target.value });
    }

    function handleEmailChange(event) {
        setForm({ ...form, email: event.target.value });
    }

    function handleCommentChange(event) {
        setForm({ ...form, comment: event.target.value });
    }

    function validate() {
        let isValid = true;
        if (form.name == "") {
            formError.name = "Поле не заполнено";
            isValid = false;
        } else {
            formError.name = "";
        }
        if (form.tel == "") {
            formError.tel = "Поле не заполнено";
            isValid = false;
        } else {
            formError.tel = "";
        }
        if (form.email == "") {
            formError.email = "Поле не заполнено";
            isValid = false;
        } else {
            formError.email = "";
        }
        if (form.comment == "") {
            formError.comment = "Поле не заполнено";
            isValid = false;
        } else {
            formError.comment = "";
        }
        setFormError({ ...formError });
        return isValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()) {
            return false;
        }
        if (form.id == 0) {
            let question = {
                name: form.name,
                tel: form.tel,
                email: form.email,
                comment: form.comment
            }

            setQuestions([...questions, question]);

            setForm({
                name: "",
                tel: "",
                email: "",
                comment: ""
            });
        } else {
            let index = questions.findIndex((question) => question.id == form.id);
            questions[index] = {
                id: form.id,
                name: form.name,
                tel: form.tel,
                email: form.email,
                comment: form.comment
            }

            setQuestions([...questions]);
            setForm({
                id: 0,
                name: "",
                tel: "",
                email: "",
                comment: ""
            });
        }
    }

    return <>
        <section className="question question-invis">
            <div className="container">
                <div className="question__row">
                    <h2 className="question__row_h2">Вы можете задать мне вопрос через форму ниже</h2>
                    <div className="question__row_form">
                        <form className="question__row_form_section" action="" method="post" name="contact-form" onSubmit={handleFormSubmit}>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_name" type="text" name="name" id="name" value={form.name} onChange={handleNameChange} placeholder="Ваше имя"/>
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_tel" type="tel" name="tel" id="tel" value={form.tel} onChange={handleTelChange} placeholder="Номер телефона"/>
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_email" type="email" name="email" id="email" value={form.email} onChange={handleEmailChange} placeholder="Email"/>
                            </div>
                            <div className="question__row_form_section_textarea">
                                <textarea className="question__row_form_section_textarea_comment" name="comment" id="comment" value={form.comment} onChange={handleCommentChange} cols="100" rows="3" placeholder="Ваш комментарий"></textarea>
                            </div>
                        </form>
                        <div className="question__row_button">
                            <a className="question__row_button_a" href="#">Записаться</a>
                        </div>
                        <p className="question__row_agreement">Отправляя свои персональные данные, Вы соглашаетесь с Положением о
                            персональных данных</p>
                    </div>
                </div>
            </div>
            <button className="question_close-btn"></button>
        </section>
    </>
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => ({
    onQuestionAdd: (question) => {
        dispatch({
            type: ADD_QUESTION, question
        })
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Question);