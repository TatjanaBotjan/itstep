const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const Main = (props) => {

    return <>
        <section className="question question-invis">
            <div className="container">
                <div className="question__row">
                    <h2 className="question__row_h2">Вы можете задать мне вопрос через форму ниже</h2>
                    <div className="question__row_form">
                        <form className="question__row_form_section" action="" method="post" name="contact-form">
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_name" type="text" name="name" id="name" value=""
                                    placeholder="Ваше имя"/>
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_tel" type="tel" name="tel" id="tel" value=""
                                    placeholder="Номер телефона"/>
                            </div>
                            <div className="question__row_form_section_input">
                                <input className="question__row_form_section_input_email" type="email" name="email" id="email"
                                    value="" placeholder="Email"/>
                            </div>
                            <div className="question__row_form_section_textarea">
                                <textarea className="question__row_form_section_textarea_comment" name="comment" id="comment" cols="100" rows="3" placeholder="Ваш комментарий"></textarea>
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
        <section className="home">
            <div className="home_img"></div>
            <div className="home__text">
                <h2 className="home__text_h2">«Единственная красота, которую я знаю, - это здоровье»</h2>
                <p className="home__text_author">Генрих Гейне</p>
            </div>
            <div className="container">
                <div className="home__row">
                    <h2 className="home__row_h2">Добро пожаловать на сайт с полезными советами для Вашей красоты и здоровья!</h2>
                    <p className="home__row_p">Нутрициология - это наука о питании, о здоровой пище, механизмах взаимодействия питательных веществ, их влиянии на
                        организм человека.</p>
                </div>
            </div>
        </section>
        <section className="important">
            <div className="container">
                <div className="important__row">
                    <div className="important__row_text">Основа нашего здоровья</div>
                    <div className="important__row_info">
                        <div className="important__row_info_nutrition">
                            <img className="important__row_info_nutrition_img" src="/public/assets/img/diet.jpg" alt="Правильное питание"/>
                                <div className="important__row_info_nutrition_text">
                                    <h2 className="important__row_info_nutrition_text_h2">Правильное питание</h2>
                                    <p className="important__row_info_nutrition_text_p">Нужно правильно анализировать рацион и пищевые
                                        привычки, шаг за шагом идти от избыточного веса к стройной фигуре, бороться с тревожным
                                        поведением и страхами в отношении еды и здорового образа жизни</p>
                                </div>
                        </div>
                        <div className="important__row_info_vitamins">
                            <img className="important__row_info_nutrition_img" src="/public/assets/img/Vitamin.jpg" alt="Витамины"/>
                                <div className="important__row_info_vitamins_text">
                                    <h2 className="important__row_info_vitamins_text_h2">Витамины</h2>
                                    <p className="important__row_info_vitamins_text_p">Витамины — невидимый источник энергии, здоровья и
                                        жизненных сил. Витамины тесно связаны со всеми органами. Если не хватает хотя бы одного из них, может дать
                                        сбой вся система под названием “организм”.</p>
                                </div>
                        </div>
                        <div className="important__row_info_lifestyle">
                            <img className="important__row_info_lifestyle_img" src="/public/assets/img/life.jpg"
                                alt="Здоровый образ жизни"/>
                                <div className="important__row_info_lifestyle_text">
                                    <h2 className="important__row_info_lifestyle_text_h2">Здоровый образ жизни</h2>
                                    <p className="important__row_info_lifestyle_text_p">Необходимо создать лучшие условия для
                                        нормального течения
                                        физиологических и психических процессов - это поможет снизить вероятность различных
                                        заболеваний и увеличит продолжительность жизни</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section > 
        <section className="info">
            <div className="container">
                <div className="info__row">
                    <div className="info__row_img"></div>
                    <div className="info__row_text">
                        <h2 className="info__row_text_h2">Рада приветствовать вас!</h2>
                        <p className="info__row_text_p">Я сертифицированный нутрициолог - специалист по питанию и образу жизни. Расскажу вам, как при помощи индивидуально подобранного питания и нутрицевтиков изменить
                            качество вашей жизни и жизнь вашей семьи</p>
                        <div className="info__row_text_about">
                            <a className="info__row_text_about_a nav-item" href="#" onClick={() => { props.push("/about") }}>Обо мне</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="features">
            <div className="container">
                <div className="features__row">
                    <hr className="features__row_top"/>
                    <h2 className="features__row_h2">Предлагаю вам</h2>
                    <hr className="features__row_bottom"/>
                </div>
                <div className="features__row_block">
                    <div className="features__row_block_one">
                        <div className="features__row_block_one_image"></div>
                        <p className="features__row_block_one_p">Свою научную базу</p>
                    </div>
                    <div className="features__row_block_two">
                        <div className="features__row_block_two_image"></div>
                        <p className="features__row_block_two_p">Проверенные решения</p>
                    </div>
                    <div className="features__row_block_three">
                        <div className="features__row_block_three_image"></div>
                        <p className="features__row_block_three_p">Многолетний опыт</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="help">
            <div className="container">
                <div className="help__row">
                    <div className="help__row_info">
                        <div className="help__row_info_block-one">
                            <h2 className="help__row_info_block-one_h2">Я помогу вам:</h2>
                            <ul className="help__row_info_block-one_ul">
                                <li className="help__row_info_block-one_ul_li">Снизить или нормализовать вес</li>
                                <li className="help__row_info_block-one_ul_li">Избегать заболевания</li>
                                <li className="help__row_info_block-one_ul_li">Улучшить настроение</li>
                                <li className="help__row_info_block-one_ul_li">Увеличить работоспособность</li>
                                <li className="help__row_info_block-one_ul_li">Повысить стрессоустойчивость</li>
                                <li className="help__row_info_block-one_ul_li">Изменить пищевые привычки</li>
                                <li className="help__row_info_block-one_ul_li">Подготовиться к беременности</li>
                                <li className="help__row_info_block-one_ul_li">Восстановиться после родов</li>
                                <li className="help__row_info_block-one_ul_li">Повысить иммунитет</li>
                                <li className="help__row_info_block-one_ul_li">Избегать сезонные заболевания</li>
                                <li className="help__row_info_block-one_ul_li">Преодолеть пищевые аллергии</li>
                            </ul>
                        </div>
                        <img className="help__row_info_block-one_image" src="/public/assets/img/apple.png" alt="Apple"/>
                    </div>
                    <div className="help__row_work">
                        <img className="help__row_work_block-one_image" src="/public/assets/img/plate.png" alt="Plate"/>
                        <div className="help__row_work_block-one">
                            <h2 className="help__row_work_block-one_h2">В ходе консультаций:</h2>
                            <p className="help__row_work_block-one_p">Я разработаю персональную программу питания, основанную на результатах ваших анализов, учитывая все генетические особенности</p>
                            <ul className="help__row_work_block-one_ul">
                                <li className="help__row_work_block-one_ul_li">Подбираю нутрицевтики, пробиотики и парафармацевтики, исходя из индивидуального состояния и поставленных задач</li>
                                <li className="help__row_work_block-one_ul_li">Предлагаю экспертные рекомендации по питанию и здоровому шопингу</li>
                                <li className="help__row_work_block-one_ul_li">Научу отличать на прилавке полезный продукт от псевдо полезного</li>
                                <li className="help__row_work_block-one_ul_li">Предоставляю рекомендации о том, как лучше всего готовить продукты для сохранения их максимальной пищевой ценности</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}


module.exports = connect(null, { push })(Main);

