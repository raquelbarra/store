import { createContext,useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [shop, setShop] = useState([])

    const handleClickAdd = (idProduct, image, title, price)=>{
        let array = localStorage.getItem("list")
        if(!array){
            localStorage.setItem("list",JSON.stringify([]));
            array = [];
        } else {
            array = JSON.parse(array)
        }
        let newItem = {
            id: idProduct,
            image: image,
            title: title,
            price: price
        }
        array.push(newItem);
        setShop(oldArray => [...array]);
        saveLocalStorage(array);
    }

    const handleClickRemove = (id,value)=>{
        alert('remove item por item');
    }

    const handleClickClearList = ()=>{
        let newArray = []
        setShop(oldArray => newArray);
        localStorage.removeItem("list");
    }

    const saveLocalStorage = (item)=>{
        let newArray = item;
        localStorage.setItem("list",JSON.stringify(newArray));
    }

    const listItens = () => {
        let array = localStorage.getItem("list")
        if(!array){
            localStorage.setItem("list",JSON.stringify([]));
            array = [];
        } else {
            array = JSON.parse(array)
        }
        setShop(oldArray => [...array]);
    }

    return (
        <CartContext.Provider value={{ handleClickAdd, handleClickRemove, handleClickClearList, saveLocalStorage, listItens, shop }}> 
            {children} 
        </CartContext.Provider>
    )
}