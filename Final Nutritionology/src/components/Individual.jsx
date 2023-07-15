const React = require("react");

const Individual = () => {

    function handleindividualAnalyzesClick(event) {
        let individualAnalyzes = document.querySelector(".individual-hidden");
        event.preventDefault();
        individualAnalyzes.classList.toggle("individual-unhidden");
    }

    function handleindividualCloseAnalyzesClick(event) {
        let individualAnalyzes = document.querySelector(".individual-hidden");
        event.preventDefault();
        individualAnalyzes.classList.remove("individual-unhidden");
    }

    function handleiIndividualConsultationClick(event) {
        let individualConsultation = document.querySelector(".individual-vs");
        event.preventDefault();
        individualConsultation.classList.toggle("individual-invs");
    }

    function handleIndividualConsultationCloseClick(event) {
        let individualConsultation = document.querySelector(".individual-vs");
        event.preventDefault();
        individualConsultation.classList.remove("individual-invs");
    }

    function handleEscortClick(event) {
        let escort = document.querySelector(".escort-hidden");
        event.preventDefault();
        escort.classList.toggle("escort-unhidden");
    }

    function handleEscortConsultationCloseClick(event) {
        let escort = document.querySelector(".escort-hidden");
        event.preventDefault();
        escort.classList.remove("escort-unhidden");
    }

    return <>
        <section className="individual-consultation">
            <div className="container">
                <div className="individual-consultation__row">
                    <div className="individual-consultation__row_details">
                        <img className="individual-consultation__row_details_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!"
                            title="С заботой о здоровье!"/>
                        <h2 className="individual-consultation__row_details_h2">Индивидуальная консультация</h2>
                    </div>
                    <div className="individual-consultation__row_price">
                        <h2 className="individual-consultation__row_price_h2">Стоимость индивидуальной консультации</h2>
                        <p className="individual-consultation__row_price_p">Перед консультацией рекомендую сдать <a className="individual-consultation__row_price_a" href="#" onClick={handleindividualAnalyzesClick}>анализы</a></p>
                    </div>
                    <div className="individual-consultation__row_services">
                        <div className="individual-consultation__row_services_individual">
                            <h2 className="individual-consultation__row_services_individual_h2">Индивидуальная консультация</h2>
                            <p className="individual-consultation__row_services_individual_objective">План действий для изменения текущего состояния, персональные рекомендации по питанию и образу жизни, интерпретация лабораторных анализов, эффективная схема приёма нутрицевтиков, письменный отчёт с рекомендациями и разъяснениями</p>
                            <hr className="individual-consultation__row_services_individual_hr"/>
                            <p className="individual-consultation__row_services_individual_price">Стоимость: 5500 ₽</p>
                            <div className="individual-consultation__row_services_individual_btn">
                                <a className="individual-consultation__row_services_individual_btn_a" href="#" onClick={handleiIndividualConsultationClick}>Хочу консультацию</a>
                            </div>
                        </div>
                        <div className="individual-consultation__row_services_personal">
                            <h2 className="individual-consultation__row_services_personal_h2">Сопровождение</h2>
                            <p className="individual-consultation__row_services_personal_objective">Сопровождение профессионального нутрициолога, постоянный контакт позволяет корректировать питание и приём нутрицевтиков, ответы на вопросы, подбор в эффективных формах витаминов и микроэлементов</p>
                            <hr className="individual-consultation__row_services_personal_hr"/>
                            <p className="individual-consultation__row_services_personal_price">Стоимость: 5000 руб./мес.</p>
                            <div className="individual-consultation__row_services_personal_btn">
                                <a className="individual-consultation__row_services_personal_btn_a" href="#" onClick={handleEscortClick}>Хочу сопровождение</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="analyzes individual-hidden">
            <div className="container">
                <div className="analyzes__row">
                    <h2 className="analyzes__row_h2">Список рекомендованных анализов для получения консультации или участия в двухмесячной
                        программе персонального питания:</h2>
                    <div className="analyzes__row_list">
                        <ol>
                            <li>Общий анализ крови с лейкоцитарной формулой</li>
                            <li>Биохимия крови:
                                <ul>
                                    <li>общий белок</li>
                                    <li>АСТ. АЛТ</li>
                                    <li>билирубин общий и прямой</li>
                                    <li>щелочная фосфатаза</li>
                                    <li>креатинин, мочевая кислота</li>
                                    <li>ГГТ</li>
                                    <li>глюкоза</li>
                                    <li>холестерин, триглицериды, ЛПНП, ЛПВП, индекс атерогенности</li>
                                </ul>
                            </li>
                            <li>Инсулин, лептин</li>
                            <li>ТТГ, Т4 и Т3 свободные, АТ-ТПО, АТ-ТГ</li>
                            <li>Железо, ферритин</li>
                            <li>В12, фолиевая кислота</li>
                            <li>Медь, магний, цинк</li>
                            <li>25-OH витамин D (методом ХМС)</li>
                        </ol>
                    </div>
                </div>
            </div>
            <button className="analyzes_close_btn" onClick={handleindividualCloseAnalyzesClick}></button>
        </section>
        <section className="form-individual individual-vs">
            <div className="container">
                <div className="form-individual__row">
                    <h2 className="form-individual__row_h2">Ваш заказ:</h2>
                    <hr className="form-individual__row_hr"/>
                    <div className="form-individual__row_info">
                        <h3 className="form-individual__row_info_h3">Индивидуальная консультация</h3>
                        <p className="form-individual__row_info_p">5500 ₽</p>
                        </div>
                    <div className="form-individual__row_form">
                        <form className="form-individual__row_form_section" action="" method="post" name="contact-form">
                            <div className="form-individual__row_form_section_input">
                                <input className="form-individual__row_form_section_input_name" type="text" name="name"
                                    id="name" value="" placeholder="Ваше имя"/>
                            </div>
                            <div className="form-individual__row_form_section_input">
                                <input className="form-individual__row_form_section_input_surname" type="text" name="name"
                                    id="name" value="" placeholder="Ваша фамилия"/>
                            </div>
                            <div className="form-individual__row_form_section_input">
                                <input className="form-individual__row_form_section_input_tel" type="tel" name="tel" id="tel"
                                    value="" placeholder="Номер телефона"/>
                            </div>
                            <div className="form-individual__row_form_section_input">
                                <input className="form-individual__row_form_section_input_email" type="email" name="email"
                                    id="email" value="" placeholder="Email"/>
                            </div>
                        </form>
                            <div className="form-individual__row_button">
                                <a className="form-individual__row_button_a" href="#">Заказать</a>
                            </div>
                    </div>
                </div>
            </div>
            <button className="form-individual_close_btn" onClick={handleIndividualConsultationCloseClick}></button>
        </section>
        <section className="form-escort escort-hidden">
            <div className="container">
                <div className="form-escort__row">
                    <h2 className="form-escort__row_h2">Ваш заказ:</h2>
                    <hr className="form-escort__row_hr"/>
                        <div className="form-escort__row_info">
                            <h3 className="form-escort__row_info_h3">Сопровождение</h3>
                            <p className="form-escort__row_info_p">5000 ₽</p>
                        </div>
                        <div className="form-escort__row_form">
                            <form className="form-escort__row_form_section" action="" method="post" name="contact-form">
                                <div className="form-escort__row_form_section_input">
                                    <input className="form-escort__row_form_section_input_name" type="text" name="name" id="name"
                                        value="" placeholder="Ваше имя"/>
                                </div>
                                <div className="form-escort__row_form_section_input">
                                    <input className="form-escort__row_form_section_input_surname" type="text" name="name" id="name"
                                        value="" placeholder="Ваша фамилия"/>
                                </div>
                                <div className="form-escort__row_form_section_input">
                                    <input className="form-escort__row_form_section_input_tel" type="tel" name="tel" id="tel"
                                        value="" placeholder="Номер телефона"/>
                                </div>
                                <div className="form-escort__row_form_section_input">
                                    <input className="form-escort__row_form_section_input_email" type="email" name="email"
                                        id="email" value="" placeholder="Email"/>
                                </div>
                            </form>
                            <div className="form-escort__row_button">
                                <a className="form-escort__row_button_a" href="#">Заказать</a>
                            </div>
                        </div>
                </div>
            </div>
            <button className="form-escort_close_btn" onClick={handleEscortConsultationCloseClick}></button>
        </section>
    </>
}

module.exports = Individual;