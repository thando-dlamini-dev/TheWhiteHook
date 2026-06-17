import {CgFacebook, CgInstagram} from "react-icons/cg";
import {BiLogoTiktok, BiPaperPlane} from "react-icons/bi";
import { Link } from "react-router-dom";
import {useState} from "react";
import {
    GiFishingHook,
} from "react-icons/gi";
import {LiaTelegram} from "react-icons/lia";

const Footer = () => {
    interface Link {
        name: string;
        url: string;
    }

    interface LinkCategories {
        title: string;
        links: Link[]
    }

    const [email, setEmail] = useState("");

    const sendEmail = async (Email: string) => {
        // await fetch
    }
    const linkCategories: LinkCategories[] = [
        {
            title: "Customer Service",
            links: [
                {
                    name: "Help",
                    url: "/help",
                },
                {
                    name: "Shipping & Return",
                    url: "/shipping",
                },
                {
                    name: "Payment Methods",
                    url: "/payments",
                },
                {
                    name: "Policies",
                    url: "/policies",
                },
                {
                    name: "Contact Us",
                    url: "/contactUs",
                }
            ]
        },
        {
            title: "Our Company",
            links: [
                {
                    name: "About",
                    url: "/about",
                },
                {
                    name: "Gift Cards",
                    url: "/giftcards",
                },
                {
                    name: "Offers",
                    url: "/offers",
                },
                {
                    name: "Ambassador Program",
                    url: "/ambassadorProgram",
                }
            ]
        },
        {
            title: "Resources",
            links: [
                {
                    name: "Wholesale",
                    url: "/wholesale",
                },
                {
                    name: "CorporateSales",
                    url: "/corporateSales",
                },
                {
                    name: "Email Preferences",
                    url: "/emailPreferences",
                },
                {
                    name: "Careers",
                    url: "/Careers",
                },
                {
                    name: "Customer Reviews",
                    url: "/customerReviews",
                }
            ]
        },
    ]

    return (
        <section
            className="relative h-fit bg-black flex flex-col items-center justify-start px-10 lg:px-50 mt-50">
            {/*<div className={`absolute w-full bg-black/85`}></div>*/}
            <img src="/jay-wennington-N_Y88TWmGwA-unsplash.jpg" className={`object-cover absolute w-full opacity-5 pointer-events-none`} alt=""/>
            <div className="w-full h-fit py-20 flex flex-row lg:justify-between lg:items-center text-white/50 my-10">
                <h2 className={`text-3xl font-bold font-roxale-story-regular text-white`}>Stay <span
                    className={`text-accent`}> Updated </span>
                    with Our Menus
                </h2>
                <div className="w-150 h-fit flex items-center justify-between gap-5">
                    <input placeholder="Enter your email"
                           className="bg-white text-black w-2/3 pl-4 rounded-lg h-10 my-5"
                           onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <button
                        onClick={() => sendEmail(email)}
                        className="w-1/3 h-10 text-white flex items-center justify-center gap-2  bg-neutral-700 rounded-lg">
                        Submit
                        <BiPaperPlane className=""/>
                    </button>
                </div>
            </div>
            <div className="w-full mb-10 h-fit flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="w-full lg:w-1/3 text-white flex fit flex-col items-start justify-start gap-5">
                    <Link to="/"
                          className={`w-fit lg:w-fit lg:h-4/5 lg:flex justify-center items-center gap-1 text-2xl`}>
                        <GiFishingHook className={`text-5xl bg-accent rounded-xl text-white p-2 mr-3`}/>
                        <h2 className={`text-2xl text-yell lg:flex hidden font-roxale-story-regular`}>TheWhiteHook</h2>
                    </Link>

                        <div className="w-2/3 h-fit mt-10 flex items-start justify-between pb-5">
                            <img src="/img_2.png" className="w-1/3" alt=""/>
                            <img src="/img_3.png" className="w-1/3" alt=""/>
                            <img src="/img_4.png" className="w-1/3" alt=""/>
                        </div>
                    </div>
                    <div
                        className="w-full lg:w-2/3 flex text-white h-fit flex-col lg:flex-row items-start justify-between">
                        {linkCategories.map((linkCat) => (
                            <div className="w-full lg:w-1/3 h-fit flex flex-col items-start justify-start gap-5">
                                <h2 className="font-bold text-xl">{linkCat.title}</h2>
                                {linkCat.links.map((link) => (
                                    <Link to={link.url}>{link.name}</Link>
                                ))}
                            </div>))}
                    </div>
                    <div className="w-full lg:w-1/3 flex h-fit flex-col items-start justify-between">
                        {/*<div className="w-full h-fit flex flex-col items-start justify-start text-white">*/}
                        {/*    <h2 className="text-xl font-bold pb-5">Stay In Touch</h2>*/}
                        {/*    <p>*/}
                        {/*        Get the inside scoop on new products, promotions, bottle designs, accessories and more.*/}
                        {/*    </p>*/}
                        {/*    <div className="w-full h-fit flex items-center justify-between gap-5">*/}
                        {/*        <input placeholder="Enter your email"*/}
                        {/*               className="bg-white text-black w-2/3 pl-4 rounded-lg h-10 my-5"*/}
                        {/*               onChange={(e) => setEmail(e.target.value)} type="email"/>*/}
                        {/*        <button*/}
                        {/*            className="w-1/3 h-10 text-white flex items-center justify-center gap-2  bg-neutral-700 rounded-lg">*/}
                        {/*            Submit*/}
                        {/*            <BiPaperPlane className=""/>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                    </div>
                </div>
            <div className="w-full h-fit flex flex-row lg:justify-between lg:items-start text-white/50 my-10">
                <span>{`©  TheWhiteHook ${Date().split(' ')[3]} | CapeTown, South Africa`}</span>
                <div className="w-fit gap-3 h-fit flex text-white items-center justify-between">
                    <CgInstagram className="size-6 cursor-pointer"/>
                    <CgFacebook className="size-6 cursor-pointer"/>
                    <LiaTelegram className="size-6 cursor-pointer"/>
                    <BiLogoTiktok className="size-6 cursor-pointer"/>
                </div>
            </div>
        </section>
    )
}

export default Footer;