const React = require("react");
const connect = require("react-redux").connect;

const Header = (props) => {

    return <header>
        <div className="header__row">
            <div className="header__row_menu">
                <ul className="header__row_menu_ul">
                    <li className="header__row_menu_ul_li"><a className="header__row_menu_ul_li_a" href="#">Главная</a></li>
                    <li className="header__row_menu_ul_li"><a className="header__row_menu_ul_li_a" href="#">Обо мне</a></li>
                    <li className="header__row_menu_ul_li"><a className="header__row_menu_ul_li_a" href="#">Услуги</a></li>
                </ul>
                <div className="header__row_connection">
                    <a className="header__row_connection_a" href="#">Задать вопрос</a>
                </div>
            </div>
        </div>
    </header>
}


module.exports = connect(null, { push })(Header);


