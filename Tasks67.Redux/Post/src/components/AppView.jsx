
const React = require("react");
const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const FormAdd = require("./FormAdd.jsx");
const Block = require("./Block.jsx");

const AppView = (props) => { //props.products, props.currentUser
    //props.deleteProduct - deleteProduct из экшена
    return <>
        <FormAdd onPostAdd={props.addPost} />
        <Block posts={props.posts} onPostDelete={props.deletePost} onLikeAdd={props.addLike}/>
    </>;

}
// addProduct из action, onProductAdd должно совпадать с названием из Form стр.12

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        
    }
}

module.exports = connect(mapStateToProps, actions)(AppView); // mapStateToProps - ф-ция , который возвращает данные из хранилища. action - список действий. AppView - в какой компонент хотим это все передать. connect - метод, который все связывает




