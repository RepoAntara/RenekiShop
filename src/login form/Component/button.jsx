import React from "react";
function Button(props){

    const {children, 
           Costumes = '',
           OnClick = '',
           ID = ''
           
    }= props;

    return(
        <button onClick={OnClick} id={ID} className = {`rounded-md px-3 flex justify-center items-center box-border border-2 font-bold transition-all duration-250 bg-main text-white hover:bg-third hover:text-black  ${Costumes}`} type="submit">
            {children}
        </button>
    )
}
export default Button;