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
        setTimeout(async () => {
            if(count >= values.length -1){
                setCount(0)
            }
            else{
                setCount(count+1)
            }

        }, 3000);
    });



    return (
        <section className={`h-110 flex items-center justify-start overflow-clip`}>

        <div className={`h-full w-full overflow-clip relative flex lg:flex-row flex-col-reverse items-center justify-between bg-black z-0 `}>
            <img src={values[count].bgImgUrl} className={`object-cover h-full w-full -z-10 opacity-70 pointer-events-none`} alt=""/>

            <div className={`absolute top-1/4 left-20 w-full lg:mx-20 lg:w-fit p-5 pr-10 rounded-2xl lg:h-140 h-full flex flex-col items-start justify-start gap-5 text-white`}>
                <h1 className={`font-roxale-story-regular text-5xl pb-5`}>Our Values</h1>
                {values.map((value, index) => (

                <span key={index} className={`flex gap-4 text-lg items-center ${values[count].text === value.text ? "translate-x-10 text-accent" : "text-white"} justify-start transition-all duration-500 ease-in-out`}>
                    {values[count].text === value.text ? <RxValueNone/> : <RxValue/>} {value.text}
                </span>
                ))}
            </div>
            {/*<div className={`lg:w-2 rounded-full lg:h-100 lg: mr-20 bg-white shadow-md`}>*/}
            {/*    <motion.div initial={{ height: "0%" }} animate={{ height: "100%" }} transition={{ duration: 3, ease: "linear", repeat: Infinity }} className={`w-2 bg-black rounded-full`}>*/}

            {/*    </motion.div>*/}
            {/*</div>*/}
        </div>
        </section>
    )
}

export default OurValues;

//TODO
//1902x557
// Adjust the image sizes to prevent parent element changing height