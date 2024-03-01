import Navbar from "./navbar"
import imageFB from "../../assets/facebook.png"
import imageIG from "../../assets/ig.webp"

function Social(){
    return(
        <div className="w-screen h-screen bg-black overflow-hidden">
            <Navbar/>
            <div className="w-full h-full flex justify-center items-center">
                <div className="text-3xl  h-[50%] flex flex-col justify-start min-w-[350px] items-center text-center border-2 border-third w-[50%] text-third font-mono rounded-lg shadow-lg shadow-third">
                        <h1>Social</h1>
                        <div className="w-full h-full gap-10 flex justify-center items-center">
                            <a href="https://www.facebook.com/repo.munduk?mibextid=ZbWKwL"><img src={imageFB} alt="" className="w-[130px]"/></a>
                            <a href="https://www.instagram.com/repo04_?igsh=eHdmMXl0cDV4bmZo"><img src={imageIG} alt="" className="w-[100px]"/></a>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Social