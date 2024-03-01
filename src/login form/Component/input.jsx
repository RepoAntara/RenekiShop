import React from "react";

function InputForm(props){
    const {ID,Value,OnChange,Label,
           Type = 'text',
           PlaceHolder = 'type here',
        }= props

    return(
     <div className="flex flex-col w-full font-poppins">
        <label htmlFor={ID} className="text-xs font-bold text-third font-poppins mb-2 ml-2">
            {Label}
        </label>
        <input type={Type} id={ID} placeholder={PlaceHolder} value={Value} onChange={OnChange}
        className="outline-none border-2 bg-transparent border-third w-full text-xs rounded-md text-white pl-3 py-3 placeholder:opacity-50"/>
     </div>
    )
}

export default InputForm;