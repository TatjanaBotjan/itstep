const React = require("react");


const Mobile = (props) => {

    return <section className="mobile">
        <div className="container">
            <div className="mobile__row">
                <div className="mobile__row_header">
                    <div className="mobile__row_header_logo">
                        <div className="mobile__row_header_logo_image">
                            <img className="mobile__row_header_logo_image_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!" title="С заботой о здоровье!"/>
                        </div>
                        <div className="mobile__row_header_logo_text">С заботой о здоровье!</div>
                    </div>
                    <div className="mobile__row_header_close-mobile">
                        <a className="mobile__row_header_close-mobile_a" href="#" id="close_mobile"></a>
                    </div>
                </div>

            </div>
            <div className="mobile__row_menu">
                <ul className="mobile__row_menu_ul">
                    <li className="mobile__row_menu_ul_li"><a className="mobile__row_menu_ul_li_a" href="#">Главная</a></li>
                    <li className="mobile__row_menu_ul_li"><a className="mobile__row_menu_ul_li_a" href="#">Обо мне</a></li>
                    <li className="mobile__row_menu_ul_li"><a className="mobile__row_menu_ul_li_a" href="#">Услуги</a></li>
                </ul>
            </div>
            <div className="mobile__row_connection">
                <a className="mobile__row_connection_a" href="#">Задать вопрос</a>
            </div>
        </div>
    </section>

};



module.exports = Mobile;