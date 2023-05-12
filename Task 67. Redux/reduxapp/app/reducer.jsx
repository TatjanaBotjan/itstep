const Map = require("immutable").Map; // const Map - название нашей переменной, 
//require - подключение, immutable - название пакета, который мы подключаем, require("immutable").Map - кподключение объекта Map из пакета immutable 
 
const reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
          return state.merge(action.state); // для инициализации; state хранилище
    case "ADD_PHONE":
          return state.update("phones", (phones) => [...phones, action.phone]); // (phones) - (сами придумали) которые хранятся данные, [...phones, action.phone]) что новое после экшена; "phones" придумали
    case "DELETE_PHONE":
        return state.update("phones",
            (phones) => phones.filter(
                (item) => item !== action.phone
            )
        );
  }
    return state; // reducer возвращает хранилище
}
module.exports = reducer;