import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav className="flex justify-between items-center p-3 h-[50px] w-full bg-[#555] text-white border-b-2 border-third">
            <h1 className="text-2xl font-sans font-semibold">ReNeki.Shop</h1>
            <ul className="max-w-[400px] w-[50%] flex justify-evenly">
                <Link to='/RenekiShop/' className="px-1 pb-1 hover:text-third hover:translate-y-[-2px] border-transparent border-2  hover:border-third hover:shadow-md  hover:shadow-third transition-all duration-200 rounded-xl">Home</Link>
                <Link to={'/RenekiShop/about'} className="px-1 pb-1 hover:text-third hover:translate-y-[-2px] border-transparent border-2  hover:border-third hover:shadow-md  hover:shadow-third transition-all duration-200 rounded-xl">About</Link>
                <Link to={'/RenekiShop/social'} className="px-1 pb-1 hover:text-third hover:translate-y-[-2px] border-transparent border-2  hover:border-third hover:shadow-md  hover:shadow-third transition-all duration-200 rounded-xl">Social</Link>
            </ul>
        </nav>
    )
}

export default Navbar;