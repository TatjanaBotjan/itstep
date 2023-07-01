const redux = require("redux");
const product = require("./product.jsx");
const connectRouter = require("connected-react-router").connectRouter;

const reducers = (history) => redux.combineReducers({
    post: product, // 1й - из product.jsx, а 2й product - это название из 2й стр
    router: connectRouter(history)  // router для подключения маршрутизации, connectRouter(history) метод + параметр (history)
})

module.exports = reducers;

