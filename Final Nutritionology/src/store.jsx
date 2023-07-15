const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory = require('history').createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;


const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);

store.dispatch({
    type: "INIT",
    questions: [
        {
            id: 1,
            name: "Ваше имя",
            tel: "Номер телефона",
            email: "Email",
            image: "no-image.png",
            comment: "comment"

        }
    ],


    lastIdQuestion: 1
});

module.exports = { store, history };

