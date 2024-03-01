import { Link } from "react-router-dom";
import '../../index.css';

function FormLayout(props){
    const {children,Title,LinkTo,Message,Instruction,gap="gap-10"} = props

    return(
        <div className="bg-black w-screen h-screen flex items-center justify-center flex-col">
            <div className="flex flex-col items-center justify-start h-max max-h-screen w-screen max-w-[400px] border-2 border-third bg-secondary pb-10 px-10 pt-3 gap-8 rounded-md overflow-scroll no-scrollbar">
                <h1 className="text-third font-poppins text-3xl font-bold">{Title}</h1>
                <form className= {`${gap} flex flex-col justify-center items-center w-full`}>
                    {children}
                </form>
                <p className="text-white">{Message} <Link to={LinkTo} className="text-main hover:text-third font-bold">{Instruction}</Link></p>
            </div>
        </div>
    )
};
export default FormLayout;