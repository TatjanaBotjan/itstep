const React = require("react");


const Footer = (props) => {

    return <footer>
        <div className="container">
            <div className="footer__row">
                <div className="footer__row_contacts">
                    <div className="footer__row_contacts_logo">
                        <img className="footer__row_contacts_logo_img" src="/public/assets/img/logo.png" alt="С заботой о здоровье!" title="С заботой о здоровье!"/>
                            <div className="footer__row_contacts_logo_text">С заботой о здоровье!</div>
                    </div>
                    <div className="footer__row_contacts_services">
                        <h2 className="footer__row_contacts_services_h2">Услуги</h2>
                        <ul className="footer__row_contacts_services_ul">
                            <li className="footer__row_contacts_services_ul_li"><a href="#menu">Первоначальная консультация</a></li>
                            <li className="footer__row_contacts_services_ul_li"><a href="#menu">Индивидуальная консультация</a></li>
                            <li className="footer__row_contacts_services_ul_li"><a href="#menu">Персональная программа</a></li>
                        </ul>
                    </div>
                    <div className="footer__row_contacts_info">
                        <h2 className="footer__row_contacts_info_h2">Контакты</h2>
                        <div className="footer__row_contacts_info_phone">
                            <img className="footer__row_contacts_info_phone_image" src="/public/assets/img/phone.webp" alt="phone"/>
                                <a className="footer__row_contacts_info_phone_numbers" href="tel:+7 920 314 55 55"> +7 920 314 55 55</a>
                        </div>
                        <div className="footer__row_contacts_info_email">
                            <img className="footer__row_contacts_info_email_image" src="/public/assets/img/email.png" alt="phone"/>
                                <a className="footer__row_contacts_info_email_mail" href="seliuk.natalya@gmail.com">seliuk.natalya@gmail.com</a>
                        </div>
                        <div className="footer__row_contacts_info_whatsapp">
                            <img className="footer__row_contacts_info_whatsapp_image" src="public/assets/img/whatsapp.png" alt="phone"/>
                                <a className="footer__row_contacts_info_whatsapp_numbers" href="tel:+7 920 314 55 55"> +7 920 314 55 55</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="footer_recommendation_hr"/>
            <div className="footer_recommendation">*Консультации нутрициолога проводятся с образовательной целью и не заменяют обращение к врачу</div>
    </footer>
};


module.exports = Footer;