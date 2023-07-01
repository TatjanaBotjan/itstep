const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);


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

    lastIdPost: 1
});

module.exports = store;