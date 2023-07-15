const React = require("react");

const About = () => {

    let [form, setForm] = React.useState({
        name: "",
        tel: "",
        email: ""
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onQuestionAdd(form);
        setForm({
            name: "",
            surname: "",
            tel: "",
            email: ""
        });
        
    }


    function handleNameChange(event) {
        setForm({ ...form, name: event.target.value });
    }

    function handleSurnameChange(event) {
        setForm({ ...form, surname: event.target.value });
    }


    function handleTelChange(event) {
        setForm({ ...form, tel: event.target.value });
    }

    function handleEmailChange(event) {
        setForm({ ...form, email: event.target.value });
    }


    function handleCertificateClick(event) {
        let certificate = document.querySelector(".invisible");
        event.preventDefault();
        certificate.classList.remove("invisible");
    }

    function handleCertificateCloseClick(event) {
        let certificate = document.querySelector(".invisible");
        event.preventDefault();

        certificate.classList.toggle("visible");
    }


    function handleServicesClick(event) {
        let services = document.querySelector(".invis");
        event.preventDefault();
        services.classList.toggle("vis");
    }

    function handleServicesCloseClick(event) {
        let services = document.querySelector(".invis");
        event.preventDefault();

        services.classList.remove("vis");
    }


    return <>
        <section className="about">
            <div className="container">
                <div className="about__row">
                    <div className="about__row_greetings">
                        <img className="about__row_greetings_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!" title="С заботой о здоровье!"/>
                        <h2 className="about__row_greetings_h2">Рада приветствовать вас!</h2>
                    </div>
                        <div className="about__row_info">
                            <p className="about__row_info_p">Меня зовут Наталья Селюк. Я сертифицированный нутрициолог - специалист по питанию и образу
                            жизни. Расскажу вам, как при помощи индивидуально подобранного питания и нутрицевтиков изменить
                            качество вашей жизни и жизнь вашей семьи. Мои знания - это результат долгого и познавательного обучения у профессионалов
                            в области нутрициологии и натуропатии</p>
                        <img className="about__row_info_img" src="/public/assets/img/aboutImg.jpg" alt="foto"/>
                            <div className="about__row_info_carousel invisible">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner about__row_info_carousel_block">
                                        <div className="carousel-item active about__row_info_carousel_block_item">
                                            <img src="/public/assets/img/certificate1.png" className="d-block w-100" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block"></div>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate2.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate3.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate4.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate5.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate6.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate7.png" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item about__row_info_carousel_block_item2">
                                        <img src="/public/assets/img/certificate8.png" className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev about__row_info_carousel_button_left" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Предыдущий</span>
                                    </button>
                                    <button className="carousel-control-next about__row_info_carousel_button_right" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Следующий</span>
                                    </button>
                                </div>
                                <button className="about_btn_close" onClick={handleCertificateCloseClick}></button>
                            </div>
                        </div>
                    <div className="about__row_btn" onClick={handleCertificateClick}>
                        <span className="about__row_btn_a" href="#">Мои сертификаты</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="nutrition">
            <div className="container">
                <div className="nutrition__row">
                    <hr className="nutrition__row_top"/>
                        <p className="nutrition__row_p">Питание - это обыденный и рутинный процесс для каждого из нас, но именно в питании кроется ключ к вашему здоровью и
                            здоровью вашей семьи. Это ключ к исцелению болезней и обретению прекрасного самочувствие, любви к себе и к своему
                            отражению в зеркале.</p>
                    <hr className="nutrition__row_bottom"/>
                </div>
            </div>
        </section>
        <section className="services">
            <div className="container">
                <div className="services__row">
                    <div className="services__row_img">
                        <img className="services__row_img_image" src="/public/assets/img/foto11.png" alt="Фото"/>
                    </div>
                    <div className="services__row_blocks">
                        <div className="services__row_blocks_top">
                            <div className="services__row_blocks_top_first">
                                <p className="services__row_blocks_top_first_p">Я дам знания и инструменты, необходимые для поддержания физического и ментального здоровья.</p>
                            </div>
                            <div className="services__row_blocks_top_second">
                                <p className="services__row_blocks_top_second_p">Мы вместе найдем ключ к прекрасному самочувствию и пониманию процессов вашего организма.</p>
                            </div>
                        </div>
                        <div className="services__row_blocks_bottom">
                            <div className="services__row_blocks_bottom_first">
                                <p className="services__row_blocks_bottom_first_p">Научу выстраивать доверительные отношения между пищей и телом, находить гармонию с едой.</p>
                            </div>
                            <div className="services__row_blocks_bottom_second">
                                <p className="services__row_blocks_bottom_second_p">Вы сами измените своё пищевое поведение, благодаря моим рекомендациям.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services__row_btn" onClick={handleServicesClick}>
                        <a className="services__row_btn_a" href="#">Бесплатная консультация</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="consultation invis">
            <div className="container">
                <div className="consultation__row">
                    <h2 className="consultation__row_h2">Запишитесь на <span className="consultation__row_h2_span">бесплатную консультацию</span></h2>
                    <p className="consultation__row_p">Консультация 20 мин для определения вашей цели обращения и возможных вариантов решения</p>
                    <div className="consultation__row_form">
                        <form className="consultation__row_form_section" action="" method="post" name="contact-form" onSubmit={handleFormSubmit}>
                            <div className="consultation__row_form_section_input">
                                <input className="consultation__row_form_section_input_name" type="text" name="name" id="name" value={form.name} onChange={handleNameChange}
                                    placeholder="Ваше имя"/>
                            </div>
                            <div className="consultation__row_form_section_input">
                                <input className="consultation__row_form_section_input_surname" type="text" name="name" id="name" value={form.surname} onChange={handleSurnameChange}
                                    placeholder="Ваша фамилия"/>
                            </div>
                            <div className="consultation__row_form_section_input">
                                <input className="consultation__row_form_section_input_tel" type="tel" name="tel" id="tel" value={form.tel} onChange={handleTelChange}
                                    placeholder="Номер телефона"/>
                            </div>
                            <div className="consultation__row_form_section_input">
                                <input className="consultation__row_form_section_input_email" type="email" name="email" id="email" value={form.tel} onChange={handleEmailChange}
                                    placeholder="Email"/>
                            </div>
                        </form>
                        <div className="consultation__row_button">
                            <a className="consultation__row_button_a" href="#">Записаться</a>
                        </div>
                            <p className="consultation__row_agreement">Отправляя свои персональные данные, Вы соглашаетесь с Положением о
                            персональных данных</p>
                    </div>
                </div>
            </div>
            <button className="consultation_close_btn" onClick={handleServicesCloseClick}></button>
        </section>
    </>
}

module.exports = About;