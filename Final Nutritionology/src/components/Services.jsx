const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const Services = (props) => {

    function handleConsultationClick(event) {
        let consultation = document.querySelector(".hide");
        event.preventDefault();
        consultation.classList.toggle("unhide");
    }

    function handleConsultationCloseClick(event) {
        let consultation = document.querySelector(".hide");
        event.preventDefault();

        consultation.classList.remove("unhide");
    }


    return <>
        <section className="program">
            <div className="container">
                <div className="program__row">
                    <h2 className="program__row_h2">Консультации</h2>
                    <div className="program__row_block">
                        <div className="program__row_block_consultation">
                            <h2 className="program__row_block_consultation_h2">Первоначальная консультация</h2>
                            <p className="program__row_block_consultation_price">Бесплатно</p>
                            <hr className="program__row_block_consultation_hr"/>
                                <p className="program__row_block_consultation_objective">Я смогу больше узнать о ваших целях и поделиться информацией</p>
                                <div className="program__row_block_consultation_btn" onClick={handleConsultationClick}>
                                    <a className="program__row_block_consultation_btn_a" href="#">Заказать</a>
                                </div>
                        </div>
                        <div className="program__row_block_individual">
                            <h2 className="program__row_block_individual_h2">Индивидуальная консультация</h2>
                            <p className="program__row_block_individual_price">5500 ₽</p>
                            <hr className="program__row_block_individual_hr"/>
                            <p className="program__row_block_individual_objective">Программа построена на результатах анализов, выявленных дефицитах и поставленной цели вами цели</p>
                            <div className="program__row_block_individual_btn" onClick={() => { props.push("/individual") }}>
                                <a className="program__row_block_individual_btn_a" href="#">Подробнее</a>
                            </div>
                        </div>
                        <div className="program__row_block_personal">
                            <h2 className="program__row_block_personal_h2">Персональное ведение 2 месяца</h2>
                            <p className="program__row_block_personal_price">10000 ₽</p>
                            <hr className="program__row_block_personal_hr"/>
                                <p className="program__row_block_personal_objective">Программа состоит из первоначальной консультации, индивидуального руководства и инструментов,
                                    ориентированных на общее оздоровление</p>
                            <div className="program__row_block_personal_btn" onClick={() => { props.push("/personal") }}>
                                    <a className="program__row_block_personal_btn_a" href="#">Подробнее</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="initial-consultation hide">
            <div className="container">
                <div className="initial-consultation__row">
                    <h2 className="initial-consultation__row_h2">Запишитесь на <span className="initial-consultation__row_h2_span">бесплатную
                        консультацию</span></h2>
                    <p className="initial-consultation__row_p">Консультация 20 мин для определения вашей цели обращения и возможных
                        вариантов решения</p>
                    <div className="initial-consultation__row_form">
                        <form className="initial-consultation__row_form_section" action="" method="post" name="contact-form">
                            <div className="initial-consultation__row_form_section_input">
                                <input className="initial-consultation__row_form_section_input_name" type="text" name="name" id="name"
                                    value="" placeholder="Ваше имя"/>
                            </div>
                            <div className="initial-consultation__row_form_section_input">
                                <input className="initial-consultation__row_form_section_input_surname" type="text" name="name" id="name"
                                    value="" placeholder="Ваша фамилия"/>
                            </div>
                            <div className="initial-consultation__row_form_section_input">
                                <input className="initial-consultation__row_form_section_input_tel" type="tel" name="tel" id="tel" value=""
                                    placeholder="Номер телефона"/>
                            </div>
                            <div className="initial-consultation__row_form_section_input">
                                <input className="initial-consultation__row_form_section_input_email" type="email" name="email" id="email"
                                    value="" placeholder="Email"/>
                            </div>
                        </form>
                        <div className="initial-consultation__row_button">
                            <a className="initial-consultation__row_button_a" href="#">Записаться</a>
                        </div>
                        <p className="initial-consultation__row_agreement">Отправляя свои персональные данные, Вы соглашаетесь с Положением
                            о персональных данных</p>
                    </div>
                </div>
            </div>
            <button className="initial-consultation_close_btn" onClick={handleConsultationCloseClick}></button>
        </section>
    </>
}


module.exports = connect(null, { push })(Services);