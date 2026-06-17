import { Link } from "react-router-dom";
import { useState} from "react";
import {BiMenu} from "react-icons/bi";
import {LuCircleX} from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import { GiFishingHook } from "react-icons/gi";


const Navbar = () => {
    interface Link {
        delay: number,
        name: string,
        url: string
    }

    const [ navClosed, setNavClosed ] = useState<boolean>(true);


    const links: Link[] = [
        {
            delay: 0.1,
            name: "Home",
            url: "/home",
        },
        {
            delay: 0.2,
            name: "About",
            url: "/about",
        },
        {
            delay: 0.3,
            name: "Menu",
            url: "/menu",
        },
        {
            delay: 0.4,
            name: "Order Online",
            url: "/order_online",
        },
        {
            delay: 0.5,
            name: "",
            url: "/",
        }

    ]

    return (
        <section className={`fixed px-5 lg:px-10 font-bold text-xl text-black z-50 top-0 left-0 w-full p-2 lg:h-22 ${navClosed ? "h-22" : "h-screen"} flex ${!navClosed ? "flex-col bg-black/100 backdrop-blur-md" : "flex-row bg-white"} items-center justify-between transition-all duration-300 ease-in-out`}>
            <Link to="/" className={`w-fit lg:w-fit ${!navClosed && "hidden"} lg:h-4/5 lg:flex justify-center items-center gap-1 text-2xl`}>
                <GiFishingHook className={`text-5xl bg-accent border-neutral-400 border-0 shadow-md shadow-neutral-300 rounded-xl text-white p-2 mr-3`}/>
                <h2 className={`text-2xl text-yell lg:flex hidden font-roxale-story-regular`}>TheWhiteHook</h2>
            </Link>

            <div className={`flex h-fit items-center justify-center gap-5 `}>
                <div
                    className={`lg:w-fit ${navClosed ? "hidden" : "flex"} lg:flex h-full font-normal pl-10 flex-col lg:flex-row items-center justify-start gap-5`}>
                    {links.map((link) => <Link to={link.url} className={`${link.name === "Home" && "text-accent"}`} key={link.name}>{link.name}</Link>)}
                </div>
                <div className={`lg:w-fit h-full ${navClosed && "hidden"} lg:flex flex items-center justify-start gap-5`}>
                    <MdOutlineEmail className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
                    <BsInstagram className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
                    <BsFacebook className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
                </div>
            </div>

            <BiMenu onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${!navClosed && "hidden"} flex cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out ${!navClosed ? "text-white" : "text-black"} text-5xl absolute right-4 top-5`}/>
            <LuCircleX onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${navClosed && "hidden"} flex cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out ${!navClosed ? "text-white" : "text-black"} text-white text-5xl hover:text-red-500 absolute right-4 top-5`}/>

        </section>
    )
}

export default Navbar;