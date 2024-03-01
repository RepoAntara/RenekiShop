import { Provider } from 'react-redux'
import { useMyItemQuery } from '../API/FetchApi'
import * as React from 'react'
import Button from '../../login form/Component/button'
import {card} from '../API/store'


function Card (){
    const {data} = useMyItemQuery()
    
    function requestUser (e){
        const item = e.target.id;
        const myItem = localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : []
        myItem.push(item);
        localStorage.setItem(item, JSON.stringify(myItem));     
        }
    return(
        <Provider store={card}>
            {data?.map((item) => (
                    <div key={`${item.id}`} className='bg-white shadow-lg transition-all duration-200 hover:shadow-third relative hover:border-third rounded-md h-[300px] border-2 border-silver p-3 w-[200px] flex justify-start items-center flex-col hover:translate-y-[-10px]'>
                        <img src={`${item.image}`} alt={`${item.title}`} className='min-h-[180px] mix-blend-normal ' />
                        <h1 className='text-xs mt-2 mb-2 overflow-hidden w-full h-full'>{item.title}</h1>
                        <p className='text-ms font-bold self-start'>${item.price}</p>
                        <Button OnClick={requestUser} ID={`${item.id}`} Costumes='w-max text-ms bg-main absolute right-3 bottom-3'>Buy</Button>
                    </div>
            ))}
        </Provider>
    )
}


export default Card;