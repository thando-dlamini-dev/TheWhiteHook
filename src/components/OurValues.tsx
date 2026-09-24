import { useState, useEffect } from "react";
import {RxValue, RxValueNone} from "react-icons/rx";

const OurValues = () => {
    interface Value {
        text: string;
        bgImgUrl: string;
    }
    const values: Value[] = [
        {
            text: "Organic and Sustainable for Varied Dietaries",
            bgImgUrl: "/photo-1622115837997-90c89ae689f9.jpg"
        },{
            text: "Years of Specialty in Luxury Hospitality",
            bgImgUrl: "/cuong-tran-HEtOtdtWzcA-unsplash.jpg"
        },{
            text: "Innovation",
            bgImgUrl: "/delightin-dee-gVvSNWuw6kQ-unsplash.jpg"
        }

    ]
    const [ count, setCount ] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(async () => {
            if(count >= values.length -1){
                setCount(0)
            }
            else{
                setCount(count+1)
            }

        }, 2000);

        return () => clearInterval(interval);
    });



    return (
        <section className={`h-110 my-30 flex items-center justify-start overflow-clip`}>

        <div className={`h-full w-full overflow-clip relative flex lg:flex-row flex-col-reverse items-center justify-between bg-black z-0 `}>
            <img src={values[count].bgImgUrl} className={`object-cover absolute h-full w-full -z-10 opacity-95 pointer-events-none`} alt=""/>

            <div className={`bg-white/10 backdrop-blur-md shadow-md w-full lg:px-10 lg:mx-20 lg:w-fit p-5 rounded-xl lg:h-fit lg:pr-10 h-2/3 flex flex-col items-start justify-start gap-5 text-white`}>
                <h1 className={`font-roxale-story-regular text-5xl pb-5`}>Our Values</h1>
                {values.map((value, index) => (

                <span key={index} className={`flex gap-4 text-lg items-center ${values[count].text === value.text ? "translate-x-5 text-yellow-600 saturate-70" : "text-white translate-x-0"} justify-start transition-all duration-500 ease-in-out`}>
                    {values[count].text === value.text ? <RxValueNone/> : <RxValue/>} {value.text}
                </span>
                ))}
            </div>
        </div>
        </section>
    )
}

export default OurValues;

//TODO
//1902x557
// Adjust the image sizes to prevent parent element changing height