import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const HeroSection = () => {
    const duration = 3000;


    const images = [
        "fishRestaurant3.jpg",
        "fishRestaurant2.jpg",
        "fishRestaurant1.jpg",
        "3D-visualization-for-restaurant-interiors-base.webp",
        "kamilla-isalieva-JDjarj_oSyo-unsplash.jpg",
        "cuong-tran-HEtOtdtWzcA-unsplash.jpg",
        "photo-1772352214475-12f9a75618d8.avif",
        "photo-1618798387548-f94063632035.avif"
    ];

    const [count, setCount] = useState<number>(0);
    const [state, setState] = useState<boolean>(true);

    // useEffect(() => {
    //
    //     setTimeout(async () => {
    //         if(count >= images.length - 1){
    //             setCount(0)
    //         }
    //         else{
    //             setCount(count+1)
    //         }
    //     }, duration);
    // });

    return (
        <section className="h-screen pb-22 flex flex-col-reverse lg:pt-0 lg:flex-row items-start pt-22 justify-center">
            <div className={`w-full relative h-full overflow-hidden flex items-center justify-center`}>
                <div className={`w-full flex flex-col items-center z-10 justify-center font-roxale-story-regular bg-black/30 h-full`}>
                    <h1 className={`text-white p-5 rounded-2xl z-10 text-3xl lg:text-6xl`}>
                        {/*{state? "true " : "false "}*/}
                        {/*Savor the exquisite*/}
                        {/*flavors here*/}
                        Make a moment at TheWhiteHook
                    </h1>
                    <div className={`w-fit font-sans h-fit flex items-center justify-center gap-3`}>
                        <button onClick={() => scrollToSection("#order")} className={`px-4 py-3 cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all bg-black rounded-full text-white shadow-lg`}>Place Order</button>
                        <button onClick={() => scrollToSection("#menu")} className={`px-4 py-3 cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all bg-accent rounded-full text-black font-semibold border-0 shadow-lg border-neutral-300`}>View Menu</button>
                    </div>
                </div>

                <img src={images[count]}
                      className={`object-cover absolute h-full lg:w-full ${state ? "scale-100" : "scale-125"} transition-all duration-${duration} ease-linear`}
                      alt=""
                />
            </div>

        </section>
    )
}

export default HeroSection;