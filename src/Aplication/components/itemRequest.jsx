import { Provider } from "react-redux"
import { card } from "../API/store"
import { useMyItemQuery } from "../API/FetchApi"
import { useState } from "react"
import { useReducer } from "react"
const ItemRequest = () => {
    
    const {data} = useMyItemQuery()

    let dataKu = []
    let dataKey = []
    for(var key in localStorage){
        dataKey.push(key);
        data?.map((item) => {
            if (key == item.id){
                dataKu.push(item);
            }
        })
    }

    console.log(localStorage.getItem(dataKey[0]))
    return (
        <Provider store={card}>
            {dataKu?.map((item) => (
                <div key={`${item.id}`} className="w-full px-3 p-1 h-[50px] justify-evenly flex gap-5 items-center border-b-2 border-third">
                        <img src={`${item.image}`} alt="" className="h-full"/>
                        <div className="w-full">{item.title}</div>
                        <div className="text-green-500">${item.price}</div>
                        <button className="text-red-500 font-bold border-2 px-2">X</button>
                </div>
            ))}
        </Provider>
    )
    
}

export default ItemRequest