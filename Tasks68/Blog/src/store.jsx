const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory = require('history').createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;

const history = createBrowserHistory();
const store = redux.createStore(reducer(history),{},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);


store.dispatch({
    type: "INIT",
    posts: [
        {
            id: 1,
            title: "Нет картинки",
            text: "Нет картинки",
            image: "no-image.png",
            date: new Date(),
            like: 0

        }
    ],

    comments:[
        {
            id: 1,
            postId: 1,
            author: "Sasha",
            text: "Без комментариев"
            
        },

        {
            id: 2,
            postId: 1,
            author: "Tatiana",
            text: "Без комментариев"
           
        }
    ],

    lastIdPost: 1,
    lastCommentId: 2
});

module.exports = {store, history};