import React from 'react'
import image from '../../assets/shopp.webp'
import { useState } from 'react'
import ItemRequest from './itemRequest'

const Shop = (props) => {

        let{ Up = '',
             BackGround = ''} = props
        const [ show, setShow ] = useState(false);
        if(show==true){
            Up = 'h-[90vh] w-[90%]';
            BackGround = 'h-screen w-screen duration-250 bottom-0 right-0';
        } else{
            Up = 'h-0 w-0';
            BackGround = 'h-0 w-0 duration-500 bottom-10 right-10';
        }
    
    return (
        <div>
                <div className={`${Up} fixed z-20 right-10 bottom-10 transition-all duration-500 border-2 box-border border-third bg-transparent shadow-lg flex flex-col py-3 gap-1 shadow-third text-third overflow-scroll no-scrollbar`}>
                    <ItemRequest/>
                </div>
            <div className={`fixed z-10 bg-black blur-xl transition-all opacity-90 ${BackGround}`}></div>
            <button onClick={()=>setShow(!show)} className='z-30 fixed bottom-5 right-5 w-16 h-16 '>
                <img src={image} alt="Shop Logo" />
            </button>
        </div>
    )
}

export default Shop