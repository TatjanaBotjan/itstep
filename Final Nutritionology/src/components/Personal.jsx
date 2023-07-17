const React = require("react");

const Personal = () => {

    function handlepersonalAnalyzesClick(event) {
        let personalAnalyzes = document.querySelector(".personal-hidden");
        event.preventDefault();
        personalAnalyzes.classList.toggle("personal-unhidden");
    }

    function handlepersonalAnalyzesCloseClick(event) {
        let personalAnalyzes = document.querySelector(".personal-hidden");
        event.preventDefault();

        personalAnalyzes.classList.remove("personal-unhidden");
    }

    function handlePersonalConsultationClick(event) {
        let personalconsultation = document.querySelector(".personal-vs");
        event.preventDefault();
        personalconsultation.classList.toggle("personal-invs");
    }

    function handlePersonalConsultationCloseClick(event) {
        let personalconsultation = document.querySelector(".personal-vs");
        event.preventDefault();

        personalconsultation.classList.remove("personal-invs");
    }

    return <>
        <section className="personal">
            <div className="container">
                <div className="personal__row">
                    <div className="personal__row_details">
                        <img className="personal__row_details_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!"
                            title="С заботой о здоровье!"/>
                            <h2 className="personal__row_details_h2">Персональная программа</h2>
                    </div>
                    <div className="personal__row_price">
                        <h2 className="personal__row_price_h2">Стоимость персональной программы</h2>
                        <p className="personal__row_price_p">Перед консультацией рекомендую сдать <a
                            className="personal__row_price_a" href="#" onClick={handlepersonalAnalyzesClick}>анализы</a></p>
                    </div>
                    <div className="personal__row_services">
                        <h2 className="personal__row_services_h2">Персональная программа питания</h2>
                        <p className="personal__row_services_objective">Трехмесячная программа включает в себя персональное руководство и мощные инструменты, ориентированные на достижение
                            поставленной цели (возможна оплата по частям)</p>
                        <hr className="personal__row_services_hr"/>
                            <p className="personal__row_services_price">Стоимость: 50000 ₽</p>
                            <div className="personal__row_services_btn" onClick={handlePersonalConsultationClick}>
                                <a className="personal__row_services_btn_a" href="#" >Заказать</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="personal-analyzes personal-hidden">
            <div className="container">
                <div className="personal-analyzes__row">
                    <h2 className="personal-analyzes__row_h2">Список рекомендованных анализов для получения консультации или участия в
                        двухмесячной
                        программе персонального питания:</h2>
                    <div className="personal-analyzes__row_list">
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
            <button className="personal-analyzes_close_btn" onClick={handlepersonalAnalyzesCloseClick}></button>
        </section>
        <section className="form-personal personal-vs">
            <div className="container">
                <div className="form-personal__row">
                    <h2 className="form-personal__row_h2">Ваш заказ:</h2>
                    <hr className="form-personal__row_hr"/>
                        <div className="form-personal__row_info">
                            <h3 className="form-personal__row_info_h3">Персональная программа питания</h3>
                            <p className="form-personal__row_info_p">50000 ₽</p>
                        </div>
                        <div className="form-personal__row_form">
                            <form className="form-personal__row_form_section" action="" method="post" name="contact-form">
                                <div className="form-personal__row_form_section_input">
                                    <input className="form-personal__row_form_section_input_name" type="text" name="name" id="name"
                                        value="" placeholder="Ваше имя"/>
                                </div>
                                <div className="form-personal__row_form_section_input">
                                    <input className="form-personal__row_form_section_input_surname" type="text" name="name" id="name"
                                        value="" placeholder="Ваша фамилия"/>
                                </div>
                                <div className="form-personal__row_form_section_input">
                                    <input className="form-personal__row_form_section_input_tel" type="tel" name="tel" id="tel"
                                        value="" placeholder="Номер телефона"/>
                                </div>
                                <div className="form-personal__row_form_section_input">
                                    <input className="form-personal__row_form_section_input_email" type="email" name="email"
                                        id="email" value="" placeholder="Email"/>
                                </div>
                            </form>
                            <div className="form-personal__row_button">
                                <a className="form-personal__row_button_a" href="#">Заказать</a>
                            </div>
                        </div>
                </div>
            </div>
            <button className="form-personal_close_btn" onClick={handlePersonalConsultationCloseClick}></button>
        </section>
        <section className="features-info">
            <div className="container">
                <div className="features-info__row">
                    <hr className="features-info__row_top"/>
                        <p className="features-info__row_p">У каждого человека разная биохимия, генетический код и потребности в питательных веществах, поэтому то, что работает для
                            вас, может не работать для кого-то другого</p>
                        <hr className="features-info__row_bottom"/>
                        </div>
                </div>
        </section>
        <section className="personal-actions">
            <div className="container">
                <div className="personal-actions__row_actions">
                    <div className="personal-actions__row_actions_header">
                        <div className="personal-actions__row_actions_header_number">13</div>
                        <div className="personal-actions__row_actions_header_text">Проверенных действий для достижения результата</div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">01</div>
                            <div className="personal-actions__row_actions_block_one_text">Оценка текущего состояния здоровья</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">02</div>
                            <div className="personal-actions__row_actions_block_two_text">Оценка антиоксидантного статуса организма</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">03</div>
                            <div className="personal-actions__row_actions_block_one_text">Оценка дефицита питательных веществ</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">04</div>
                            <div className="personal-actions__row_actions_block_two_text">Расшифровка лабораторных анализов</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">05</div>
                            <div className="personal-actions__row_actions_block_one_text">Предоставление письменного отчёта ваших оценок</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">06</div>
                            <div className="personal-actions__row_actions_block_two_text">Еженедельный анализ вашего дневника питания</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">07</div>
                            <div className="personal-actions__row_actions_block_one_text">Экспертные рекомендации по здоровому
                                питанию и приготовлению пищи</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">08</div>
                            <div className="personal-actions__row_actions_block_two_text">Углубленное обсуждение ваших предпочтений в еде</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">09</div>
                            <div className="personal-actions__row_actions_block_one_text">Разъяснение о пользе рекомендуемых продуктов</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">10</div>
                            <div className="personal-actions__row_actions_block_two_text">Конкретные действия, для повышения антиоксидантного статуса</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">11</div>
                            <div className="personal-actions__row_actions_block_one_text">Еженедельная оценка динамики симптомов</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">12</div>
                            <div className="personal-actions__row_actions_block_two_text">Регулярный мониторинг вашего прогресса</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">13</div>
                            <div className="personal-actions__row_actions_block_one_text">Резюме по итогам встреч и определение дальнейших действий</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">+</div>
                            <div className="personal-actions__row_actions_block_two_text">Персональная схема приема нутрицевтиков и пробиотиков</div>
                        </div>
                    </div>
                    <div className="personal-actions__row_actions_block">
                        <div className="personal-actions__row_actions_block_one">
                            <div className="personal-actions__row_actions_block_one_number">+</div>
                            <div className="personal-actions__row_actions_block_one_text">Персональный список покупок</div>
                        </div>
                        <div className="personal-actions__row_actions_block_two">
                            <div className="personal-actions__row_actions_block_two_number">+</div>
                            <div className="personal-actions__row_actions_block_two_text">Персональный план питания</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

module.exports = Personal;