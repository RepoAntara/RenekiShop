import Navbar from "./navbar"

function About(){
    return(
        <div className="w-screen h-screen bg-black overflow-hidden">
            <Navbar/>
            <div className="w-full h-full flex justify-center items-center">
                <div className="text-3xl  h-[50%] flex min-w-[350px] items-center text-center border-2 border-third w-[50%] text-third font-mono rounded-lg shadow-lg shadow-third"><div>
                This is my first project with React.js
                    and it's not done yet</div>
                </div>
            </div>
        </div>
    )
}
export default About