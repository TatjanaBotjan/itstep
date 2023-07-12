const React = require("react");
const connect = require("react-redux").connect;

const Logo = (props) => {

    return <section className="logo">
        <div className="logo__row">
            <div className="logo__row_block">
                <div className="logo__row_block_img">
                    <a href="#">
                        <img className="logo__row_block_img_image" src="./img/logo.png" alt="С заботой о здоровье!" title="С заботой о здоровье!"/>
                    </a>
                </div>
                <div className="logo__row_block_text">С заботой о здоровье!</div>
            </div>
            <div className="logo__row_block_open-mobile">
                <a className="logo__row_block_open-mobile_a" href="#" id="open_menu"></a>
            </div>
        </div>
    </section>
}


module.exports = connect(null, { push })(Logo);