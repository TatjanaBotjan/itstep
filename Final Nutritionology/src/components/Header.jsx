const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const Header = (props) => {

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

    function handleQuestionClick(event) {
        let question = document.querySelector(".question-invis");
        event.preventDefault();
        question.classList.toggle("question-vis");
    }

    function handleCloseClick(event) {
        let question = document.querySelector(".question-invis");
        event.preventDefault();

        question.classList.remove("question-vis");
    }

    function handleMobileQuestionClick(event){
        let question = document.querySelector(".mobile-question-invis");
        event.preventDefault();
        question.classList.toggle("mobile-question-vis");
    }

    function handleMobileCloseClick(event) {
        let question = document.querySelector(".mobile-question-invis");
        event.preventDefault();

        question.classList.remove("mobile-question-vis");
    }

    function handleCloseMenuClick(event) {
        let mobile = document.querySelector(".mobile-invis");
        event.preventDefault();

        mobile.classList.remove("mobile-vis");
    }

    function handleGetQuestionClick(event) {
        let getQuestion = document.querySelector(".gratitude-invis");
        let question = document.querySelector(".question-invis");
        event.preventDefault();
        getQuestion.classList.toggle("gratitude-vis");
        question.classList.toggle("question-vis");
        
    }

    

    

    function handleCloseGetQuestionClick(event) {
        let getQuestion = document.querySelector(".gratitude-invis");
        event.preventDefault();

        getQuestion.classList.remove("gratitude-vis");
    }



    
    return <>
    <header>
        <div className="header__row" id="menu">
            <div className="header__row_menu">
                <ul className="header__row_menu_ul">
                    <li className="header__row_menu_ul_li nav-item"><a className="header__row_menu_ul_li_a" href="#" onClick={() => {props.push("/")}}>Главная</a></li>
                    <li className="header__row_menu_ul_li nav-item"><a className="header__row_menu_ul_li_a" href="#" onClick={() => { props.push("/about") }}>Обо мне</a></li>
                    <li className="header__row_menu_ul_li nav-item" ><a className="header__row_menu_ul_li_a nav-item" href="#" onClick={() => { props.push("/services") }}>Услуги</a></li>
                </ul>
                <div className="header__row_connection" onClick={handleQuestionClick}>
                        <span className="header__row_connection_a">Задать вопрос</span>
                </div>
            </div>
        </div>
    </header>
        <section className="question question-invis">
            <div className="container">
                <div className="question__row">
                    <h2 className="question__row_h2">Вы можете задать мне вопрос через форму ниже</h2>
                    <div className="question__row_form">
                        <form className="question__row_form_section" action="" method="post" name="contact-form" onSubmit={handleFormSubmit}>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_name" type="text" name="name" id="name" value={form.name} onChange={handleNameChange} placeholder="Ваше имя" />
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_tel" type="tel" name="tel" id="tel" value={form.tel} onChange={handleTelChange} placeholder="Номер телефона" />
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_email" type="email" name="email" id="email" value={form.email} onChange={handleEmailChange} placeholder="Email" />
                            </div>
                            <div className="question__row_form_section_textarea">
                                <textarea className="question__row_form_section_textarea_comment" name="comment" id="comment" value={form.comment} onChange={handleCommentChange} cols="100" rows="3" placeholder="Ваш комментарий"></textarea>
                            </div>
                        </form>
                        <div className="question__row_button" onClick={handleGetQuestionClick}>
                            <a className="question__row_button_a" href="#">Записаться</a>
                        </div>
                        <p className="question__row_agreement">Отправляя свои персональные данные, Вы соглашаетесь с Положением о
                            персональных данных</p>
                    </div>
                </div>
            </div>
            <button className="question_close-btn" onClick={handleCloseClick}></button>
        </section>
        <section className="mobile mobile-invis" >
            <div className="container">
                <div className="mobile__row" id="menu">
                    <div className="mobile__row_header">
                        <div className="mobile__row_header_logo">
                            <div className="mobile__row_header_logo_image">
                                <img className="mobile__row_header_logo_image_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!" title="С заботой о здоровье!" />
                            </div>
                            <div className="mobile__row_header_logo_text">С заботой о здоровье!</div>
                        </div>
                        <div className="mobile__row_header_close-mobile" onClick={handleCloseMenuClick}>
                            <a className="mobile__row_header_close-mobile_a" href="#" id="close_mobile"></a>
                        </div>
                    </div>

                </div>
                <div className="mobile__row_menu">
                    <ul className="mobile__row_menu_ul">
                        <li className="mobile__row_menu_ul_li nav-item"><a className="mobile__row_menu_ul_li_a" href="#" onClick={() => { props.push("/") }}>Главная</a></li>
                        <li className="mobile__row_menu_ul_li nav-item"><a className="mobile__row_menu_ul_li_a" href="#" onClick={() => { props.push("/about") }}>Обо мне</a></li>
                        <li className="mobile__row_menu_ul_li nav-item"><a className="mobile__row_menu_ul_li_a" href="#" onClick={() => { props.push("/services") }}>Услуги</a></li>
                    </ul>
                </div>
                <div className="mobile__row_connection" onClick={handleMobileQuestionClick}>
                    <span className="mobile__row_connection_a" href="#">Задать вопрос</span>
                </div>
            </div>
        </section>
        <section className="mobile-question mobile-question-invis">
            <div className="container">
                <div className="mobile-question__row">
                    <h2 className="mobile-question__row_h2">Вы можете задать мне вопрос через форму ниже</h2>
                    <div className="mobile-question__row_form">
                        <form className="mobile-question__row_form_section" action="" method="post" name="contact-form" onSubmit={handleFormSubmit}>
                            <div className="mobile-question__row_form_section_input">
                                <input className="mobile-question__row_form_section_input_name" type="text" name="name" id="name" value={form.name} onChange={handleNameChange} placeholder="Ваше имя" />
                            </div>
                            <div className="mobile-question__row_form_section_input">
                                <input className="mobile-question__row_form_section_input_tel" type="tel" name="tel" id="tel" value={form.tel} onChange={handleTelChange} placeholder="Номер телефона" />
                            </div>
                            <div className="mobile-question__row_form_section_input">
                                <input className="mobile-question__row_form_section_input_email" type="email" name="email" id="email" value={form.email} onChange={handleEmailChange} placeholder="Email" />
                            </div>
                            <div className="mobile-question__row_form_section_textarea">
                                <textarea className="mobile-question__row_form_section_textarea_comment" name="comment" id="comment" value={form.comment} onChange={handleCommentChange} cols="100" rows="3" placeholder="Ваш комментарий"></textarea>
                            </div>
                        </form>
                        <div className="mobile-question__row_button" onClick={handleGetQuestionClick}>
                            <a className="mobile-question__row_button_a" href="#">Записаться</a>
                        </div>
                        <p className="mobile-question__row_agreement">Отправляя свои персональные данные, Вы соглашаетесь с Положением о
                            персональных данных</p>
                    </div>
                </div>
            </div>
            <button className="mobile-question_close-btn" onClick={handleMobileCloseClick}></button>
        </section>
    </>
    

};



module.exports = connect(null, {push})(Header);