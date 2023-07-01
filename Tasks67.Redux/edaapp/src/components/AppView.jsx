
const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const UserInfo = require("./UserInfo.jsx");
const FormAdd = require("./FormAdd.jsx");
const List = require("./List.jsx");

const AppView = (props) => { //props.products, props.currentUser
    //props.deleteProduct - deleteProduct из экшена
    return <>
        <UserInfo user={props.currentUser} />
        <FormAdd onProductAdd={props.addProduct} />
        <List products={props.products} onProductDelete={props.deleteProduct} onProductFavorite={props.favoriteProduct} onProductUnfavorite={props.unfavoriteProduct}/>
    </>;

}
// addProduct из action, onProductAdd должно совпадать с названием из Form стр.12

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentUser: state.user
    }
}

module.exports = connect(mapStateToProps, actions)(AppView); // mapStateToProps - ф-ция , который возвращает данные из хранилища. action - список действий. AppView - в какой компонент хотим это все передать. connect - метод, который все связывает


