const React = require("react");

const FormAdd = (props) => {

    let [data, setData] = React.useState({
        name: "",
        image: "",
        productUnit: "",
        price: 0,
        quantity: 0,
        favorite: false
    })

    const [dataError, setDataError] = React.useState({
        name: "",
        image: "",
        price: "",
        quantity: ""
    }); 


    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()){
            return false;
        }
        props.onProductAdd(data);
        setData({
            name: "",
            image: "milk.png",
            productUnit: "",
            price: 0,
            quantity: 0,
            favorite: false
        });

    }

    function handleNameChange(event) {
        setData({ ...data, name: event.target.value });
    }

    function handlePriceChange(event) {
        setData({ ...data, price: event.target.value });
    }

    function handleQuantityChange(event) {
        setData({ ...data, quantity: event.target.value });
    }

    function handleFavoriteChange(event) {
        setData({ ...data, favorite: event.target.checked });
    }

    function handleUnitChange (event){
        setData({ ...data, productUnit: event.target.value })
    }
    function handleImageChange(event){
        setData({...data, image: event.target.value})
    }

    function validate (){
        let isValid = true;
        if (data.name == "") {
            dataError.name = "Поле не заполнено";
            isValid = false;
        } else {
            dataError.name = "";
        }
        if (data.image == "") {
            dataError.image = "Картинка не добавлена";
            isValid = false;
        } else {
            dataError.image = "";
        }
        if (data.price == ""){
            dataError.price = "Поле не заполнено";
            isValid = false; 
        } else {
            dataError.price = "";
        }
        if (data.quantity == ""){
            dataError.quantity = "Поле не заполнено";
            isValid = false;
        } else {
            dataError.quantity == "";
        }
        setDataError({...dataError});
        return isValid;
        
    }
    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                {(dataError.name != "") ? <input type="text" className="form-control erropInput" id="name" onChange={handleNameChange} value={data.name} /> : <input type="text" className="form-control" id="name" onChange={handleNameChange} value={data.name} />}
                <div className="error">{dataError.name != "" && <div>{dataError.name}</div>} </div>
                
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                {(dataError.image != "") ? <input type="text" className="form-control erropInput" id="image" value={data.image} onChange={handleImageChange} /> : <input type="text" className="form-control" id="image" value={data.image} onChange={handleImageChange} />}
                <div className="error">{dataError.image != "" && <div>{dataError.image}</div>} </div>
                
            </div>
            <div className="mb-3">
                <label htmlFor="unit" className="form-label">Единица измерения</label>
                <select className="form-select form-select-lg mb-3" aria-label="form-select-lg пример" value={data.unit} id="unit" onChange={handleUnitChange} >
                    <option value="л">л</option>
                    <option value="г">г</option>
                    <option value="шт">шт</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Цена</label>
                {(dataError.price != "") ? <input type="text" className="form-control erropInput" id="price" onChange={handlePriceChange} value={data.price} /> : <input type="text" className="form-control" id="price" onChange={handlePriceChange} value={data.price} />}
                <div className="error">{dataError.price != "" && <div>{dataError.price}</div>}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Количество</label>
                {(dataError.quantity != "") ? <input type="text" className="form-control erropInput" id="quantity" onChange={handleQuantityChange} value={data.quantity} /> :<input type="text" className="form-control" id="quantity" onChange={handleQuantityChange} value={data.quantity} />}
                <div className="error">{dataError.quantity != "" && <div>{dataError.quantity}</div>}</div>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="favorite" onChange={handleFavoriteChange} checked={data.favorite} />
                    <label className="form-check-label" htmlFor="favorite">
                        Избранное
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

module.exports = FormAdd;